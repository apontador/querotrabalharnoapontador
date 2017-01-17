'use strict';

import React from 'react';
import { Image, Row } from 'react-bootstrap';

const Videos = React.createClass({
    render() {
        let fakeData = [1, 2, 3, 4];
        let html = fakeData.map(current => (<Image key={current} src={`//lorempixel.com/150/150/abstract/${current}`} className="col-sm-2 col-md-2" />));
        return (
            <section>
                <Row>
                    {html}
                </Row>
            </section>
        );
    }
});

export default Videos;