import React from 'react';
import {Menu} from "@material-ui/icons";
import classes from '../Header.css';
import {useTranslation} from "react-i18next";

const HeaderContent = (props) => {
    const {t, i18n} = useTranslation();

    return (
        <>
            <div className={classes.menu} onClick={props.toggleDrawer}>
                <Menu/>
                <span>{t('menu.button')}</span>
            </div>
            <h1>{props.title}</h1>
        </>
    );
}

export default HeaderContent;