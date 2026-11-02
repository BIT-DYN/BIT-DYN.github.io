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
  } catch (error) { /* Storage is optional. */ }

  canvas.className = 'wave-background';
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
  var elapsed = 0;
  var frame = null;
  var lastTime = 0;
  var impulses = [];
  var pointer = { x: 0, y: 0, targetX: 0, targetY: 0, active: false, strength: 0 };
  var interactiveElements = 'a, button, input, textarea, select, label, summary, [role="button"], [contenteditable]';
  var bands = [
    { level: 0.19, phase: 0.4, speed: 0.34, direction: 1 },
    { level: 0.54, phase: 2.1, speed: 0.28, direction: -1 },
    { level: 0.88, phase: 4.3, speed: 0.31, direction: 1 }
  ];

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
    draw(0);
  }

  // Smooth quadratic paths give the ribbons continuous, rounded contours.
  function trace(points, start) {
    if (start) context.moveTo(points[0].x, points[0].y);
    else context.lineTo(points[0].x, points[0].y);
    for (var i = 1; i < points.length - 1; i++) {
      context.quadraticCurveTo(points[i].x, points[i].y,
        (points[i].x + points[i + 1].x) / 2, (points[i].y + points[i + 1].y) / 2);
    }
    var last = points[points.length - 1];
    context.lineTo(last.x, last.y);
  }

  function paint(dt) {
    var smoothing = 1 - Math.exp(-dt * 4);
    pointer.x += (pointer.targetX - pointer.x) * smoothing;
    pointer.y += (pointer.targetY - pointer.y) * smoothing;
    pointer.strength += ((pointer.active && moving() ? 1 : 0) - pointer.strength) * smoothing;
    impulses = impulses.filter(function (impulse) {
      impulse.age += dt;
      return impulse.age < 2.8;
    });

    var compact = coarsePointer.matches || width < 600;
    var strands = compact ? 5 : 8;
    var samples = compact ? 34 : 58;
    var amplitude = Math.min(height * 0.085, compact ? 65 : 100);
    var gap = compact ? 6 : 8;
    var radius = compact ? 180 : 270;

    bands.forEach(function (band) {
      var spine = [];
      for (var i = 0; i <= samples; i++) {
        var u = i / samples;
        var x = -40 + u * (width + 80);
        var phase = u * Math.PI * 2 * 0.95 + band.phase;
        var y = height * band.level
          + Math.sin(phase + elapsed * band.speed * band.direction) * amplitude
          + Math.sin(u * Math.PI * 1.2 - elapsed * 0.19 + band.phase) * amplitude * 0.32
          + (u - 0.5) * height * 0.09;
        var dx = x - pointer.x;
        var dy = y - pointer.y;
        var influence = Math.exp(-(dx * dx + dy * dy) / (radius * radius));
        y += Math.sin(dx / radius * 2.2 - elapsed * 0.8) * influence * pointer.strength * 34;
        impulses.forEach(function (impulse) {
          var distance = Math.hypot(x - impulse.x, y - impulse.y);
          var envelope = Math.exp(-Math.pow((distance - impulse.age * 145) / 95, 2));
          y += Math.sin(distance / 38 - impulse.age * 6) * envelope * (1 - impulse.age / 2.8) * 22;
        });
        spine.push({ x: x, y: y, spread: 0.7 + 0.3 * Math.sin(u * Math.PI + band.phase + elapsed * 0.12) });
      }

      var curves = [];
      for (var strand = 0; strand < strands; strand++) {
        var offset = (strand - (strands - 1) / 2) * gap;
        curves.push(spine.map(function (point) {
          return { x: point.x, y: point.y + offset * point.spread };
        }));
      }

      var tint = context.createLinearGradient(0, 0, width, 0);
      tint.addColorStop(0, 'rgba(65,130,212,0.045)');
      tint.addColorStop(0.5, 'rgba(149,119,204,0.065)');
      tint.addColorStop(1, 'rgba(239,127,161,0.045)');
      context.beginPath();
      trace(curves[0], true);
      trace(curves[curves.length - 1].slice().reverse(), false);
      context.closePath();
      context.fillStyle = tint;
      context.fill();

      curves.forEach(function (points, index) {
        var center = 1 - Math.abs(index - (strands - 1) / 2) / (strands / 2);
        var opacity = 0.13 + center * 0.2;
        var gradient = context.createLinearGradient(0, 0, width, 0);
        var blue = 'rgba(65,130,212,' + opacity + ')';
        var pink = 'rgba(239,127,161,' + opacity + ')';
        gradient.addColorStop(0, band.direction > 0 ? blue : pink);
        gradient.addColorStop(0.5, 'rgba(149,119,204,' + opacity + ')');
        gradient.addColorStop(1, band.direction > 0 ? pink : blue);
        context.strokeStyle = gradient;
        context.lineWidth = 1 + center * 0.7;
        context.beginPath();
        trace(points, true);
        context.stroke();
      });
    });
  }

  function draw(dt) {
    elapsed += dt;
    context.clearRect(0, 0, width, height);
    paint(dt);
  }

  function animate(time) {
    frame = null;
    if (!moving()) return;
    if (!lastTime || time - lastTime >= 1000 / 30) {
      draw(lastTime ? Math.min((time - lastTime) / 1000, 0.06) : 0);
      lastTime = time;
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
    label.textContent = reducedMotion.matches ? 'Motion reduced' : (active ? 'Pause waves' : 'Resume waves');
    toggle.title = reducedMotion.matches ? 'Following your system motion preference' : 'Move your mouse to stir the waves; click empty space for a gentle ripple';
    if (moving()) frame = window.requestAnimationFrame(animate);
    else {
      pointer.active = false;
      pointer.strength = 0;
      impulses = [];
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
    pointer.targetX = event.clientX;
    pointer.targetY = event.clientY;
    if (!pointer.active) { pointer.x = event.clientX; pointer.y = event.clientY; }
    pointer.active = !(event.target instanceof Element && event.target.closest('.masthead, .background-toggle'));
  }, { passive: true });
  document.documentElement.addEventListener('pointerleave', function () { pointer.active = false; });
  window.addEventListener('blur', function () { pointer.active = false; });
  document.addEventListener('click', function (event) {
    if (!moving() || event.detail === 0 || !(event.target instanceof Element) || event.target.closest(interactiveElements)) return;
    if (String(window.getSelection()).length) return;
    impulses.push({ x: event.clientX, y: event.clientY, age: 0 });
    if (impulses.length > 3) impulses.shift();
  });
  var resizeFrame = null;
  window.addEventListener('resize', function () {
    if (resizeFrame !== null) return;
    resizeFrame = window.requestAnimationFrame(function () { resizeFrame = null; resize(); });
  }, { passive: true });
  document.addEventListener('visibilitychange', sync);
  reducedMotion.addEventListener('change', sync);
  coarsePointer.addEventListener('change', resize);
  resize();
  sync();
}());
