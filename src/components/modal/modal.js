import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Content, Close} from 'styled/components/modal/modal.styled';

class Modal extends React.Component {

    constructor() {

        super();

        this.handleKeyDown = this.onEscDown.bind(this);
    }

    render() {
        return (
            <Container>
                <Content width={this.props.width} height={this.props.height}>
                    <Close onClick={this.close.bind(this)}>&times;</Close>
                    {this.props.children}
                </Content>
            </Container>
        );
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    close() {
        ReactDOM.unmountComponentAtNode(document.getElementById('modalContainer'));
    }

    /**
     * Close the modal on Esc
     * @param event
     */
    onEscDown(event) {

        if (event.keyCode !== 27) {
            return;
        }

        this.close();
    }
}

export default Modal;