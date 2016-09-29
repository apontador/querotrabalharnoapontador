(function(){   
  'use strict';

  angular.module('catalogoApp').factory('placeAPIServices', ['$http', function ($http) {
    delete $http.defaults.headers.common['X-Requested-With'];
    return{
      place: function(place){
        return $http({
          method: 'GET',
          params: {
            'access_token': '5a3e7dd1-c07e-4949-8450-1fdec266731e',
            'wt':'json',
            'fl':'*,openingHours'
          },
          url: 'https://api.apontador.com.br/v2/places/'+place,
          withCredentials: true
        });
      }
    };   
  }]);
})();