app.config(function($routeProvider, $locationProvider) {
	
	$routeProvider
		.when("/", {
	        templateUrl : "/view/info.html"
			
	    })
	    .when("/local/:placeId/", {
	        templateUrl : "/view/local/local-template.html",
	        controller:   "localCtrl",
	     })
	    .otherwise({
        	templateUrl: '/view/info.html'
		});
});