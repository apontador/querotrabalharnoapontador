import React from 'react';
import ReactDOM from 'react-dom';
import ApontadorService from 'services/apontador.service';
import {Container} from 'styled/components/carousel/carousel.styled';
import NavArrow from 'components/carousel/navArrow';
import Modal from 'components/modal/modal';
import ModalContentImage from 'components/modal-content-image/modal-content-image';
import proportionalSize from 'helpers/proportionalSize.helper';
import Gallery from 'components/gallery/gallery';

const navDistance = 200;

export default class Carousel extends React.Component {

    constructor() {

        super();

        this.apontadorService = new ApontadorService();

        // Armazena a posição X atual do carousel
        this.translateX = 0;
    }

    render() {

        return (
            <Container marginBottom={this.props.marginBottom}>
                <NavArrow left onClick={this.move.bind(this, 'prev')}/>
                <Gallery carousel ref={elem => this.gallery = elem}/>
                <NavArrow onClick={this.move.bind(this, 'next')}/>
            </Container>
        );
    }

    /**
     * Move o carousel de acordo com o lado passado
     * @param direction
     */
    move(direction) {

        const imageSize    = this.gallery.$list.querySelector('.gallery__image').offsetWidth;
        const imagesLength = this.gallery.$list.querySelectorAll('.gallery__image').length;
        const jump         = direction === 'next' ? -navDistance : navDistance;
        const distance     = this.translateX + jump;
        const maxDistance  = -(imagesLength * imageSize) + this.gallery.$list.offsetWidth - 45;

        let finalDistance;

        // Evita que mova o carousel para trás da primeira foto
        if (direction === 'prev') {
            finalDistance = Math.min(0, distance);
        }

        // Evita que mova o carousel além da última foto
        if (direction === 'next') {
            finalDistance = Math.max(distance, maxDistance);
        }

        this.translateX                    = finalDistance;
        this.gallery.$list.style.transform = `translateX(${this.translateX}px)`;
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