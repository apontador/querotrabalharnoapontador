(function(){   
  'use strict';
  
  angular.module('appMocks')
  .constant('addressesAPIServicesMocks', {
        'addressResults': {
            'header': {
            'found': 79,
            'rows': 10,
            'start': 0,
            'next': 'https://api.apontador.com.br/v2/addresses?access_token=5a3e7dd1-c07e-4949-8450-1fdec266731e&fl=description&fq=state:SP&q=Avenida Pedro Álvares Cabral&start=10'
            },
            'addresses': [
                {'description': 'Avenida Pedro Álvares Cabral, Moema, São Paulo, SP'},
                {'description': 'Avenida Pedro Álvares Cabral, Jardim Frei Leopoldo, São José dos Campos, SP'},
                {'description': 'Avenida Pedro Álvares Cabral, Cidade Nova, São José do Rio Preto, SP'},
                {'description': 'Rua Pedro Álvares Cabral, Bom Retiro, São Paulo, SP'},
                {'description': 'Rua Pedro Álvares Cabral, Jabaquara, São Paulo, SP'},
                {'description': 'Rua Pedro Álvares Cabral, Jardim Vila Galvão, Guarulhos, SP'},
                {'description': 'Rua Pedro Álvares Cabral, Bosque, Campinas, SP'},
                {'description': 'Rua Pedro Álvares Cabral, Bairro Santa Terezinha, Santo André, SP'},
                {'description': 'Rua Pedro Álvares Cabral, Vila Progresso, Sorocaba, SP'},
                {'description': 'Rua Pedro Álvares Cabral, Veloso, Osasco, SP'}
            ]
        }
    });
})();