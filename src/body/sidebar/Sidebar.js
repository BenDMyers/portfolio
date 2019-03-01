import React from 'react';
import {Grid} from 'semantic-ui-react';

import IntroPanel from './IntroPanel';
import SocialList from './SocialList';

const Sidebar = (props) => {
    return (
        <Grid.Column width={props.width}>
            <IntroPanel />
            <SocialList />
        </Grid.Column>
    );
}

export default Sidebar;