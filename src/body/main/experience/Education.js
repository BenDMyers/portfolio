import React from 'react';
import {Grid, Header} from 'semantic-ui-react';

import education from '../../../data/educationData';
import EducationItem from './EducationItem';

const Education = () => {
    const eduCells = education.map((edu, index) => <EducationItem {...edu} key={`edu${index}`} />);

    return (
        <div id="education" className="main-content-section">
            <Header as="h2">Education</Header>
            <Grid divided>
                {eduCells}
            </Grid>
        </div>
    );
};

export default Education;