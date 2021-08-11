import React from 'react';
import classes from './Contact.css';
import {FormControl, FormHelperText, Input, InputLabel} from "@material-ui/core";

const Contact = () => {
    return (
        <div className={classes.container} id='contact'>
            <div>
                <h1>Contact</h1>
            </div>
            <div className={classes.contact}>
                {/*<form action="">*/}
                <FormControl>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text"/>
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl>
                {/*</form>*/}
            </div>
        </div>
    );
}

export default Contact;
