/*global app*/
'use strict';


// Directive for Header
app.directive('appHeader', [function() {
  return {
    restrict: 'AE',
    replace: true,
    templateUrl: 'partials/header.html',
    link: function(scope){

      //LINGUAGEM {INCIO}
      scope.languages = [
        {title: 'Português',  image: 'https://aplocalapp.apontador-assets.com/apps/localizationmenu2/files/br.png'},
        {title: 'Inglês',     image: 'https://aplocalapp.apontador-assets.com/apps/localizationmenu2/files/us.png'},
        {title: 'Espanhol',   image: 'https://aplocalapp.apontador-assets.com/apps/localizationmenu2/files/es.png'}
      ];
      scope.selectedLanguage = scope.languages[0];

      scope.setLanguage = function(language){
        scope.selectedLanguage = language;
      };
      //LINGUAGEM {FIM}
    }
  };
}]);


// Directive for Footer
app.directive('appFooter', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'partials/footer.html'
  };
});

app.directive('messages', function() {
  return {
    controller: '',
    restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
    templateUrl: 'partials/messages.html'
  };
});

app.directive('breadcrumb', function() {
  return {
    controller: '',
    restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
    replace: true,
    templateUrl: 'partials/breadcrumb.html'
  };
});