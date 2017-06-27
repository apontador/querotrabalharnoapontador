(function(){   
    'use strict';
    describe('Filtros: Mascaras', function(){
        
        var filter;

        beforeEach(function() {
            module('catalogoApp');
            
            inject(function(_$filter_) {
                filter = _$filter_;
            });
        });
        
        it('Deve inserir a máscara de CNPJ', function(){
            var cep = filter('viewMaks')('55889517000175', '99.999.999/9999-99');
            expect(cep).not.toBe('55889517000175');
            expect(cep).toBe('55.889.517/0001-75');
        });

        it('Deve inserir a máscara de CPF', function(){
            var cpf = filter('viewMaks')('33513734816', '999.999.999-99');
            expect(cpf).not.toBe('33513734816');
            expect(cpf).toBe('335.137.348-16');
        });

        it('Deve inserir a máscara de CEP', function(){
            var cep = filter('viewMaks')('05134260', '99999-999');
            expect(cep).not.toEqual('05134260');
            expect(cep).toBe('05134-260');
        });

        it('Deve inserir a máscara de Telefone', function(){
            var tel = filter('viewMaks')('39010887', '9999-9999');
            expect(tel).not.toBe('39010887');
            expect(tel).toBe('3901-0887');
        });

        it('Deve inserir a máscara de Telefone com DDD', function(){
            var prefixTel = filter('viewMaks')('1139010887', '(99) 9999-9999');
            expect(prefixTel).not.toBe('1139010887');
            expect(prefixTel).toBe('(11) 3901-0887');
        });

        it('Deve retornar "vazio" caso não seja passado valor', function(){
            var prefixTel = filter('viewMaks')('', '(99) 9999-9999');
            expect(prefixTel).not.toBe('(11) 3901-0887');
            expect(prefixTel).toBe('');
        });

        it('Deve retornar "vazio" caso não seja passado valor', function(){
            var prefixTel = filter('viewMaks')('', '(99) 9999-9999');
            expect(prefixTel).not.toBe('(11) 3901-0887');
            expect(prefixTel).toBe('');
        });

        it('Deve retornar a mascará caso o valor esteja errado', function(){
            var prefixTel = filter('viewMaks')('11 3901-0887', '(99) 9999-9999');
            expect(prefixTel).toBe('(99) 9999-9999');
            expect(prefixTel).not.toBe('(11) 3901-0887');
        });
    });
})();