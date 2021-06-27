import React from 'react';
import {Facebook, Instagram, Twitter} from "@material-ui/icons";

const TopHeaderContent = (props) => {
    return (
        <>
            <div onClick={props.toggleDrawer}>
                <img style={{width: '40px'}} src={props.languages[props.locale].flag}
                     alt={props.locale}/>
                <span>
                    {props.languages[props.locale].name}
                </span>
            </div>
            <div>
                <a href=""><Facebook style={{color: '#1877F2'}}/></a>
                <a href=""><Instagram style={{color: '#97694F'}}/></a>
                <a href=""><Twitter style={{color: '#0996FB'}}/></a>
            </div>
        </>
    );
}

export default TopHeaderContent;