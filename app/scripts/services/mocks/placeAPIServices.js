(function(){   
  'use strict';

  angular.module('mockServices').run(function($httpBackend) {

      var result = {
        'place': {
          'id': 'B37822W2',
          'link': {
            'rel': 'self',
            'uri': 'https://api.apontador.com.br/v2/places/B37822W2'
          },
          'name': 'Parque do Ibirapuera',
          'phones': [
            '551155745045',
            '551155734180'
          ],
          'urlApontador': 'http://www.apontador.com.br/local/sp/sao_paulo/parques/B37822W2/parque_do_ibirapuera.html',
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
          'location': {
            'lat': '-23.588295029163444',
            'lng': '-46.65945053100586'
          },
          'categories': [
            {
              'id': '129',
              'name': 'Entretenimento e Lazer',
              'vanityName': 'entretenimento-e-lazer',
              'primary': true,
              'link': {
                'rel': 'self',
                'uri': 'https://api.apontador.com.br/v2/categories/129'
              },
              'subcategory': {
                'id': '64',
                'name': 'Parques',
                'vanityName': 'parques'
              },
              'restrict': false,
              'quotationRadius': 0
            }
          ],
          'statistics': {
            'rating': '5',
            'reviews': '266',
            'thumbsUp': '186',
            'thumbsDown': '8',
            'checkins': '155',
            'photos': '109'
          },
          'openingHours': {
            'periods': [
              {
                'open': {
                  'day': 1,
                  'time': '0500'
                },
                'close': {
                  'day': 2,
                  'time': '0000'
                }
              },
              {
                'open': {
                  'day': 2,
                  'time': '0500'
                },
                'close': {
                  'day': 3,
                  'time': '0000'
                }
              },
              {
                'open': {
                  'day': 3,
                  'time': '0500'
                },
                'close': {
                  'day': 4,
                  'time': '0000'
                }
              },
              {
                'open': {
                  'day': 4,
                  'time': '0500'
                },
                'close': {
                  'day': 5,
                  'time': '0000'
                }
              },
              {
                'open': {
                  'day': 5,
                  'time': '0500'
                },
                'close': {
                  'day': 6,
                  'time': '0000'
                }
              },
              {
                'open': {
                  'day': 6,
                  'time': '0500'
                },
                'close': {
                  'day': 7,
                  'time': '0000'
                }
              },
              {
                'open': {
                  'day': 7,
                  'time': '0500'
                },
                'close': {
                  'day': 1,
                  'time': '0000'
                }
              }
            ],
            'open24Hours': false,
            'openNow': true
          },
          'tags': [
            {
              'value': 'parque'
            },
            {
              'value': ' ibirapuera'
            },
            {
              'value': ' quadras'
            },
            {
              'value': ' cooper'
            },
            {
              'value': ' corrida'
            },
            {
              'value': ' ciclovia'
            },
            {
              'value': ' ar livre'
            },
            {
              'value': 'natureza'
            },
            {
              'value': 'exercícios'
            },
            {
              'value': 'passeio'
            }
          ]
        }
      };
      
      $httpBackend.whenGET('https://api.apontador.com.br/v2/places/B37822W2?access_token=5a3e7dd1-c07e-4949-8450-1fdec266731e&fl=*,openingHours&wt=json').respond(result);
  });
  
})();