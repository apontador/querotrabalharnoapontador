(function(){   
    'use strict';

    describe('Diretivas: Messages >', function(){

        var compile, scope, rootscope, Alert, elm, MainController;
        
        beforeEach(function(){
            module('catalogoApp');
            module('templates');            
            
            inject(function(_$compile_, _$rootScope_, _Alert_, _$controller_){
                compile = _$compile_;
                rootscope = _$rootScope_; 
                scope = _$rootScope_.$new();
                Alert = _Alert_;

                MainController = _$controller_('MainController', {
                    $scope: scope
                });
            });

            elm = compile(angular.element('<messages></messages>'))(scope);
            scope.$digest();
        });

        it('Deve renderizar o Header', function(){
            expect(elm.html()).toBeDefined();
        });

        it('Deve inserir mensagem no HTML', function(){
            Alert.addMessageSucess('Sucesso', 'Mensagem de sucesso');
            scope.$digest();

            var content = elm.find('.alert');
            var msg = content.find('li');
            expect(content).toBeDefined();
            expect(content.hasClass('alert-'+Alert.allInfos().classe)).toBeTruthy();
            expect(msg.length).toEqual(1);
            expect(msg.html()).toContain('Sucesso');
            expect(msg.html()).toContain('Mensagem de sucesso');
        });

        it('Deve remover a mensagem', function(){
            Alert.addMessageSucess('Sucesso', 'Mensagem de sucesso');
            scope.$digest();

            expect(elm.find('.alert').length).toEqual(1);
            expect(elm.find('.alert li').length).toEqual(1);
            
            elm.find('.alert li .close').triggerHandler('click');
            scope.$digest();

            expect(elm.find('.alert').length).toEqual(0);
            expect(elm.find('.alert li').length).toEqual(0);
        });

        it('Deve chamar a mensagem de erro com "Mensagem de erro"', function(){
            spyOn(Alert, 'addMessageError');
            Alert.addMessageError('Erro', 'Mensagem de erro');
            
            expect(Alert.addMessageError).toHaveBeenCalled();
            expect(Alert.addMessageError).toHaveBeenCalledWith('Erro', 'Mensagem de erro');
        });

        it('Deve chamar a mensagem de sucesso com "Mensagem de sucesso"', function(){
            spyOn(Alert, 'addMessageSucess');
            Alert.addMessageSucess('Sucesso', 'Mensagem de sucesso');

            expect(Alert.addMessageSucess).toHaveBeenCalled();
            expect(Alert.addMessageSucess).toHaveBeenCalledWith('Sucesso', 'Mensagem de sucesso');
        });

        it('Deve chamar a mensagem de informação com "Mensagem de informação"', function(){
            spyOn(Alert, 'addMessageInfo');
            Alert.addMessageInfo('Informação', 'Mensagem de informação');

            expect(Alert.addMessageInfo).toHaveBeenCalled();
            expect(Alert.addMessageInfo).toHaveBeenCalledWith('Informação', 'Mensagem de informação');
        });

        it('Deve chamar a mensagem de aviso com "Mensagem de aviso"', function(){
            spyOn(Alert, 'addMessageWarn');
            Alert.addMessageWarn('Aviso', 'Mensagem de aviso');
            
            expect(Alert.addMessageWarn).toHaveBeenCalled();
            expect(Alert.addMessageWarn).toHaveBeenCalledWith('Aviso', 'Mensagem de aviso');
        });
    });
})();