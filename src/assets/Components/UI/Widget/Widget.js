import React from 'react';
import classes from './Widget.css';

const Widget = (props) => {
    return (
        <div>
            {props.children}
        </div>
    );
}

export default Widget;