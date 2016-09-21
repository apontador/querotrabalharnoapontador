
(function(){   
  'use strict';

  angular.module('catalogoApp', [
      'ngResource',
      'ngSanitize',
      'ngRoute',
      'ngAnimate',
      'ui.bootstrap',
      'ngCookies'
  ]).config(['$routeProvider', function ($routeProvider) {
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

})();
