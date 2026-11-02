(function () {
  'use strict';

  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  if (!context || !window.requestAnimationFrame) return;

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
  var frame = null;
  var lastTime = 0;
  var pointer = { x: 0, y: 0, active: false };
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

    // Bound the pairwise connection work, including on large monitors.
    var limit = coarsePointer.matches ? 38 : 90;
    var count = Math.max(22, Math.min(limit, Math.round(width * height / 15500)));
    nodes = [];
    for (var i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 14,
        vy: (Math.random() - 0.5) * 14,
        ox: 0,
        oy: 0,
        radius: 1 + Math.random() * 1.1,
        pink: i % 5 === 0
      });
    }
    ripples = [];
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
    context.lineWidth = 0.8;
    var interaction = pointer.active && moving();
    var reach = coarsePointer.matches ? 125 : 165;
    var smoothing = 1 - Math.exp(-dt * 5);

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
      var pull = interaction ? Math.max(0, 1 - distance / 240) * 0.18 : 0;
      node.ox += (dx * pull - node.ox) * smoothing;
      node.oy += (dy * pull - node.oy) * smoothing;
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
          line(ax, ay, bx, by, a.pink ? '254,102,123' : '1,47,99', (1 - distance / reach) * 0.19);
        }
      }

      if (interaction) {
        var px = ax - pointer.x;
        var py = ay - pointer.y;
        var pd = Math.sqrt(px * px + py * py);
        if (pd < 200) line(ax, ay, pointer.x, pointer.y, '254,102,123', (1 - pd / 200) * 0.32);
      }

      context.fillStyle = a.pink ? 'rgba(254,102,123,0.48)' : 'rgba(1,47,99,0.30)';
      context.beginPath();
      context.arc(ax, ay, a.radius, 0, Math.PI * 2);
      context.fill();
    }

    ripples = ripples.filter(function (ripple) {
      ripple.age += dt;
      if (ripple.age >= 1.4) return false;
      var progress = ripple.age / 1.4;
      context.strokeStyle = 'rgba(254,102,123,' + (1 - progress) * 0.3 + ')';
      context.beginPath();
      context.arc(ripple.x, ripple.y, 8 + progress * 145, 0, Math.PI * 2);
      context.stroke();
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
      ripples = [];
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
    pointer.active = true;
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
