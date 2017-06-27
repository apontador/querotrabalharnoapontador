(function(){   
    'use strict';

    describe('Diretivas: Header', function(){

        var compile, scope, elm;
        
        beforeEach(function(){
            module('catalogoApp');
            module('templates');            
            
            inject(function(_$compile_, _$rootScope_){
                compile = _$compile_;
                scope = _$rootScope_.$new();
            });

            elm = compile(angular.element('<app-header></app-header>'))(scope);
            scope.$digest();
        });

        it('Deve renderizar o Header', function(){
            expect(elm.html()).toBeDefined();
        });

        it('Deve conter os idiomas do sistema', function(){
            expect(scope.languages).toBeDefined();
        });

        it('Deve estar selecionado o idioma português', function(){
            expect(scope.languages[0].title).toBe('Português');
            expect(scope.selectedLanguage).toBe(scope.languages[0]);
        });

        it('Deve abrir/fechar o dropMenu de seleção de idiomas', function(){
            var content = elm.find('#languages');
            angular.element('#dropMenuHeader', content).triggerHandler('click');
            scope.$digest();
            expect(scope.openDropMenu).toBeTruthy();
            expect(content.hasClass('open')).toBeTruthy();

            angular.element('#dropMenuHeader', content).triggerHandler('click');
            scope.$digest();
            expect(scope.openDropMenu).not.toBeTruthy();
            expect(content.hasClass('open')).not.toBeTruthy();
        });

        it('Deve trocar o idioma do sistema', function(){
            var dropMenu = elm.find('.dropdown-menu');
            angular.element('li a', dropMenu).triggerHandler('click');
            
            expect(scope.selectedLanguage).not.toBe(scope.languages[0]);
            expect(scope.selectedLanguage).not.toBe('Português');                
        });
    });

})();