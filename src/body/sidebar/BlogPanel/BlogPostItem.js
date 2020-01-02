import React from 'react';
import clickable from '../../../utils/clickable-a11y';

/**
 * A link to a blog post, to be used inside a `BlogPostList`.
 * {@link https://github.com/BenDMyers/portfolio/tree/master/docs/body/sidebar/BlogPanel.md#BlogPostItem}
 */
const BlogPostItem = (props) => {
	const srDateConfig = {day: 'numeric', month: 'long', year: 'numeric'};
	const dateConfig = {day: 'numeric', month: 'short', year: 'numeric'};
    const dateModified = new Date(props['date_modified']);
    dateModified.setDate(dateModified.getDate() + 1);
	const postedDate = (
		<>
			<span className="screenreader">
				{dateModified.toLocaleDateString('en-US', srDateConfig)}
			</span>
			<span aria-hidden="true" className="duration">
				{dateModified.toLocaleDateString('en-US', dateConfig)}
			</span>
		</>
	);

	const handleClick = () => {
		window.location.href = props.url;
	};

	return (
		<li {...clickable('link', handleClick)} className="blog-post-item">
			<strong>{props.title}</strong>
			<p>
				{props.summary} &middot; {postedDate}
			</p>
		</li>
	);
};

export default BlogPostItem;
