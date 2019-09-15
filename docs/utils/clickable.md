# [`clickable`](/src/utils/clickable-a11y.js)

Generates props to make a noninteractive element clickable accessibly.

## `clickable(role, handleClick)`

`clickable` requires a `role` parameter and a `handleClick` parameter.

* `role : string` - either `'link'` or `'button'`
* `handleClick : function` - click handler

## Returns

Will return an object of attributes. *This object should be spread as props or attributes on the component or element you'd like to make clickable.*

These attributes handle the following attributes and behaviors of clickable elements:

* Click handling
* Tab index for focusability
* Keypress handling:
  * `Enter` for both buttons and links
  * `Space` for buttons
* ARIA role