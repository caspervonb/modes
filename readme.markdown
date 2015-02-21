# Mantle

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

This event is emitted when the user moves the mouse pointer by 1 pixel or more
in any direction in the mantle.

## Event: touchStart
## Event: touchEnd
## Event: touchCancel
## Event: touchMove

## Event: blur
This event is emitted when the window looses focus.

## Event: focus
This event is emitted when the window gains focus.

## Event: resize
This event is emitted when the window is resized.

## mantle.setRedraw(callback)
- `callback`*Function* The function to call at the next redraw.

Schedules the given callback to be called at the next redraw.

## mantle.clearRedraw(redrawObject)
- `redrawObject` *Object* The redraw to stop from triggering.

Stops a redraw from triggering.
