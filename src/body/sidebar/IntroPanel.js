import React from 'react';
import {Header, Image, Segment} from 'semantic-ui-react';

const IntroPanel = () => {
    return (
        <Segment className="intro-panel">
            <Header as="h1">
                Hi, I&apos;m Ben Myers.
            </Header>
            <Image circular src="./avatar.jpg" alt="Headshot of Ben Myers" />
            <p style={{marginTop: '1em'}}>
                Full-stack developer in Plano, Texas. Human T-rex.
            </p>
        </Segment>
    );
};

export default IntroPanel;