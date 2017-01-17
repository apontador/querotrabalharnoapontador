/*
Project:    Apontador
Author:     Maurício Nunes
====================================== */

'use strict';

import React, { PropTypes } from 'react';
import Place from './views/Place';
import Header from './components/common/Header';
import Footer from './components/common/Footer';


const App = React.createClass({
    propTypes: {
        children: PropTypes.object,
    },
    render() {
        return (
            <div id="app-content">
                <Header />
                <main className="container">
                    { this.props.children || <Place /> }
                </main>
                <Footer />
            </div>
        );
    }
});

export default App;
