/*
DIRETIVA PARA CRIAR O TEMPLATE DE SUGESTAO DE OUTRAS LOCALIDADES
*/
(function(){   
  'use strict';
  angular.module('catalogoApp').directive('widgetReviews', [function () {
	  return {
	    restrict: 'AE',
	    replace: true,
	    scope: {
	      content: '='      
	    },
	    templateUrl: 'widgets/reviews.html'
	  };
	}]);
})();