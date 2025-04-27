# Kanban API

API desenvolvida para gerenciamento de um sistema Kanban.

---

## 📅 Status do Projeto

Atualmente, a API está em fase inicial, realizando a **persistência dos dados em arquivos JSON**. Entretanto, toda a estrutura foi planejada pensando em **escalabilidade**: as **interfaces** foram criadas para facilitar futuras implementações com outros meios de persistência, como bancos de dados relacionais (MySQL, PostgreSQL) ou NoSQL.

---

## 📚 Objetivo

- Criar uma API RESTful para gerenciamento de Quadros, Tarefas e Usuários.
- Manter uma arquitetura organizada e escalável.
- Facilitar futuras evoluções, como integração com bancos de dados e autenticação JWT.

---

## 🔠 Tecnologias Utilizadas

- PHP 8+
- Composer para autoloading
- Persistência inicial em arquivos JSON
- PSR-4 (autoload)
- PHPDoc para documentação interna

---

## 📂 Estrutura de Diretórios

```bash
.
├── composer.json
├── .htaccess
├── index.php
├── src
│   ├── controllers
│   │   └── UsuarioController.php
│   ├── DAO
│   │   ├── interfaces
│   │   └── json
│   ├── models
│   │   ├── Quadro.php
│   │   ├── Tarefa.php
│   │   └── Usuario.php
│   ├── rn
│   │
│   └── util
│       └── HttpResponses.php
├── teste.php
└── vendor
```

### Diretórios:

- **controllers/**: Contém os controladores responsáveis pelo tratamento das requisições HTTP.
- **DAO/**: Contém as classes de acesso a dados, separadas em `interfaces/` (definições) e `json/` (implementação atual usando arquivos JSON).
- **models/**: Representa os objetos principais da API (Usuário, Tarefa, Quadro).
- **rn/** (regras de negócio): Onde serão implementadas as regras de negócio futuras.
- **util/**: Funções auxiliares, como respostas HTTP padronizadas.
- **vendor/**: Gerenciado pelo Composer (autoloader e dependências).

---

## 🔍 Endpoints Atuais

- **/usuario/cadastrarusuario**
- (Demais endpoints serão documentados conforme implementação)

---

## 📑 Padrão de Dados (Modelos JSON)

### Usuário

```json
{
  "id": 1,
  "nome": "Danilo Franco",
  "email": "danilo@example.com",
  "senha": "senha_criptografada",
  "data_criacao": "2025-04-27T12:34:56Z"
}
```

### Tarefa

```json
{
  "id": 5,
  "titulo": "Finalizar API",
  "descricao": "Terminar o endpoint de usuários",
  "status": "em_andamento",
  "id_quadro": 1,
  "data_criacao": "2025-04-27T13:45:00Z"
}
```

### Quadro

```json
{
  "id": 1,
  "nome": "Projeto Kanban API",
  "descricao": "Quadro para controle das tarefas da API."
}
```

---

## 📊 Futuras Implementações

- Autenticação de usuários (JWT)
- Integração com banco de dados (MySQL ou PostgreSQL)
- Sistema de permissões e roles
- Documentação automática com Swagger

---

## 🚀 Como Rodar o Projeto Localmente

1. Clone o repositório:

```bash
git clone https://github.com/daniilooo/kanban.git
```

2. Entre na pasta do projeto:

```bash
cd kanban/api
```

3. Instale as dependências:

```bash
composer install
```

4. Configure seu servidor Apache para apontar para a pasta `/api`, ou use o PHP embutido para testes:

```bash
php -S localhost:8000
```

---

## 👥 Autor

Desenvolvido por [Danilo Franco](mailto\:engdanilofranco@gmail.com).

---

## 🌍 Licença

Este projeto está licenciado sob a Licença MIT.

