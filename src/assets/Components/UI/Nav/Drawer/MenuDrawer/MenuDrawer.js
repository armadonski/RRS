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
                    <div className={classes.drawerHeader}>
                        {props.drawerTitle}
                        <div className={classes.close}>
                            <span>Close</span>
                            <Close/>
                        </div>
                    </div>
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