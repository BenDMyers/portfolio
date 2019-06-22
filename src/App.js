import React from 'react';
import './App.css';

import BodyLayout from './body/BodyLayout';
import BackToTopButton from './layout/BackToTopButton';
import Redirects from './utils/Redirects';

const App = () => {
    return (
        <React.Fragment>
            <BodyLayout />
            <BackToTopButton />
            <Redirects />
        </React.Fragment>
    );
}

export default App;