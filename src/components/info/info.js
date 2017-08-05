import React from 'react';
import Carousel from 'components/carousel/carousel';
import {Box, Row} from 'styled/app/styles.styled';
import {H1} from 'styled/app/headers.styled';

export default class Info extends React.Component {

    render() {

        return(
            <Row>
                <Box>
                    <Carousel/>
                    <H1>Parque do Ibirapuera</H1>
                    <span>Testando a fonte e tal</span>
                </Box>
            </Row>
        );
    }
}