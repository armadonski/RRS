import React from 'react';
import classes from './Contact.css';

const Contact = () => {
    return (
        <div className={classes.container} id='contact'>
            <div>
                <h1>Contact</h1>
            </div>
            <div className={classes.contact}>
                {/*<form action="">*/}
                    <label htmlFor="">dsadsadsa</label>
                    <input type="text"/>
                    <label htmlFor="">dsadsa</label>
                    <input type="text"/>
                    <label htmlFor="">dsadsa</label>
                    <input type="text"/>
                    <label htmlFor="">dsadsadsa</label>
                    <input type="text"/>
                    <label htmlFor="">dsadsadsa</label>
                    <input type="text"/>
                {/*</form>*/}
            </div>
        </div>
    );
}

export default Contact;