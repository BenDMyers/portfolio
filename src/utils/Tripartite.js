import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from 'semantic-ui-react';

const Tripartite = ({leftWidth, centerWidth, rightWidth, children, alignRight, ...rest}) => {
    const rightStyles = {};
    if(alignRight) {
        rightStyles.textAlign = 'right';
    }

    return (
        <Grid {...rest}>
            <Grid.Column width={leftWidth} style={{paddingRight: 0}}>{children[0]}</Grid.Column>
            <Grid.Column width={centerWidth}>{children[1]}</Grid.Column>
            <Grid.Column width={rightWidth} style={rightStyles}>{children[2]}</Grid.Column>
        </Grid>
    );
};

Tripartite.propTypes = {
    alignRight: PropTypes.bool,
    centerWidth: PropTypes.number.isRequired,
    children: PropTypes.arrayOf(PropTypes.node),
    leftWidth: PropTypes.number.isRequired,
    rightWidth: PropTypes.number.isRequired
};

export default Tripartite;