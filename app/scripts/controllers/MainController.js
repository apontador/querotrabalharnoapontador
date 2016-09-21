(function(){ 
 	'use strict';

	angular.module('catalogoApp').controller('MainController', ['$scope', 'Alert', function ($scope, Alert) {
		$scope.allInfos = Alert.allInfos;
		Alert.clearMessage();
	}]);

})();