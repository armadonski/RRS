import React from 'react';
import Drawer from '@material-ui/core/Drawer'

const MenuDrawer = (props) => {
    return (
        <Drawer open={props.open} onClose={props.toggleDrawer}>
            <h5>Contact</h5>
            <h5>Call me</h5>
            <h5 onClick={props.toggleDrawer}>Close</h5>
        </Drawer>
    );
}

export default MenuDrawer;