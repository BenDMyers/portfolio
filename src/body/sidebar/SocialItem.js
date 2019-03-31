import React from 'react';
import PropTypes from 'prop-types';
import {Icon, Segment} from 'semantic-ui-react';

/**
 * A card representing a social media link.
 * {@link https://github.com/BenDMyers/portfolio/tree/master/docs/body/sidebar/SocialList.md#SocialItem}
 */
const SocialItem = (props) => {
    let {name, label, icon, iconColor, text, url} = props;
    return (
        <Segment>
            <p className="social-header">{label}</p>
            <p className="social-link-content">
                <Icon aria-hidden="true" name={icon} style={{color: iconColor}} />
                <a href={url}>
                    <span className="screenreader">{name} {text}</span>
                    <span>{text}</span>
                </a>
            </p>
        </Segment>
    );
}

SocialItem.propTypes = {
    icon: PropTypes.string.isRequired,
    iconColor: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default SocialItem;