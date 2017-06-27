(function(){   
    'use strict';
    describe('Serviço de chamada de alertas:', function(){
        
        var Alert;

        beforeEach(function() {
            module('app');
            
            inject(function(_Alert_){
                Alert = _Alert_;
            });
        });

        describe('Função principal', function(){
            it('Deve adicionar uma mensagem', function(){
                Alert.addMessage('msg', 'mensagem', 'tipo', 'msg alternativa');
                
                expect(Alert.allInfos().classe).toBe('tipo');
                expect(Alert.allInfos().messages).toBeDefined();
                expect(Alert.allInfos().messages.length).toEqual(1);
                expect(Alert.allInfos().messages[0].title).toBe('msg');
                expect(Alert.allInfos().messages[0].msg).toBe('mensagem');
                expect(Alert.allInfos().messages[0].type).toBe('tipo'); 
            });

            it('Deve adicionar uma mensagem sem animacao', function(){
                spyOn(Alert, 'addMessage');
                Alert.addMessage('', '', '', '', true);
                
                expect(Alert.addMessage).toHaveBeenCalled();                
            });
        });

        it('Deve chamar a mensagem de erro com "Mensagem de erro"', function(){
            Alert.addMessageError('Erro', 'Mensagem de erro');
            
            expect(Alert.allInfos().messages).toBeDefined();
            expect(Alert.allInfos().messages.length).toBe(1);
            expect(Alert.allInfos().classe).toBe('danger');
            expect(Alert.allInfos().messages[0].title).toBe('Erro');
            expect(Alert.allInfos().messages[0].msg).toBe('Mensagem de erro');
        });

        it('Deve chamar a mensagem de sucesso com "Mensagem de sucesso"', function(){
            Alert.addMessageSucess('Sucesso', 'Mensagem de sucesso');
            
            expect(Alert.allInfos().messages).toBeDefined();
            expect(Alert.allInfos().messages.length).toBe(1);
            expect(Alert.allInfos().classe).toBe('success');
            expect(Alert.allInfos().messages[0].title).toBe('Sucesso');
            expect(Alert.allInfos().messages[0].msg).toBe('Mensagem de sucesso');
        });

        it('Deve chamar a mensagem de informação com "Mensagem de informação"', function(){
            Alert.addMessageInfo('Informação', 'Mensagem de informação');
            
            expect(Alert.allInfos().messages).toBeDefined();
            expect(Alert.allInfos().messages.length).toBe(1);
            expect(Alert.allInfos().classe).toBe('info');
            expect(Alert.allInfos().messages[0].title).toBe('Informação');
            expect(Alert.allInfos().messages[0].msg).toBe('Mensagem de informação');
        });

        it('Deve chamar a mensagem de aviso com "Mensagem de aviso"', function(){
            Alert.addMessageWarn('Aviso', 'Mensagem de aviso');
            
            expect(Alert.allInfos().messages).toBeDefined();
            expect(Alert.allInfos().messages.length).toBe(1);
            expect(Alert.allInfos().classe).toBe('warning');
            expect(Alert.allInfos().messages[0].title).toBe('Aviso');
            expect(Alert.allInfos().messages[0].msg).toBe('Mensagem de aviso');
        });

        it('Deve limpar as mensagens"', function(){
            Alert.addMessageWarn('Aviso', 'Mensagem de aviso');            
            expect(Alert.allInfos().messages.length).toBe(1);
            
            Alert.clearMessage();
            expect(Alert.allInfos().messages.length).toBe(0);            
        });   

        it('Deve remover a mensagem', function(){
            var msg = {title: 'Aviso', msg: 'Mensagem de aviso', type: 'warning', alternativa: undefined};

            Alert.addMessageWarn('Aviso', 'Mensagem de aviso');
            expect(Alert.allInfos().messages.length).toBe(1);
            expect(Alert.allInfos().messages[0].title).toMatch(msg.title);

            Alert.remove(msg);
            expect(Alert.allInfos().messages.length).toBe(0);
        });
    });
})();