'use strict';
/* global angular, confirm */

var local = angular.module('local', ['ngRoute', 'appConfig', 'localServices']);

local.config(['$routeProvider', '$httpProvider',
    function($routeProvider, $httpProvider) {
        $httpProvider.defaults.withCredentials = false;

        $routeProvider
            .when('/local', {
                templateUrl: 'components/local.html',
                controller: 'localController'
            });
    }
]);


/************************************************************************************************
 * Controllers
 ************************************************************************************************/

local.controller('localController', ['$scope', '$rootScope', 'apontadorConfig', 'localServices', 'authServices',
    function($scope, $rootScope, apontadorConfig, localServices, authServices ) {
        console.log('teste');
        $scope.placeId = apontadorConfig.place_id;
        $scope.w = window.innerWidth;
        $scope.h = window.innerHeight;

        if (authServices.getAccessToken()) {
            localServices.getLocalInfo($scope.placeId).$promise.then( function (data) {
                console.log(data.place);
                $scope.place = data.place;
                $scope.mapUrl = 'https://widget.maplink.com.br/WidGetGenerator/?v=4.1&lat=' + data.place.location.lat + '&lng=' + data.place.location.lng + '&w=300&h=200&m=400&image=http://static.portal.maplink.com.br/images/markers/marker_apontador_map.png&count=0';

                localServices.getLocalPhotos($scope.placeId, 10).$promise.then( function(photoData) {
                    $scope.placePhotos = photoData.photoResults;
                    $scope.photos = photoData.photoResults.photos.slice(0,5);
                    $scope.imageSelected = photoData.photoResults.photos[0];
                    console.log(photoData);
                });

                localServices.getPlaces($scope.place.categories[0].subcategory.vanityName, $scope.place.address.city).$promise.then( function(places) {
                    console.log(places);
                });
            });
        } else {
            window.href = '/';
        }

        $scope.selectImage = function (img) {
            $scope.imageSelected = img;
        };
    }
]);

/************************************************************************************************
 * Directives
 ************************************************************************************************/

local.directive('localDetails', ['$routeParams', '$location', function ($routeParams, $location) {
    // Runs during compile
    return {
        restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
        templateUrl: 'components/partials/localDetails.html',
        replace: true,
        link: function ($scope, iElm, iAttrs, controller) {
            console.log($scope.placeId);
        }
    };
}]);

local.directive('localPhotos', ['$routeParams', '$location', function ($routeParams, $location) {
    // Runs during compile
    return {
        restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
        templateUrl: 'components/partials/localPhotos.html',
        replace: true,
        link: function ($scope, iElm, iAttrs, controller) {
            console.log($scope.placeId);
        }
    };
}]);
