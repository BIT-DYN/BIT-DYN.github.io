(function () {
  'use strict';

  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  if (!context || !window.requestAnimationFrame) return;

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var connection = navigator.connection;
  var enabled = true;
  var storageKey = 'homepage-background-motion';
  try {
    enabled = window.localStorage.getItem(storageKey) !== 'paused';
  } catch (error) { /* Storage is optional. */ }

  canvas.className = 'elastic-background';
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
  var spacing = 18;
  var columns = 0;
  var rows = 0;
  var displacement;
  var velocity;
  var nextDisplacement;
  var nextVelocity;
  var frame = null;
  var lastTime = 0;
  var accumulator = 0;
  var quietSteps = 0;
  var lastPointer = null;
  var pending = null;
  var initialized = false;
  var stepTime = 1000 / 30;
  var edgePoints = new Float32Array(8);
  var interactiveElements = 'a, button, input, textarea, select, label, summary, [role="button"], [contenteditable]';
  var contours = [
    { level: -0.055, color: 'rgba(210,100,140,0.38)', width: 1.15 },
    { level: -0.018, color: 'rgba(210,100,140,0.22)', width: 0.85 },
    { level: 0.018, color: 'rgba(58,115,169,0.23)', width: 0.85 },
    { level: 0.055, color: 'rgba(58,115,169,0.4)', width: 1.15 }
  ];
  // Marching-squares edge pairs: top, right, bottom, left.
  var edgePairs = [[], [3, 0], [0, 1], [3, 1], [1, 2], [], [0, 2], [3, 2],
    [2, 3], [0, 2], [], [1, 2], [1, 3], [0, 1], [3, 0], []];

  function disabled() {
    return reducedMotion.matches || !!(connection && connection.saveData);
  }

  function canAnimate() {
    return enabled && !disabled() && !document.hidden;
  }

  function stop() {
    if (frame !== null) window.cancelAnimationFrame(frame);
    frame = null;
    lastTime = 0;
    accumulator = 0;
  }

  function start() {
    if (!canAnimate() || frame !== null) return;
    quietSteps = 0;
    lastTime = 0;
    accumulator = stepTime;
    frame = window.requestAnimationFrame(animate);
  }

  function configure() {
    stop();
    width = window.innerWidth;
    height = window.innerHeight;
    var scale = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * scale);
    canvas.height = Math.round(height * scale);
    context.setTransform(scale, 0, 0, scale, 0, 0);
    // Bound both memory and simulation work on large displays.
    spacing = Math.max(18, Math.ceil(Math.sqrt(width * height / 7500)));
    columns = Math.ceil(width / spacing) + 1;
    rows = Math.ceil(height / spacing) + 1;
    var count = columns * rows;
    displacement = new Float32Array(count);
    velocity = new Float32Array(count);
    nextDisplacement = new Float32Array(count);
    nextVelocity = new Float32Array(count);
    lastPointer = null;
    pending = null;
    quietSteps = 0;
    sync();
    // A single small introductory disturbance, then the surface settles.
    if (!initialized && canAnimate() && width >= 1000) {
      excite(width * 0.84, height * 0.3, -1, 0.25, 0.035, false);
      start();
    }
    initialized = true;
  }

  function excite(x, y, directionX, directionY, amplitude, radial) {
    var gx = x / spacing;
    var gy = y / spacing;
    var sigma = 47 / spacing;
    var radius = Math.ceil(sigma * 3);
    for (var row = Math.max(1, Math.floor(gy) - radius); row <= Math.min(rows - 2, Math.ceil(gy) + radius); row++) {
      for (var col = Math.max(1, Math.floor(gx) - radius); col <= Math.min(columns - 2, Math.ceil(gx) + radius); col++) {
        var dx = col - gx;
        var dy = row - gy;
        var weight = Math.exp(-(dx * dx + dy * dy) / (2 * sigma * sigma));
        var force = radial ? weight : weight * (dx * directionX + dy * directionY) / sigma;
        var index = row * columns + col;
        velocity[index] = Math.max(-0.2, Math.min(0.2, velocity[index] + force * amplitude));
      }
    }
  }

  function simulate() {
    var maximum = 0;
    var speed = 0;
    for (var row = 1; row < rows - 1; row++) {
      for (var col = 1; col < columns - 1; col++) {
        var index = row * columns + col;
        var value = displacement[index];
        var laplacian = displacement[index - 1] + displacement[index + 1]
          + displacement[index - columns] + displacement[index + columns] - 4 * value;
        var edge = Math.min(row, col, rows - row - 1, columns - col - 1);
        var damping = edge < 4 ? 0.88 + edge * 0.023 : 0.974;
        var nextV = (velocity[index] + 0.2 * laplacian - value * 0.0015) * damping;
        nextV = Math.max(-0.2, Math.min(0.2, nextV));
        var nextU = Math.max(-0.7, Math.min(0.7, value + nextV));
        nextVelocity[index] = nextV;
        nextDisplacement[index] = nextU;
        maximum = Math.max(maximum, Math.abs(nextU));
        speed = Math.max(speed, Math.abs(nextV));
      }
    }
    var swap = displacement;
    displacement = nextDisplacement;
    nextDisplacement = swap;
    swap = velocity;
    velocity = nextVelocity;
    nextVelocity = swap;
    quietSteps = maximum < 0.006 && speed < 0.001 ? quietSteps + 1 : 0;
  }

  function render() {
    context.clearRect(0, 0, width, height);
    context.lineCap = 'round';
    contours.forEach(function (contour) {
      var level = contour.level;
      context.beginPath();
      for (var row = 0; row < rows - 1; row++) {
        for (var col = 0; col < columns - 1; col++) {
          var index = row * columns + col;
          var a = displacement[index];
          var b = displacement[index + 1];
          var c = displacement[index + columns + 1];
          var d = displacement[index + columns];
          var mask = (a > level ? 1 : 0) | (b > level ? 2 : 0) | (c > level ? 4 : 0) | (d > level ? 8 : 0);
          if (mask === 0 || mask === 15) continue;
          var x = col * spacing;
          var y = row * spacing;
          // Compute only crossed edges; interpolation never divides by zero.
          if ((a > level) !== (b > level)) { edgePoints[0] = x + spacing * (level - a) / (b - a); edgePoints[1] = y; }
          if ((b > level) !== (c > level)) { edgePoints[2] = x + spacing; edgePoints[3] = y + spacing * (level - b) / (c - b); }
          if ((d > level) !== (c > level)) { edgePoints[4] = x + spacing * (level - d) / (c - d); edgePoints[5] = y + spacing; }
          if ((a > level) !== (d > level)) { edgePoints[6] = x; edgePoints[7] = y + spacing * (level - a) / (d - a); }
          var pairs = edgePairs[mask];
          if (mask === 5 || mask === 10) {
            var centerHigh = (a + b + c + d) / 4 > level;
            pairs = (mask === 5) === centerHigh ? [0, 1, 2, 3] : [3, 0, 1, 2];
          }
          for (var p = 0; p < pairs.length; p += 2) {
            var first = pairs[p] * 2;
            var second = pairs[p + 1] * 2;
            context.moveTo(edgePoints[first], edgePoints[first + 1]);
            context.lineTo(edgePoints[second], edgePoints[second + 1]);
          }
        }
      }
      context.strokeStyle = contour.color;
      context.lineWidth = contour.width;
      context.stroke();
    });
  }

  function animate(time) {
    frame = null;
    if (!canAnimate()) { stop(); return; }
    if (lastTime) accumulator += Math.min(time - lastTime, stepTime * 3);
    lastTime = time;
    if (pending) {
      excite(pending.x, pending.y, pending.dx, pending.dy, pending.amplitude, pending.radial);
      pending = null;
    }
    var steps = 0;
    while (accumulator >= stepTime && steps < 3) {
      simulate();
      accumulator -= stepTime;
      steps++;
    }
    if (steps) render();
    if (quietSteps >= 12) {
      displacement.fill(0);
      velocity.fill(0);
      nextDisplacement.fill(0);
      nextVelocity.fill(0);
      context.clearRect(0, 0, width, height);
      stop();
      return;
    }
    frame = window.requestAnimationFrame(animate);
  }

  function sync() {
    stop();
    pending = null;
    lastPointer = null;
    var active = enabled && !disabled();
    toggle.setAttribute('aria-pressed', String(active));
    toggle.disabled = disabled();
    label.textContent = disabled() ? 'Motion reduced' : (active ? 'Pause ripples' : 'Resume ripples');
    toggle.title = disabled() ? 'Following your motion and data preferences' : 'Move your mouse to create soft ripples';
    if (disabled()) context.clearRect(0, 0, width, height);
    else if (canAnimate() && displacement) start();
  }

  toggle.addEventListener('click', function () {
    enabled = !enabled;
    try { window.localStorage.setItem(storageKey, enabled ? 'playing' : 'paused'); } catch (error) { /* Storage is optional. */ }
    sync();
  });
  window.addEventListener('pointermove', function (event) {
    if (!canAnimate() || event.pointerType === 'touch') return;
    if (event.target instanceof Element && event.target.closest('.masthead, .background-toggle')) { lastPointer = null; return; }
    var now = performance.now();
    if (lastPointer && now - lastPointer.time < 250) {
      var dx = event.clientX - lastPointer.x;
      var dy = event.clientY - lastPointer.y;
      var distance = Math.hypot(dx, dy);
      if (distance > 0.8 && distance < 250) {
        pending = { x: event.clientX, y: event.clientY, dx: dx / distance, dy: dy / distance,
          amplitude: 0.045 + Math.min(distance / 35, 1) * 0.04, radial: false };
        quietSteps = 0;
        start();
      }
    }
    lastPointer = { x: event.clientX, y: event.clientY, time: now };
  }, { passive: true });
  document.documentElement.addEventListener('pointerleave', function () { lastPointer = null; });
  window.addEventListener('blur', function () { lastPointer = null; });
  document.addEventListener('click', function (event) {
    if (!canAnimate() || !event.detail || !(event.target instanceof Element) || event.target.closest(interactiveElements)) return;
    if (String(window.getSelection()).length) return;
    pending = { x: event.clientX, y: event.clientY, dx: 0, dy: 0, amplitude: 0.065, radial: true };
    quietSteps = 0;
    start();
  });
  var resizeFrame = null;
  window.addEventListener('resize', function () {
    if (resizeFrame !== null) return;
    resizeFrame = window.requestAnimationFrame(function () { resizeFrame = null; configure(); });
  }, { passive: true });
  document.addEventListener('visibilitychange', sync);
  reducedMotion.addEventListener('change', configure);
  if (connection && connection.addEventListener) connection.addEventListener('change', configure);
  configure();
}());
