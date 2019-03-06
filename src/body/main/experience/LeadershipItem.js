import React from 'react';
import PropTypes from 'prop-types';
import {Header, Image} from 'semantic-ui-react';

import Duration from '../../../utils/Duration';
import Tripartite from '../../../utils/Tripartite';

const LeadershipItem = (props) => {
    const header = props.organization;
    const duration = <p className="edu-duration"><Duration startDate={props.startDate} endDate={props.endDate} /></p>;
    const description = props.description && <p className="edu-description">{props.description}</p>;
    const bullets = props.bullets && <ul>{props.bullets.map((bullet, index) => <li key={`${props.school}${index}`}>{bullet}</li>)}</ul>;

    return (
        <>
            <Tripartite leftWidth={2} centerWidth={10} rightWidth={4}>
                <Image src={props.logo} alt={`${props.organization} logo`} />
                <>
                    <Header as='h3' className='lead-org'>{header}</Header>
                    <p className='lead-role'>{props.role}</p>
                    {description}
                    {bullets}
                </>
                <div style={{textAlign: 'right'}}>
                    {duration}
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