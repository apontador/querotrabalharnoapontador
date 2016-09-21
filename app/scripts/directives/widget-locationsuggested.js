/*
DIRETIVA PARA CRIAR O TEMPLATE DE SUGESTAO DE OUTRAS LOCALIDADES
*/
app.directive('widgetLocationsuggested', [function () {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      content: '='      
    },
    templateUrl: 'widgets/locationsuggested.html'
  };
}]);