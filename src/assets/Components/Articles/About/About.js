import React from 'react';
import classes from './About.css';

const About = (props) => {
    return (
        <div className={classes.container} id='about' ref={props.ref}>
            <div className={classes.about}>
                <h1>
                    Hire a professional to help grow your business
                </h1>
                <span style={{maxWidth: '200px'}}>
                From designing and promoting your website to setting up your online store, get matched with vetted agencies and freelancers who can help deliver real results.
            </span>
            </div>
            <div style={{width: '100%', height: '400px', background: 'darkgrey'}}>

            </div>
        </div>
    );
}

export default About;