import React, {useState, useEffect, useRef} from 'react';
import classes from './Square.css';

const Square = (props) => {
    return (
        <div className={classes.square} ref={props.squareRef}
             style={
                 {
                     zIndex: props.zIndex,
                     background: props.background,
                     position: props.absolute ? 'absolute' : '',
                     top: props.top,
                     bottom: props.bottom,
                     left: props.left,
                     right: props.right
                 }
             }>
            1
        </div>
    )
};

export default Square;
