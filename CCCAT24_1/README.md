### Instruções utilizadas no projeto

```bash
# Inicializa um novo projeto Node.js criando o arquivo package.json
$ npm init

# Instala as dependências de produção:
# - express: framework web para criar a API
# - axios: cliente HTTP para fazer requisições
# - pg-promise: driver de banco de dados PostgreSQL
# - @types/express: tipos TypeScript para o Express
$ npm i express axios pg-promise @types/express

# Instala as dependências de desenvolvimento (-D ou --save-dev):
# - @types/jest: tipos TypeScript para o Jest
# - jest: framework de testes
# - nodemon: monitora mudanças e reinicia a aplicação
# - ts-jest: permite usar Jest com TypeScript
# - ts-node: executa arquivos TypeScript diretamente
$ npm i -D @types/jest jest nodemon ts-jest ts-node

# Inicializa o arquivo de configuração do TypeScript (tsconfig.json)
$ npx tsc --init

# Inicializa o arquivo de configuração do Jest para TypeScript (jest.config.js)
$ npx ts-jest config:init

# Executa os testes com cobertura de código (mostra percentual de linhas testadas)
$ npx jest --coverage

# Inicia os serviços definidos em docker/docker-compose.yml
$ docker compose -f docker/docker-compose.yaml up

# Inicia os serviços definidos no docker-compose usando o script npm
$ npm run compose:up

# Interrompe e remove os containers do compose usando o script npm
$ npm run compose:down

# Lista os containers Docker em execução
$ docker ps
```

### Aulas

#### Aula 01

- Aula 01
  - [x] - Criação do Ambiente ( Projeto )
  - [ ] - Automação de Testes e Test-Driven Developement
  - [ ] - Refactoring, Code Smells e Técnicas de Refactoring
  - [ ] - Q&A
- Aula 02
  - [ ] - Tipos de testes automatizados (E2E, Integration, Unit)
  - [ ] - Arquitetura Hexagonal
  - [ ] - Test Patterns
  - [ ] - Q&A
- Aula 03
  - [ ] - Clean Architecture - Introdução
  - [ ] - Clean Architecture - Use Cases
  - [ ] - Clean Architecture - Entities
  - [ ] - Clean Architecture - Interface Adapters e Frameworks and Drivers
  - [ ] - Q&A
- Aula 04
  - [ ] - Domain-Driven Design - Value Objects
  - [ ] - Domain-Driven Design - Entities
  - [ ] - Domain-Driven Design - Domain Services
  - [ ] - Domain-Driven Design - Aggregates
  - [ ] - Q&A
- Aula Extra
  - [ ] - Dependency Injection
  - [ ] - ORM
- Aula 05
  - [ ] - Domain-Driven Design - Modelagem Tática (Mediator, Book, Load Test) - Parte 2
  - [ ] - Domain-Driven Design - Modelagem Estratégica (Domain, Subdomains e Bounded Contexts)
  - [ ] - Q&A
- Aula 06
  - [ ] - Arquitetura de Microservices
  - [ ] - Event-Driven Architecture
  - [ ] - Q&A
- Aula 07
  - [ ] - Microservices Patterns
  - [ ] - CQRS Parte 1
  - [ ] - Q&A
- Aula 08
  - [ ] - CQRS Parte 2
  - [ ] - Frontend - TDD
  - [ ] - Frontend - Clean Architecture, Hexagonal, SOLID e Design Patterns
