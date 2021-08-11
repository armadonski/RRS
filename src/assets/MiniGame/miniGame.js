import React, {useState, useEffect, useRef} from 'react';
import Container from '../Components/hoc/Container';
import Header from "../Components/UI/Nav/Header/Header";
import LanguageDrawerItems from "../Components/UI/Nav/Drawer/LanguageDrawerItems/LanguageDrawerItems";
import TopHeaderContent from "../Components/UI/Nav/Header/TopHeaderContent/TopHeaderContent";
import i18n from '../i18n';
import languageList from "../languageList";
import {useTranslation} from "react-i18next";
import Tetris from "./Tetris/Tetris";

const MiniGame = props => {
    const {t, i18n} = useTranslation();

    const [languageDrawerState, setLanguageDrawerState] = useState(false);

    const toggleLanguageDrawer = () => {
        setLanguageDrawerState(!languageDrawerState);
    };

    const changeLanguage = (language) => {
        window.location = `/${(language)}/mini-game`
    };

    return (
        <Container>
            <Header drawerState={languageDrawerState} toggleDrawer={toggleLanguageDrawer}
                    drawerItems={<LanguageDrawerItems languageList={languageList} changeLanguage={changeLanguage}/>}
                    drawerTitle={t('language.message')}>
                <TopHeaderContent toggleDrawer={toggleLanguageDrawer} languages={languageList}
                                  locale={props.locale}/>
            </Header>
            {/*<Tetris/>*/}
        </Container>
    );
};

export default MiniGame;