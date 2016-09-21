/*
DIRETIVA PARA CRIAR O TEMPLATE DE SUGESTAO DE OUTRAS LOCALIDADES
*/
app.directive('widgetReviews', [function () {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      content: '='      
    },
    templateUrl: 'widgets/reviews.html'
  };
}]);