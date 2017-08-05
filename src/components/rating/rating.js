import React from 'react';
import {Container} from 'styled/components/rating/rating.styled';

const Rating = ({rate}) => {
    return <Container rate={rate}>{rate}</Container>;
};

export default Rating;