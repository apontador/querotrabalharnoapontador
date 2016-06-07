/*eslint-disable camelcase*/

const ApontadorAPI = function (oauthParams) {
    this.baseUrl = 'https://api.apontador.com.br/v2';
    this.authorization = { 'grant_type': oauthParams.grant_type, 'client_secret': oauthParams.client_secret, 'client_id': oauthParams.client_id };
    this.data = {};
    this._get = (resource, params, callback) => {
        params = params || [];
        this.data = { resource: resource, params: params.join('&') };
        this.options = { method: 'POST', data: this.authorization };
        return $.ajax(`${this.baseUrl}/oauth/token`, this.options)
            .then(response => callback(response));
    };
    this._getResource = (response) => {
        let url = `${this.baseUrl}/${this.data.resource}?${this.data.params}`;
        let options = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${response.access_token}` }
        };
        return $.ajax(url, options);
    };
    this._linkResource = (url) => {
        let options = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${response.access_token}` }
        };
        return $.ajax(url, options);
    };
    this.search = (params) => { return this._get('search', params, this._getResource); };
    this.addresses = (params) => { return this._get('addresses', params, this._getResource); };
    this.getPlacesByZipcode = (zipcode) => { return this._get('search/zipcodes', { uri: zipcode }, this._getResource); };
    this.getPlaceById = (id, params) => { return this._get('places/' + id, params, this._getResource); };
    this.getPlaceReview = (id, params) => { return this._get('places/' + id + '/reviews', params, this._getResource); };
    this.getPlacePhotos = (id, params) => { return this._get('places/' + id + '/photos', params, this._getResource); };
    this.link = (url) => { return this._get(url, {}, this._linkResource); };
    return this;
};

export default ApontadorAPI;