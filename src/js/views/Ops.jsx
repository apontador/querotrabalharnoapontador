'use strict';

import React from 'react';

const Link = require('react-router').Link;

const Ops = React.createClass({
    render() {
        return (
            <div className="content full-width">
                <h1>{ 'That Page Doesn\'t Exist' }</h1>
                <p><Link to="/">Voltar para o inicio</Link></p>
            </div>
        );
    }
});

export default Ops;
