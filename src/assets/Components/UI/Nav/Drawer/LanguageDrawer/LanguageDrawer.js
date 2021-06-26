import React from 'react';
import Drawer from '@material-ui/core/Drawer'
import {List, ListItem} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import classes from "../MenuDrawer/MenuDrawer.css";

const LanguageDrawer = (props) => {

    const getCountryCode = language => {
        return language.substring(0, 2).toLocaleLowerCase();
    };

    const changeLanguage = (language) => {
        window.location = `/${getCountryCode(language)}`
    }

    return (
        <Drawer open={props.open} onClose={props.toggleDrawer}>
            <List>
                {Object.keys(props.languageList).map(language => {
                    return (
                        <ListItem onClick={() => changeLanguage(language)} className={classes.link}>
                            <img style={{width: '40px'}} src={props.languageList[language].flag}
                                 alt={getCountryCode(language)}/>
                            {props.languageList[language].name}
                        </ListItem>
                    )
                })}
                <ListItem className={classes.link} onClick={props.toggleDrawer}>
                    <Close/>
                    <h5>Close</h5>
                </ListItem>
            </List>
        </Drawer>
    )
        ;
}

export default LanguageDrawer;