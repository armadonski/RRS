import React from 'react';
import classes from './Widget.css';

const Widget = props => {
    return (
        <div style={{backgroundImage: `url(${props.background})`}} className={classes.widget}>
            {props.children}
        </div>
    );
}

export default Widget;