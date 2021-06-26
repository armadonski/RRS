import React, {useState} from 'react';
import Nav from "../Nav";
import {Facebook, Instagram, Twitter} from '@material-ui/icons'
import classes from './TopHeader.css';
import LanguageDrawer from "../Drawer/LanguageDrawer/LanguageDrawer";
import en from "../Drawer/LanguageDrawer/LanguageFlags/en.svg";
import ro from "../Drawer/LanguageDrawer/LanguageFlags/ro.svg";

const TopHeader = (props) => {
    const languageList = {
        en: {
            name: 'English',
            flag: en
        },
        ro: {
            name: 'Romanian',
            flag: ro
        }
    };


    const [drawerStatus, setDrawerStatus] = useState(false);
    const toggleDrawer = () => {
        setDrawerStatus(!drawerStatus);
    };

    return (
        <Nav>
            <div className={classes.language} onClick={toggleDrawer}>
                <img style={{width: '40px'}} src={languageList[props.language].flag}
                     alt={props.language}/>
                <span className={classes.language_text}>
                    {languageList[props.language].name}
                </span>
            </div>
            <div>
                <a href=""><Facebook style={{color: '#1877F2'}}/></a>
                <a href=""><Instagram style={{color: '#97694F'}}/></a>
                <a href=""><Twitter style={{color: '#0996FB'}}/></a>
            </div>
            <LanguageDrawer languageList={languageList} open={drawerStatus} toggleDrawer={toggleDrawer}/>
        </Nav>
    );
}

export default TopHeader;