import React from 'react';
import {Grid, Header, Icon} from 'semantic-ui-react';

import topics from './askMeAbout.json';

const AskMeAbout = () => {
    const topicCells = topics.map(topic => {
        return (
            <Grid.Column width={5} className="topic-cell" key={topic.name}>
                <p aria-hidden="true">
                    <Icon style={{color: topic.iconColor}} name={topic.icon} size="huge" />
                </p>
                <p>{topic.text}</p>
            </Grid.Column>
        );
    });

    return (
        <div className="main-content-section">
            <Header as="h2">Ask me about...</Header>
            <Grid divided>
                {topicCells}
            </Grid>
        </div>
    );
};

export default AskMeAbout;