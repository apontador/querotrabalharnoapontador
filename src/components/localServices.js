'use strict';
/* global angular */
var localServices = angular.module('localServices', ['appConfig', 'localAPI']);

localServices.service('localServices', ['localAPI', function (localAPI) {
  this.getLocalInfo = function (placeId) {

    return localAPI.getLocalInfo(placeId);
  };

  this.getLocalPhotos = function (placeId, start) {

    return localAPI.getLocalPhotos(placeId, start);
  };

  this.getLocalAddresses = function (term) {

    return localAPI.getLocalAddresses(term);
  };

  this.getPlaces = function (subcategory, city) {

    return localAPI.getPlaces(subcategory, city);
  };

  this.getReviews = function (placeId, start, rows) {

    return localAPI.getReviews(placeId, start, rows);
  };
}]);
