import React from 'react';
import PropTypes from 'prop-types';
import {Header, Image} from 'semantic-ui-react';

import Duration from '../../../utils/Duration';
import Tripartite from '../../../utils/Tripartite';

const LeadershipItem = (props) => {
    const header = props.organization;
    const duration = <Duration startDate={props.startDate} endDate={props.endDate} />;
    const description = props.description && <p className="edu-description">{props.description}</p>;
    const bullets = props.bullets && <ul>{props.bullets.map((bullet, index) => <li key={`${props.school}${index}`} className="lead-bullets">{bullet}</li>)}</ul>;

    return (
        <>
            <Tripartite leftWidth={2} centerWidth={10} rightWidth={4}>
                <Image src={props.logo} alt={`${props.organization} logo`} />
                <>
                    <Header as='h3' className='lead-org'>{header}</Header>
                    <p className='lead-role'>
                        {props.role}
                        <span className="edu-duration right-substitute"> · {duration}</span>
                    </p>
                    {description}
                    {bullets}
                </>
                <div style={{textAlign: 'right'}}>
                    <p className="edu-duration">{duration}</p>
                </div>
            </Tripartite>
        </>
    );
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