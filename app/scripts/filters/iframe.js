
//IFRAME
(function(){   
  'use strict';

  angular.module('catalogoApp').filter('trustAsResourceUrl', ['$sce', function($sce) {
      return function(val) {
          return $sce.trustAsResourceUrl(val);
      };
  }]);
})();