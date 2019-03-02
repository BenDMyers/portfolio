import React from 'react';
import {Header} from 'semantic-ui-react';

import AskMeAbout from './AskMeAbout';
import Education from './Education';
import WorkExperience from './WorkExperience';

const ResumeContent = () => {
    document.title = 'Experience | Ben Myers'
    return (
        <div role="main">
            <AskMeAbout />
            <Education />
            <WorkExperience />
        </div>
    );
}

export default ResumeContent;