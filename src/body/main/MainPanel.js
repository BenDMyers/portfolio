import React from 'react';
import {Link, Route, Switch, withRouter} from 'react-router-dom';
import {Grid, Segment} from 'semantic-ui-react';

import Nav from './Nav';
import ResumeContent from './experience/ResumeContent';
import ProjectsContent from './projects/ProjectsContent';
import PresentationsContent from './presentations/PresentationsContent';

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

export default withRouter(MainPanel);