/*
DIRETIVA PARA CRIAR O TEMPLATE DE SUGESTAO DE OUTRAS LOCALIDADES
*/
(function(){   
  'use strict';
  angular.module('catalogoApp').directive('widgetReviewsStars', [function () {
    return {
      restrict: 'AE',
      replace: true,
      scope: {
        content: '=',
        total: '=',
        data: '='   
      },
      templateUrl: 'widgets/reviews-stars.html'
    };
  }]);
})();