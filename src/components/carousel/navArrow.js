import React from 'react';
import {Container} from 'styled/components/carousel/navArrow.styled';

const navArrow = (props) => (
    <Container {...props}>
        <img className="navArrow__image" src="assets/images/arrow.svg" alt="Navigation"/>
    </Container>
);

export default navArrow;