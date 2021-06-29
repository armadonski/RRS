import React, {useState} from 'react';
import Content from './Components/UI/Content/Content'
import Container from "./Components/hoc/Container";
import Header from "./Components/UI/Nav/Header/Header";
import TopHeaderContent from "./Components/UI/Nav/Header/TopHeaderContent/TopHeaderContent";
import HeaderContent from "./Components/UI/Nav/Header/HeaderContent/HeaderContent";
import en from "./Components/UI/Nav/Drawer/LanguageFlags/en.svg";
import ro from "./Components/UI/Nav/Drawer/LanguageFlags/ro.svg";
import {ListItem} from "@material-ui/core";
import classes from './App.css';
import {ContactMail, Info, Payment} from "@material-ui/icons";
import Widget from "./Components/UI/Widget/Widget";
import Steps from "./Components/Articles/Steps/Steps";
import About from "./Components/Articles/About/About";
import Contact from "./Components/Articles/Contact/Contact";

const App = (props) => {
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

    const articles = [
        <About/>,
        <Steps/>,
        <Contact/>
    ];

    const [languageDrawerState, setLanguageDrawerState] = useState(false);
    const [menuDrawerState, setMenuDrawerState] = useState(false);
    const [title, setTitle] = useState('index');

    const toggleLanguageDrawer = () => {
        setLanguageDrawerState(!languageDrawerState);
    };
    const toggleMenuDrawer = () => {
        setMenuDrawerState(!menuDrawerState);
    };

    const changeLanguage = (language) => {
        window.location = `/${(language)}`
    }

    const languageDrawerItems = Object.keys(languageList).map((item, key) => {
        return (
            <ListItem onClick={() => changeLanguage(item)} key={key}
                      className={[classes.drawerItem, item === locale ? classes.active : null].join(' ')}>
                <img src={languageList[item].flag} alt={item}/>
                <span>{languageList[item].name}</span>
            </ListItem>
        )
    });

    const menuDrawerItems =
        <div>
            <ListItem className={classes.drawerItem}>
                <Info/>
                <span>About</span>
            </ListItem>
            <ListItem className={classes.drawerItem}>
                <ContactMail/>
                <span>Contact us</span>
            </ListItem>
            <ListItem className={classes.drawerItem}>
                <Payment/>
                <span>Plans</span>
            </ListItem>
        </div>

    return (
        <Container>
            <Header drawerState={languageDrawerState} toggleDrawer={toggleLanguageDrawer}
                    drawerItems={languageDrawerItems} drawerTitle='Select a language'>
                <TopHeaderContent toggleDrawer={toggleLanguageDrawer} languages={languageList} locale={props.locale}/>
            </Header>
            <Header drawerState={menuDrawerState} toggleDrawer={toggleMenuDrawer} drawerItems={menuDrawerItems}
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
