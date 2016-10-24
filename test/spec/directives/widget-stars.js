(function(){   
    'use strict';

    describe('Diretivas: Widget estrelas (stars)', function(){

        var compile, scope, elm, filter;
        
        beforeEach(function(){
            module('catalogoApp');
            module('templates');
            
            inject(function(_$compile_, _$rootScope_, _$filter_){
                compile = _$compile_;
                scope = _$rootScope_.$new();
                filter = _$filter_;
            });

            scope.rating = 5;
            scope.created = 1416181896000;
            scope.total = 3;

            elm = compile(angular.element('<widget-stars content="rating" data="created" total="total"></widget-stars>'))(scope);
            scope.$digest();
        });

        it('Deve renderizar as estrelas', function(){
            expect(elm.html()).toBeDefined();
        });

        it('Deve conter a quantidade de estrelas acessas setado no parametro {content}', function(){
            expect(elm.find('.glyphicon-star').length).toEqual(scope.rating);
        });

        it('Deve conter a quantidade total setado no parametro {total}', function(){
            expect(elm.html()).toContain(3);
        });

        it('Deve conter a data setada no parametro {data} com formatacao', function(){
            expect(elm.html()).toContain(filter('date')(scope.created, 'dd/MM/yyyy'));
        });

    });
})();