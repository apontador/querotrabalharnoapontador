'use strict';
/* global angular */

var apontador = angular.module('apontador');

apontador.directive('pageHeader', ['$rootScope', '$location',  function ( $rootScope, $location) {
    return {
        restrict: 'E',
        templateUrl:  'assets/directives/header.html',
        replace: true,
        link: function (scope, iElm, iAttrs, controller) {
        }
    };
}]);

apontador.directive('pageFooter', ['$rootScope', '$location',  function ( $rootScope, $location) {
    return {
        restrict: 'E',
        templateUrl:  'assets/directives/footer.html',
        replace: true,
        link: function (scope, iElm, iAttrs, controller) {
        }
    };
}]);

apontador.directive('starRating', function(){
    return {
        restrict: 'E',
        templateUrl:  'assets/directives/star-rating.html',
        replace: true,
        scope: { rating: '=' },
        link: function(scope, element, attrs){
            if (scope.rating) {
                scope.ratingCalculated = ((scope.rating*100)/5).toFixed(2);
            } else {
                scope.ratingCalculated = 0;
            }
        }
    };
});

apontador.directive('tooltip', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            $(element).hover(function(){
                // on mouseenter
                $(element).tooltip('show');
            }, function(){
                // on mouseleave
                $(element).tooltip('hide');
            });
        }
    };
});

apontador.filter('phoneformat', function () {
    return function (phone) {
        if (!phone) { return ''; }

        var value = phone.toString().trim().replace(/^\+/, '');

        if (value.match(/[^0-9]/)) {
            return phone;
        }

        var country, city, number;

        switch (value.length) {
            case 10:
                country = 55;
                city = value.slice(0, 2);
                number = value.slice(2);
                break;

            case 11:
                country = value[0];
                city = value.slice(1, 3);
                number = value.slice(3);
                break;

            case 12:
                country = value.slice(0, 2);
                city = value.slice(2, 4);
                number = value.slice(4);
                break;

            default:
                return phone;
        }

        number = number.slice(0, 4) + '-' + number.slice(4);

        return (country + " (" + city + ") " + number).trim();
    };
});
