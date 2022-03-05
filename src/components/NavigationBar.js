import React from "react";
import {
    Collapse,
    Nav,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    Navbar,
} from "reactstrap";

export const NavigationBar = () => {
    return (
        <Navbar color="light" expand="md" light>
            <NavbarBrand href="/home">Authy App</NavbarBrand>
            <NavbarToggler onClick={function noRefCheck() {}} />
            <Collapse navbar>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink href="/home">Home</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};
