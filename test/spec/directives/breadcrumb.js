(function(){   
    'use strict';

    describe('Diretivas: Breadcrumb', function(){

        var compile, scope, elm;
        
        beforeEach(function(){
            module('catalogoApp');
            module('templates');            
            
            inject(function(_$compile_, _$rootScope_){
                compile = _$compile_;
                scope = _$rootScope_.$new();
            });

            elm = compile(angular.element('<breadcrumb></breadcrumb>'))(scope);

            scope.breadcrumbs = [
                {title: 'Apontador', link:''},
                {title: 'São Paulo', link:''},
                {title: 'Entreterimento e Lazer', link:''}, 
                {title: 'Parque', link:''},
                {title: 'Parque Ibirapuera', link:''}
            ];	

            scope.$digest();
        });

        it('Deve renderizar o breadbrumb', function(){
            expect(elm.html()).toBeDefined();
        });

        it('Deve conter as informações do breadbrumb', function(){
            expect(scope.breadcrumbs).toBeDefined();
        });

        it('O primeiro item deve ser igual a primeira posição do breadcrumb', function(){
            var elmFirst = angular.element('li', elm).first();
            expect(angular.element('.title', elmFirst).text()).toBe(scope.breadcrumbs[0].title);
        });

        it('O último item deve conter a classe "active"', function(){
            var elmLast = angular.element('li', elm).last();
            expect(elmLast.hasClass('active')).toBeTruthy();
        });
    });
})();