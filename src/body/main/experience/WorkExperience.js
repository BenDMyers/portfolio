import React from 'react';
import {Grid, Header} from 'semantic-ui-react';

import workExperience from '../../../data/workExperienceData';
import ExperienceItem from './ExperienceItem';

const WorkExperience = () => {
    const expCells = workExperience.map((exp, index) => <ExperienceItem {...exp} key={`exp${index}`} />);

    return (
        <div id="experience" className="main-content-section">
            <Header as="h2">Experience</Header>
            <Grid divided>
                {expCells}
            </Grid>
        </div>
    );
};

export default WorkExperience;