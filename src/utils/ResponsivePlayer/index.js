import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

import './responsivePlayer.styles.css';

const youtubeConfig = {
    playerVars: {
        color: 'red', // Progress bar color
        controls: 1, // Show controls while playing video,
        modestbranding: true // Don't show YouTube logo in corner
    }
};

/**
 * A responsive wrapper for a video player.
 * {@link https://github.com/BenDMyers/portfolio/tree/master/docs/utils/ResponsivePlayer.md}
 */
const ResponsivePlayer = (props) => {
    return (
        <div className="responsive-player-container">
            <ReactPlayer
                className="responsive-player"
                url={props.url}
                config={{ youtube: youtubeConfig }}
                width="100%"
                height="100%"
            />
        </div>
    );
};

ResponsivePlayer.propTypes = {
    url: PropTypes.string.isRequired
};

export default ResponsivePlayer;