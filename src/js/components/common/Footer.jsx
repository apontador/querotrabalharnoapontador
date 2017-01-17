'use strict';

import React from 'react';
import { Navbar } from 'react-bootstrap';

const Footer = React.createClass({
    render() {
        return (
            <Navbar id="footer" componentClass="footer" bottom bsClass="apontador-footer text-center">
                <Navbar.Text>
                    © {new Date().getFullYear()} Apontador Busca Local LTDA
                </Navbar.Text>
                <Navbar.Text>
                    Todos os direitos reservados
                </Navbar.Text>
            </Navbar>
        );
    }
});

export default Footer;
