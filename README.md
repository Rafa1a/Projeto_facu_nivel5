# Projeto Livro: Gerenciamento de Livros com Múltiplos Clientes

Este projeto demonstra um sistema de gerenciamento de livros com um servidor Node.js e três clientes front-end diferentes: Angular, React e Next.js. O servidor fornece uma API REST para acessar os dados dos livros, enquanto os clientes consomem essa API para exibir e gerenciar os livros.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
livro-servidor/          # Servidor Node.js com Express e Mongoose
├── app.js              # Arquivo principal do servidor
├── bin/www            # Script de inicialização do servidor
├── modelo/            # Modelos de dados (DAO)
│   └── livro-dao.js
├── package.json        # Arquivo de configuração do servidor
├── public/             # Arquivos estáticos
├── routes/             # Rotas da API
│   ├── index.js
│   ├── livros.js
│   └── users.js
└── views/              # Views (usando EJS)
    ├── error.ejs
    └── index.ejs
clientes/               # Clientes front-end
├── livros-angular/     # Cliente Angular
├── livros-next/       # Cliente Next.js
└── livros-react/      # Cliente React (não implementado neste exemplo)
```

## Servidor (Node.js)

O servidor Node.js utiliza o framework Express para criar a API REST e o Mongoose para interagir com um banco de dados MongoDB.

**Dependências:**

* cookie-parser: Para gerenciar cookies.
* cors: Para habilitar CORS (Cross-Origin Resource Sharing).
* debug: Para depuração.
* ejs: Template engine para renderizar as views.
* express: Framework web para Node.js.
* http-errors: Para criar erros HTTP.
* mongoose: ODM (Object Data Mapper) para MongoDB.
* morgan: Middleware para logging de requisições HTTP.

**Rotas da API:**

* `/livros`:
    * `GET /livros`: Retorna todos os livros.
    * `GET /livros/:id`: Retorna um livro específico pelo ID.
    * `POST /livros`: Inclui um novo livro.
    * `DELETE /livros/:id`: Exclui um livro pelo ID.
* `/`: Rota principal (renderiza a view `index.ejs`).
* `/users`: Rota de exemplo (retorna "respond with a resource").

## Clientes

### Angular

O cliente Angular consome a API REST do servidor para exibir e gerenciar os livros. Ele usa o `ControleLivrosService` para se comunicar com a API e o `ControleEditoraService` para obter informações sobre as editoras.

**Componentes:**

* `LivroListaComponent`: Exibe a lista de livros e permite excluí-los.
* `LivroDadosComponent`: Permite cadastrar novos livros.

### Next.js

O cliente Next.js também consome a API REST do servidor. Ele utiliza componentes como `Menu`, `LinhaLivro` e `Button` para construir a interface do usuário.  As páginas `LivroLista` e `LivroDados` permitem visualizar e adicionar livros, respectivamente. Ele também possui endpoints de API próprios (`/api/livros` e `/api/editoras`) que atuam como proxy para o servidor principal, facilitando o acesso aos dados.

### React

O cliente React não está implementado neste exemplo, mas a estrutura do projeto prevê sua inclusão.

## Instalação e Execução

**Servidor:**

1. Navegue até o diretório `livro-servidor/`.
2. Execute `npm install` para instalar as dependências.
3. Execute `npm start` para iniciar o servidor.

**Angular:**

1. Navegue até o diretório `clientes/livros-angular/`.
2. Execute `npm install` para instalar as dependências.
3. Execute `ng serve` para iniciar o cliente Angular.

**Next.js:**

1. Navegue até o diretório `clientes/livros-next/`.
2. Execute `npm install` para instalar as dependências.
3. Execute `npm run dev` para iniciar o cliente Next.js.


## Próximos Passos

* Implementar o cliente React.
* Adicionar mais funcionalidades, como edição de livros.
* Implementar autenticação e autorização.
* Melhorar o design e a usabilidade dos clientes.
* Implementar testes unitários e de integração.
* Adicionar documentação mais detalhada para cada cliente e para a API do servidor.


Este README fornece uma visão geral do projeto.  Para mais detalhes, consulte o código-fonte e os arquivos de configuração de cada componente.
