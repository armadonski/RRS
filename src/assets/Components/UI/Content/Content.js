import React from 'react';
import classes from './Content.css';

const Content = (props) => {
    return (
        <div className={classes.content}>
            {props.children}
        </div>
    );
}

export default Content;