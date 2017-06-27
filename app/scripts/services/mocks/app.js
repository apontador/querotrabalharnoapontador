(function(){   
  'use strict';
  
  angular.module('app', ['catalogoApp', 'mockServices']);

  angular.module('mockServices', ['ngMockE2E']).run(function($httpBackend) {    
      $httpBackend.whenGET(/views\/.*/).passThrough();
      $httpBackend.whenGET(/partials\/.*/).passThrough();
      $httpBackend.whenGET(/widgets\/.*/).passThrough();      
  });
  
})();