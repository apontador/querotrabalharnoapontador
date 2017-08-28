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


apontador.directive('modal', ['eventDispatcher', function (eventDispatcher) {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'assets/directives/modal.html',
        scope: {},
        link: function (scope, elm, attrs) {
            var options = {
                header: {
                    title: 'Modal'
                },
                footer: {
                    buttons: [],
                    style: ''
                },
                content: {},
                events: {
                    onBeforeHide: null,
                    onAfterHide: null,
                    onBeforeShow: null,
                    onAfterShow: null
                },
                options: {
                    style: 'width: 600px',
                    hideCloseButton: false,
                    noContent: false
                }
            };

            elm.on('hide.bs.modal', function (e) {
                if (scope.events && scope.events.onBeforeHide) {
                    scope.events.onBeforeHide();
                }
            });

            elm.on('hidden.bs.modal', function (e) {
                if (scope.events && scope.events.onAfterHide) {
                    scope.events.onAfterHide();
                }

                for (var s in scope) {
                    if (!/^\$/.test(s)) {
                        delete scope[s];
                    }
                }

                scope.$apply();
            });

            elm.on('show.bs.modal', function (e) {
                if (scope.events && scope.events.onBeforeShow) {
                    scope.events.onBeforeShow();
                }
            });
            elm.on('shown.bs.modal', function (e) {
                if (scope.events && scope.events.onAfterShow) {
                    scope.events.onAfterShow();
                }
            });

            var openModal = eventDispatcher.subscribe('betterModal.open', function (content) {
                //scope.$apply();
                angular.extend(scope, options, content);
                elm.modal('show');
            });

            var closeModal = eventDispatcher.subscribe('betterModal.close', function (content) {
                elm.modal('hide');
            });

            //Just update the model when jumping between modals as it is likely to have a returning action between them
            var changeModal = eventDispatcher.subscribe('betterModal.change', function (content) {
                angular.extend(scope, options, content);
            });

            elm.on('$destroy', function () {
                openModal.destroy();
                closeModal.destroy();
                changeModal.destroy();
            });
        }
    };
}]);
//Filters
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

//services

apontador.service('eventDispatcher', [
    function() {
        var eventSubscriptions = {};

        function Unsubscriber(eventName, callback) {
            this.destroy = function(){
                var subscribers = eventSubscriptions[eventName],
                    i;

                if (typeof subscribers === 'undefined') {
                    // No list found for this event, return early to abort execution
                    return;
                }

                for (i = subscribers.length - 1; i >= 0; i--) {
                    if (subscribers[i] === callback) {
                        subscribers.splice(i, 1);
                    }
                }
            };
        }

        var eventDispatcher = {
            subscribe: function(eventName, callback) {
                // Retrieve a list of current subscribers for eventName (if any)
                var subscribers = eventSubscriptions[eventName];

                if (typeof subscribers === 'undefined') {
                    // If no subscribers for this event were found,
                    // initialize a new empty array
                    subscribers = eventSubscriptions[eventName] = [];
                }

                // Add the given callback function to the end of the array with
                // eventSubscriptions for this event.
                subscribers.push(callback);
                return new Unsubscriber(eventName, callback);
            },

            unsubscribe: function(eventName, callback) {
                var subscribers = eventSubscriptions[eventName],
                    i;

                if (typeof subscribers === 'undefined') {
                    // No list found for this event, return early to abort execution
                    return;
                }

                for (i = subscribers.length - 1; i >= 0; i--) {
                    if (subscribers[i] === callback) {
                        subscribers.splice(i, 1);
                    }
                }
            },

            trigger: function(eventName, data, context) {
                var subscribers = eventSubscriptions[eventName],
                    i;

                if (typeof subscribers === 'undefined') {
                    // No list found for this event, return early to abort execution
                    return;
                }

                // Ensure data is an array or is wrapped in an array,
                // for Function.prototype.apply use
                data = (data instanceof Array) ? data : [data];

                // Set a default value for `this` in the callback
                context = context || this.caller;

                for (i = subscribers.length - 1; i >= 0; i--) {
                    subscribers[i].apply(context, data);
                }
            }
        };

        return eventDispatcher;

    }
]);
