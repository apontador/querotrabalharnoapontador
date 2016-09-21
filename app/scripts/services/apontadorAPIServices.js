/*global services*/

'use strict';

services.factory('apontadorAPIServices', [ '$http', function ($http) {
  delete $http.defaults.headers.common['X-Requested-With'];
  var token = 'a4103524-0ea2-46ec-80ff-94864d7a28a6';
  return{
    places: function(place){
      return $http({
        method: 'GET',
        params: {
          access_token: token,
          wt:'json',
          fl:'*,openingHours'
        },
        url: 'https://api.apontador.com.br/v2/places/'+place,
        withCredentials: true
      });
    },
    addresses: function(state, termo){
      return $http({
        method: 'GET',
        params: {
          access_token: token,
          q: termo,
          fl:'description',
          fq: 'state:'+state
        },
          url: 'https://api.apontador.com.br/v2/addresses',
        withCredentials: true
      });
    },
    placePhotos: function(place){
      return $http({
        method: 'GET',
        params: {
          access_token: token
        },
        url: 'https://api.apontador.com.br/v2/places/'+place+'/photos',
        withCredentials: true
      });      
    },
    placeReviews: function(place) {
      return $http({
        method: 'GET',
        params: {
          access_token: token
        },
        url: 'https://api.apontador.com.br/v2/places/'+place+'/reviews',
        withCredentials: true
      });
    },
    placeMap: function(place, width, heigth) {
      return 'http://widget.maplink.com.br:80/WidGetGenerator/PoiWidgets?placeid='+place.id
      +'&w='+width
      +'&h='+heigth
      +'&z=16'
      +'&lat='+place.location.lat
      +'&lng='+place.location.lng
      +'&maptip=no&zcontrol=big&mcontrol=yes;'
      +'dn='+place.name;
    }    
  }
}]);
