'use strict';

import React from 'react';
import { Nav, Navbar, NavDropdown, NavItem, MenuItem, FormControl } from 'react-bootstrap';

const Header = React.createClass({
    render() {
        return (
            <header>
                <Navbar fixedTop className="apontador-header">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">
                                <img className="img-responsive" alt="Apontador" src="https://clientmanager.apontador-assets.com/prod/base/images/newheader/logo.png?v=131"/>                            
                            </a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        </Navbar.Header>
                    <Navbar.Collapse>
                        <Navbar.Form pullLeft>
                            <FormControl type="search" placeholder="Search" />
                        </Navbar.Form>
                        <Nav>
                            <NavDropdown eventKey={3} title="Categorias" id="dropdown-categorias">
                                <MenuItem eventKey={3.1}>
                                    <span className="glyphicon glyphicon-cutlery"></span>
                                    {' '}
                                    Restaurantes
                                </MenuItem>
                                <MenuItem eventKey={3.2}>
                                    <span className="glyphicon glyphicon-glass"></span>
                                    {' '}
                                    Bares
                                </MenuItem>
                                <MenuItem eventKey={3.3}>
                                    <span className="glyphicon glyphicon-film"></span>
                                    {' '}
                                    Cinemas
                                </MenuItem>
                                <MenuItem eventKey={3.4}>
                                    <span className="glyphicon glyphicon-heart-empty"></span>
                                    {' '}
                                    Teatros
                                </MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.5}>Todas Categorias</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={2} href="#">
                                <span className="glyphicon glyphicon-user"></span>
                                {' '}
                                Entrar
                            </NavItem> 
                            <NavItem eventKey={1} href="#">
                                <span className="glyphicon glyphicon-envelope"></span>
                                {' '}
                                Anuncie seu negócio
                            </NavItem>
                            <NavDropdown eventKey={4} title="Portugues" id="dropdown-lang">
                                <MenuItem eventKey={4.1}>English</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={4.2}>Spanish</MenuItem>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        );
    }
});

export default Header;
