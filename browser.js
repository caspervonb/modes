var events = require('events');
var util = require('util');

var window = global.window;
var mantle = new events.EventEmitter();

mantle.setRedraw = function redraw(callback) {
  return window.requestAnimationFrame(callback);
};

mantle.clearRedraw = function redraw(redrawObject) {
  return window.clearAnimationFrame(redrawObject);
};

['keyDown', 'keyUp'].forEach(function(event) {
  window[fn = 'on' + event.toLowerCase()] = function(data) {
    var key = data.key || data.which || data.keyCode;
    var repeat = data.repeat;
    var modifiers = undefined;

    if (mantle.emit(event, key, repeat, modifiers)) {
      data.preventDefault();
    }
  };
});

['mouseDown', 'mouseUp', 'mouseMove'].forEach(function(event) {
  window['on' + event.toLowerCase()] = function(data) {
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
  mantle[event] = function() {};

  window['on' + event.toLowerCase()] = function(data) {
    if (mantle.emit(event, modifiers)) {

      data.preventDefault();
    }
  };
});


['focus', 'blur', 'resize'].forEach(function(event) {
  window['on' + event.toLowerCase()] = function(data) {
    if (mantle.emit(event)) {
      data.preventDefault();
    }
  };
});

module.exports = mantle;
