app.factory("apiApontador", function ($http, config) {
	
	var _getApiApontador = function (endPoint, token){

		var configGet = {
			method: 'GET',
			headers: {
				'Authorization': token,
				'Accept': 'application/json',
				'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
			}
		};		
		return $http.get(config.baseUrl + endPoint, configGet);
	}	

	var _authToken = function () {
		return $http.post(config.postAuth);
	};

	return {
		getApiApontador:  _getApiApontador,
		authToken: _authToken
	};
});