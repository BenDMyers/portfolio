# [`AskMeAbout`](/src/body/main/experience/AskMeAbout.js)

A display of featured skills.

# [`AskMeAboutTopic`](/src/body/main/experience/AskMeAboutTopic.js)

A display of a featured skill, with text and a prominent icon, for use inside [`AskMeAbout`](#AskMeAbout).

## Props

| Prop | Required | Default | Type | Description |
|------|----------|---------|------|-------------|
| `cornerIcon` | No | | {string} | Corner icon's Font Awesome 5.0.8 name. See [Semantic UI's `Icon` documentation](https://react.semantic-ui.com/elements/icon/). |
| `icon` | Yes | | {string} | Icon's Font Awesome 5.0.8 name. See [Semantic UI's `Icon` documentation](https://react.semantic-ui.com/elements/icon/). |
| `iconColor` | No | | {string} | The icon and corner icon's CSS `color` property |
| `text` | Yes | | {string} | Description of featured skill |