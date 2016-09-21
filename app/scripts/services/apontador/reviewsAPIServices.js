(function(){   
  'use strict';

  angular.module('catalogoApp').factory('reviewsAPIServices', [ '$http', function ($http) {
    delete $http.defaults.headers.common['X-Requested-With'];
    return{      
      place: function(place) {
        return $http({
          method: 'GET',
          params: {
            'access_token': 'a4103524-0ea2-46ec-80ff-94864d7a28a6'
          },
          url: 'https://api.apontador.com.br/v2/places/'+place+'/reviews',
          withCredentials: true
        });
      }    
    }
  }]);
})();