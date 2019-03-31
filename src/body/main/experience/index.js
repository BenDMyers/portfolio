import React from 'react';

import './experience.styles.css';
import AskMeAbout from './AskMeAbout';
import Education from './Education';
import Leadership from './Leadership';
import WorkExperience from './WorkExperience';

/**
 * Contents of the portfolio's `/experience` route.
 * {@link https://github.com/BenDMyers/portfolio/tree/master/docs/body/main/experience/ResumeContent.md}
 */
const ResumeContent = () => {
    document.title = 'Experience | Ben Myers'
    return (
        <div className="resume-content" role="main">
            <AskMeAbout />
            <hr />
            <Education />
            <hr />
            <WorkExperience />
            <hr />
            <Leadership />
        </div>
    );
}

export default ResumeContent;