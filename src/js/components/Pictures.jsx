'use strict';

import React, { PropTypes } from 'react';
import { Image, Row, PageItem, Pager } from 'react-bootstrap';

import Loading from './common/Loading';

import Photos from '../stores/Photos';

const Pictures = React.createClass({
    propTypes: {
        place: PropTypes.object
    },
    mixins: [
        Reflux.listenTo(Photos, 'onPhotos')
    ],
    getInitialState() {
        return {
            data: {}
        };
    },
    componentDidMount() {
        let { place } = this.props;
        Photos.getPhotos(place.id);
    },
    onPhotos(data) {
        this.setState({ data });
    },
    render() {
        let { photoResults } = this.state.data;
        let html = photoResults ? photoResults.photos.map((current, index) => (<Image key={index} src={`${current.small}`} className="col-sm-2 col-md-2" />)) : <Loading />;
        return (
            <section>
                <Row>
                    {html}
                </Row>
                <Pager>
                        <PageItem href="#">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                        </PageItem>
                        { photoResults ? photoResults.header.start + 1 : 1 }
                        <PageItem href="#">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                        </PageItem>
                    </Pager>
                    <Pager>
                        <PageItem href="#" pullRight>
                            Ir para todos
                        </PageItem>
                    </Pager>
            </section>
        );
    }
});

export default Pictures;