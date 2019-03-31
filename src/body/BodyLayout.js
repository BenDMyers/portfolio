import React from 'react';
import {Container, Grid} from 'semantic-ui-react';

import Sidebar from './sidebar/';
import MainPanel from './main/MainPanel';

/**
 * A responsive component for displaying a sidebar and main content.
 * {@link https://github.com/BenDMyers/portfolio/tree/master/docs/body/BodyLayout.md}
 */
const BodyLayout = () => {
    return (
        <Container style={{ padding: '2em 0em' }}>
            <Grid stackable>
                <Sidebar width={4} />
                <MainPanel width={12} />
            </Grid>
        </Container>
    );
}

export default BodyLayout;