import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';

/**
 * The portfolio navbar.
 * {@link https://github.com/BenDMyers/portfolio/tree/master/docs/body/main/Nav.md}
 */
const Nav = (props) => {
    const isActive = designatedRoute => designatedRoute === props.location.pathname;

    return (
        <Menu role="navigation" pointing secondary>
            <Menu.Item as={Link} active={isActive('/')} to="/" color="red">Experience</Menu.Item>
            <Menu.Item as={Link} active={isActive('/projects')} to="/projects" color="purple">Projects</Menu.Item>
            <Menu.Item as={Link} active={isActive('/presentations')} to="/presentations" color="blue">Presentations</Menu.Item>
        </Menu>
    );
};

Nav.propTypes = {
    location: PropTypes.object
};

export default withRouter(Nav);