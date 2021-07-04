import React, {useState, useEffect, useRef} from 'react';
import Content from './Components/UI/Content/Content'
import Container from "./Components/hoc/Container";
import Header from "./Components/UI/Nav/Header/Header";
import TopHeaderContent from "./Components/UI/Nav/Header/TopHeaderContent/TopHeaderContent";
import HeaderContent from "./Components/UI/Nav/Header/HeaderContent/HeaderContent";
import Widget from "./Components/UI/Widget/Widget";
import Steps from "./Components/Articles/Steps/Steps";
import About from "./Components/Articles/About/About";
import Contact from "./Components/Articles/Contact/Contact";
import LanguageDrawerItems from "./Components/UI/Nav/Drawer/LanguageDrawerItems/LanguageDrawerItems";
import MenuDrawerItems from "./Components/UI/Nav/Drawer/MenuDrawerItems/MenuDrawerItems";
import languageList from "./languageList";
import i18n from './i18n';
import {useTranslation} from "react-i18next";

const App = (props) => {
    const [languageDrawerState, setLanguageDrawerState] = useState(false);
    const [menuDrawerState, setMenuDrawerState] = useState(false);
    const [title, setTitle] = useState(null);

    const {t, i18n} = useTranslation();

    const contactRef = useRef(null);
    const aboutRef = useRef(null);
    const stepsRef = useRef(null);

    const toggleLanguageDrawer = () => {
        setLanguageDrawerState(!languageDrawerState);
    };
    const toggleMenuDrawer = () => {
        setMenuDrawerState(!menuDrawerState);
    };

    const changeLanguage = (language) => {
        window.location = `/${(language)}`
    };

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.8
    };

    const callback = (entries) => {
        entries.forEach(entry => {
            switch (entry.target) {
                case aboutRef.current : {
                    if (entry.isIntersecting) {
                        setTitle('menu.about');
                    }
                    break;
                }
                case contactRef.current : {
                    if (entry.isIntersecting) {
                        setTitle('menu.contact');
                    }
                    break;
                }
                case stepsRef.current : {
                    if (entry.isIntersecting) {
                        setTitle('menu.steps');
                    }
                    break;
                }
                default : {
                    setTitle('Welcome');
                }
            }
        })
    }
    const observer = new IntersectionObserver(callback, options);

    const scrollToAbout = () => {
        aboutRef.current.scrollIntoView({behavior: 'smooth'});
        setMenuDrawerState(false);
    };

    const scrollToSteps = () => {
        stepsRef.current.scrollIntoView({behavior: 'smooth'});
        setMenuDrawerState(false);
    };

    const scrollToContact = () => {
        contactRef.current.scrollIntoView({behavior: 'smooth'});
        setMenuDrawerState(false);
    };


    useEffect(() => {
        if (contactRef.current) observer.observe(contactRef.current);
        if (stepsRef.current) observer.observe(stepsRef.current);
        if (aboutRef.current) observer.observe(aboutRef.current);

    }, [contactRef, stepsRef, aboutRef, options]);

    const articles = [
        <div style={{padding: '20px'}} ref={aboutRef}><About clicked={scrollToContact}/></div>,
        <div style={{padding: '20px'}} ref={stepsRef}><Steps/></div>,
        <div style={{padding: '20px'}} ref={contactRef}><Contact/></div>
    ];

    return (
        <Container>
            <Header drawerState={languageDrawerState} toggleDrawer={toggleLanguageDrawer}
                    drawerItems={<LanguageDrawerItems languageList={languageList} changeLanguage={changeLanguage}/>}
                    drawerTitle={t('language.message')}>
                <TopHeaderContent toggleDrawer={toggleLanguageDrawer} languages={languageList}
                                  locale={props.locale}/>
            </Header>
            <Header drawerState={menuDrawerState} toggleDrawer={toggleMenuDrawer} drawerItems={
                <MenuDrawerItems
                    activeOption={title}
                    about={scrollToAbout}
                    steps={scrollToSteps}
                    contact={scrollToContact}
                />
            }
                    sticky drawerTitle={t('menu.message')}>
                <HeaderContent toggleDrawer={toggleMenuDrawer} title={t(title)}/>
            </Header>
            <Content>
                {articles.map((article, key) => {
                    return <Widget key={key}>
                        {article}
                    </Widget>;
                })}
            </Content>
        </Container>
    );
}

export default App;
