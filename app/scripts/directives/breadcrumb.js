(function(){   
  'use strict';
  angular.module('catalogoApp').directive('breadcrumb', function() {
    return {
      controller: '',
      restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
      replace: true,
      templateUrl: 'partials/breadcrumb.html'
    };
  });
})();