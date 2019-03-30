import React from 'react';
import PropTypes from 'prop-types';
import {Header, Image} from 'semantic-ui-react';

import Duration from '../../../utils/Duration';
import Tripartite from '../../../utils/Tripartite';

const ExperienceItem = (props) => {
    const header = props.employer + (props.location && `, ${props.location}`);
    const duration = <Duration startDate={props.startDate} endDate={props.endDate} />;
    const description = props.description && <p className="exp-description">{props.description}</p>;
    const bullets = props.bullets && <ul className="exp-bullets">{props.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>;

    const titles = props.titles && props.titles.map((title, index) => (
        <Tripartite className="exp-title" key={`${props.employer} ${title.name} ${index}`} leftWidth={2} centerWidth={10} rightWidth={4} alignRight={true} style={{width: '120%'}}>
            <></>
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
            {(title.startDate || title.endDate) ? <Duration startDate={title.startDate} endDate={title.endDate} /> : <></>}
        </Tripartite>
    ));

    return (
        <>
            <Tripartite leftWidth={2} centerWidth={10} rightWidth={4}>
                <Image src={props.logo} alt={`${props.employer} logo`} />
                <>
                    <Header as='h3' className='employer-name'>{header}</Header>
                    <p className='exp-program'>
                        {props.program}
                        <span className="right-substitute exp-duration"> · {duration}</span>
                    </p>
                    {description}
                    {bullets}
                </>
                <div style={{textAlign: 'right'}}>
                    <p className="exp-duration">{duration}</p>
                </div>
            </Tripartite>
            {titles}
        </>
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