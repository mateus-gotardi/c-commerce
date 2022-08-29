# One Bit Code - Loja virtual (teste técnico)

Essa é a solução apresentada para o desafio de simulação de processo seletivo realizada com os alunos do curso Programador Full Stack Javascript  Profissional.

## Índice

- [O Desafio](#o-desafio)
- [Screenshot](#screenshot)
- [Funcionalidades](#funcionalidades)
- [Meu Processo](#meu-processo)
  - [Feito com](#feito-com)
  - [Banco de dados](#banco-de-dados)
  - [Ordem de Trabalho](#ordem-de-trabalho)
  
## O Desafio

Desenvolva uma aplicação para manipulação de produtos, que tenha como principais funcionalidades o CRUD básico e um carrinho para armazenar os produtos que o cliente esteja interessado em comprar. Você poderá escolher as tecnologias utilizadas e o layout/design da aplicação.

Requisitos:

- Deverá ser possível realizar as operações básicas (CRUD- Criar, Alterar, Deletar e Ler) com os produtos. Os dados do produto devem ser persistidos em um banco de dados de sua escolha.
- Deverá haver um carrinho que guarda os produtos que o cliente deseja comprar e calcula o valor total da compra no final.

### Screenshot

![Screenshot tela inicial (user ADMIN)](https://e-commerce-nextjs.s3.amazonaws.com/1661809333651-scr2.jpg)

### Funcionalidades

- Autenticação: 
  - O usuário não precisa se registrar para utilizar o site e colocar itens no carrinho, os itens ficarão armazenados localmente nesse caso.
  - Ao logar os itens do carrinho local são armazenados no banco de dados
- Painel Admin: o admin é setado manualmente no banco de dados por questões de segurança, logando com um usuário admin é possivel criar, modificar e excluir produtos.
- Filtro de Itens: na tela inicial e no painel admin é possivel filtrar os produtos por nome e/ou tags
- Carrinho:
  - Na tela de detalhes do produto é possível adicionar itens ao carrinho
  - Na tela carrinho são listados todos os itens no carrinho do usuário, além do calor total dos produtos.

## Meu Processo

### Feito Com

- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - Para Estilos
- [Sequelize](https://sequelize.org) - Para manipulação do banco de dados
- [PostgreSQL](https://www.postgresql.org) - Para armazenar os dados
- [AWS S3](https://aws.amazon.com/pt/s3/) - Para armazenar as imagens
- [multer](https://www.npmjs.com/package/multer) - Para enviar as imagens pára AWS
- [bcrypt](https://www.npmjs.com/package/bcrypt) - Para criptografar as senhas
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Para autenticação de usuário
- [axios](https://www.npmjs.com/package/axios) - Para efetuar requisições no back end react
- [JavaScript Cookie](https://www.npmjs.com/package/js-cookie) - Para armazenar o JWT no client-side

### Banco de dados

![Organização do banco de dados](https://e-commerce-nextjs.s3.amazonaws.com/1661810397801-imagem_2022-08-29_185952588.png)

### Ordem de trabalho

Comecei pelo planejamento do banco de dados no [DB - designer](https://app.dbdesigner.net) e criando as tabelas no postgreSQL pelo [PG-admin 4](https://www.pgadmin.org), em seguida criei meu next app, instalei as dependências, configurei a context API, configurei o sequelize e criei as rotas de back end pelo Next API. Em seguida criei sem nenhum tipo de estilo os componentes de admin, exibir todos os itens, detalhes de um item e carrinho conectadas com as suas respectivas requisições e funções básicas, com isso pronto configurei os filtros, e defini os estilos, acrescentei algumas melhorias em funções existentes e corrigi bugs
