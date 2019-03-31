import React from 'react';
import PropTypes from 'prop-types';
import {Header, Image} from 'semantic-ui-react';

import Duration from '../../../utils/Duration';
import ResponsivePlayer from '../../../utils/ResponsivePlayer';
import Tripartite from '../../../utils/Tripartite';

/**
 * A tripartite representation of a single presentation given.
 * {@link https://github.com/BenDMyers/portfolio/tree/master/docs/body/main/presentations/PresentationsContent.md#PresentationItem}
 */
const PresentationItem = (props) => {
    const duration = props.date && <Duration endDate={props.date} />;
    const description = props.description && <p className="pres-description">{props.description}</p>;
    const bullets = props.bullets && <ul>{props.bullets.map((bullet, index) => <li key={index}>{bullet}</li>)}</ul>;
    const player = props.videoUrl && <ResponsivePlayer url={props.videoUrl} />;

    let rows = [
        {
            center: (<>
                <Header as='h3' className='pres-title'>{props.name}</Header>
                <p className='pres-organization'>
                    {props.organization}
                    {duration && <span className="pres-duration right-substitute"> · {duration}</span>}
                </p>
                {description}
                {bullets}
            </>),
            right: (duration && <p className="pres-duration">{duration}</p>)
        },
        {
            center: player
        }
    ];

    return <Tripartite className="pres-item" left={<Image src={props.logo} alt={`${props.organization} logo`} />} rows={rows} alignRight={true} />;
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