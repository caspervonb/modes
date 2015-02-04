var events = require('events');

var mantle = new events.EventEmitter();

mantle.setRedraw = function (callback) {
  global.requestAnimationFrame(callback);
};

mantle.clearRedraw = function (callback) {
  global.cancelAnimationFrame(callback);
};

module.exports = mantle;

global.addEventListener('load', function () {
  ['keyDown', 'keyUp'].forEach(function (event) {
    global.addEventListener(event.toLowerCase(), function (data) {
      var key = data.key || data.which || data.keyCode;
      var repeat = data.repeat;
      var modifiers = undefined;

      if (mantle.emit(event, key, repeat, modifiers)) {
        data.preventDefault();
      }
    });
  });

  ['mouseDown', 'mouseUp', 'mouseMove'].forEach(function (event) {
    global.addEventListener(event.toLowerCase(), function (data) {
      var x = data.clientX;
      var y = data.clientY;
      var button = data.button;
      var modifiers = undefined;

      if (mantle.emit(event, x, y, button, modifiers)) {
        data.preventDefault();
      }
    });
  });

  ['touchStart', 'touchEnd', 'touchCancel', 'touchMove'].forEach(function (event) {
    global.addEventListener(event.toLowerCase(), function (data) {
      var touches = data.touches;
      if (mantle.emit(event, touches, modifiers)) {
        data.preventDefault();
      }
    });
  });

  ['focus', 'blur', 'resize'].forEach(function (event) {
    global.addEventListener(event.toLowerCase(), function (data) {
      if (mantle.emit(event)) {
        data.preventDefault();
      }
    });
  });

  process.nextTick(function () {
    mantle.emit('load');
  });
});
