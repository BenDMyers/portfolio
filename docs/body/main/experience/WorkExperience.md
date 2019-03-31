# [`WorkExperience`](/src/body/main/experience/WorkExperience.js)

A display of work experience credentials.

# [`ExperienceItem`](/src/body/main/experience/ExperienceItem.js)

A tripartite representation of a single work experience.

## Props

| Prop | Required | Default | Type | Description |
|------|----------|---------|------|-------------|
| `bullets` | No | | {array} | Array of strings that will be used for bullets that provide further details about the work experience |
| `description` | No | | {string} | Short summary or description of the work experience |
| `employer` | Yes | | {string} | Employer that provided this work experience |
| `endDate` | No | | {Date} | Used for the right column's [`Duration`](/docs/utils/Duration.md) |
| `location` | No | | {string} | Employer's location |
| `logo` | No | | {string} | Source of the employer logo for the left column |
| `name` | No | | {string} | Name of employer or program to be used in the logo's alt text *(Will be replaced with `employer` if not provided)* |
| `program` | Yes | | {string} | Role or title at this experience |
| `startDate` | No | | {Date} | Used for the right column's [`Duration`](/docs/utils/Duration.md) |
| `titles` | No | | {array} | Array of objects of the form `{bullets, description, endDate, name, startDate}` that describe titles or roles at this experience. <ul><li><code>bullets</code>: <i>(optional)</i> array of strings that provide further details about this title</li><li><code>description</code>: <i>(optional)</i> short summary or description of the title</li><li><code>endDate</code>: <i>(optional)</i> used for the right column's [`Duration`](/docs/utils/Duration.md)</li><li><code>name</code>: <i>(optional)</i> name of this job title</li><li><code>startDate</code>: <i>(optional)</i> used for the right column's [`Duration`](/docs/utils/Duration.md)</li></ul> |