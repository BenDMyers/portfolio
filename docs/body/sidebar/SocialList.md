# [`SocialList`](/src/body/sidebar/SocialList.js)

A component for displaying cards of social media links.

# [`SocialItem`](/src/body/sidebar/SocialItem.js)

A card representing a social media link. For use inside a [`SocialList`](#SocialList) component.

## Props

| Prop | Required | Default | Type | Description |
|------|----------|---------|------|-------------|
| `icon` | Yes | | {string} | Icon's Font Awesome 5.0.8 name. See [Semantic UI's `Icon` documentation](https://react.semantic-ui.com/elements/icon/). |
| `iconColor` | No | | {string} | The icon's CSS `color` property |
| `label` | No | | {string} | Social link's header |
| `name` | No | | {string} | Name of the social link, to be used in place of the icon for screenreaders |
| `text` | Yes | | {string} | Link contents |
| `url` | Yes | | {string} | URL the social link points to |