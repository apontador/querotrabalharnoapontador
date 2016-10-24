(function(){   
    'use strict';
    describe('Serviço de chamada das avaliações sobre o local:', function(){
        
        var reviewsAPIServices, httpBackend;

        beforeEach(function() {
            module('app');
            
            inject(function(_reviewsAPIServices_, $httpBackend){
                reviewsAPIServices = _reviewsAPIServices_;
                httpBackend = $httpBackend;                
            });

        });
        
        it('Deve chamar a função', function(){
            spyOn(reviewsAPIServices, 'place');
            reviewsAPIServices.place('B37822W2');

            expect(reviewsAPIServices.place).toHaveBeenCalled();
            expect(reviewsAPIServices.place).toHaveBeenCalledWith('B37822W2');            
        });
        
        it('Deve retornar as avaliações do local', function(){            
            var result = {
                'reviewResults': {
                    'header': {},
                    'place': {'id': 'B37822W2', 'name': 'Parque do Ibirapuera'},
                    'reviews': [
                        {
                        'id': '1260412',
                        'text': 'Depois de muitos anos resolvi passar o domingo no parque do Ibirapuera com alguns amigos. Preparamos um piquenique com direito a bolsa térmica com suco, bolo de cenoura e toalha na grama e fomos rumo ao nosso dia de sossego no parque.\n\nAo chegar perto do parque o primeiro indicio que nosso passeio não seria o dia tranquilo que imaginávamos: flanelinhas indicavam a entrada o parque e \'ofereciam\' cartões de zona azul por R$10,00 duas horas - bem acima do preço praticado oficialmente. Apesar de muitos funcionários da CET no local para multar quem estacionasse em local proibido, ou sem o tal cartão, nenhum vendia o cartão no valor oficial.\n\nEnfim compramos do ambulante, demoramos para achar uma vaga, mas conseguimos entrar no parque. O espaço verde, lago, marquise, e prédios, como a Oca ou o Pavilhão da Bienal e tudo que oferece o Parque do Ibirapuera estavam tomados com milhares de pessoas com o mesmo intuito que nosso grupo: paz, descanso, sombra e água fresca.\n\nMesmo com tanta gente, o passeio foi agradável, porque o parque é muito grande, então não precisamos ficar esbarrando em ninguém, mas sossego também não teve. E água fresca, so comprando. Não vi bebedouros pelo parque. Banheiro apenas um, ao lado da Marquise, \n\nApesar de grande, a infra estrutura do parque é fraca, banheiros, lanchonetes, bebedouros, etc. O comércio ambulante domina. Mesmo assim o passeio vale a pena, para quem está sem pressa principalmente se programa.\n\nVale também entrar nos prédios da Oca, onde hoje acontecia uma exposição de fotografias com a história de São Paulo, ou no da Bienal, onde hoje acontecia a de arte,\n',
                        }
                    ]
                }
            };
            httpBackend.whenGET('https://api.apontador.com.br/v2/places/B37822W2/reviews?access_token=5a3e7dd1-c07e-4949-8450-1fdec266731e').respond(result);
            
            reviewsAPIServices.place('B37822W2').then(function(response) {
                expect(response.data.reviewResults).toBeDefined();
                expect(response.data.reviewResults.place.id).toMatch('B37822W2');        
                expect(response.data.reviewResults.reviews).toBeDefined();
            });
            httpBackend.flush();
        });        
    });
})();