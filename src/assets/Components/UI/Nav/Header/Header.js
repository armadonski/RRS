import React from 'react';
import Nav from "../Nav";
import MenuDrawer from "../Drawer/MenuDrawer/MenuDrawer";

const Header = (props) => {
    return (
        <Nav sticky={props.sticky}>
            {props.children}
            <MenuDrawer open={props.drawerState} toggleDrawer={props.toggleDrawer} drawerTitle={props.drawerTitle}>
                {props.drawerItems}
            </MenuDrawer>
        </Nav>
    );
}

export default Header;