import React from 'react';
import Nav from "../Nav";
import {Menu} from '@material-ui/icons'
import classes from './Header.css';

const Header = (props) => {
    return (
        <Nav sticky>
            <Menu>add_circle</Menu>
            <p style={{justifyContent:'center'}}>Bla bla title</p>
        </Nav>
    );
}

export default Header;