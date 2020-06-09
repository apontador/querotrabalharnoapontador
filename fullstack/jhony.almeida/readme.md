Teste do Apontador - Fullstack
===

O Apontador é um site que conecta pessoas aos locais e vice-versa, facilitando o dia-a-dia e oferecendo diversos serviços a partir da intenção e localização dos usuários, tanto na web como no mobile.

Este projeto foi desenvolvido como cumprimento do teste para vaga de desenvolvedor fullstack.

## Componentes

* **Front-end**: projeto em Vue que contém a implementação das telas da aplicação e respectivas chamadas aos endpoints, baseando-se nas imagens contidas na pasta layout.

* **Back-end**: projeto do servidor da aplicação, implementado em Java e framework Quarkus.

* **docker-compose.yaml**: Instruções para executar os serviços dos quais a aplicação depende, para fins de testes.

## Dependências

* Java - JDK 11 ou superior
* Docker e docker-compose (para executar serviços externos à aplicação)
* npm (opcional, para fazer novo build do front-end) 

## Instruções para execução 

### Desenvolvimento

O modo mais simples para executar a aplicação, em modo `dev`, é usar o comando `./build_and_run_test.sh`. Ou então, seguir os seguintes passos:

1. Executar o comando `docker-compose up`, na pasta backend, para subir o serviço do banco de dados.

2. (Opcional) Fazer a build do front-end, pelo comando `npm run build`, na pasta frontend. Este passo deve ser efetuado quando mudanças forem feitas no frontend, o resultado da build é copiado para a pasta resources do backend.

3. Executar o back-end em modo dev (com plugin do Quarkus), pelo comando `./mvnw compile quarkus:dev`, a partir da pasta backend.

A aplicação pode ser acessada em `http://localhost:8080` por padrão. Também é disponibilizada uma interface para interagir diretamente com a api, em `http://localhost:8080/swagger-ui`.

### Produção

Para gerar uma build para produção, executar os passos:

1. Fazer a build do front-end, pelo comando `npm run build`, na pasta frontend.

2. Fazer a build do back-end, pelo comando `./mvnw package` a partir da pasta backend.

2. Executar o arquivo jar com sufixo `runner`, gerado na pasta `target/`. Outras opções de build do Quarkus, como geração de imagem docker ou executável nativo, também podem ser utizadas (ler o README da pasta backend).

### Testes

Para executar os testes de integração, estando na pasta backend, usar o comando `./mvnw compile test failsafe:integration-test`. Também é possível executá-los por uma IDE como IntelliJ.