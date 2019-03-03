import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Icon} from 'semantic-ui-react';

const AskMeAboutTopic = (props) => {
    let icon;

    if(props.cornerIcon) {
        icon = (
            <Icon.Group size="huge">
                <Icon style={{color: props.iconColor}} name={props.icon} />
                <Icon corner style={{color: props.iconColor}} name={props.cornerIcon} />
            </Icon.Group>
        );
    } else {
        icon = <Icon style={{color: props.iconColor}} name={props.icon} size="huge" />;
    }

    return (
        <Grid.Column width={5} className="topic-cell">
            <p aria-hidden="true">{icon}</p>
            <p>{props.text}</p>
        </Grid.Column>
    );
}

AskMeAboutTopic.propTypes = {
    cornerIcon: PropTypes.string,
    icon: PropTypes.string.isRequired,
    iconColor: PropTypes.string,
    text: PropTypes.string.isRequired
};

export default AskMeAboutTopic;