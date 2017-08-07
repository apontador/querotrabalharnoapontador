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
            place: {
                address: {},
                categories: [],
                statistics: {},
                phones: [],
                openingHours: {}
            }
        };
    }

    componentWillMount() {
        this.getInfo();
    }

    render() {

        return (
            <main>
                <About place={this.state.place}/>
                <Container>
                    <Info place={this.state.place}/>
                    <Navigation/>
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
}
