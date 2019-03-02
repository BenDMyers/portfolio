import React from 'react';
import {Grid, Header, Image} from 'semantic-ui-react';

import Duration from '../../../utils/Duration';
import Tripartite from '../../../utils/Tripartite';

const ExperienceItem = (props) => {
    const header = props.employer + (props.location && `, ${props.location}`);
    const duration = <p className="exp-duration"><Duration startDate={props.startDate} endDate={props.endDate} /></p>;
    const description = props.description && <p className="exp-description">{props.description}</p>;
    const bullets = props.bullets && <ul className="exp-bullets">{props.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>;

    const titles = props.titles && props.titles.map((title, index) => (
        <Tripartite className="exp-title" key={`${props.employer} ${title.name}`} leftWidth={2} centerWidth={10} rightWidth={4} alignRight={true} style={{width: '120%'}}>
            <></>
            <div>
                <Header as='h4' className='title-name'>{title.name}</Header>
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
                    <p className='exp-program'>{props.program}</p>
                    {description}
                    {bullets}
                </>
                <div style={{textAlign: 'right'}}>
                    {duration}
                </div>
            </Tripartite>
            {titles}
        </>
    );
};

export default ExperienceItem;