import {ListItem} from "@material-ui/core";
import classes from "../DrawerItems.css";
import React from "react";

const LanguageDrawerItems = props => {

    return (Object.keys(props.languageList).map((item, key) => {
        return (
            <ListItem onClick={() => props.changeLanguage(item)} key={key}
                      className={[classes.drawerItem, item === locale ? classes.active : null].join(' ')}>
                <img src={props.languageList[item].flag} alt={item}/>
                <span>{props.languageList[item].name}</span>
            </ListItem>
        )
    }));
};

export default LanguageDrawerItems;
