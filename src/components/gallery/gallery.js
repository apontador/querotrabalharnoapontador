import React from 'react';
import ReactDOM from 'react-dom';
import {Container, List, Item, Content, Image} from 'styled/components/gallery/gallery.styled';
import ApontadorService from 'services/apontador.service';
import Modal from 'components/modal/modal';
import ModalContentImage from 'components/modal-content-image/modal-content-image';
import proportionalSize from 'helpers/proportionalSize/proportionalSize.helper';

export default class Gallery extends React.Component {

    constructor() {

        super();

        this.apontadorService = new ApontadorService();
    }

    render() {

        return (
            <Container carousel={this.props.carousel} className="gallery">
                <List innerRef={elem => this.$list = elem} className="gallery__list">
                    {this.props.photos.map(photo => (
                        <Item key={photo.id} onClick={this.openModal.bind(this, photo)} className="gallery__item">
                            <Content className="gallery__content">
                                <Image background={photo.medium} className="gallery__image"/>
                            </Content>
                        </Item>
                    ))}
                </List>
            </Container>
        );
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