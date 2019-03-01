import React, {Component} from 'react';
import {Icon, Segment} from 'semantic-ui-react';

const SocialItem = (props) => {
    let {name, label, icon, iconColor, text, url} = props;
    return (
        <Segment key={name}>
            <p className="social-header">{props.label}</p>
            <p>
                <Icon aria-hidden="true" name={icon} style={{color: iconColor}} />
                <a href={url}>
                    <span className="screenreader">{name} </span>
                    {text}
                </a>
            </p>
        </Segment>
    );
}

export default SocialItem;