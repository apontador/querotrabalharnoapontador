import request from 'helpers/request.helper';

const access_key = 'db498fc6-ce29-482f-b4a9-ee17eae3559c';

let instance = null;

export default class ApontadorService {

    constructor() {

        if (!instance) {
            instance = this;
        }

        // Cria um singleton da classe
        return instance;
    }

    /**
     * Retorna o header para acesso a API
     * @returns {*}
     */
    get accessHeaders() {

        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_key}`
        };
    }

    /**
     * Retorna as fotos do local passado por parâmetro
     * @param placeId
     * @returns {*}
     */
    getPlacePhotos(placeId = 'B37822W2') {

        const params = {
            url: `https://api.apontador.com.br/v2/places/${placeId}/photos`,
            method: 'GET',
            headers: this.accessHeaders
        };

        return request(params);
    }

    getPlaceInfo(placeId = 'B37822W2') {

        const params = {
            url: `https://api.apontador.com.br/v2/places/${placeId}?fl=*,openingHours`,
            method: 'GET',
            headers: this.accessHeaders
        };

        return request(params);
    }
}