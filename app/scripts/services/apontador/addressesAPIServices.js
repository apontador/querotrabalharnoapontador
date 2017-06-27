(function(){   
  'use strict';

  angular.module('catalogoApp').factory('addressesAPIServices', [ '$http', function ($http) {
    delete $http.defaults.headers.common['X-Requested-With'];
    return{
      address: function(state, termo){
        return $http({
          method: 'GET',
          params: {
            'access_token': '5a3e7dd1-c07e-4949-8450-1fdec266731e',
            'q': termo,
            'fl':'description',
            'fq': 'state:'+state
          },
          url: 'https://api.apontador.com.br/v2/addresses',
          withCredentials: true
        });
      }   
    };
  }]);
})();