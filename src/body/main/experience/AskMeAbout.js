import React from 'react';
import {Grid, Header, Icon} from 'semantic-ui-react';

import topics from './askMeAbout.json';
import AskMeAboutTopic from './AskMeAboutTopic';

const AskMeAbout = () => {
    const topicCells = topics.map(topic => <AskMeAboutTopic {...topic} key={topic.name} />);

    return (
        <div id="askmeabout" className="main-content-section">
            <Header as="h2">Ask me about...</Header>
            <Grid divided>
                {topicCells}
            </Grid>
        </div>
    );
};

export default AskMeAbout;