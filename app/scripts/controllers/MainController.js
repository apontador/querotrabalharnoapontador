/*global app*/

'use strict';

app.controller('MainController', ['$scope', 'Alert', function ($scope, Alert) {
	$scope.allInfos = Alert.allInfos;
	Alert.clearMessage();
}]);
