# [`Tripartite`](/src/utils/Tripartite.js)

A component for creating a three-columned grid where the left column is for an icon or logo, the middle column is the body, and the right column is for stuff durations or other links. It's a take on the [holy grail](https://en.wikipedia.org/wiki/Holy_grail_%28web_design%29), if you will.

The `Tripartite` is designed to *hide* its right column and expand its center column at mobile/tablet sizes.

## Props

| Prop | Required | Default | Type | Description |
|------|----------|---------|------|-------------|
| `alignRight` | No | `false` | {bool} | Whether the contents of the right column should be right-aligned |
| `centerWidth` | No | `10` | {number} | Width of the center column (out of 16) |
| `left` | Yes | | {node} | Contents of the left column |
| `leftWidth` | No | `2` | {number} | Width of the left column (out of 16) |
| `rightWidth` | No | `4` | {number} | Width of the right column (out of 16) |
| `rows` | Yes | | {array} | Array of row objects of the form `{center, right}` <ul><li><code>center</code>: <i>(required)</i> the node to display in the center column</li><li><code>right</code>: <i>(optional)</i> the node to display in the right column</li></ul>|

Any other props passed in, such as `className`, will be passed to the outermost `Grid` component.