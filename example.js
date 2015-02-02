var mantle = require('./');

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
];

events.forEach(function(event) {
  console.log('Adding event listener for \'%s\'', event);
  mantle.on(event, function() {
    console.log(event, arguments);
  });
});

mantle.setRedraw(function redraw(time) {
  console.log('redraw', time);
  mantle.setRedraw(redraw);
})
