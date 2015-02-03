var events = require('events');

module.exports = new events.EventEmitter();
module.exports.setRedraw = function setRedraw(callback) {
  return global.requestAnimationFrame(callback);
};

module.exports.clearRedraw = function clearRedraw(redrawObject) {
  global.clearAnimationFrame(redrawObject);
};

(function register(emitter) {
  ['keyDown', 'keyUp'].forEach(function(event) {
    global[fn = 'on' + event.toLowerCase()] = function(data) {
      var key = data.key || data.which || data.keyCode;
      var repeat = data.repeat;
      var modifiers = undefined;

      if (mantle.emit(event, key, repeat, modifiers)) {
        data.preventDefault();
      }
    };
  });

  ['mouseDown', 'mouseUp', 'mouseMove'].forEach(function(event) {
    global['on' + event.toLowerCase()] = function(data) {
      var x = data.clientX;
      var y = data.clientY;
      var button = data.button;
      var modifiers = undefined;

      if (mantle.emit(event, x, y, button, modifiers)) {
        data.preventDefault();
      }
    };
  });

  ['touchStart', 'touchEnd', 'touchCancel', 'touchMove'].forEach(function(event) {
    global['on' + event.toLowerCase()] = function(data) {
      var touches = data.touches;
      if (mantle.emit(event, touches, modifiers)) {
        data.preventDefault();
      }
    };
  });

  ['focus', 'blur', 'resize'].forEach(function(event) {
    global['on' + event.toLowerCase()] = function(data) {
      if (mantle.emit(event)) {
        data.preventDefault();
      }
    };
  });
}());
