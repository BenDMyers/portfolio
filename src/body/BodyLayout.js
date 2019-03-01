import React, {Component} from 'react';
import {Container, Grid, Segment} from 'semantic-ui-react';

import Sidebar from './sidebar/Sidebar';

class BodyLayout extends Component {
    render() {
        return (
            <Container style={{ padding: '2em 0em' }}>
                <Grid columns={2}>
                    <Grid.Column width={4}>
                        <Sidebar />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Segment>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}

export default BodyLayout;