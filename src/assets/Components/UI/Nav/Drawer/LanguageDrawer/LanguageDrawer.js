import React from 'react';
import Drawer from '@material-ui/core/Drawer'

const LanguageDrawer = (props) => {
    return (
        <Drawer open={props.open} onClose={props.toggleDrawer}>
            <h5>English</h5>
            <h5>RO</h5>
            <h5 onClick={props.toggleDrawer}>Close</h5>
        </Drawer>
    );
}

export default LanguageDrawer;