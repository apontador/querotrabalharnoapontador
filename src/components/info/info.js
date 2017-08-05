import React from 'react';
import {Container} from 'styled/components/info/info.styled';
import Carousel from 'components/carousel/carousel';
import {Box} from 'styled/app/styles.styled';
import {H1, P} from 'styled/app/elements.styled';
import Rating from 'components/rating/rating';

const Categories = ({categories}) => {

    const cats = categories.map(cat => cat.name);

    return <P>{cats.join(', ')}</P>;
};

const Address = ({address}) => {

    const text = `${address.district}, ${address.city}`;

    return <P>{text}</P>;
};

const Info = ({place}) => {

    return (
        <Container>
            <Box>
                <Carousel/>
                <H1>
                    {place.name}
                    <Rating rate={place.statistics.rating}/>
                </H1>
                <Categories categories={place.categories}/>
                <Address address={place.address}/>
            </Box>
        </Container>
    );
};

export default Info;