var events = require('events');
var ffi = require('ffi');

var emitter = new events.EventEmitter();
var SDL = new ffi.Library('libSDL2', {
  'SDL_CreateWindow': ['pointer', ['string', 'int', 'int', 'int', 'int', 'int']],
  'SDL_PumpEvents': ['void', []],
});

var window = SDL.SDL_CreateWindow('', 0, 0, 640, 640, 0);

process.nextTick(function() {
  emitter.emit('load');

  setImmediate(function emitEvents() {
    SDL.SDL_PumpEvents();

    setImmediate(emitEvents);
  });
});

module.exports = emitter;
