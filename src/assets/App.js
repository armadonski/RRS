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

const App = (props) => {
    const [languageDrawerState, setLanguageDrawerState] = useState(false);
    const [menuDrawerState, setMenuDrawerState] = useState(false);
    const [title, setTitle] = useState(null);

    const contactRef = useRef(null);
    const aboutRef = useRef(null);
    const stepsRef = useRef(null);

    const articles = [
        <div ref={aboutRef}><About/></div>,
        <div ref={stepsRef}><Steps/></div>,
        <div ref={contactRef}><Contact/></div>
    ];

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
                        setTitle('about');
                    }
                    break;
                }
                case contactRef.current : {
                    if (entry.isIntersecting) {
                        setTitle('contact');
                    }
                    break;
                }
                case stepsRef.current : {
                    if (entry.isIntersecting) {
                        setTitle('steps');
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

    useEffect(() => {
        if (contactRef.current) observer.observe(contactRef.current);
        if (stepsRef.current) observer.observe(stepsRef.current);
        if (aboutRef.current) observer.observe(aboutRef.current);

    }, [contactRef, stepsRef, aboutRef, options]);

    return (
        <Container>
            <Header drawerState={languageDrawerState} toggleDrawer={toggleLanguageDrawer}
                    drawerItems={<LanguageDrawerItems languageList={languageList} changeLanguage={changeLanguage}/>}
                    drawerTitle='Select a language'>
                <TopHeaderContent toggleDrawer={toggleLanguageDrawer} languages={languageList}
                                  locale={props.locale}/>
            </Header>
            <Header drawerState={menuDrawerState} toggleDrawer={toggleMenuDrawer} drawerItems={<MenuDrawerItems/>}
                    sticky drawerTitle='Select an option'>
                <HeaderContent toggleDrawer={toggleMenuDrawer} title={title}/>
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
