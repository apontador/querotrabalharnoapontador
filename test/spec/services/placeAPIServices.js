(function(){   
    'use strict';
    describe('Serviço de chamada do local:', function(){
        
        var placeAPIServices, httpBackend;

        beforeEach(function() {
            module('app');
            
            inject(function(_placeAPIServices_, $httpBackend){
                placeAPIServices = _placeAPIServices_;
                httpBackend = $httpBackend;                
            });

        });
        
        it('Deve chamar a função', function(){
            spyOn(placeAPIServices, 'place');
            placeAPIServices.place('B37822W2');

            expect(placeAPIServices.place).toHaveBeenCalled();
            expect(placeAPIServices.place).toHaveBeenCalledWith('B37822W2');            
        });
        
        it('Deve retornar as informações do local', function(){            
            var result = {
                'place': {
                    'id': 'B37822W2',
                    'name': 'Parque do Ibirapuera',
                    'address': {
                        'country': 'BR',
                        'state': 'SP',
                        'city': 'São Paulo',
                        'district': 'Parque Ibirapuera',
                        'street': 'Avenida Pedro Álvares Cabral',
                        'number': 's/n',
                        'complement': 'Portão 10 (Ibirapuera)',
                        'zipcode': '04094050'
                    },
                    'categories': [
                        {'id': '129', 'name': 'Entretenimento e Lazer'}
                    ],
                }
            };
            httpBackend.whenGET('https://api.apontador.com.br/v2/places/B37822W2?access_token=5a3e7dd1-c07e-4949-8450-1fdec266731e&fl=*,openingHours&wt=json').respond(result);
            
            placeAPIServices.place('B37822W2').then(function(response) {
                expect(response.data.place).toBeDefined();
                expect(response.data.place.id).toBe('B37822W2');
                expect(response.data.place.address.street).toMatch('Avenida Pedro Álvares Cabral');
                expect(response.data.place.categories).toContain({'id': '129', 'name': 'Entretenimento e Lazer'});
            });
            httpBackend.flush();
        });        
    });
})();