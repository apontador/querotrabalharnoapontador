(function(){   
    'use strict';
    describe('Serviço de chamada de fotos do endereço:', function(){
        
        var photosAPIServices, httpBackend;

        beforeEach(function() {
            module('app');
            
            inject(function(_photosAPIServices_, $httpBackend){
                photosAPIServices = _photosAPIServices_;
                httpBackend = $httpBackend;                
            });

        });
        
        it('Deve chamar a função', function(){
            spyOn(photosAPIServices, 'place');
            photosAPIServices.place('B37822W2');

            expect(photosAPIServices.place).toHaveBeenCalled();
            expect(photosAPIServices.place).toHaveBeenCalledWith('B37822W2');            
        });
        
        it('Deve retornar as fotos do local', function(){            
            var result = {
                'photoResults': {
                    'header': {},
                    'photos': [
                        {
                            'id': '209368',
                            'link': {},
                            'creation': {},
                            'place': {
                                'id': 'B37822W2',
                                'name': 'Parque do Ibirapuera',
                                'statistics': {},
                                'featured': {}
                            },
                            'urlApontador': 'http://www.apontador.com.br/local/sp/sao_paulo/parques/B37822W2/parque_do_ibirapuera.html',
                            'categories': [
                                {'id': '129', 'name': 'Entretenimento e Lazer'}
                            ]
                        }
                    ]
                }
            };
            httpBackend.whenGET('https://api.apontador.com.br/v2/places/B37822W2/photos?access_token=5a3e7dd1-c07e-4949-8450-1fdec266731e').respond(result);
            
            photosAPIServices.place('B37822W2').then(function(response) {
                expect(response.data.photoResults).toBeDefined();
                expect(response.data.photoResults.photos).toBeDefined();
                expect(response.data.photoResults.photos[0].id).toMatch('209368');
                expect(response.data.photoResults.photos[0].place.id).toMatch('B37822W2');
                expect(response.data.photoResults.photos[0].categories).toContain({'id': '129', 'name': 'Entretenimento e Lazer'});
            });
            httpBackend.flush();
        });        
    });
})();