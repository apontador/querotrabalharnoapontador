/*global app*/

'use strict';

app.controller('DetalheController', ['$scope', '$location', '$filter', 'apontadorAPIServices', 'Alert', function ($scope, $location, $filter, apontadorAPIServices, Alert) {

	$scope.breadcrumbs = [
		{title: 'Apontador', link:''},
		{title: 'São Paulo', link:''},
		{title: 'Entreterimento e Lazer', link:''}, 
		{title: 'Parque', link:''},
		{title: 'Parque Ibirapuera', link:''}
	];	
	
	//CHAMADA DE ENDERECOS RELACIONADOS
	$scope.callAddresses = function(state, termo) {
		apontadorAPIServices.addresses(state, termo)
	    	.success(function (data) {
	    		if(data.addressResults){	    			
		    		$scope.locations = data.addressResults.addresses;
		    		$scope.locations.map(function(local) {
		    			local.image = 'https://d31a08puryq8et.cloudfront.net/apps/sponsoredplacepromoted/files/placeholder.png';
		    			local.statistics = $scope.place.statistics; //objeto fake para ver o layout correto
		    			local.categories = $scope.place.categories; //objeto fake para ver o layout correto
		    		});
	    		}else{
	    			Alert.addMessageError('', 'Locais parecidos não encontrado.');	
	    		}
	    	})
	      	.error(function (err){
	      		Alert.addMessageError('', 'Locais parecidos não encontrado.');
	      	});	
	};
 
	//CHAMADA PARA CARREGAR AS FOTOS DO LOCAL
	$scope.callPhotos = function(place, callback) {
		apontadorAPIServices.placePhotos(place)
			.success(function (data) {
				if(data.photoResults){	
					$scope.carousel  = {
				        id: 'image', name: 'images', size: 10, height: 290,
				        classField: 'fieldCarousel', 
				        preview: {
				         size: 2,
				         thumbs: {height: 40}
				        },
				        slides: data.photoResults.photos
					};
					$scope.imagefull = data.photoResults.photos[0].large;
					
					if(callback){
						callback(data.photoResults.photos, data.photoResults.header.found);
					}
					
				}else{
					Alert.addMessageError('', 'Fotos do local não encontradas.');
				}
	      	})
	      	.error(function (err){
	      		Alert.addMessageError('', 'Fotos do local não encontradas.');
	      	});
	};	

	//CHAMADA PARA INFORMACOES ADICIONAIS
	$scope.callInfoAdditionals = function(place, photos, amountPhotos) {
		$scope.infosAdditional = {
			info: {
				title: 'Informações e Avaliações', 
				description: '<h4>Sobre Parque do Ibirapuera</h4>' +
				'O Parque Ibirapuera é o parque urbano mais importante da cidade de São Paulo e foi inaugurado dia 21 de agosto de 1954. No parque a população conta com ciclovia, treze quadras iluminadas,pistas destinadas a cooper, passeios e descanso, todas integradas à área cultural.'
			},
			more: {
				title: 'Mais Informações', 
				per: 'Apontador',
				categorias: place.categories,
				tags: place.tags,
				site: 'http://www.parquedoibirapuera.com'
			},
			map: {
				title: "Mapa",
				description: place.address.description,
				src: apontadorAPIServices.placeMap(place, 700, 300)
			},
			photos: {
				title: 'Fotos',
				images: photos,
				amount: amountPhotos
			}
		};
	};


	//CHAMADA DAS AVALIACOES DO PARQUE
	$scope.callReviews = function(place) {
		apontadorAPIServices.placeReviews(place)
			.success(function (data) {
				if(data.reviewResults){
					$scope.reviews = data.reviewResults.reviews;
				}else{
					Alert.addMessageError('', 'Avaliações do local não encontradas.');
				}				
	      	})
	      	.error(function (err){
	      		Alert.addMessageError('', 'Avaliações do local não encontradas.');
	      	});
	};

	//CHAMADA DO LOCAL
	$scope.callPlace = function(place, callback) {
		apontadorAPIServices.places(place)
			.success(function (data) {
				$scope.place = data.place;
				$scope.showPlace = true;

				if(callback){
					callback($scope.place);
				}				
	      	})
	      	.error(function (err){
	      		Alert.addMessageError('', 'Local não encontrado.');
	      	});	
	};

	$scope.init = function() {
		$scope.showPlace = false;	
		$scope.idPlace = 'B37822W2';
		
		$scope.callPlace($scope.idPlace, function(place){
			place.address.description =  place.address.street+', '+place.address.number+', '+place.address.complement+', '+
				place.address.district+', '+place.address.city+', '+place.address.state+', CEP: '+ $filter('viewMaks')(place.address.zipcode, '99999-999');

			$scope.callAddresses(place.address.state, place.address.street);
			$scope.callPhotos($scope.idPlace, function(photos, amount){
				$scope.callInfoAdditionals(place, photos, amount);
			});
			$scope.callReviews($scope.idPlace);
		});	
	};

	$scope.init();
}]);
