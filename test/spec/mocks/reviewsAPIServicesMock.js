(function(){   
  'use strict';
  
  angular.module('appMocks')
    .constant('reviewsAPIServicesMocks', {
        'reviewResults': {
            'header': {
                'found': 265,
                'rows': 10,
                'start': 0,
                'next': 'https://api.apontador.com.br/v2/places/B37822W2/reviews?access_token=5a3e7dd1-c07e-4949-8450-1fdec266731e&start=10'
            },
            'reviews': [
                {
                    'id': '1260412',
                    'link': {
                        'rel': 'self',
                        'uri': 'https://api.apontador.com.br/v2/reviews/1260412'
                    },
                    'text': 'Depois de muitos anos resolvi passar o domingo no parque do Ibirapuera com alguns amigos. Preparamos um piquenique com direito a bolsa térmica com suco, bolo de cenoura e toalha na grama e fomos rumo ao nosso dia de sossego no parque.\n\nAo chegar perto do parque o primeiro indicio que nosso passeio não seria o dia tranquilo que imaginávamos: flanelinhas indicavam a entrada o parque e \'ofereciam\' cartões de zona azul por R$10,00 duas horas - bem acima do preço praticado oficialmente. Apesar de muitos funcionários da CET no local para multar quem estacionasse em local proibido, ou sem o tal cartão, nenhum vendia o cartão no valor oficial.\n\nEnfim compramos do ambulante, demoramos para achar uma vaga, mas conseguimos entrar no parque. O espaço verde, lago, marquise, e prédios, como a Oca ou o Pavilhão da Bienal e tudo que oferece o Parque do Ibirapuera estavam tomados com milhares de pessoas com o mesmo intuito que nosso grupo: paz, descanso, sombra e água fresca.\n\nMesmo com tanta gente, o passeio foi agradável, porque o parque é muito grande, então não precisamos ficar esbarrando em ninguém, mas sossego também não teve. E água fresca, so comprando. Não vi bebedouros pelo parque. Banheiro apenas um, ao lado da Marquise, \n\nApesar de grande, a infra estrutura do parque é fraca, banheiros, lanchonetes, bebedouros, etc. O comércio ambulante domina. Mesmo assim o passeio vale a pena, para quem está sem pressa principalmente se programa.\n\nVale também entrar nos prédios da Oca, onde hoje acontecia uma exposição de fotografias com a história de São Paulo, ou no da Bienal, onde hoje acontecia a de arte,\n',
                    'source': 'homeApontadorDev',
                    'statistics': {
                        'rating': '4',
                        'thumbsUp': '10'
                    },
                    'creation': {
                        'author': {
                            'id': '9630787551',
                            'link': {
                                'rel': 'self',
                                'uri': 'https://api.apontador.com.br/v2/users/9630787551'
                            },
                            'name': 'Carol Capuano',
                            'photo': 'https://dmyxv0skgo2mq.cloudfront.net/9630787551/9630787551_8167258602640749202-m.jpg'
                        },
                        'created': 1416181896000
                    },
                    'place': {
                        'id': 'B37822W2',
                        'name': 'Parque do Ibirapuera',
                        'statistics': {
                            'rating': '5',
                            'reviews': '266',
                            'thumbsUp': '186',
                            'thumbsDown': '8',
                            'checkins': '155',
                            'photos': '109'
                        },
                        'featured': {
                            'photo': {
                                'id': '30593',
                                'link': {
                                    'rel': 'self',
                                    'uri': 'https://api.apontador.com.br/v2/photos/30593'
                                },
                                'small': 'https://imagesapt.apontador-assets.com/fit-in/160x120/1bb8ceaf7fed4f48a5d3849e598398aa/b37822w2-2680780116119047.jpg',
                                'medium': 'https://imagesapt.apontador-assets.com/fit-in/320x240/1bb8ceaf7fed4f48a5d3849e598398aa/b37822w2-2680780116119047.jpg',
                                'large': 'https://imagesapt.apontador-assets.com/fit-in/640x480/1bb8ceaf7fed4f48a5d3849e598398aa/b37822w2-2680780116119047.jpg',
                                'location': '1bb8ceaf7fed4f48a5d3849e598398aa/b37822w2-2680780116119047.jpg',
                                'cdn': 'https://imagesapt.apontador-assets.com',
                                'creation': {
                                    'author': {
                                        'id': '9592885073',
                                        'link': {
                                            'rel': 'self',
                                            'uri': 'https://api.apontador.com.br/v2/users/9592885073'
                                        },
                                        'name': 'Luiz Fernando B. Malavolta'
                                    }
                                }
                            }
                        },
                        'urlApontador': 'http://www.apontador.com.br/local/sp/sao_paulo/parques/B37822W2/parque_do_ibirapuera.html',
                        'categories': [
                            {
                                'id': '129',
                                'name': 'Entretenimento e Lazer',
                                'link': {
                                    'rel': 'self',
                                    'uri': 'https://api.apontador.com.br/v2/categories/129'
                                },
                                'subcategory': {'id': '64', 'name': 'Parques'}
                            }
                        ],
                        'link': {
                            'rel': '/linkrels/search/getByPlaceId',
                            'uri': 'https://api.apontador.com.br/v2/places/B37822W2'
                        }
                    }
                },
                {
                    'id': '1295600',
                    'link': {
                        'rel': 'self',
                        'uri': 'https://api.apontador.com.br/v2/reviews/1295600'
                    },
                    'text': 'O Parque do Ibirapuera é um lugar lindo, me encanta aquele espaço enorme e verde, quebrando o transito, o asfalto e a poluição de São Paulo!\nTenho costume de ir lá para correr, durante a semana, impressionante como é movimentado, mesmo em dias de chuva, o que é um ponto positivo porque você se sente seguro, nunca está isolado, sempre tem grupos de pessoas perto de você.\nEssa movimentação, porém, fica muito intensa aos finais de semana, principalmente em dias de calor. Muitas vezes, é difícil até para caminhar ou andar de bicicleta, você precisa desviar das pessoas e até tomar cuidado para ninguém esbarrar em você.\nEssa opção de lazer é gratuita e um belo espaço, em São Paulo, por esse motivo atrai tantas pessoas. \nAlém das belezas naturais o parque oferece várias opções para os visitantes como aluguel de bicicleta, em determinadas datas tem apresentações culturais, com shows até de artistas famosos, planetário, museu da arte moderna, ciclo faixa, lanchonete, quadras, campos de futebol, entre outros (atenção porque alguns são tarifados).\nVocê pode estacionar o seu carro na zona azul ou, se for de ônibus, consulte as linhas que passam nas proximidades do parque (não há trem ou metrô por perto).\nAcho que a prefeitura poderia dar uma atenção maior a limpeza dos banheiro. Entendo que é um local público, mas é um cartão postal de São Paulo, merece mais atenção, em relação a isso.',
                    'source': 'homeApontadorDev',
                    'statistics': {'rating': '4', 'thumbsUp': '8'},
                    'creation': {
                        'author': {
                            'id': '6453313644',
                            'link': {
                                'rel': 'self',
                                'uri': 'https://api.apontador.com.br/v2/users/6453313644'
                            },
                            'name': 'Regina Santos',
                            'photo': 'https://imagesapt.apontador-assets.com/fit-in/64x64/a7ed57e3313c4a4fad00a74568cc3363/6453313644-2910488950236002.jpg'
                        },
                        'created': 1421188237000
                    },
                    'place': {
                        'id': 'B37822W2',
                        'name': 'Parque do Ibirapuera',
                        'statistics': {
                            'rating': '5',
                            'reviews': '266',
                            'thumbsUp': '186',
                            'thumbsDown': '8',
                            'checkins': '155',
                            'photos': '109'
                        },
                        'featured': {
                            'photo': {
                                'id': '30593',
                                'link': {
                                    'rel': 'self',
                                    'uri': 'https://api.apontador.com.br/v2/photos/30593'
                                },
                                'small': 'https://imagesapt.apontador-assets.com/fit-in/160x120/1bb8ceaf7fed4f48a5d3849e598398aa/b37822w2-2680780116119047.jpg',
                                'medium': 'https://imagesapt.apontador-assets.com/fit-in/320x240/1bb8ceaf7fed4f48a5d3849e598398aa/b37822w2-2680780116119047.jpg',
                                'large': 'https://imagesapt.apontador-assets.com/fit-in/640x480/1bb8ceaf7fed4f48a5d3849e598398aa/b37822w2-2680780116119047.jpg',
                                'location': '1bb8ceaf7fed4f48a5d3849e598398aa/b37822w2-2680780116119047.jpg',
                                'cdn': 'https://imagesapt.apontador-assets.com',
                                'creation': {
                                    'author': {
                                        'id': '9592885073',
                                        'link': {
                                            'rel': 'self',
                                            'uri': 'https://api.apontador.com.br/v2/users/9592885073'
                                        },
                                        'name': 'Luiz Fernando B. Malavolta'
                                    }
                                }
                            }
                        },
                        'urlApontador': 'http://www.apontador.com.br/local/sp/sao_paulo/parques/B37822W2/parque_do_ibirapuera.html',
                        'categories': [
                            {
                                'id': '129',
                                'name': 'Entretenimento e Lazer',
                                'link': {
                                    'rel': 'self',
                                    'uri': 'https://api.apontador.com.br/v2/categories/129'
                                },
                                'subcategory': {'id': '64', 'name': 'Parques'}
                            }
                        ],
                        'link': {
                            'rel': '/linkrels/search/getByPlaceId',
                            'uri': 'https://api.apontador.com.br/v2/places/B37822W2'
                        }
                    }
                },
                {
                    'id': '1276846',
                    'link': {
                        'rel': 'self',
                        'uri': 'https://api.apontador.com.br/v2/reviews/1276846'
                    },
                    'text': 'O Parque ibirapuera é conhecido como a praia dos paulistas, e eu acho que é mesmo, pois na minha opnião ela funciona como uma valvula de escape,pois é um lugar para relaxar e se divertir em boa companhia! O Parque do Ibirapuera está localizado entre a região de Moema e da Vila Mariana, ele é ótimo pois  possui dez portões com horários e formas de acesso diferenciados agrandando todos os públicos. Ele é um parquet completo e tem uma super infraestrututra, pois ele conta com uma pista de cooper, parque infantil, lanchonetes, áreas de estar, ciclofaixa, bicicletário com aluguel de bicicleta e patins, quadras poliesportivas, campos de futebol, aparelhos de ginástica e uma praça idealizada pelo incrível Burle Marx.No Ibirapuera ninguém morre de tédio pois funcionam também na área do parque: Escola de Jardinagem, Viveiro com de patos e gansos, Planetário e Escola Municipal de Astrofísica, Museu Afro-Brasil, Pavilhão das Culturas Brasileiras, OCA e Bosque da Leitura (SMC), Fundação Bienal, Auditório Ibirapuera, MAC, MAM(Museu de Arte Moderna- é incrível) e o Pavilhão Japonês. O parque é maravilhoso, sempre há vários eventos acontecendo no campão,e ele também é de fácil acesso pois há várias vagas (com o uso de Zona Azul) e diversos ônibus que dão acesso ao local. Não deixe de conhecer é maravilhoso!',
                    'source': 'homeApontadorDev',
                    'statistics': {'rating': '5', 'thumbsUp': '2'},
                    'creation': {
                        'author': {
                            'id': '5088767551',
                            'link': {
                                'rel': 'self',
                                'uri': 'https://api.apontador.com.br/v2/users/5088767551'
                            },
                            'name': 'Marcella Zeitler',
                            'photo': 'https://dmyxv0skgo2mq.cloudfront.net/5088767551/5088767551_6100243680138577749-m.jpg'
                        },
                        'created': 1418306469000
                    },
                    'place': {
                        'id': 'B37822W2',
                        'name': 'Parque do Ibirapuera',
                        'statistics': {
                            'rating': '5',
                            'reviews': '266',
                            'thumbsUp': '186',
                            'thumbsDown': '8',
                            'checkins': '155',
                            'photos': '109'
                        },
                        'featured': {
                            'photo': {
                                'id': '30593',
                                'link': {
                                    'rel': 'self',
                                    'uri': 'https://api.apontador.com.br/v2/photos/30593'
                                },
                                'small': 'https://imagesapt.apontador-assets.com/fit-in/160x120/1bb8ceaf7fed4f48a5d3849e598398aa/b37822w2-2680780116119047.jpg',
                                'medium': 'https://imagesapt.apontador-assets.com/fit-in/320x240/1bb8ceaf7fed4f48a5d3849e598398aa/b37822w2-2680780116119047.jpg',
                                'large': 'https://imagesapt.apontador-assets.com/fit-in/640x480/1bb8ceaf7fed4f48a5d3849e598398aa/b37822w2-2680780116119047.jpg',
                                'location': '1bb8ceaf7fed4f48a5d3849e598398aa/b37822w2-2680780116119047.jpg',
                                'cdn': 'https://imagesapt.apontador-assets.com',
                                'creation': {
                                    'author': {
                                        'id': '9592885073',
                                        'link': {
                                            'rel': 'self',
                                            'uri': 'https://api.apontador.com.br/v2/users/9592885073'
                                        },
                                        'name': 'Luiz Fernando B. Malavolta'
                                    }
                                }
                            }
                        },
                        'urlApontador': 'http://www.apontador.com.br/local/sp/sao_paulo/parques/B37822W2/parque_do_ibirapuera.html',
                        'categories': [
                            {
                                'id': '129',
                                'name': 'Entretenimento e Lazer',
                                'link': {
                                    'rel': 'self',
                                    'uri': 'https://api.apontador.com.br/v2/categories/129'
                                },
                                'subcategory': {'id': '64', 'name': 'Parques'}
                            }
                        ],
                        'link': {
                            'rel': '/linkrels/search/getByPlaceId',
                            'uri': 'https://api.apontador.com.br/v2/places/B37822W2'
                        }
                    }
                },            
            ]
        }
    });
})();