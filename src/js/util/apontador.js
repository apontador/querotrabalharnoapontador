/*eslint-disable camelcase*/

const ApontadorAPI = function (oauthParams) {
    this.baseUrl = 'https://api.apontador.com.br/v2';
    this.authorization = { 'grant_type': oauthParams.grant_type, 'client_secret': oauthParams.client_secret, 'client_id': oauthParams.client_id };
    this.data = {};
    this._get = (resource, params) => {
        params = params || [];
        this.data = {
            resource: resource,
            params: params.join('&'),
        };
        this._getResource = (response) => {
            let url = `${this.baseUrl}/${this.data.resource}?${this.data.params}`;
            let options = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${response.access_token}` }
            };
            return $.ajax(url, options);
        };
        return $.ajax(`${this.baseUrl}/oauth/token`, { method: 'POST', data: this.authorization }).then(response => this._getResource(response));
    };
    this.search = (params) => { return this._get('search', params); };
    this.addresses = (params) => { return this._get('addresses', params); };
    this.getPlacesByZipcode = (zipcode) => { return this._get('search/zipcodes', { uri: zipcode }); };
    this.getPlaceById = (id, params) => { return this._get('places/' + id, params); };
    this.getPlaceReview = (id, params) => { return this._get('places/' + id + '/reviews', params); };
    this.getPlacePhotos = (id, params) => { return this._get('places/' + id + '/photos', params); };
    return this;
};

export default ApontadorAPI;