'use strict';
/* global angular, $http, topicType, apontadorConfig */
var localAPI = angular.module('localAPI', ['ngResource', 'appConfig', 'authServices']);

localAPI.service('localAPI', ['apontadorConfig', '$http', 'authServices', '$resource', function(apontadorConfig, $http, authServices, $resource){
    let url = apontadorConfig.endpoint;
    let api = {
        _local: $resource(url + '/places/:placeId', {placeId: '@placeId'}, {
            getLocalInfo: {
                url: url + '/places/:placeId?fl=*,openingHours,description',
                method: 'GET',
                headers: authServices.getHeaders()
            },
            getLocalPhotos: {
                url: url + '/places/:placeId/photos?start=:start',
                method: 'GET',
                headers: authServices.getHeaders()
            },
            getLocalAddresses: {
                url: url + '/addresses?q=:term',
                method: 'GET',
                headers: authServices.getHeaders()
            },
            getPlaces: {
                url: url + '/places/?fq=categories.category.subcategory.name::subcategory&fq=address.city:":city"&wt=json&rows=5&sort=statistics.rating desc,statistics.pageviews desc',
                method: 'GET',
                headers: authServices.getHeaders()
            },
            getReviews: {
                url: url + '/places/:placeId/reviews?start=:start&rows=:rows',
                method: 'GET',
                headers: authServices.getHeaders()
            }
        }),
        getLocalInfo: function(placeId) {
            console.log(authServices.getHeaders());
            return this._local.getLocalInfo({placeId: placeId});
        },
        getLocalPhotos: function(placeId, start) {
            return this._local.getLocalPhotos({placeId: placeId, start});
        },
        getLocalAddresses: function(term) {
            return this._local.getLocalAddresses({term: term});
        },
        getPlaces: function(subcategory, city) {
            return this._local.getPlaces({subcategory: subcategory, city:city});
        },
        getReviews: function(placeId, start, rows) {
            return this._local.getReviews({placeId: placeId, start:start, rows:rows});
        }
    };

    return api;
}]);
