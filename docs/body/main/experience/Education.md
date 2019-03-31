# [`Education`](/src/body/main/experience/Education.js)

A display of education credentials.

# [`EducationItem`](/src/body/main/experience/EducationItem.js)

A tripartite representation of a single education experience.

## Props

| Prop | Required | Default | Type | Description |
|------|----------|---------|------|-------------|
| `bullets` | No | | {array} | Array of strings that will be used for bullets that provide further details about the education experience |
| `description` | No | | {string} | Short summary or description of the education experience |
| `endDate` | No | | {Date} | Used for the right column's [`Duration`](/docs/utils/Duration.md) |
| `gpa` | No | | {number} | GPA obtained at this education |
| `honors` | No | | {array} | Array of objects of the form `{awardedBy, description, name}` that describe honors and accolades related to this education experience. <ul><li><code>awardedBy</code>: <i>(optional)</i> who awarded this honor</li><li><code>description</code>: <i>(required)</i> short description of this honor</li><li><code>name</code>: <i>(required)</i> title of honor</li></ul> |
| `location` | No | | {string} | School's location |
| `name` | No | | {string} | Name of school or program to be used in the logo's alt text *(Will be replaced with `school` if not provided)* |
| `program` | Yes | | {string} | Degree, certification, program, etc. obtained at this school |
| `school` | Yes | | {string} | School or other educational institution that provided this education experience |
| `schoolLogo` | No | | {string} | Source of the school logo for the left column |
| `startDate` | No | | {Date} | Used for the right column's [`Duration`](/docs/utils/Duration.md) |