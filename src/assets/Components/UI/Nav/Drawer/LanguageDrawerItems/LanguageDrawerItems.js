import {ListItem} from "@material-ui/core";
import classes from "../DrawerItems.css";
import React from "react";
import {useTranslation} from "react-i18next";

const LanguageDrawerItems = props => {
    const {t, i18n} = useTranslation();

    return (Object.keys(props.languageList).map((item, key) => {
        return (
            <ListItem onClick={() => props.changeLanguage(item)} key={key}
                      className={[classes.drawerItem, item === locale ? classes.active : null].join(' ')}>
                <img src={props.languageList[item].flag} alt={item}/>
                <span>{t(props.languageList[item].name)}</span>
            </ListItem>
        )
    }));
};

export default LanguageDrawerItems;
