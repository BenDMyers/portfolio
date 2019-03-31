# [`PresentationsContent`](/src/body/main/presentations/index.js)

A display of presentations given. Contents of the portfolio's `/presentations` route.

# [`PresentationItem`](/src/body/main/presentations/PresentationItem.js)

A tripartite representation of a single presentation given.

## Props

| Prop | Required | Default | Type | Description |
|------|----------|---------|------|-------------|
| `bullets` | No | | {array} | Array of strings that will be used for bullets that provide further details about the presentation |
| `date` | No | | {Date} | Used for the right column's [`Duration`](/docs/utils/Duration.md) |
| `description` | No | | {string} | Short summary or description of the presentation |
| `logo` | No | | {string} | Source of the employer logo for the left column |
| `name` | Yes | | {string} | Presentation title |
| `organization` | Yes | | {string} | Organization or event that hosted this presentation |
| `videoUrl` | No | | {string} | Link to a video of the presentation |