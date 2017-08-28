'use strict';
/* global angular, confirm */

var apontador = angular.module('apontador', [
  'ngRoute',
  'compiledTemplates',
  'local',
  'appConfig',
  'authServices'
]);

apontador.config(['$routeProvider', '$httpProvider', '$sceDelegateProvider',
    function($routeProvider, $httpProvider, $sceDelegateProvider) {
      $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://www.apontador.com.br/**'
      ]);
    }
]);

apontador.run(['$rootScope', '$location', 'authServices', function($rootScope, $location, authServices) {
  var $promise = authServices.authentication();

  $promise.then( function () {
      $location.path('/local');
  }).catch( function(error) {
      console.log(error);
  });
}]);
