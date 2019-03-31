# [`ProjectsContent`](/src/body/main/projects/index.js)

A display of projects. Contents of the portfolio's `/projects` route.

# [`ProjectItem`](/src/body/main/projects/ProjectItem.js)

A tripartite representation of a single project.

## Props

| Prop | Required | Default | Type | Description |
|------|----------|---------|------|-------------|
| `bullets` | No | | {array} | Array of strings that will be used for bullets that provide further details about the project |
| `date` | No | | {Date} | Used for the right column's [`Duration`](/docs/utils/Duration.md) |
| `description` | No | | {string} | Short summary or description of the project |
| `image` | Yes | | {string} | Source of an image or icon for this project |
| `links` | No | | {array} | Array of link objects of the form `{demo, repo, site, video}`, where each property is an optional link to further links about the project. *(`demo` and `site` can be used together, but it's assumed you won't)* |
| `name` | Yes | | {string} | Name of the project |
| `tagline` | No | | {string} | A short blurb about the project |