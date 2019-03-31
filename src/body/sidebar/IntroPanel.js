import React from 'react';
import {Header, Image, Segment} from 'semantic-ui-react';

/**
 * A small informational panel about the portfolio's owner.
 * {@link https://github.com/BenDMyers/portfolio/tree/master/docs/body/sidebar/IntroPanel.md}
 */
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