(function () {
  'use strict';

  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  var cursorCanvas = document.createElement('canvas');
  var cursorContext = cursorCanvas.getContext('2d');
  if (!context || !cursorContext || !window.requestAnimationFrame) return;

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var coarsePointer = window.matchMedia('(pointer: coarse)');
  var storageKey = 'homepage-background-motion';
  var enabled = true;
  try {
    enabled = window.localStorage.getItem(storageKey) !== 'paused';
  } catch (error) { /* The effect also works when storage is unavailable. */ }

  canvas.className = 'constellation-background';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.classList.add('has-interactive-background');
  document.body.prepend(canvas);
  cursorCanvas.className = 'constellation-cursor';
  cursorCanvas.setAttribute('aria-hidden', 'true');
  document.body.appendChild(cursorCanvas);

  var toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'background-toggle';
  toggle.innerHTML = '<span class="background-toggle__indicator" aria-hidden="true"></span><span></span>';
  document.body.appendChild(toggle);
  var label = toggle.lastElementChild;
  var width = 0;
  var height = 0;
  var nodes = [];
  var ripples = [];
  var trail = [];
  var frame = null;
  var lastTime = 0;
  var elapsed = 0;
  var pointer = { x: 0, y: 0, active: false };
  var halo = { x: 0, y: 0, opacity: 0 };
  var hoverTarget = 'a, button, input, textarea, select, label, summary, [role="button"], [contenteditable]';

  function moving() {
    return enabled && !reducedMotion.matches && !document.hidden;
  }

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    var scale = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * scale);
    canvas.height = Math.round(height * scale);
    context.setTransform(scale, 0, 0, scale, 0, 0);
    cursorCanvas.width = canvas.width;
    cursorCanvas.height = canvas.height;
    cursorContext.setTransform(scale, 0, 0, scale, 0, 0);

    // Bound the pairwise connection work, including on large monitors.
    var limit = coarsePointer.matches ? 54 : 170;
    var count = Math.max(30, Math.min(limit, Math.round(width * height / 8500)));
    nodes = [];
    for (var i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 26,
        vy: (Math.random() - 0.5) * 26,
        ox: 0,
        oy: 0,
        radius: 1.7 + Math.random() * 1.5,
        pink: i % 4 === 0,
        energy: 0
      });
    }
    ripples = [];
    trail = [];
    draw(0);
  }

  function line(x1, y1, x2, y2, color, alpha) {
    context.strokeStyle = 'rgba(' + color + ',' + alpha + ')';
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
  }

  function draw(dt) {
    context.clearRect(0, 0, width, height);
    cursorContext.clearRect(0, 0, width, height);
    context.lineWidth = coarsePointer.matches ? 1.15 : 1.45;
    elapsed += dt;
    var interaction = pointer.active && moving();
    var reach = coarsePointer.matches ? 145 : 215;
    var smoothing = 1 - Math.exp(-dt * 5);

    // A soft pool of color follows the pointer without covering the content.
    if (interaction && halo.opacity < 0.01) {
      halo.x = pointer.x;
      halo.y = pointer.y;
    }
    halo.x += (pointer.x - halo.x) * smoothing;
    halo.y += (pointer.y - halo.y) * smoothing;
    halo.opacity += ((interaction ? 1 : 0) - halo.opacity) * smoothing;
    if (halo.opacity > 0.01) {
      var glow = context.createRadialGradient(halo.x, halo.y, 0, halo.x, halo.y, 260);
      glow.addColorStop(0, 'rgba(254,102,123,' + halo.opacity * 0.2 + ')');
      glow.addColorStop(0.45, 'rgba(68,132,210,' + halo.opacity * 0.11 + ')');
      glow.addColorStop(1, 'rgba(68,132,210,0)');
      context.fillStyle = glow;
      context.fillRect(halo.x - 260, halo.y - 260, 520, 520);
    }

    nodes.forEach(function (node) {
      node.x += node.vx * dt;
      node.y += node.vy * dt;
      if (node.x < -30) node.x = width + 30;
      if (node.x > width + 30) node.x = -30;
      if (node.y < -30) node.y = height + 30;
      if (node.y > height + 30) node.y = -30;

      var dx = pointer.x - node.x;
      var dy = pointer.y - node.y;
      var distance = Math.sqrt(dx * dx + dy * dy);
      var pull = interaction ? Math.max(0, 1 - distance / 340) * 0.44 : 0;
      var offsetX = dx * pull;
      var offsetY = dy * pull;
      node.energy = 0;
      // Click waves briefly nudge and illuminate the nodes they pass through.
      ripples.forEach(function (ripple) {
        var rx = node.x - ripple.x;
        var ry = node.y - ripple.y;
        var rd = Math.sqrt(rx * rx + ry * ry);
        var radius = 8 + ripple.age / 1.4 * 190;
        var energy = Math.max(0, 1 - Math.abs(rd - radius) / 45) * (1 - ripple.age / 1.4);
        offsetX += rx / Math.max(rd, 1) * energy * 52;
        offsetY += ry / Math.max(rd, 1) * energy * 52;
        node.energy = Math.max(node.energy, energy);
      });
      node.ox += (offsetX - node.ox) * smoothing;
      node.oy += (offsetY - node.oy) * smoothing;
    });

    for (var i = 0; i < nodes.length; i++) {
      var a = nodes[i];
      var ax = a.x + a.ox;
      var ay = a.y + a.oy;
      for (var j = i + 1; j < nodes.length; j++) {
        var b = nodes[j];
        var bx = b.x + b.ox;
        var by = b.y + b.oy;
        var dx = ax - bx;
        var dy = ay - by;
        var distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < reach) {
          var strength = 1 - distance / reach;
          var color = a.pink ? '240,88,126' : '35,99,174';
          line(ax, ay, bx, by, color, Math.pow(strength, 0.65) * (coarsePointer.matches ? 0.45 : 0.60));

          // Selected edges carry a tiny traveling signal, like a living network.
          // Restrict them to longer edges and skip them for static/reduced motion.
          if (moving() && distance > 65 && (i * 7 + j) % 11 === 0) {
            var progress = (elapsed * 0.25 + i * 0.13 + j * 0.07) % 1;
            var tail = Math.max(0, progress - 0.22);
            var sx = ax + (bx - ax) * progress;
            var sy = ay + (by - ay) * progress;
            var signalAlpha = Math.sin(progress * Math.PI) * strength;
            line(ax + (bx - ax) * tail, ay + (by - ay) * tail, sx, sy, color, signalAlpha * 0.9);
            context.fillStyle = 'rgba(' + color + ',' + signalAlpha + ')';
            context.beginPath();
            context.arc(sx, sy, 2.6, 0, Math.PI * 2);
            context.fill();
          }
        }
      }

      if (interaction) {
        var px = ax - pointer.x;
        var py = ay - pointer.y;
        var pd = Math.sqrt(px * px + py * py);
        if (pd < 300) {
          context.lineWidth = 1.8;
          line(ax, ay, pointer.x, pointer.y, '240,88,126', Math.pow(1 - pd / 300, 0.7) * 0.8);
          context.lineWidth = coarsePointer.matches ? 1.15 : 1.45;
        }
      }

      context.fillStyle = a.pink || a.energy > 0.1 ? 'rgba(240,88,126,0.94)' : 'rgba(35,99,174,0.85)';
      context.beginPath();
      context.arc(ax, ay, a.radius + a.energy * 2, 0, Math.PI * 2);
      context.fill();
    }

    // Keep pointer feedback visible over opaque cards as well as empty space.
    // This layer never receives pointer events or covers the page with a fill.
    trail = trail.filter(function (point) {
      point.age += dt;
      return point.age < 0.65 && moving();
    });
    if (trail.length && interaction) {
      cursorContext.lineCap = 'round';
      for (var t = 1; t < trail.length; t++) {
        var previous = trail[t - 1];
        var current = trail[t];
        var fade = 1 - current.age / 0.65;
        cursorContext.lineWidth = 1 + fade * 2;
        cursorContext.strokeStyle = 'rgba(240,88,126,' + fade * 0.65 + ')';
        cursorContext.beginPath();
        cursorContext.moveTo(previous.x, previous.y);
        cursorContext.lineTo(current.x, current.y);
        cursorContext.stroke();
      }
      var newest = trail[trail.length - 1];
      cursorContext.lineWidth = 1.6;
      cursorContext.strokeStyle = 'rgba(35,99,174,' + (1 - newest.age / 0.65) * 0.75 + ')';
      cursorContext.beginPath();
      cursorContext.arc(pointer.x, pointer.y, 13, 0, Math.PI * 2);
      cursorContext.stroke();
    }

    ripples = ripples.filter(function (ripple) {
      ripple.age += dt;
      if (ripple.age >= 1.4) return false;
      var progress = ripple.age / 1.4;
      cursorContext.lineWidth = 2 * (1 - progress) + 0.5;
      cursorContext.strokeStyle = 'rgba(240,88,126,' + (1 - progress) * 0.75 + ')';
      cursorContext.beginPath();
      cursorContext.arc(ripple.x, ripple.y, 8 + progress * 190, 0, Math.PI * 2);
      cursorContext.stroke();
      cursorContext.strokeStyle = 'rgba(35,99,174,' + (1 - progress) * 0.4 + ')';
      cursorContext.beginPath();
      cursorContext.arc(ripple.x, ripple.y, 4 + progress * 145, 0, Math.PI * 2);
      cursorContext.stroke();
      return true;
    });
  }

  function animate(time) {
    frame = null;
    if (!moving()) return;
    // 30 fps is plenty for a slow background and reduces battery use.
    if (!lastTime || time - lastTime >= 1000 / 30) {
      var dt = lastTime ? Math.min((time - lastTime) / 1000, 0.06) : 0;
      lastTime = time;
      draw(dt);
    }
    frame = window.requestAnimationFrame(animate);
  }

  function sync() {
    if (frame !== null) window.cancelAnimationFrame(frame);
    frame = null;
    lastTime = 0;
    var active = enabled && !reducedMotion.matches;
    toggle.setAttribute('aria-pressed', String(active));
    toggle.disabled = reducedMotion.matches;
    label.textContent = reducedMotion.matches ? 'Motion reduced' : (active ? 'Pause background' : 'Resume background');
    toggle.title = reducedMotion.matches ? 'Following your system motion preference' : 'Move your mouse to connect the dots; click empty space for a ripple';
    if (moving()) frame = window.requestAnimationFrame(animate);
    else {
      pointer.active = false;
      halo.opacity = 0;
      ripples = [];
      trail = [];
      nodes.forEach(function (node) { node.ox = 0; node.oy = 0; });
      draw(0);
    }
  }

  toggle.addEventListener('click', function () {
    enabled = !enabled;
    try {
      window.localStorage.setItem(storageKey, enabled ? 'playing' : 'paused');
    } catch (error) { /* Storage is optional. */ }
    sync();
  });

  window.addEventListener('pointermove', function (event) {
    if (event.pointerType === 'touch') return;
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = !(event.target instanceof Element && event.target.closest('.masthead, .background-toggle'));
    if (pointer.active && moving()) {
      var latest = trail[trail.length - 1];
      if (!latest || Math.hypot(latest.x - pointer.x, latest.y - pointer.y) > 5) {
        trail.push({ x: pointer.x, y: pointer.y, age: 0 });
        if (trail.length > 32) trail.shift();
      }
    }
  }, { passive: true });
  document.documentElement.addEventListener('pointerleave', function () { pointer.active = false; });
  window.addEventListener('blur', function () { pointer.active = false; });
  document.addEventListener('click', function (event) {
    if (!moving() || event.detail === 0 || event.target.closest(hoverTarget)) return;
    if (String(window.getSelection()).length) return;
    ripples.push({ x: event.clientX, y: event.clientY, age: 0 });
    if (ripples.length > 3) ripples.shift();
  });
  var resizeFrame = null;
  window.addEventListener('resize', function () {
    if (resizeFrame !== null) return;
    resizeFrame = window.requestAnimationFrame(function () {
      resizeFrame = null;
      resize();
    });
  }, { passive: true });
  document.addEventListener('visibilitychange', sync);
  reducedMotion.addEventListener('change', sync);
  coarsePointer.addEventListener('change', resize);
  resize();
  sync();
}());
