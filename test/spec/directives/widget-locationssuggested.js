(function(){   
    'use strict';

    describe('Diretivas: Widget sugestão de localidade (locationssuggested)', function(){

        var compile, scope, elm;
        
        beforeEach(function(){
            module('catalogoApp');
            module('templates');
            
            inject(function(_$compile_, _$rootScope_){
                compile = _$compile_;
                scope = _$rootScope_.$new();
            });

            scope.locations = [
                {
                    'description': 'Avenida Pedro Álvares Cabral, Moema, São Paulo, SP', 
                    'image': 'https://d31a08puryq8et.cloudfront.net/apps/sponsoredplacepromoted/files/placeholder.png',
                    'categories': [
                        {'name': 'categoria 1'},
                        {'name': 'categoria 2'},
                    ],
                    'statistics': {'rating': '3'}
                },
                {
                    'description': 'Avenida Pedro Álvares Cabral, Jardim Frei Leopoldo, São José dos Campos, SP', 
                    'image': 'https://d31a08puryq8et.cloudfront.net/apps/sponsoredplacepromoted/files/placeholder.png',
                    'categories': [
                        {'name': 'categoria 1'},
                        {'name': 'categoria 2'},
                    ],
                    'statistics': {'rating': '2'}
                },
                {
                    'description': 'Avenida Pedro Álvares Cabral, Cidade Nova, São José do Rio Preto, SP',
                    'image': 'https://d31a08puryq8et.cloudfront.net/apps/sponsoredplacepromoted/files/placeholder.png',
                    'categories': [
                        {'name': 'categoria 1'},
                        {'name': 'categoria 2'},
                    ],
                    'statistics': {'rating': '5'}
                },
            ];

            elm = compile(angular.element('<widget-locationsuggested content="locations"></widget-locationsuggested>'))(scope);
            scope.$digest();
        });

        function loopSugest (elmSugest, callback){
            scope.locations.map(function(sugestao, index){
                callback(sugestao, index, angular.element('li', elmSugest)[index]);
            });
        }

        it('Deve renderizar as sugestões', function(){
            expect(elm.html()).toBeDefined();
        });

        it('Deve conter 3 sugestões', function(){
            expect(elm.find('li').length).toEqual(3);
        });        

        it('Deve conter imagem em cada sugestões', function(){
            loopSugest(elm, function(sugestao, index, elmSugest){
                expect(angular.element('img', elmSugest).length).toEqual(1);
                expect(angular.element('img', elmSugest).attr('src')).toEqual(sugestao.image);
            });
        });
        
        it('Deve conter a descrição em cada sugestões', function(){
            loopSugest(elm, function(sugestao, index, elmSugest){
                expect(angular.element('.description', elmSugest).length).toEqual(1);
                expect(angular.element('.description', elmSugest).html()).toContain(sugestao.description);
            });
        });

        it('Deve conter as categorias em cada sugestões', function(){
            loopSugest(elm, function(sugestao, index, elmSugest){
                sugestao.categories.map(function(categoria) {
                    expect(angular.element('.description', elmSugest).html()).toContain(categoria.name);
                });
            });
        });

        it('Deve conter a quantidade de estrelas acessas setas no parametro {statistics: {rating}} em cada sugestões', function(){
            loopSugest(elm, function(sugestao, index, elmSugest){
                expect(angular.element('.stars .glyphicon-star', elmSugest).length).toEqual(Number(sugestao.statistics.rating));                
            });
        });

    });
})();