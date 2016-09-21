(function(){   
  'use strict';

  angular.module('catalogoApp').factory('photosAPIServices', [ '$http', function ($http) {
    delete $http.defaults.headers.common['X-Requested-With'];
    return{
      place: function(place){
        return $http({
          method: 'GET',
          params: {
            'access_token': '25c9d5ff-6ce0-40b4-ba0f-3dc6f8fc9cd4'
          },
          url: 'https://api.apontador.com.br/v2/places/'+place+'/photos',
          withCredentials: true
        });      
      }    
    };
  }]);
})();