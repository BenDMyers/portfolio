import React from 'react';
import PropTypes from 'prop-types';
import {Header, Image} from 'semantic-ui-react';

import Duration from '../../../utils/Duration';
import Tripartite from '../../../utils/Tripartite';

/**
 * A tripartite representation of a single work experience.
 * {@link https://github.com/BenDMyers/portfolio/tree/master/docs/body/main/experience/WorkExperience.md#ExperienceItem}
 */
const ExperienceItem = (props) => {
    const header = props.employer + (props.location && `, ${props.location}`);
    const duration = <Duration startDate={props.startDate} endDate={props.endDate} />;
    const description = props.description && <p className="exp-description">{props.description}</p>;
    const bullets = props.bullets && <ul className="exp-bullets">{props.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>;

    let titles = props.titles ? props.titles.map((title) => {
        let center = (
            <div>
                <Header as='h4' className='title-name'>
                    {title.name}
                    {(title.startDate || title.endDate) ?
                        <span className="right-substitute"> · <Duration startDate={title.startDate} endDate={title.endDate} /></span> :
                        <></>
                    }
                </Header>
                {title.description && <p>{title.description}</p>}
                {title.bullets && <ul className="title-bullets">{title.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>}
            </div>
        );

        let right = (title.startDate || title.endDate) && <Duration startDate={title.startDate} endDate={title.endDate} />;

        return {center, right};
    }) : [];

    let rows = [
        {
            center: (<>
                <Header as='h3' className='employer-name'>{header}</Header>
                <p className='exp-program'>
                    {props.program}
                    <span className="right-substitute exp-duration"> · {duration}</span>
                </p>
                {description}
                {bullets}
            </>),
            right: (<p className="exp-duration">{duration}</p>)
        }, ...titles
    ];

    return (
        <Tripartite className="exp-item" left={<Image src={props.logo} alt={`${props.employer} logo`} />} alignRight={true} rows={rows} />
    );
};

ExperienceItem.propTypes = {
    bullets: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    employer: PropTypes.string.isRequired,
    endDate: PropTypes.instanceOf(Date),
    location: PropTypes.string,
    logo: PropTypes.string,
    program: PropTypes.string,
    startDate: PropTypes.instanceOf(Date),
    titles: PropTypes.arrayOf(PropTypes.shape({
        bullets: PropTypes.arrayOf(PropTypes.string),
        description: PropTypes.string,
        endDate: PropTypes.instanceOf(Date),
        name: PropTypes.string,
        startDate: PropTypes.instanceOf(Date)
    }))
};

export default ExperienceItem;