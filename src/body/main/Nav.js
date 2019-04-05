import React from 'react';
import PropTypes from 'prop-types';
import {NavLink, withRouter} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';

/**
 * The portfolio navbar.
 * {@link https://github.com/BenDMyers/portfolio/tree/master/docs/body/main/Nav.md}
 */
const Nav = (props) => {
    const navProps = {
        as: NavLink,
        exact: true,
        'aria-current': 'page'
    }

    return (
        <Menu role="navigation" pointing secondary>
            <Menu.Item active={'/' === props.location.pathname} to="/" color="red" {...navProps}>Experience</Menu.Item>
            <Menu.Item active={'/projects' === props.location.pathname} to="/projects" color="purple" {...navProps}>Projects</Menu.Item>
            <Menu.Item active={'/presentations' === props.location.pathname} to="/presentations" color="blue" {...navProps}>Presentations</Menu.Item>
        </Menu>
    );
};

Nav.propTypes = {
    location: PropTypes.object
};

export default withRouter(Nav);