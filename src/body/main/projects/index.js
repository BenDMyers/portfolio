import React from 'react';
import {Header} from 'semantic-ui-react';

import './projects.styles.css';
import ProjectItem from './ProjectItem';
import projectData from '../../../data/projectData';

const ProjectsContent = () => {
    document.title = 'Projects | Ben Myers'
    const projects = projectData.reduce((projList=[], project, index) => {
        projList.push(<ProjectItem key={project.name} {...project} />);
        if(index < projectData.length - 1) {
            projList.push(<hr key={`hr ${index}`} />);
        }
        return projList;
    }, []);

    return (
        <div className="proj-content main-content-section" role="main">
            <Header as='h2'>What I&apos;ve made</Header>
            {projects}
        </div>
    );
}

export default ProjectsContent;