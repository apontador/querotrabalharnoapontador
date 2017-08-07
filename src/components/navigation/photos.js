import React from 'react';
import {Container} from 'styled/components/navigation/photos.styled';
import Gallery from 'components/gallery/gallery';

export default class Photos extends React.Component {

    render() {
        return <Container id="photos">
            <Gallery/>
        </Container>;
    }
}