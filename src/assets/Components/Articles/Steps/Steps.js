import React from 'react';
import classes from './Steps.css';

const Steps = () => {
    return (
        <div className={classes.container} id='steps'>
            <div>
                <h1>How it works</h1>
            </div>
            <div className={classes.steps}>
                <div>
                    <h2>Submit a request</h2>
                    <span>
                    We’ll match you with professionals that fit your needs and they’ll reach out to you. You can also explore portfolios and reviews and connect with agencies you’d like to work with.
                </span>
                </div>
                <div>
                    <h2>Discuss your needs</h2>
                    <span>
                    Once you get in contact with freelancers and agencies, ask any questions you have, discuss your project goals and expectations, get price quotes and explore your options.
                </span>
                </div>
                <div>
                    <h2>Get your project done</h2>
                    <span>
                    Pick the freelancer or agency that’s right for you. Together, you’ll set the timeline, payment plan and project details that will help bring your ideas to life.
                </span>
                </div>
            </div>
        </div>
    );
}

export default Steps;