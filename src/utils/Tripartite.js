import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from 'semantic-ui-react';

const Tripartite = ({alignRight, centerWidth, left, leftWidth, rightWidth, rows, ...rest}) => {
    let rightStyles = {paddingRight: 0};
    alignRight && (rightStyles.textAlign = 'right');

    let correctedCenterWidth = Math.round((17-leftWidth) * centerWidth/(centerWidth + rightWidth));
    let correctedRightWidth = Math.round((17-leftWidth) * rightWidth/(centerWidth + rightWidth));

    console.log(correctedCenterWidth, correctedRightWidth)

    let innerRows = rows.map((row, index) => {
        return (
            <Grid.Row className="inner-rows" key={`row${index}`}>
                <Grid.Column className="tablet mobile only" width={15}>
                    {row.center}
                </Grid.Column>
                <Grid.Column className="computer only" width={correctedCenterWidth}>
                    {row.center}
                </Grid.Column>

                <Grid.Column className="computer only" width={correctedRightWidth} style={rightStyles}>
                    {row.right}
                </Grid.Column>
            </Grid.Row>
        );
    });

    return (
        <Grid {...rest}>
            <Grid.Column style={{paddingRight: 0}} width={leftWidth}>{left}</Grid.Column>
            <Grid.Column style={{paddingRight: 0}} width={16-leftWidth}>
                <Grid>
                    {innerRows}
                </Grid>
            </Grid.Column>
        </Grid>
    );
};

Tripartite.defaultProps = {
    centerWidth: 10,
    leftWidth: 2,
    rightWidth: 4
};

Tripartite.propTypes = {
    alignRight: PropTypes.bool,
    centerWidth: PropTypes.number,
    left: PropTypes.node.isRequired,
    leftWidth: PropTypes.number,
    rightWidth: PropTypes.number,
    rows: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Tripartite;