/*global services*/

'use strict';

services.factory('apontadorAPIServices', [ '$http', function ($http) {
  delete $http.defaults.headers.common['X-Requested-With'];
  return{
    places: function(place){
      return $http({
        method: 'GET',
        params: {
          access_token: '2624b3aa-84f5-4f78-b1fb-7f013017af73',
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
          access_token: '2624b3aa-84f5-4f78-b1fb-7f013017af73',
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
          access_token: '2624b3aa-84f5-4f78-b1fb-7f013017af73'          
        },
        url: 'https://api.apontador.com.br/v2/places/'+place+'/photos',
        withCredentials: true
      });      
    },
    placeReviews: function(place) {
      return $http({
        method: 'GET',
        params: {
          access_token: '2624b3aa-84f5-4f78-b1fb-7f013017af73'
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
