(function(){   
  'use strict';

  angular.module('catalogoApp').factory('addressesAPIServices', [ '$http', function ($http) {
    delete $http.defaults.headers.common['X-Requested-With'];
    return{
      address: function(state, termo){
        return $http({
          method: 'GET',
          params: {
            'access_token': 'a4103524-0ea2-46ec-80ff-94864d7a28a6',
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