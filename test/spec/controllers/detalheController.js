(function(){   
    'use strict';

    describe('Controller DetalheController:', function(){

        var DetalheController, Alert, scope, httpBackend, placeMock, addressesMock, photosMock, reviewsMock;
        
        beforeEach(function(){
            module('app');
            module('appMocks');
            
            inject(function(_$rootScope_, _$httpBackend_,  _Alert_, _placeAPIServicesMocks_, _addressesAPIServicesMocks_, _photosAPIServicesMocks_, _reviewsAPIServicesMocks_){
                scope = _$rootScope_.$new();
                httpBackend = _$httpBackend_;
                
                placeMock = _placeAPIServicesMocks_;
                addressesMock = _addressesAPIServicesMocks_;
                photosMock = _photosAPIServicesMocks_;
                reviewsMock = _reviewsAPIServicesMocks_;
                Alert = _Alert_;
            });

            inject(function(_$controller_){
                DetalheController = _$controller_('DetalheController', {
                    $scope: scope                    
                });
            });                       
        });
        
        function createMockCallPlace(){
            httpBackend.when('GET', 'https://api.apontador.com.br/v2/places/B37822W2?access_token=5a3e7dd1-c07e-4949-8450-1fdec266731e&fl=*,openingHours&wt=json')
                .respond(200, placeMock); 
        }  

        describe('BreadCrumb', function(){
            it('Deve conter a lista do breadcrumb', function(){            
                expect(scope.breadcrumbs).toBeDefined();
                expect(scope.breadcrumbs.length).toBe(5);
            });
        });

        describe('Inicialização', function(){
            
            it('Deve conter a chamada de inicialização', function(){
                spyOn(scope, 'init');
                scope.init();

                expect(scope.init).toHaveBeenCalled();
            });

            it('"showPlace" deve estar com o valor "false"', function(){
                expect(scope.showPlace).toBe(false);
            });

            it('"IdPlace" deve estar setado', function(){
                expect(scope.idPlace).toBeDefined();
            });

            it('Somente o "CallPLace" deve ser chamado na inicialização', function(){
                spyOn(scope, 'callPlace');
                spyOn(scope, 'callAddresses');
                spyOn(scope, 'callPhotos');
                spyOn(scope, 'callReviews');
                spyOn(scope, 'callInfoAdditionals');
                
                scope.init();

                expect(scope.callPlace).toHaveBeenCalled();
                expect(scope.callPlace).toHaveBeenCalledWith(scope.idPlace, jasmine.any(Function));
                
                expect(scope.callAddresses).not.toHaveBeenCalled();
                expect(scope.callPhotos).not.toHaveBeenCalled();
                expect(scope.callReviews).not.toHaveBeenCalled();
                expect(scope.callInfoAdditionals).not.toHaveBeenCalled();
            });
        });    

        describe('Mostrar Local', function(){
            beforeEach(function(){
                spyOn(scope, 'callAddresses');
                spyOn(scope, 'callPhotos');              
                spyOn(scope, 'callReviews');

                createMockCallPlace();  
            });

            afterEach(function(){
                httpBackend.verifyNoOutstandingExpectation();
                httpBackend.verifyNoOutstandingRequest();
            });

            it('Deve buscar a local "Parque do Ibirapuera"', function() {
                spyOn(scope, 'callPlace');
                scope.init();       
                httpBackend.flush();                

                expect(scope.callPlace).toHaveBeenCalled();
                expect(scope.place).toBeDefined();
                expect(scope.place.id).toBe(scope.idPlace);
                expect(scope.place.name).toBe('Parque do Ibirapuera');
            });

            it('Após buscar o local deve mostrar a página', function() {  
                scope.callPlace(scope.idPlace, function() {
                    expect(scope.showPlace).toBe(true);                    
                });
                httpBackend.flush();
            });


            it('Após buscar o local deve chamar a função "callAddresses" passando UF e a rua', function() {  
                //spyOn(scope, 'callPlace').andCallFake(function(idPlace, callback){
                //    callback(placeMock.place);
                //});
                
                //scope.init();
                scope.callPlace(scope.idPlace, function() {
                    expect(scope.callAddresses).toHaveBeenCalled();
                    expect(scope.callAddresses).toHaveBeenCalledWith(placeMock.place.address.state, placeMock.place.address.street);
                });
                httpBackend.flush();
            });

            it('Após buscar o local deve chamar a função "callPhotos" passando idPlace e função callback', function() {
                scope.callPlace(scope.idPlace, function() {
                    expect(scope.callPhotos).toHaveBeenCalled();
                    expect(scope.callPhotos).toHaveBeenCalledWith(scope.idPlace, jasmine.any(Function));                    
                });
                httpBackend.flush();
            });

            it('Após buscar o local deve chamar a função "callReviews" passando idPlace', function() {
                scope.callPlace(scope.idPlace, function() {
                    expect(scope.callReviews).toHaveBeenCalled();
                    expect(scope.callReviews).toHaveBeenCalledWith(scope.idPlace);                    
                });
                httpBackend.flush();
            });
            
            it('Deve enviar mensagem de erro caso o serviço não retorne', function(){
                httpBackend.expect('GET', 'https://api.apontador.com.br/v2/places/B37822W2?access_token=5a3e7dd1-c07e-4949-8450-1fdec266731e&fl=*,openingHours&wt=json')
                .respond(500, '');                
                scope.callPlace(scope.idPlace);
                httpBackend.flush();
                
                expect(Alert.allInfos().classe).toBe('danger');
                expect(Alert.allInfos().messages.length).toBe(1);                
            });
        });

        describe('Endereços relacionados', function(){

            beforeEach(function(){
                spyOn(scope, 'callPhotos');              
                spyOn(scope, 'callReviews');

                createMockCallPlace();
                
                httpBackend.when('GET', 'https://api.apontador.com.br/v2/addresses?access_token=5a3e7dd1-c07e-4949-8450-1fdec266731e&fl=description&fq=state:SP&q=Avenida+Pedro+%C3%81lvares+Cabral')
                .respond(200, addressesMock);
            });

            it('Deve criar os locais relacionados', function(){
                scope.callAddresses(placeMock.place.address.state, placeMock.place.address.street);
                httpBackend.flush(); 
                expect(scope.locations).toBeDefined();
                expect(scope.locations.length).toBeDefined(addressesMock.addressResults.addresses.length);
            });

            it('Deve verificar se foi inserida as estatistica do local', function(){
                scope.callAddresses(placeMock.place.address.state, placeMock.place.address.street);
                httpBackend.flush(); 

                scope.locations.map(function(location){
                    expect(location.statistics).toBe(scope.place.statistics);
                });
            });
            it('Deve verificar se foi inserida as categoria do local', function(){
                scope.callAddresses(placeMock.place.address.state, placeMock.place.address.street);
                httpBackend.flush(); 

                scope.locations.map(function(location){
                    expect(location.categories).toBe(scope.place.categories);
                });
            });
            
            it('Deve enviar mensagem de erro caso o serviço não retorne', function(){
                httpBackend.expect('GET', 'https://api.apontador.com.br/v2/addresses?access_token=5a3e7dd1-c07e-4949-8450-1fdec266731e&fl=description&fq=state:SP&q=Avenida+Pedro+%C3%81lvares+Cabral')
                .respond(500);
                scope.callAddresses(placeMock.place.address.state, placeMock.place.address.street);
                httpBackend.flush(); 

                expect(Alert.allInfos().classe).toBe('danger');
                expect(Alert.allInfos().messages.length).toBe(1);                
            });
        });        

        describe('Fotos do Local', function(){
            beforeEach(function(){
                spyOn(scope, 'callAddresses');              
                spyOn(scope, 'callReviews');

                createMockCallPlace();
                
                httpBackend.when('GET', 'https://api.apontador.com.br/v2/places/B37822W2/photos?access_token=5a3e7dd1-c07e-4949-8450-1fdec266731e')
                .respond(200, photosMock);
            });

            it('Deve criar a lista de fotos', function(){
                scope.callPhotos(scope.idPlace);
                httpBackend.flush(); 

                expect(scope.carousel).toBeDefined();
                expect(scope.carousel.slides.length).toBe(photosMock.photoResults.photos.length);                
            });

            it('Deve enviar mensagem de erro caso o serviço não retorne', function(){
                httpBackend.expect('GET', 'https://api.apontador.com.br/v2/places/B37822W2/photos?access_token=5a3e7dd1-c07e-4949-8450-1fdec266731e')
                .respond(500);
                httpBackend.flush();

                expect(Alert.allInfos().classe).toBe('danger');
                expect(Alert.allInfos().messages.length).toBe(1);                
            });
            
        });

        describe('Comentários sobre o Local', function(){
            beforeEach(function(){
                spyOn(scope, 'callAddresses');              
                spyOn(scope, 'callPhotos');
                
                createMockCallPlace();

                httpBackend.when('GET', 'https://api.apontador.com.br/v2/places/B37822W2/reviews?access_token=5a3e7dd1-c07e-4949-8450-1fdec266731e')
                .respond(200, reviewsMock); 
            });

            it('Deve criar a lista de comentários', function(){
                scope.callReviews(scope.idPlace);
                httpBackend.flush(); 

                expect(scope.reviews).toBeDefined();
                expect(scope.reviews.length).toBe(reviewsMock.reviewResults.reviews.length);                
            });

            it('Deve enviar mensagem de erro caso o serviço não retorne', function(){
                httpBackend.expect('GET', 'https://api.apontador.com.br/v2/places/B37822W2/reviews?access_token=5a3e7dd1-c07e-4949-8450-1fdec266731e')
                .respond(500); 
                httpBackend.flush();

                expect(Alert.allInfos().classe).toBe('danger');
                expect(Alert.allInfos().messages.length).toBe(1);                
            });
        });
        
    });
})();