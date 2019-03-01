import React from 'react';
import {Header} from 'semantic-ui-react';

import AskMeAbout from './AskMeAbout';
import Education from './Education';

const ResumeContent = () => {
    return (
        <div role="main">
            <AskMeAbout />
            <Education />
        </div>
    );
}

export default ResumeContent;