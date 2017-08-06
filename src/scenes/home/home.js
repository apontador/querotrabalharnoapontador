import React from 'react';
import About from 'components/about/about';
import Venue from 'components/venue/venue';
import ApontadorService from 'services/apontador.service';

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
                <Venue place={this.state.place}/>
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
