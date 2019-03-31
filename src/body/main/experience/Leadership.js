import React from 'react';
import {Grid, Header} from 'semantic-ui-react';

import leadership from '../../../data/leadershipData';
import LeadershipItem from './LeadershipItem';

/**
 * A display of leadership credentials.
 * {@link https://github.com/BenDMyers/portfolio/tree/master/docs/body/main/experience/Leadership.md#Leadership}
 */
const Leadership = () => {
    const leadCells = leadership.map((lead, index) => <LeadershipItem {...lead} key={`lead${index}`} />);

    return (
        <div id="leadership" className="main-content-section">
            <Header as="h2">Leadership</Header>
            <Grid divided>
                {leadCells}
            </Grid>
        </div>
    );
};

export default Leadership;