import React from 'react';
import {Box} from 'styled/app/styles.styled';
import {Container} from 'styled/components/navigation/navigation.styled';
import Tabs from 'components/tabs/tabs';
import Evaluation from 'components/navigation/evaluation';
import Photos from 'components/navigation/photos';

export default class Navigation extends React.Component {

    get tabs() {

        return [
            {
                name: 'Avaliações',
                target: 'evaluation',
                active: true,
            },
            {
                name: 'Fotos',
                target: 'photos'
            }
        ];
    }

    render() {

        return (
            <Container>
                <Box>
                    <Tabs tabs={this.tabs}/>
                    <Evaluation/>
                    <Photos/>
                </Box>
            </Container>
        );
    }
}