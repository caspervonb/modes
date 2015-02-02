# Mantle
This module contains methods for interacting with the host environment. It is an instance of `EventEmitter`.

Use `require('mantle')`to use this module. The following methods are provided:

## Event: keyDown
- `key`*Number* The key that was pressed.
- `repeat` *Boolean* True/false indicating if this key is a repeat key.
- `modifiers` *Object* The input modifiers that are currently active.

This event is emitted when the user presses a key.

## Event: keyUp
- `key`*Number* The key that was released.
- `repeat` *Boolean* True/false indicating if this key is a repeat key.
- `modifiers` *Object* The input modifiers that are currently active.

This event is emitted when a key that has been pressed is released.

## Event: mouseDown
- `x` *Number* The x coordinate, in relative screen space.
- `y` *Number* The y coordinate, in relative screen space.
- `button` *Number* The button that was pressed.
- `modifiers` *Object* The input modifiers that are currently active.

This event is emitted when the user presses a mouse button.

## Event: mouseUp
- `x` *Number* The x coordinate, in relative screen space.
- `y` *Number* The y coordinate, in relative screen space.
- `button` *Number* The button that was released.
- `modifiers` *Object* The input modifiers that are currently active.

This event is emitted when a mouse button that has been pressed is released.

## Event: mouseMove
- `x` *Number* The x coordinate, in relative screen space.
- `y` *Number* The y coordinate, in relative screen space.
- `buttons` *Number* A bitmask of buttons currently being held down.
- `modifiers` *Object* The input modifiers that are currently active.

This event is emitted when the user moves the mouse pointer by 1 pixel or more in any direction in the mantle.

## mantle.setRedraw(callback)
- `callback(timestamp)`*Function* The function to call at the next redraw.

Schedules the given callback to be called at the next redraw.
