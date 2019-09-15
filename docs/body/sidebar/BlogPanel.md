# [`BlogPanel`](/src/body/sidebar/BlogPanel/index.js)

A component for displaying the three most recent blog posts, or relevant error/loading messaging.

# [`BlogPostList`](/src/body/sidebar/BlogPanel/BlogPostList.js)

The three most recent blog posts. For use inside a [`BlogPanel`](#BlogPanel).

# [`BlogPostItem`](/src/body/sidebar/BlogPanel/BlogPostItem.js)

A link to a blog post, to be used inside a [`BlogPostList`](#BlogPostList).

## Props

| Prop            | Required | Default | Type     | Description              |
| --------------- | -------- | ------- | -------- | ------------------------ |
| `date_modified` | Yes      |         | {string} | Post's published date    |
| `summary`       | Yes      |         | {string} | Post's description       |
| `title`         | Yes      |         | {string} | Post's title             |
| `url`           | Yes      |         | {string} | URL pointing to the post |

These props are determined by the [JSON Feed Version 1](https://jsonfeed.org/version/1) specs.