import React, {Component} from 'react';
import {Container, Grid, Segment} from 'semantic-ui-react';

import IntroPanel from './IntroPanel';
import SocialList from './SocialList';

class Sidebar extends Component {
    render() {
        return (
            <>
                <IntroPanel />
                <SocialList />
            </>
        );
    }
}

export default Sidebar;