import logo from '../public/logo.svg';
import React from 'react';
import ReactDom from 'react-dom';
import classes from './App.css';

function App() {
    return (
        <div className={classes.App}>
            <header className={classes.AppHeader}>
                <img src={logo} className={classes.AppLogo} alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className={classes.AppLink}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
