'use strict';

import React from 'react';
import { PageHeader, Row } from 'react-bootstrap';

const Map = React.createClass({
    render() {
        return (
            <Row className="container">
                <PageHeader>
                    Direções
                </PageHeader>
                <iframe
                width="100%"
                height="450"
                frameBorder="0" 
                style={{border:0}}
                src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyAyAtTrD4UV2Be6Ab6AaRcF5tK-AkufGsw
                    &origin=-23.5673641,-46.6994041&destination=-23.587415,-46.657632" allowFullScreen>
                </iframe>
            </Row>
        );
    }
});

export default Map;