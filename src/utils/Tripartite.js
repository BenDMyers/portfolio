import React from 'react';
import {Grid} from 'semantic-ui-react';

const Tripartite = ({leftWidth, centerWidth, rightWidth, children, alignRight, ...rest}) => {
    const rightStyles = {};
    if(alignRight) {
        rightStyles.textAlign = 'right';
    }

    return (
        <Grid {...rest}>
            <Grid.Column width={leftWidth}>{children[0]}</Grid.Column>
            <Grid.Column width={centerWidth}>{children[1]}</Grid.Column>
            <Grid.Column width={rightWidth} style={rightStyles}>{children[2]}</Grid.Column>
        </Grid>
    );
};

export default Tripartite;