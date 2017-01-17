'use strict';

import React from 'react';
import { Row } from 'react-bootstrap';

const Loading = React.createClass({
    render() {
        return (
            <Row className="col-m2-12 text-center" style={{ marginTop: '50px' }}><span className="loading-pulse"></span></Row>
        );
    }
});

export default Loading;