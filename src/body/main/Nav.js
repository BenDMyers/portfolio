import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';

const Nav = (props) => {
    const isActive = designatedRoute => designatedRoute === props.location.pathname;

    return (
        <Menu role="nav" pointing secondary>
            <Menu.Item as={Link} active={isActive('/')} to="/">Experience</Menu.Item>
            <Menu.Item as={Link} active={isActive('/projects')} to="/projects">Projects</Menu.Item>
            <Menu.Item as={Link} active={isActive('/presentations')} to="/presentations">Presentations</Menu.Item>
        </Menu>
    );
};

export default withRouter(Nav);