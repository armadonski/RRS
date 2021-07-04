import {ListItem} from "@material-ui/core";
import classes from "../DrawerItems.css";
import {ContactMail, Info} from "@material-ui/icons";
import React from "react";
import {useTranslation} from "react-i18next";

const MenuDrawerItems = props => {
    const {t, i18n} = useTranslation();

    return (
        <div>
            <ListItem
                className={[classes.drawerItem, props.activeOption === 'menu.about' ? classes.active : null].join(' ')}
                onClick={props.about}>
                <Info/>
                <span>{t('menu.about')}</span>
            </ListItem>
            <ListItem
                className={[classes.drawerItem, props.activeOption === 'menu.steps' ? classes.active : null].join(' ')}
                onClick={props.steps}>
                <ContactMail/>
                <span>{t('menu.steps')}</span>
            </ListItem>
            <ListItem
                className={[classes.drawerItem, props.activeOption === 'menu.contact' ? classes.active : null].join(' ')}
                onClick={props.contact}>
                <ContactMail/>
                <span>{t('menu.contact')}</span>
            </ListItem>
        </div>
    );
}

export default MenuDrawerItems;
