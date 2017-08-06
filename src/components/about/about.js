import React from 'react';
import {Container} from 'styled/components/about/about.styled';
import Carousel from 'components/carousel/carousel';
import {Box} from 'styled/app/styles.styled';
import {H1, P} from 'styled/app/elements.styled';
import Statistics from 'components/statistics/statistics';

const Categories = ({categories}) => {

    const cats = categories.map(cat => cat.name);

    return <P>{cats.join(', ')}</P>;
};

const Address = ({address}) => {

    const text = `${address.district}, ${address.city}`;

    return <P>{text}</P>;
};

const About = ({place}) => {

    return (
        <Container>
            <Box>
                <Carousel/>
                <H1>
                    {place.name}
                </H1>
                <Categories categories={place.categories}/>
                <Address address={place.address}/>
                <Statistics statistics={place.statistics}/>
            </Box>
        </Container>
    );
};

export default About;