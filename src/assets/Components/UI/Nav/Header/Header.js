import React, {useState} from 'react';
import Nav from "../Nav";
import classes from './Header.css';
import MenuDrawer from "../Drawer/MenuDrawer/MenuDrawer";
import {Menu} from "@material-ui/icons";

const Header = (props) => {
    const [drawerStatus, setDrawerStatus] = useState(false);

    const toggleDrawer = () => {
        setDrawerStatus(!drawerStatus);
    };

    return (
        <Nav sticky>
            <div className={classes.menu} onClick={toggleDrawer}>
                <Menu/>
                <span className={classes.menu_text}>Menu</span>
            </div>
            <p style={{justifyContent: 'center'}}>Bla bla title</p>
            <MenuDrawer open={drawerStatus} toggleDrawer={toggleDrawer}/>
        </Nav>
    );
}

export default Header;