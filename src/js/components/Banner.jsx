'use strict';

import React, { PropTypes } from 'react';
import Reflux from 'reflux';
import { Carousel, Image } from 'react-bootstrap';
import Photos from '../stores/Photos';
import Loading from './common/Loading';

const Banner = React.createClass({
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
        let banners;
        photoResults ? banners = photoResults.photos.map(current => {
            return (
                <Carousel.Item key={current.id}>
                    <Image
                        responsive
                        width="100%"
                        alt="900x350"
                        src={current.original} />
                    <Carousel.Caption>
                        <p><small>por: <i>{current.creation.author.name}</i></small></p>
                    </Carousel.Caption>
                </Carousel.Item>
            );
        }) : <Loading />;
        return (
            <Carousel interval={15000}>
                {banners}
            </Carousel>
        );
    }
});

export default Banner;