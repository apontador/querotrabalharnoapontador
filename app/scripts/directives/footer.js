(function(){   
  'use strict';
  angular.module('catalogoApp').directive('appFooter', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'partials/footer.html'
    };
  });
})();