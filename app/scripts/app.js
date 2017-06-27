
(function(){   
  'use strict';

  angular.module('app', ['catalogoApp']);

  angular.module('catalogoApp', [
    'ngResource',
      'ngSanitize',
      'ngRoute',
      'ngAnimate',
      'ui.bootstrap',
      'ngCookies',
  ]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './views/detalhe.html',
        controller: 'DetalheController',
        requiresAuth: false,
        label: 'Detalhe do produto'
      })
      .otherwise({
        templateUrl:'/404.html',
        requiresAuth: false,
        label: '404'
      });    
  }]);
  
})();
