import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {Navbar, Glyphicon} from 'react-bootstrap';

const Header = ({includeBackButton}) => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="/">Weather app</Link>
            </Navbar.Brand>
        </Navbar.Header>
        {
            includeBackButton
                ? (
                    <Link to="/" style={styles.backButton}>
                        <Glyphicon glyph="menu-left"/>
                    </Link>
                )
                : ''
        }
    </Navbar>
);

Header.propTypes = {
    includeBackButton: PropTypes.bool.isRequired
};

const styles = {
    backButton: {
        position: 'relative',
        top: '16px',
        left: '40px'
    }
};

export default Header;