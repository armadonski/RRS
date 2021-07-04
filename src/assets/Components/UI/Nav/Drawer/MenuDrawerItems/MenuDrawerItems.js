import {ListItem} from "@material-ui/core";
import classes from "../DrawerItems.css";
import {ContactMail, Info, Payment} from "@material-ui/icons";
import React from "react";

const MenuDrawerItems = () => {
    return (
        <div>
            <ListItem className={classes.drawerItem}>
                <Info/>
                <span>About</span>
            </ListItem>
            <ListItem className={classes.drawerItem}>
                <ContactMail/>
                <span>Contact us</span>
            </ListItem>
            <ListItem className={classes.drawerItem}>
                <Payment/>
                <span>Plans</span>
            </ListItem>
        </div>
    );
}

export default MenuDrawerItems;
