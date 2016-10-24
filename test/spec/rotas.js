(function(){   
    'use strict';
    describe('Rotas (URLS):', function(){
        
        var location, route, rootScope;

        beforeEach(function() {
            module('catalogoApp');
            
            inject(function( _$location_, _$route_, _$rootScope_ ) {
                location = _$location_;
                route = _$route_;
                rootScope = _$rootScope_;
            });
        });

        describe('Tela não encontrada >', function(){
            beforeEach(function(){
                inject(function($httpBackend) {
                    $httpBackend.expectGET('/404.html')
                        .respond(200);

                    location.path('asds');
                    rootScope.$digest();
                });
            });

            it('Deve carregar tela', function(){
                expect(route.current.templateUrl).toBe('/404.html');
            });
        });

        describe('Detalhe do produto >', function(){
            beforeEach(function(){
                inject(function($httpBackend) {
                    $httpBackend.expectGET('./views/detalhe.html')
                        .respond(200);

                    location.path('/');
                    rootScope.$digest();
                });
            });

            it('Deve carregar tela', function(){
                expect(route.current.controller).toBe('DetalheController');
                expect(route.current.templateUrl).not.toBe('/404.html');
                expect(route.current.templateUrl).toBe('./views/detalhe.html');
            });
        });
    });
})();