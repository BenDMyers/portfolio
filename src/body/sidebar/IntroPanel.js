import React, {Component} from 'react';
import {Header, Image, Segment} from 'semantic-ui-react';

class IntroPanel extends Component {
    render() {
        return (
            <Segment>
                <Header as="h1">
                    Hi, I'm Ben Myers.
                </Header>
                <Image circular src="./avatar.jpg" alt="Headshot of Ben Myers" />
                <p style={{marginTop: '1em'}}>
                    Full-stack developer in Plano, Texas. Passionate advocate for accessibility.
                </p>
            </Segment>
        );
    }
}

export default IntroPanel;