import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch, withRouter} from 'react-router-dom';
import {Grid, Segment} from 'semantic-ui-react';

import './mainContent.styles.css';
import Nav from './Nav';
import ResumeContent from './experience/';
import ProjectsContent from './projects/';
import PresentationsContent from './presentations/';

const MainPanel = (props) => {
    return (
        <Grid.Column width={props.width}>
            <Segment>
                <Nav />
                <Switch>
                    <Route exact path="/" component={ResumeContent} />
                    <Route exact path="/projects" component={ProjectsContent} />
                    <Route exact path="/presentations" component={PresentationsContent} />
                </Switch>
            </Segment>
        </Grid.Column>
    );
};

MainPanel.propTypes = {
    width: PropTypes.number
}

export default withRouter(MainPanel);