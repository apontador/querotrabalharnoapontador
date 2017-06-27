(function(){   
  'use strict';
  // Directive for Header
  angular.module('catalogoApp').directive('appHeader', [function() {
    return {
      restrict: 'AE',
      replace: true,
      templateUrl: 'partials/header.html',
      link: function(scope){

        scope.clickOpenDropMenu = function(){
          scope.openDropMenu = (scope.openDropMenu ? false : true);
        };

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
})();