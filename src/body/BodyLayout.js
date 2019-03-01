import React from 'react';
import {Container, Grid, Segment} from 'semantic-ui-react';

import Sidebar from './sidebar/Sidebar';
import MainPanel from './main/MainPanel';

const BodyLayout = () => {
    return (
        <Container style={{ padding: '2em 0em' }}>
            <Grid>
                <Sidebar width={4} />
                <MainPanel width={12} />
            </Grid>
        </Container>
    );
}

export default BodyLayout;