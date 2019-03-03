import React from 'react';
import ReactPlayer from 'react-player';

import './responsivePlayer.styles.css';

const ResponsivePlayer = (props) => {
    return (
        <div className="responsive-player-container">
            <ReactPlayer className="responsive-player" url={props.url} width="100%" height="100%" />
        </div>
    );
};

export default ResponsivePlayer;