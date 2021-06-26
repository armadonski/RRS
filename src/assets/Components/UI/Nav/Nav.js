import React from 'react';
import classes from './Nav.css';

const Nav = (props) => {
    return (
        <div className={[props.sticky ? classes.sticky : null, classes.header].join(' ')}>
            {props.children}
        </div>
    );
}

export default Nav;