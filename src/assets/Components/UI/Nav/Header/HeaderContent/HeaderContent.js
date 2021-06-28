import React from 'react';
import {Menu} from "@material-ui/icons";
import classes from '../Header.css';

const HeaderContent = (props) => {
    return (
        <>
            <div className={classes.menu} onClick={props.toggleDrawer}>
                <Menu/>
                <span>Menu</span>
            </div>
            <h1>{props.title}</h1>
        </>
    );
}

export default HeaderContent;