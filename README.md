# One Bit Code - Loja virtual (teste técnico)

Essa é a solução apresentada para o desafio de simulação de processo seletivo realizada com os alunos do curso Programador Full Stack Javascript Profissional.

## Índice

- [O Desafio](#o-desafio)
- [Screenshot](#screenshot)
- [Funcionalidades](#funcionalidades)
- [Rotas](#Rotas)
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
- Painel Admin: o admin é registrado manualmente no banco de dados por questões de segurança, logando com um usuário admin é possível criar, modificar e excluir produtos.
- Filtro de Itens: na tela inicial e no painel admin é possível filtrar os produtos por nome e/ou tags
- Carrinho:
  - Na tela de detalhes do produto é possível adicionar itens ao carrinho
  - Na tela carrinho são listados todos os itens no carrinho do usuário, além do calor total dos produtos.

 ### Rotas

- Middleware* WithAuth: req.headers["x-access-token"]

- api/users
  - /register - POST req body = { name, email, password } <br/> 
        res: status(200), response data ={success(boolean), message(string), user(obj)} <br/>
             status(400), response data = { error(boolean), message(string) }<br/>
             <br/>
  - /login - POST req body = { email(string), password(string) }<br/>
        res: res.status(200). response data = {<br/>
        user: { email(string), name(string), admin(boolean) },<br/>
        token(string, JWT token),<br/>
        success(boolean)<br/>
        }<br/>
        status(400), response data = { error(boolean), message(string) }<br/>
         <br/>
  - /cart WithAuth*<br/>
      POST req body = {productid}<br/>
        res.status(200) response data = { message(string) };<br/>
        status(400), response data = { error(boolean), message(string) }<br/>
      GET WithAuth*<br/>
         res.status(200) response data = { items(obj) };<br/>
         res.status(401) response data = { message(string) };<br/>
      <br/>
  - /removefromcart - POST req body = {productid(string)}<br/>
        res.status(200) response data = { message(string) };<br/>

- api/products
  - /getall - GET response data = {products(array), productImages(array)}<br/>
      <br/>
  - /getone - POST req body = {id(string)}<br/>
        res.status(200) response data = {product(obj), productImages(array)}<br/>
      <br/>
  - /sendproduct - POST req body = {name(string), price(number), description(string), bar_code(string), tags(string, tags separadas por virgula)}<br/>
        res.status(200) response data = {product(obj)}<br/>
        <br/>
  - /update - POST req body = {field('name', 'tags', 'price', 'description'), id(string), newValue(string)}<br/>
        res.status(200) response data = {product(obj)}<br/>
        <br/>
  - /uploadimage - POST req body = {formData={file, infos}, headers= "Content-Type": "application/json" }
        res.status(200) response data = { success(boolean), productImage(obj) }<br/>
        <br/>
  - /deleteimage - POST req body = {id(string)}<br/>
        res.status(200) response data = { message(string) }<br/>
        <br/>
  - /delete - POST req body = {id(string)}<br/>
        res.status(200) response data = { message(string) }<br/>
      
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
