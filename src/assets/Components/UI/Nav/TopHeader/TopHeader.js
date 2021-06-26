import React from 'react';
import Nav from "../Nav";
import {Facebook, Instagram, Twitter} from '@material-ui/icons'
import classes from './TopHeader.css';

const TopHeader = (props) => {
    return (
        <Nav>
            <p>
                English
            </p>
            <div>
                <Facebook/>
                <Instagram/>
                <Twitter/>
            </div>
        </Nav>
    );
}

export default TopHeader;