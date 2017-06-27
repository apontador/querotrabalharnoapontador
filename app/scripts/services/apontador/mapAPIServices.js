(function(){   
  'use strict';

  angular.module('catalogoApp').factory('mapAPIServices', [function () {
    return{
      map: function(place, width, heigth) {
        return 'http://widget.maplink.com.br:80/WidGetGenerator/PoiWidgets?placeid='+place.id +
        '&w='+width +
        '&h='+heigth +
        '&z=16' +
        '&lat='+place.location.lat +
        '&lng='+place.location.lng +
        '&maptip=no&zcontrol=big&mcontrol=yes;' +
        'dn='+place.name;
      }    
    };
  }]);
})();