import React from 'react';
import Drawer from '@material-ui/core/Drawer'
import {Close} from "@material-ui/icons";
import classes from './MenuDrawer.css';
import {Divider, List, ListItem} from "@material-ui/core";
import {useTranslation} from "react-i18next";

const MenuDrawer = (props) => {
    const {t, i18n} = useTranslation();

    return (
        <Drawer open={props.open} onClose={props.toggleDrawer}>
            <List>
                <ListItem onClick={props.toggleDrawer}>
                    <div className={classes.drawerHeader}>
                        {props.drawerTitle}
                        <div className={classes.close}>
                            <span>{t('buttons.close')}</span>
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