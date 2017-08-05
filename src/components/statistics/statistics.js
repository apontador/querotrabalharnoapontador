import React from 'react';
import {Container, Rating, Rate, Reviews, Voting, Votes} from 'styled/components/statistics/statistics.styled';

const Statistics = ({statistics}) => {
    return (
        <Container>
            <Rating>
                <Rate rate={statistics.rating}>{statistics.rating}</Rate>
                <Reviews>
                    <span className="statistics__totalreviews">{statistics.reviews}</span>
                    <span className="statistics__reviewtext">avaliações</span>
                </Reviews>
            </Rating>
            <Voting>
                <Votes vote="up"/>
                <Votes vote="down"/>
            </Voting>
        </Container>
    );
};

export default Statistics;