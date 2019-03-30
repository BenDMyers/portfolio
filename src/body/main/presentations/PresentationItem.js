import React from 'react';
import PropTypes from 'prop-types';
import {Header, Image} from 'semantic-ui-react';

import Duration from '../../../utils/Duration';
import ResponsivePlayer from '../../../utils/ResponsivePlayer';
import Tripartite from '../../../utils/Tripartite';

const PresentationItem = (props) => {
    const duration = props.date && <Duration endDate={props.date} />;
    const description = props.description && <p className="pres-description">{props.description}</p>;
    const bullets = props.bullets && <ul>{props.bullets.map((bullet, index) => <li key={index}>{bullet}</li>)}</ul>;
    const player = props.videoUrl && <ResponsivePlayer url={props.videoUrl} />

    return (
        <Tripartite leftWidth={2} centerWidth={10} rightWidth={4} className="pres-item">
            <Image src={props.logo} alt={`${props.organization} logo`} />
            <>
                <Header as='h3' className='pres-title'>{props.name}</Header>
                <p className='pres-organization'>
                    {props.organization}
                    {duration && <span className="pres-duration right-substitute"> · {duration}</span>}
                </p>
                {description}
                {bullets}
                {player}
            </>
            <div style={{textAlign: 'right'}}>
                {duration && <p className="pres-duration">{duration}</p>}
            </div>
        </Tripartite>
    );
};

PresentationItem.propTypes = {
    bullets: PropTypes.arrayOf(PropTypes.string),
    date: PropTypes.instanceOf(Date),
    description: PropTypes.string,
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
    videoUrl: PropTypes.string
}

export default PresentationItem;