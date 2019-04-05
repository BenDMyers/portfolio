import React from 'react';
import './App.css';

import BodyLayout from './body/BodyLayout';
import BackToTopButton from './layout/BackToTopButton';

const App = () => {
    return (
        <React.Fragment>
            <BodyLayout />
            <BackToTopButton />
        </React.Fragment>
    );
}

export default App;