(function(){   
    'use strict';

    describe('Controller Main:', function(){

        var MainController, Alert, scope;
        
        beforeEach(function(){
            module('catalogoApp');
            
            inject(function(_$controller_, _$rootScope_, _Alert_){
                scope = _$rootScope_.$new();
                Alert = _Alert_;
                MainController = _$controller_('MainController', {
                    $scope: scope
                });
            });

        });

        it('Deve conter as mensagens', function(){
            Alert.addMessageError('Erro', 'Mensagem de erro');
            
            expect(scope.allInfos()).toBeDefined();
            expect(scope.allInfos()).toEqual(Alert.allInfos());            
        });
    });
})();