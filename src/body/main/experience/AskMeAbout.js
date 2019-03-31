import React from 'react';
import {Grid, Header} from 'semantic-ui-react';

import topics from '../../../data/askMeAbout.json';
import AskMeAboutTopic from './AskMeAboutTopic';

/**
 * A display of featured skills.
 * {@link https://github.com/BenDMyers/portfolio/tree/master/docs/body/main/experience/AskMeAbout.md#AskMeAbout}
 */
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