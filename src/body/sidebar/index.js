import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from 'semantic-ui-react';

import './sidebar.styles.css';
import IntroPanel from './IntroPanel';
import SocialList from './SocialList';
import BlogPanel from './BlogPanel';

/**
 * A responsive component for displaying a sidebar and main content.
 * {@link https://github.com/BenDMyers/portfolio/tree/master/docs/body/sidebar/Sidebar.md}
 */
const Sidebar = (props) => {
	return (
		<Grid.Column width={props.width} role="complementary">
			<IntroPanel />
			<BlogPanel />
			<SocialList />
		</Grid.Column>
	);
};

Sidebar.propTypes = {
	width: PropTypes.number.isRequired
};

export default Sidebar;
