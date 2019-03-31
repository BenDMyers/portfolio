# [`Leadership`](/src/body/main/experience/Leadership.js)

A display of leadership credentials.

# [`LeadershipItem`](/src/body/main/experience/LeadershipItem.js)

A tripartite representation of a single leadership experience.

## Props

| Prop | Required | Default | Type | Description |
|------|----------|---------|------|-------------|
| `bullets` | No | | {array} | Array of strings that will be used for bullets that provide further details about the leadership experience |
| `description` | No | | {string} | Short summary or description of the leadership experience |
| `endDate` | No | | {Date} | Used for the right column's [`Duration`](/docs/utils/Duration.md) |
| `logo` | No | | {string} | Source of the logo for the left column |
| `name` | No | | {string} | Name of organization or role to be used in the logo's alt text *(Will be replaced with `organization` if not provided)* |
| `organization` | Yes | | {string} | Organization that provided this leadership experience |
| `role` | Yes | | {string} | Position held in this organization |
| `startDate` | No | | {Date} | Used for the right column's [`Duration`](/docs/utils/Duration.md) |