var mantle = require('./');
var test = require('tape');
var spy = require('spy');

test('events', function(t) {
  var events = [
    'mouseDown',
    'mouseUp',
    'mouseClick',
    'mouseMove',

    'keyDown',
    'keyUp',
    'keyPress',

    'touchStart',
    'touchEnd',
    'touchCancel',
    'touchMove',

    'focus',
    'blur',
    'load',
  ];

  events.forEach(function(event) {
    var listener = spy();

    mantle.addListener(event, listener);
    t.equal(mantle.on, mantle.addListener);
    t.equal(mantle.listeners(event).length, 1);

    mantle.emit(event);
    t.equal(listener.calls.length, 1);
  });

  t.end();
});

test('redraw', function(t) {
  mantle.setRedraw(function() {
    t.end();
  });
});
