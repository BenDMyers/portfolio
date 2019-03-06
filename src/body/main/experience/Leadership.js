import React from 'react';
import {Grid, Header} from 'semantic-ui-react';

import leadership from '../../../data/leadershipData';
import LeadershipItem from './LeadershipItem';

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