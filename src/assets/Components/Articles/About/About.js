import React from 'react';
import classes from './About.css';
import {useTranslation} from "react-i18next";

const About = (props) => {
    const {t, i18n} = useTranslation();

    return (
        <div className={classes.container} id='about' ref={props.ref}>
            <div className={classes.about}>
                <h1>
                    {t('about_message.header')}
                </h1>
                <span style={{maxWidth: '50%'}}>
                    {t('about_message.message')}
            </span>
                <div className={classes.button}>
                    <button onClick={props.clicked}>
                        Contact us now!
                    </button>
                </div>
            </div>
            <div style={{width: '100%', height: '400px', background: 'darkgrey'}}>

            </div>

        </div>
    );
}

export default About;