import React from 'react';
import PropTypes from 'prop-types';
import {Header, Image} from 'semantic-ui-react';

import Duration from '../../../utils/Duration';
import Tripartite from '../../../utils/Tripartite';

const EducationItem = (props) => {
    const header = props.school + (props.location && `, ${props.location}`);
    const duration = <p className="edu-duration"><Duration startDate={props.startDate} endDate={props.endDate} /></p>;
    const gpa = props.gpa && <p>GPA: {props.gpa}</p>;
    const description = props.description && <p className="edu-description">{props.description}</p>;
    const bullets = props.bullets && <ul>{props.bullets.map((bullet, index) => <li key={`${props.school}${index}`}>{bullet}</li>)}</ul>;

    const honors = props.honors && props.honors.map((honor, index) => (
        <Tripartite key={`${props.school} ${index}`} leftWidth={2} centerWidth={10} rightWidth={4} alignRight={true}>
            <></>
            <>
                <Header as='h4' className='honor-name'>{honor.name}</Header>
                <p className='edu-honor-awarded-by'>{honor.awardedBy}</p>
                <p>{honor.description}</p>
            </>
            {honor.date instanceof Date ? <Duration endDate={honor.date} /> : honor.date}
        </Tripartite>
    ));

    return (
        <>
            <Tripartite leftWidth={2} centerWidth={10} rightWidth={4}>
                <Image src={props.schoolLogo} alt={`${props.name} logo`} />
                <>
                    <Header as='h3' className='school-name'>{header}</Header>
                    <p className='edu-program'>{props.program}</p>
                    {description}
                    {bullets}
                </>
                <div style={{textAlign: 'right'}}>
                    {duration}
                    {gpa}
                </div>
            </Tripartite>
            {honors}
        </>
    );
};

EducationItem.propTypes = {
    bullets: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    endDate: PropTypes.instanceOf(Date),
    gpa: PropTypes.number,
    honors: PropTypes.arrayOf(PropTypes.shape({
        awardedBy: PropTypes.string,
        description: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })),
    location: PropTypes.string,
    name: PropTypes.string,
    program: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    schoolLogo: PropTypes.string,
    startDate: PropTypes.instanceOf(Date)
};

export default EducationItem;