app.controller('localCtrl',function ($scope, $http, apiApontador, $cookieStore, $routeParams) {
     
    $scope.photoResults = "";
    $scope.reviews = "";
    $scope.place = "";
    $scope.placesSubCategory = "";
    var slides = $scope.slides = [];
    $scope.myInterval = 2000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var currIndex = 0;
    $scope.img = [];
   

    $scope.init = function(){
        $scope.placeId = $routeParams.placeId; //parametro recebido para indetificar o local
        $scope.token = $cookieStore.get('token'); //recebe token da session
         
        if($scope.token == undefined){         
           $scope.authToken();
        }
        $scope.getLocal($scope.placeId, $scope.token); // consome API com id do place
        $scope.getLocalPhotos($scope.placeId, $scope.token);  // consome API de photos do place
        $scope.getReviews($scope.placeId, $scope.token); // consome API de avaliações
	}
	$scope.authToken = function(){
		apiApontador.authToken().success(function (data) {
		  $scope.token = data.token_type + " " +  data.access_token;
		  $cookieStore.put('token',$scope.token);
		}).error(function (data, status) {
		  console.log(status);
		  console.log(data);
		});
	}// realiza autenticação com API e gera token


	$scope.getLocal = function(placeId , token ){
		apiApontador.getApiApontador('places/'+ placeId +'?fl=*,openingHours', token).success(function (data) {          
			$scope.place = data.place;			
			$scope.getPlacesSubCategory(token);
			$scope.format();  
		}).error(function (data, status) {
			console.log(status);
			console.log(data);
		});
	}//consome API do place

	$scope.getLocalPhotos = function(placeId , token ){
		apiApontador.getApiApontador('places/'+ placeId +'/photos', token).success(function (data) {          
			$scope.photoResults= data.photoResults; 
			$scope.formatPhotos();                             
		}).error(function (data, status) {
			console.log(status);
			console.log(data);
		});
	}//consome API de photos do place

	$scope.getReviews = function(placeId , token ){
		apiApontador.getApiApontador('places/'+ placeId +'/reviews', token).success(function (data) {          
			$scope.reviews = data.reviewResults.reviews;                                       
		}).error(function (data, status) {
			console.log(status);
			console.log(data);
		});
	}//consome API de reviews do place


	$scope.getPlacesSubCategory = function(token){
		apiApontador.getApiApontador('places/?fq=categories.category.id:'+$scope.place.categories[0].id+'&fq=address.city:'+$scope.place.address.city+'&wt=json&rows=5&sort=statistics.rating desc,statistics.pageviews desc', token).success(function (data) {          
			$scope.placesSubCategory = data.results.places;
			console.log($scope.placesSubCategory);										
		}).error(function (data, status) {
		  console.log(status);
		  console.log(data);
		});
	}//consome API de palces para exibir locais parecidos.

   

	$scope.init();    

	$scope.formatPhotos = function(){
		for ( var index=0; index< 10; index++ ) {          
			$scope.img[index] = {image : $scope.photoResults.photos[index].original, id: index}                    
        }      
    } 

    $scope.recomendar= function(){
		alert("Ng-click");
    }
	
    $scope.format = function(){
        $scope.formatacaoPhone(); 
        $scope.formatacaoCEP();
        $scope.formatacaohorario();
    }

    $scope.formatacaoPhone= function(){
		$scope.phonesFormatado = "";      
		for(i = 0; i < $scope.place.phones.length; i++){
			var p  = "(" + $scope.place.phones[i].substring(2,12);
			if(p.length > 3){
				p = p.substring(0,3) + ") " + p.substring(3);
			}
			if(p.length > 9){
				p = p.substring(0,9) + "-" + p.substring(9);
			}
			$scope.phonesFormatado = $scope.phonesFormatado + p + " / ";
		}
		$scope.phonesFormatado = $scope.phonesFormatado.substring(0, $scope.phonesFormatado.length - 2);      
    }//formata telefones

    $scope.formatacaoCEP= function(){
		$scope.place.address.zipcode = $scope.place.address.zipcode.substring(0,5) + "-" + $scope.place.address.zipcode.substring(5);
	}//formata cep

	$scope.formatacaohorario= function(){        
        $scope.horarioA = $scope.place.openingHours.periods[0].open.time;
        $scope.horarioB = $scope.place.openingHours.periods[0].close.time;
        $scope.horarioA = $scope.horarioA.substring(0,2) + ":" + $scope.horarioA.substring(2);
        $scope.horarioB = $scope.horarioB.substring(0,2) + ":" + $scope.horarioB.substring(2);
	}//formata horario  
});