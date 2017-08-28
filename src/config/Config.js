'use strict';

var appConfig = angular.module('appConfig', []);

appConfig.constant('basePath', '');

appConfig.constant('apontadorConfig', {
    endpoint: 'https://api.apontador.com.br/v2',
    place_id: 'B37822W2',
    authentication: this.endpoint + '/oauth/token',
    client_id: 'testefront',
    secret_id: 'jO98nsGN6rXlmWXKKxnwS9NogdD~',
    access_token: '7edbfc2f-cf55-4364-bc43-211201165721'
});
