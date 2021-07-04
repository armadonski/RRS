import React from 'react';
import classes from './Steps.css';
import {useTranslation} from "react-i18next";

const Steps = () => {
    const {t, i18n} = useTranslation();

    return (
        <div className={classes.container} id='steps'>
            <div>
                <h1>{t('steps_message.header')}</h1>
            </div>
            <div className={classes.steps}>
                <div>
                    <h2>{t('steps_message.step_1_header')}</h2>
                    <span>{t('steps_message.step_1')}</span>
                </div>
                <div>
                    <h2>{t('steps_message.step_2_header')}</h2>
                    <span>{t('steps_message.step_2')}</span>
                </div>
                <div>
                    <h2>{t('steps_message.step_3_header')}</h2>
                    <span>{t('steps_message.step_3')}</span>
                </div>
            </div>
        </div>
    );
}

export default Steps;