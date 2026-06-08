<div align="center">

<img src="assets/logo-branas.svg" alt="Branas Logo" width="250" style="display: block; margin: 0 auto;">

</div>

<h1 align="center"><strong>Formação em Arquitetura de Software</strong></h1>

<p align="center">
  <strong>Clean Code, Clean Architecture, Design Patterns</strong>
</p>

<p align="center">
  Instrutor: <strong>Rodrigo Branas</strong>  |  Início: <strong>03/06/2026</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" alt="Jest" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white" alt="Vue.js" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/AWS-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS" />
  <img src="https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white" alt="Terraform" />
  <img src="https://img.shields.io/badge/RabbitMQ-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white" alt="RabbitMQ" />
  <img src="https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" alt="GitHub Actions" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</p>

---

## 📚 Sobre o Curso

A **Formação em Arquitetura de Software** é um programa completo de especialização em arquitetura e design de software. Com mais de **100 horas de conteúdo** distribuído em **6 módulos**, o curso capacita desenvolvedores a tomar decisões conscientes de arquitetura e design, elevando o nível profissional e preparando para desafios reais do mercado.

> ### 🎯 O que você vai dominar

- **Clean Code e Refactoring** - Técnicas para escrever código de qualidade
- **Test-Driven Development (TDD)** - Desenvolvimento orientado a testes
- **Design Patterns** - GoF e PoEAA para código desacoplado e manutenível
- **SOLID Principles** - Princípios fundamentais de design
- **Arquitetura Hexagonal** - Ports and Adapters
- **Clean Architecture** - Estrutura limpa e escalável
- **Domain-Driven Design (DDD)** - Design orientado ao domínio
- **Microservices** - Arquitetura de microsserviços
- **Event-Driven Architecture** - Arquitetura baseada em eventos
- **CQRS** - Command Query Responsibility Segregation

> ### 📊 Estrutura do Curso

| Módulo                                  | Conteúdo                                                         |
| --------------------------------------- | ---------------------------------------------------------------- |
| **1. Qualidade do Código**              | Clean Code, Refactoring, Automação de Testes, TDD, Test Patterns |
| **2. Design e Arquitetura do Backend**  | Hexagonal, Clean Architecture, DDD, SOLID                        |
| **3. Design Patterns**                  | GoF Patterns, PoEAA, Microservices Patterns                      |
| **4. Sistemas Distribuídos**            | Microservices, Event-Driven Architecture, CQRS                   |
| **5. Design e Arquitetura do Frontend** | React vs Vue.js, TDD no Frontend, Arquitetura                    |
| **6. DevOps e Infraestrutura**          | Docker, GitHub Actions, AWS, Terraform                           |

> ### Aulas

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

> ### 🔗 Links Úteis

- **Página do Curso**: https://www.branas.io/formacoes/arquitetura-de-software

   <details>
      <summary><h4>Automação de Testes e Test-Driven Developement</h4></summary>

  > Regras para Testes : O teste deve conter um Given / When / Then
  - Given/Arrange: Definição de todas as informações necessárias para executar o comportamento que será testado.
  - When/Act : Exectar o comportamento
  - Then/Assert : Verificar o que aconteceu após a execução, comparando as informações retornadas com a expectativa que foi criada.

```typescript

```

> Critérios de Qualidade de um teste <strong>FIRST</strong>

- FAST : Os testes devem rodar rápido.
- INDEPENDENT : Não deve existir dependência entre os testes, eles devem poder ser executados de forma isolada.
- REPEATABLE : O resultado deve ser o mesmo independente da quantidade de vezes que ele seja executado.
- SELF-VALIDATING : O próprio teste deve ter uma saída bem definida que é válida ou não fazendo com que ele passe ou falhe.
- TIMELY : Os testes devem ser escritps antes do código-fonte.

> Leis do TDD

- voce não pode escrever nenhum código até ter **escrito um teste que detecte uma possível falha.**
- Você não pode escrever mais testes de unidade do que o **suficiente para detectar a falha.**
- Você não pode escrever mais código do que o **suficiente para passar nos testes**

(Robert C.Martin)

> **Foque no que tem mais risco e muda com mais frequencia**, o sucesso não está e mter 100% de cobertura mas sim em _automatizar os testes daqueilo que dá mais retorno_.

> **Usar test patterns como um stub ou mock não é necessariamente ruim**, em muitos casos é algo necessário, mas só conseguir testar se utilizar esses recursos pode indicar que o <u>design precisa melhorar</u>

  </details>
