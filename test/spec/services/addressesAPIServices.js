(function(){   
    'use strict';
    describe('Serviço de chamada de endereços segustivos:', function(){
        
        var addressesAPIServices, httpBackend;

        beforeEach(function() {
            module('app');
            
            inject(function(_addressesAPIServices_, $httpBackend){
                addressesAPIServices = _addressesAPIServices_;
                httpBackend = $httpBackend;                
            });

        });
        
        it('Deve chamar a função', function(){
            spyOn(addressesAPIServices, 'address');
            addressesAPIServices.address('SP', 'Avenida Pedro Alvares Cabral');

            expect(addressesAPIServices.address).toHaveBeenCalled();
            expect(addressesAPIServices.address).toHaveBeenCalledWith('SP', 'Avenida Pedro Alvares Cabral');            
        });
        
        it('Deve retornar o endereços relacionados a localização', function(){            
            var result = {
                addressResults: {
                    header: {},
                    addresses: [
                        {description: 'Avenida Pedro Álvares Cabral, Moema, São Paulo, SP'},
                    ]
                }
            };
            httpBackend.whenGET('https://api.apontador.com.br/v2/addresses?access_token=5a3e7dd1-c07e-4949-8450-1fdec266731e&fl=description&fq=state:SP&q=Avenida+Pedro+Alvares+Cabral').respond(result);
            
            addressesAPIServices.address('SP', 'Avenida Pedro Alvares Cabral').then(function(response) {
                expect(response.data.addressResults).toBeDefined();
                expect(response.data.addressResults.addresses).toBeDefined();
                expect(response.data.addressResults.addresses).toContain({description: 'Avenida Pedro Álvares Cabral, Moema, São Paulo, SP'});
            });
            httpBackend.flush();
        });        
    });
})();