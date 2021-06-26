import React from 'react';
import Drawer from '@material-ui/core/Drawer'
import {Close} from "@material-ui/icons";
import classes from './MenuDrawer.css';
import {List, ListItem} from "@material-ui/core";

const MenuDrawer = (props) => {
    const listItems = ['contact', 'call me'];

    return (
        <Drawer open={props.open} onClose={props.toggleDrawer}>
            <List>
                {listItems.map(item => {
                    return (
                        <ListItem className={classes.link} onClick={props.item}>
                            {item}
                        </ListItem>
                    );
                })}
                <ListItem className={classes.link} onClick={props.toggleDrawer}>
                    <Close/>
                    <h5>Close</h5>
                </ListItem>
            </List>
        </Drawer>
    );
}

export default MenuDrawer;