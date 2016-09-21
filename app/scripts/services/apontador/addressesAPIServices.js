(function(){   
  'use strict';

  angular.module('catalogoApp').factory('addressesAPIServices', [ '$http', function ($http) {
    delete $http.defaults.headers.common['X-Requested-With'];
    return{
      address: function(state, termo){
        return $http({
          method: 'GET',
          params: {
            'access_token': '25c9d5ff-6ce0-40b4-ba0f-3dc6f8fc9cd4',
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