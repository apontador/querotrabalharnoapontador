import React from 'react';
import About from 'components/about/about';
import Info from 'components/info/info';
import Navigation from 'components/navigation/navigation';
import ApontadorService from 'services/apontador.service';
import {Container} from 'styled/scenes/home/home.styled';

export default class Home extends React.Component {

    constructor() {

        super();

        this.apontadorService = new ApontadorService();

        this.state = {
            photos: [],
            place: {
                address: {},
                categories: [],
                statistics: {},
                phones: [],
                openingHours: {}
            }
        };
    }

    /**
     * Gera o access_key, busca os dados na api e manda para os componentes
     */
    componentWillMount() {

        this.apontadorService.setAccessKey().then(() => {
            this.getInfo();
            this.getPhotos();
        });
    }

    render() {

        return (
            <main>
                <About {...this.state}/>
                <Container>
                    <Info place={this.state.place}/>
                    <Navigation photos={this.state.photos}/>
                </Container>
                <div id="modalContainer"></div>
            </main>
        );
    }

    /**
     * Busca as informações do local
     * @returns {*}
     */
    getInfo() {

        return this.apontadorService.getPlaceInfo().then(response => {
            console.log(response);
            this.setState({
                place: response.place
            });
        });
    }

    /**
     * Armazena a lista de fotos do local
     * @returns {*}
     */
    getPhotos() {

        return this.apontadorService.getPlacePhotos().then(response => {
            this.setState({
                photos: response.photoResults.photos
            });
        });
    }
}
