import React from 'react';
import BlogPostItem from './BlogPostItem';

/**
 * The three most recent blog posts. For use inside a `BlogPanel`.
 * {@link https://github.com/BenDMyers/portfolio/tree/master/docs/body/sidebar/BlogPanel.md#BlogPostList}
 */
const BlogPostList = ({posts}) => {
	return (
		<ul className="blog-post-list">
			{posts.map((post, index) => (
				<BlogPostItem key={`${index} ${post.id}`} {...post} />
			))}
		</ul>
	);
};

export default BlogPostList;
