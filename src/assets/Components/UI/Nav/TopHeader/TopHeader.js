import React from 'react';
import Nav from "../Nav";
import {Facebook, Instagram, Twitter, Language} from '@material-ui/icons'
import classes from './TopHeader.css';

const TopHeader = (props) => {
    return (
        <Nav>
            <div className={classes.language}>
                <Language/>
                <span className={classes.language_text}>
                    English
                </span>
            </div>
            <div>
                <a href=""><Facebook style={{color: '#1877F2'}}/></a>
                <a href=""><Instagram style={{color: '#97694F'}}/></a>
                <a href=""><Twitter style={{color: '#0996FB'}}/></a>
            </div>
        </Nav>
    );
}

export default TopHeader;