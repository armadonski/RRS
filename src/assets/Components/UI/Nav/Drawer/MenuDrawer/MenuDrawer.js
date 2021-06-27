import React from 'react';
import Drawer from '@material-ui/core/Drawer'
import {Close} from "@material-ui/icons";
import classes from './MenuDrawer.css';
import {Divider, List, ListItem} from "@material-ui/core";

const MenuDrawer = (props) => {
    return (
        <Drawer open={props.open} onClose={props.toggleDrawer}>
            <List>
                <ListItem onClick={props.toggleDrawer}>
                    <span>Close</span>
                    <Close/>
                </ListItem>
                <Divider/>
                <div className={classes.drawerContent}>
                    {props.children}
                </div>
            </List>
        </Drawer>
    );
}

export default MenuDrawer;