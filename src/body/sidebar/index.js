import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from 'semantic-ui-react';

import './sidebar.styles.css';
import IntroPanel from './IntroPanel';
import SocialList from './SocialList';

const Sidebar = (props) => {
    return (
        <Grid.Column width={props.width} role="complementary">
            <IntroPanel />
            <SocialList />
        </Grid.Column>
    );
};

Sidebar.propTypes = {
    width: PropTypes.number.isRequired
}

export default Sidebar;