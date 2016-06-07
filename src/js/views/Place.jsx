'use strict';

import React, { PropTypes } from 'react';
import Reflux from 'reflux';
import { Row } from 'react-bootstrap';
import Reviews from '../components/Reviews';
import RelatedList from '../components/RelatedList';
import Banner from '../components/Banner';
import MoreInfo from '../components/MoreInfo';
import Map from '../components/Map';
import Loading from '../components/common/Loading';
import Places from '../stores/Place';

const Place = React.createClass({
    propTypes: {
        params: PropTypes.object
    },
    mixins: [
        Reflux.listenTo(Places, 'onPlace')
    ],
    getInitialState() {
        return {
            data: {}
        };
    },
    componentDidMount() {
        let { params } = this.props;
        Places.getPlaceById(params.placeId);
    },
    onPlace(data) {
        this.setState({ data });
    },
    render() {
        let { place } = this.state.data;
        return place ? (
            <Row className="col-md-12" componentClass="section">
                <Row componentClass="section" className="banner-section">
                    <Banner place={place} />
                </Row>
                <Row componentClass="section" className="infos-section">
                    <MoreInfo place={place} />
                </Row>
                <Row componentClass="section" className="col-md-12 reviews-related-section">
                    <Row componentClass="section" className="reviews-section col-md-6">
                        <Reviews place={place} />
                    </Row>
                    <Row componentClass="section" className="related-places-section col-md-6">
                        <RelatedList place={place} />
                    </Row>
                </Row>
                <Row componentClass="section" className="maps-section">
                    <Map place={place} />
                </Row>
            </Row>
        ) : <Loading />;
    }
});

export default Place;
