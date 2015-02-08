var events = require('events');

var emitter = new events.EventEmitter();

function setRedraw(callback) {
  global.requestAnimationFrame(callback);
}

function clearRedraw(callback) {
  global.cancelAnimationFrame(callback);
}

global.addEventListener('load', function () {
  ['keyDown', 'keyUp'].forEach(function (event) {
    global.addEventListener(event.toLowerCase(), function (data) {
      var key = data.key || data.which || data.keyCode;
      var repeat = data.repeat;
      var modifiers = undefined;

      if (emitter.emit(event, key, repeat, modifiers)) {
        data.preventDefault();
      }
    });
  });

  ['mouseDown', 'mouseUp'].forEach(function (event) {
    global.addEventListener(event.toLowerCase(), function (data) {
      var x = data.clientX;
      var y = data.clientY;
      var button = data.button;
      var modifiers = undefined;

      if (emitter.emit(event, x, y, button, modifiers)) {
        data.preventDefault();
      }
    });
  });

  ['mouseMove'].forEach(function (event) {
    global.addEventListener(event.toLowerCase(), function (data) {
      var x = data.clientX;
      var y = data.clientY;
      var buttons = data.buttons;
      var modifiers = undefined;

      if (emitter.emit(event, x, y, buttons, modifiers)) {
        data.preventDefault();
      }
    });
  });

  ['touchStart', 'touchEnd', 'touchCancel', 'touchMove'].forEach(function (event) {
    global.addEventListener(event.toLowerCase(), function (data) {
      var touches = data.touches;
      if (emitter.emit(event, touches, modifiers)) {
        data.preventDefault();
      }
    });
  });

  ['focus', 'blur', 'resize'].forEach(function (event) {
    global.addEventListener(event.toLowerCase(), function (data) {
      if (emitter.emit(event)) {
        data.preventDefault();
      }
    });
  });

  process.nextTick(function () {
    emitter.emit('load');
  });
});

module.exports = emitter;
module.exports.setRedraw = setRedraw;
module.exports.clearRedraw = clearRedraw;
