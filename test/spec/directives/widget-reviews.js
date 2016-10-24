(function(){   
    'use strict';

    describe('Diretivas: Widget reviews (avaliações)', function(){

        var compile, scope, elm, filter;
        
        beforeEach(function(){
            module('catalogoApp');
            module('templates');
            
            inject(function(_$compile_, _$rootScope_, _$filter_){
                compile = _$compile_;
                scope = _$rootScope_.$new();
                filter = _$filter_;
            });

            scope.reviews = [
                {
                    'text': 'Texto de avaliação',
                    'statistics': {'rating': '4'},
                    'creation': {
                        'author': {
                            'link': {
                                'rel': 'self',
                                'uri': 'https://api.apontador.com.br/v2/users/9630787551'
                            },
                            'name': 'Carol Capuano',
                            'photo': 'https://dmyxv0skgo2mq.cloudfront.net/9630787551/9630787551_8167258602640749202-m.jpg'
                        },
                        'created': 1416181896000
                    },
                },
                {
                    'text': 'Texto de avaliação',
                    'statistics': {'rating': '4'},
                    'creation': {
                        'author': {
                            'link': {
                                'rel': 'self',
                                'uri': 'https://api.apontador.com.br/v2/users/9630787551'
                            },
                            'name': 'Carol Capuano',
                            'photo': 'https://dmyxv0skgo2mq.cloudfront.net/9630787551/9630787551_8167258602640749202-m.jpg'
                        },
                        'created': 1416181896000
                    },
                },
            ];
            elm = compile(angular.element('<widget-reviews content="reviews"></widget-reviews>'))(scope);
            scope.$digest();
        });

        function loopReviews (elmReview, callback){
            scope.reviews.map(function(avaliacao, index){
                callback(avaliacao, index, angular.element('li', elmReview)[index]);
            });
        }

        it('Deve renderizar as estrelas', function(){
            expect(elm.html()).toBeDefined();
        });

        it('Deve conter a data de cada postagem', function(){
            loopReviews(elm, function(avaliacao, index, elmReview){
               expect(angular.element(elmReview).html()).toContain(filter('date')(avaliacao.creation.created, 'dd/MM/yyyy'));
            });
        });

        it('Deve conter 3 avaliação', function(){
            expect(elm.find('li').length).toEqual(2);
        }); 

        it('Deve conter os dados do usuário em cada avaliação', function(){
            loopReviews(elm, function(avaliacao, index, elmReview){
                expect(angular.element('img', elmReview).length).toEqual(1);
                expect(angular.element('img', elmReview).attr('src')).toEqual(avaliacao.creation.author.photo);
                expect(angular.element('.description', elmReview).html()).toContain(avaliacao.creation.author.name);
                expect(angular.element('.description', elmReview).html()).toContain(avaliacao.creation.author.link.uri);
            });
        });

        it('Deve conter um texto em cada avaliação', function(){
            loopReviews(elm, function(avaliacao, index, elmReview){
                expect(angular.element('.description', elmReview).length).toEqual(1);
                expect(angular.element('.description', elmReview).html()).toContain(avaliacao.text);
            });
        });

        it('Deve conter a quantidade de estrelas acessas setas no parametro {statistics: {rating}} em cada avaliação', function(){
            loopReviews(elm, function(avaliacao, index, elmReview){
                expect(angular.element('.stars .glyphicon-star', elmReview).length).toEqual(Number(avaliacao.statistics.rating));                
            });
        });

    });
})();