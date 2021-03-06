import React from 'react';
import PropTypes from 'prop-types';
import {Header, Icon, Image} from 'semantic-ui-react';

import Tripartite from '../../../utils/Tripartite';

/**
 * A display of projects. Contents of the portfolio's `/projects` route.
 * {@link https://github.com/BenDMyers/portfolio/tree/master/docs/body/main/projects/ProjectsContent.md#ProjectItem}
 */
const ProjectItem = (props) => {
    const description = props.description && <p className="proj-description" dangerouslySetInnerHTML={{__html: props.description}} />;
    const bullets = props.bullets && <ul className="proj-bullets">{props.bullets.map((bullet, index) => <li key={index}>{bullet}</li>)}</ul>;

    let rows = [
        {
            center: (<>
                <Header as='h3' className='proj-title'>{props.name}</Header>
                <p className='proj-tagline'>{props.tagline}</p>
                <div className='proj-links right-substitute'>{generateLinks(props.links, props.name, true)}</div>
                {description}
                {bullets}
            </>),
            right: (<div>{generateLinks(props.links, props.name)}</div>)
        }
    ];

    return (<Tripartite
        className="proj-item"
        left={<Image alt={`Icon for ${props.name}`} src={props.image} className='proj-image' />}
        rows={rows}
        centerWidth={12}
        rightWidth={2}
    />);
};

function generateLinks(links, name, mobile=false) {
    let linkItems = [];

    if(links.demo) {
        linkItems.push(
            <p key={`${name} demo`} className="proj-link">
                <Icon aria-hidden="true" name="arrow alternate circle right" style={{color: '#f31455'}} />
                <a href={links.demo}>
                    <span className="screenreader">Demo of {name}</span>
                    <span aria-hidden="true">Demo</span>
                </a>
            </p>
        );
    }

    if(links.site) {
        linkItems.push(
            <p key={`${name} site`} className="proj-link">
                <Icon aria-hidden="true" name="globe" style={{color: '#f31455'}} />
                <a href={links.site}>
                    <span className="screenreader">Site for {name}</span>
                    <span aria-hidden="true">Site</span>
                </a>
            </p>
        );
    }

    if(links.repo) {
        linkItems.push(
            <p key={`${name} repo`} className="proj-link">
                <Icon aria-hidden="true" name="github" style={{color: '#8334ff'}} />
                <a href={links.repo}>
                    <span className="screenreader">Repo for {name}</span>
                    <span aria-hidden="true">Repo</span>
                </a>
            </p>
        );
    }

    if(links.video) {
        linkItems.push(
            <p key={`${name} video`} className="proj-link">
                <Icon aria-hidden="true" name="video" style={{color: '#1c45b7'}} />
                <a href={links.video}>
                    <span className="screenreader">Video of {name}</span>
                    <span aria-hidden="true">Video</span>
                </a>
            </p>
        );
    }

    if(mobile) {
        linkItems = linkItems.reduce((newList, link, index) => {
            newList.push(link);
            if(index < linkItems.length - 1) {
                newList.push(<span key={`link${index}`} className="proj-links-bullet">·</span>);
            }
            return newList;
        }, []);
    }

    return linkItems;
}

ProjectItem.propTypes = {
    bullets: PropTypes.arrayOf(PropTypes.string),
    date: PropTypes.instanceOf(Date),
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
    links: PropTypes.object,
    name: PropTypes.string.isRequired,
    tagline: PropTypes.string
}

export default ProjectItem;