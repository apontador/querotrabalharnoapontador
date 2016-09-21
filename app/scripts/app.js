
'use strict';

var app,
    services, util;

app = angular.module('catalogoApp', [
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'ui.bootstrap',
    'catalogoApp.services',    
]);
services = angular.module('catalogoApp.services', ['ngCookies']);

app.config(['$routeProvider', function ($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: './views/detalhe.html',
      controller: 'DetalheController',
      requiresAuth: false,
      label: 'Redirect'
    })
    .otherwise({
      templateUrl:'/404.html',
      requiresAuth: false,
      label: '404'
    });    
}]);