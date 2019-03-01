import React from 'react';
import {Grid, Header, Image} from 'semantic-ui-react';

import Duration from '../../utils/Duration';

const ExperienceItem = (props) => {
    const header = props.name + (props.location && `, ${props.location}`);

    return (
        <Grid>
            <Grid.Column width={2}>
                <Image src={props.logo} alt={`${props.name} logo`} />
            </Grid.Column>
            <Grid.Column width={10}>
                <Header as='h3'>{header}</Header>
                <p>{props.subheader}</p>
            </Grid.Column>
            <Grid.Column width={4}>
                <Duration startDate={props.startDate} endDate={props.endDate} />
            </Grid.Column>
        </Grid>
    );
};

export default ExperienceItem;