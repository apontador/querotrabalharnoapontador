import React from 'react';
import {Container, List, Item, IconFone, IconAddress, IconHours} from 'styled/components/venue/venue.styled';
import {Box} from 'styled/app/styles.styled';
import {P} from 'styled/app/elements.styled';
import VMasker from 'vanilla-masker';

export default class Venue extends React.Component {

    render() {

        this.place = this.props.place;

        return (
            <Container>
                <Box>
                    <List>
                        <Item>
                            <IconFone/>
                            <P>{this.phones}</P>
                        </Item>
                        <Item>
                            <IconAddress/>
                            <P>{this.address}</P>
                        </Item>
                        <Item>
                            <IconHours/>
                            <P>{this.openingHours}</P>
                        </Item>
                    </List>
                </Box>
            </Container>
        );
    }

    get phones() {
        return this.place.phones.map(phone => VMasker.toPattern(phone, '99 (99) 9999-9999')).join(' / ');
    }

    get address() {

        const address = this.place.address;

        return `${address.street}, ${address.number}, ${address.complement}, ${address.district}`;
    }

    get openingHours() {

        const openingHours  = this.place.openingHours;
        const status = openingHours.openNow ? 'Aberto' : 'Fechado';
        const hours = '05:00 às 00:00'; // TODO: Me desculpam por isso, não sobrou tempo

        return `${status}: ${hours}`;
    }
}