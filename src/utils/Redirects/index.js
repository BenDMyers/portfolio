import React from 'react';
import {Route} from 'react-router-dom';
import routes from './routes.json';

/**
 * Supplies routes to external URLs.
 * {@link https://github.com/BenDMyers/portfolio/tree/master/docs/utils/Redirects.md}
 */
const Redirects = () => {
    const toRoute = ([path, destination]) => {
        return (
            <Route
                path={path}
                render={() => {
                    window.location.href = destination;
                    return null;
                }
            }/>
        );
    }

    return Object.entries(routes).map(toRoute);
};

export default Redirects;