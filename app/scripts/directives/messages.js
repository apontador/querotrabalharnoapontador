(function(){   
  'use strict';
  angular.module('catalogoApp').directive('messages', ['Alert', function(Alert) {
    return {
      controller: '',
      restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
      templateUrl: 'partials/messages.html',
      link: function(scope){
        scope.remove = function(msg){
          Alert.remove(msg);          
        };
      }
    };
  }]);
})();