'use strict';
/* global angular */
var authServicesModule = angular.module('authServices', ['appConfig']);

authServicesModule.service('authServices', [ '$location','$http', 'authAPI', function($location,$http,authAPI ) {
    var _OAuth = {};
    var authServices = {

        authentication: function() {
            var self = this;
            var promise = authAPI.authentication();
            promise.success(function(data) {
                //eventDispatcher.trigger('Auth.LoggedIn');

                $.removeCookie('access_token', { path: '/' });

                var date = new Date(data.expires_in);
                $.cookie('access_token', data.access_token, { expires: date, path: '/' });
                _OAuth.accessToken= data.access_token.replace(/"/g, '');
                $http.defaults.transformRequest.push( function(data, headersGetter){
                    if ( self.hasAccessToken() ) {
                        headersGetter().Authorization = 'Bearer ' + self.getAccessToken();
                    }
                    return data;
                } );
            });
            promise.error( function( data ){
                console.log(data);
            } );
            return promise;

        },

        getAccessToken: function() {
            return _OAuth.accessToken;
        },

        hasAccessToken: function() {
            return angular.isDefined(_OAuth.accessToken);
        },

        getHeaders: function () {
            return { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + authServices.getAccessToken(), 'Accept': 'application/json' };
        }
    };

    if( $.cookie('access_token') ) {
        _OAuth.accessToken = $.cookie('access_token').replace(/"/g, '');
    }

    $http.defaults.transformRequest.push( function(data, headersGetter){
        if ( authServices.hasAccessToken() ) {
            headersGetter().Authorization = 'Bearer ' + authServices.getAccessToken();
        }
        return data;
    } );

    return authServices;
}]);

authServicesModule.service('authAPI',['$http', 'apontadorConfig', function ($http, apontadorConfig) {
    var authAPI = {
        authentication: function(){
            var obj = {
                client_secret: apontadorConfig.secret_id,
                client_id: apontadorConfig.client_id,
                grant_type: 'client_credentials'
            };

            var config = {
                url: apontadorConfig.endpoint + '/oauth/token?' + 'client_id=' + obj.client_id + '&client_secret=' + obj.client_secret + '&grant_type=' + obj.grant_type,
                method: 'POST',
                withCredentials: false,
                transformRequest: function(obj) {
                    var str = [];
                    for(var p in obj) {
                        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
                    }
                    return str.join('&');
                },
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'
                }
            };
            return $http(config);
        },
    };
    return authAPI;
}]);
