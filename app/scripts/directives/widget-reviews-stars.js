/*
DIRETIVA PARA CRIAR O TEMPLATE DE SUGESTAO DE OUTRAS LOCALIDADES
*/
app.directive('widgetReviewsStars', [function () {
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