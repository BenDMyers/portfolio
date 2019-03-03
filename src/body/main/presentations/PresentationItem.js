import React from 'react';
import {Header, Image} from 'semantic-ui-react';
import ReactPlayer from 'react-player';

import Duration from '../../../utils/Duration';
import ResponsivePlayer from '../../../utils/ResponsivePlayer';
import Tripartite from '../../../utils/Tripartite';

const PresentationItem = (props) => {
    const duration = props.date && <p className="pres-duration"><Duration endDate={props.date} /></p>;
    const description = props.description && <p className="pres-description">{props.description}</p>;
    const bullets = props.bullets && <ul>{props.bullets.map(bullet => <li>{bullet}</li>)}</ul>;
    const player = props.videoUrl && <ResponsivePlayer url={props.videoUrl} />

    return (
        <Tripartite leftWidth={2} centerWidth={10} rightWidth={4} className="pres-item">
            <Image src={props.logo} alt={`${props.name} logo`} />
            <>
                <Header as='h3' className='pres-title'>{props.name}</Header>
                <p className='pres-organization'>{props.organization}</p>
                {description}
                {bullets}
                {player}
            </>
            <div style={{textAlign: 'right'}}>
                {duration}
            </div>
        </Tripartite>
    );
};

export default PresentationItem;