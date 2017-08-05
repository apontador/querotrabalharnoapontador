import React from 'react';
import ReactDOM from 'react-dom';
import ApontadorService from 'services/apontador.service';
import {Container, List, Item, Content, Image} from 'styled/components/carousel/carousel.styled';
import NavArrow from 'components/carousel/navArrow';
import Modal from 'components/modal/modal';
import ModalContentImage from 'components/modal-content-image/modal-content-image';
import proportionalSize from 'helpers/proportionalSize.helper';

const navDistance = 200;
const photoSize   = 100;

export default class Carousel extends React.Component {

    constructor() {

        super();

        this.apontadorService = new ApontadorService();

        this.state = {
            photos: []
        };

        // Armazena a posição X atual do carousel
        this.translateX = 0;
    }

    componentWillMount() {

        this.getPhotos();
    }

    render() {

        return (
            <Container>
                <NavArrow left onClick={this.move.bind(this, 'prev')}/>
                <List innerRef={elem => this.$list = elem}>
                    {this.state.photos.map(photo => (
                        <Item key={photo.id} onClick={this.openModal.bind(this, photo)}>
                            <Content>
                                <Image background={photo.small}/>
                            </Content>
                        </Item>
                    ))}
                </List>
                <NavArrow onClick={this.move.bind(this, 'next')}/>
            </Container>
        );
    }

    /**
     * Armazena a lista de fotos do local
     * @returns {*}
     */
    getPhotos() {

        return this.apontadorService.getPlacePhotos().then(response => {
            console.log(response);
            this.setState({
                photos: response.photoResults.photos
            });
        });
    }

    /**
     * Move o carousel de acordo com o lado passado
     * @param direction
     */
    move(direction) {

        const jump        = direction === 'next' ? -navDistance : navDistance;
        const distance    = this.translateX + jump;
        const maxDistance = -(this.state.photos.length * photoSize) + this.$list.offsetWidth - 45;

        let finalDistance;

        // Evita que mova o carousel para trás da primeira foto
        if (direction === 'prev') {
            finalDistance = Math.min(0, distance);
        }

        // Evita que mova o carousel além da última foto
        if (direction === 'next') {
            finalDistance = Math.max(distance, maxDistance);
        }

        this.translateX            = finalDistance;
        this.$list.style.transform = `translateX(${this.translateX}px)`;
    }

    /**
     * Abre o modal com a imagem maior
     * @param photo
     */
    openModal(photo) {

        const size = proportionalSize(640, 480, window.innerWidth - 20);

        ReactDOM.render(
            <Modal width={size.width} height={size.height}>
                <ModalContentImage photo={photo}/>
            </Modal>,
            document.getElementById('modalContainer')
        );
    }
}