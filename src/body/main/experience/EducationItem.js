import React from 'react';
import PropTypes from 'prop-types';
import {Header, Image} from 'semantic-ui-react';

import Duration from '../../../utils/Duration';
import Tripartite from '../../../utils/Tripartite';

const EducationItem = (props) => {
    const header = props.school + (props.location && `, ${props.location}`);
    const duration = <Duration startDate={props.startDate} endDate={props.endDate} />;
    const gpa = props.gpa && <p className="edu-grade">GPA: {props.gpa}</p>;
    const description = props.description && <p className="edu-description">{props.description}</p>;
    const bullets = props.bullets && <ul>{props.bullets.map((bullet, index) => <li key={`${props.school}${index}`}>{bullet}</li>)}</ul>;

    const honors = props.honors ? props.honors.map((honor, index) => {
        let center = (
            <React.Fragment>
                <Header as='h4' className='honor-name'>{honor.name}</Header>
                <p className='edu-honor-awarded-by'>
                    {honor.awardedBy}
                    <span className="right-substitute"> · {honor.date instanceof Date ? <Duration endDate={honor.date} /> : honor.date}</span>
                </p>
                <p>{honor.description}</p>
            </React.Fragment>
        );

        let right = honor.date instanceof Date ? <Duration endDate={honor.date} /> : honor.date;

        return {center, right};
    }) : [];


    let rows = [
        {
            center: (<div>
                <Header as='h3' className='school-name'>{header}</Header>
                <p className='edu-program'>{props.program}</p>
                <p className="edu-right-sub right-substitute">
                    <span className="edu-duration">{duration}</span>
                    {props.gpa && <span className="edu-grade"> · GPA: {props.gpa}</span>}
                </p>
                {description}
                {bullets}
            </div>),
            right: <div><p className="edu-duration">{duration}</p>{gpa}</div>
        },
        ...honors
    ];

    return (
        <Tripartite className="edu-item" left={<Image src={props.schoolLogo} alt={`${props.name} logo`} />} rows={rows} alignRight={true} />
    )
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