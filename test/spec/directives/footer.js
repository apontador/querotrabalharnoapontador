(function(){   
    'use strict';

    describe('Diretivas: Footer', function(){

        var compile, scope, elm;
        
        beforeEach(function(){
            module('catalogoApp');
            module('templates');            
            
            inject(function(_$compile_, _$rootScope_){
                compile = _$compile_;
                scope = _$rootScope_.$new();
            });

            elm = compile(angular.element('<app-footer></app-footer>'))(scope);

            scope.$digest();
        });

        it('Deve renderizar o footer', function(){
            expect(elm.html()).toBeDefined();
        });
    });
})();