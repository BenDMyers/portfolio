import React from 'react';
import {Segment} from 'semantic-ui-react';
import useFetch, {LOADING, ERROR} from '../../../utils/use-fetch';
import BlogPostList from './BlogPostList';

const BLOG_URL = 'https://blog.benmyers.dev';
const BLOG_FEED_URL = 'https://blog.benmyers.dev/feed.json';

/**
 * A component for displaying the three most recent blog posts, or relevant error/loading messaging.
 * {@link https://github.com/BenDMyers/portfolio/tree/master/docs/body/sidebar/BlogPanel.md#BlogPanel}
 */
const BlogPanel = () => {
	const blogFeed = useFetch(BLOG_FEED_URL);

	let contents;

	switch (blogFeed) {
		case LOADING:
			contents = <div className="blog-posts-messaging">Loading...</div>;
			break;
		case ERROR:
			contents = (
				<div className="blog-posts-messaging">
					Sorry, blog posts could not be loaded at this time. Check
					again later!
				</div>
			);
			break;
		default:
			contents = <BlogPostList posts={blogFeed.items.slice(0, 3)} />;
	}

	return (
		<Segment id="blog-posts-segment">
			<div className="blog-posts-header">
				<a href={BLOG_URL}>See what I've written!</a>
			</div>
			{contents}
		</Segment>
	);
};

export default BlogPanel;
