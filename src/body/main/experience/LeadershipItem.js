import React from 'react';
import PropTypes from 'prop-types';
import {Header, Image} from 'semantic-ui-react';

import Duration from '../../../utils/Duration';
import Tripartite from '../../../utils/Tripartite';

/**
 * A tripartite representation of a single leadership experience.
 * {@link https://github.com/BenDMyers/portfolio/tree/master/docs/body/main/experience/Leadership.md#LeadershipItem}
 */
const LeadershipItem = (props) => {
    const header = props.organization;
    const duration = <Duration startDate={props.startDate} endDate={props.endDate} />;
    const description = props.description && <p className="edu-description">{props.description}</p>;
    const bullets = props.bullets && <ul>{props.bullets.map((bullet, index) => <li key={`${props.school}${index}`} className="lead-bullets">{bullet}</li>)}</ul>;

    let rows = [
        {
            center: (<>
                <Header as='h3' className='lead-org'>{header}</Header>
                <p className='lead-role'>
                    {props.role}
                    <span className="edu-duration right-substitute"> · {duration}</span>
                </p>
                {description}
                {bullets}
            </>),
            right: (<p className="edu-duration">{duration}</p>)
        }
    ];
    return <Tripartite className="lead-item" left={<Image src={props.logo} alt={`${props.name || props.organization} logo`} />} rows={rows} alignRight={true} />;
};

LeadershipItem.propTypes = {
    bullets: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    endDate: PropTypes.instanceOf(Date),
    logo: PropTypes.string.isRequired,
    name: PropTypes.string,
    organization: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    startDate: PropTypes.instanceOf(Date)
};

export default LeadershipItem;