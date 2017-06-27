(function(){   
  'use strict';
  
  angular.module('appMocks')
  .constant('photosAPIServicesMocks', {
    'photoResults': {
        'header': {
            'found': 109,
            'rows': 10,
            'start': 0,
            'next': 'https://api.apontador.com.br/v2/places/B37822W2/photos?access_token=5a3e7dd1-c07e-4949-8450-1fdec266731e&start=10'
        },
        'photos': [
            {
                'id': '209368',
                'link': {
                    'rel': 'self',
                    'uri': 'https://api.apontador.com.br/v2/photos/209368'
                },
                'small': 'https://imagesapt.apontador-assets.com/fit-in/160x120/6a622c729fae43ee8c4126ec086273a5/parque-do-ibirapuera-9872809045186132.jpg',
                'medium': 'https://imagesapt.apontador-assets.com/fit-in/320x240/6a622c729fae43ee8c4126ec086273a5/parque-do-ibirapuera-9872809045186132.jpg',
                'large': 'https://imagesapt.apontador-assets.com/fit-in/640x480/6a622c729fae43ee8c4126ec086273a5/parque-do-ibirapuera-9872809045186132.jpg',
                'original': 'https://imagesapt.apontador-assets.com/6a622c729fae43ee8c4126ec086273a5/parque-do-ibirapuera-9872809045186132.jpg',
                'location': '6a622c729fae43ee8c4126ec086273a5/parque-do-ibirapuera-9872809045186132.jpg',
                'cdn': 'https://imagesapt.apontador-assets.com',
                'creation': {
                    'author': {
                        'id': '3290073718',
                        'link': {
                            'rel': 'self',
                            'uri': 'https://api.apontador.com.br/v2/users/3290073718'
                        },
                        'name': 'Milton De Abreu Cavalcante',
                        'photo': 'https://imagesapt.apontador-assets.com/fit-in/64x64/9a09fd21b9ca42bfb722aaff00eb0c94/3290073718-2415774725946453.jpg'
                    },
                    'created': 1342993639000
                },
                'source': 'p1Wd7hw36lzFhNN5cgdn6OeqtrUSBGGFjgruLyUiEIM~',
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
                'id': '209368',
                'link': {
                    'rel': 'self',
                    'uri': 'https://api.apontador.com.br/v2/photos/209368'
                },
                'small': 'https://imagesapt.apontador-assets.com/fit-in/160x120/6a622c729fae43ee8c4126ec086273a5/parque-do-ibirapuera-9872809045186132.jpg',
                'medium': 'https://imagesapt.apontador-assets.com/fit-in/320x240/6a622c729fae43ee8c4126ec086273a5/parque-do-ibirapuera-9872809045186132.jpg',
                'large': 'https://imagesapt.apontador-assets.com/fit-in/640x480/6a622c729fae43ee8c4126ec086273a5/parque-do-ibirapuera-9872809045186132.jpg',
                'original': 'https://imagesapt.apontador-assets.com/6a622c729fae43ee8c4126ec086273a5/parque-do-ibirapuera-9872809045186132.jpg',
                'location': '6a622c729fae43ee8c4126ec086273a5/parque-do-ibirapuera-9872809045186132.jpg',
                'cdn': 'https://imagesapt.apontador-assets.com',
                'creation': {
                    'author': {
                        'id': '3290073718',
                        'link': {
                            'rel': 'self',
                            'uri': 'https://api.apontador.com.br/v2/users/3290073718'
                        },
                        'name': 'Milton De Abreu Cavalcante',
                        'photo': 'https://imagesapt.apontador-assets.com/fit-in/64x64/9a09fd21b9ca42bfb722aaff00eb0c94/3290073718-2415774725946453.jpg'
                    },
                    'created': 1342993639000
                },
                'source': 'p1Wd7hw36lzFhNN5cgdn6OeqtrUSBGGFjgruLyUiEIM~',
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
            }
        ]
    }
    });
})();