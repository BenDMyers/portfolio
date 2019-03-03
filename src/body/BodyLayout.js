import React from 'react';
import {Container, Grid} from 'semantic-ui-react';

import Sidebar from './sidebar/';
import MainPanel from './main/MainPanel';

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