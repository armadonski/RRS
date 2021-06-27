import React from 'react';
import {Menu} from "@material-ui/icons";

const HeaderContent = (props) => {
    return (
        <>
            <div onClick={props.toggleDrawer}>
                <Menu/>
                <span>Menu</span>
            </div>
        </>
    );
}

export default HeaderContent;