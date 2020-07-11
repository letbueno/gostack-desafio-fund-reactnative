![68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f626f6f7463616d702d676f737461636b2f6865616465722d6465736166696f732e706e67](https://user-images.githubusercontent.com/50913322/87230209-c2d41600-c384-11ea-9339-71a8deacfccc.png)


<h1 align="center">:rocket: Desafio 06 do Nível 03 do Bootcamp GoStack 11.0 - Fundamentos do React Native :rocket:</h1>

A proposta deste desafio era testar os conhecimentos do módulo Fundamentos do React Native. Onde consistia em implementar front-end da aplicação fake API disponibilizada dentro do template, para realizar compras de produtos na aplicação GoMarketPlace.

### Funcionalidades Implementadas :bookmark_tabs:
- Listar os produtos da API fake. :heavy_check_mark:
- Adicionar itens ao carrinho de compras. :heavy_check_mark:
- Exibir os itens no carrinho de compras, com sua quantidade, preço e a soma total. :heavy_check_mark:
- Aumentar ou diminuir a quantidade dos itens no carrinho. :heavy_check_mark:
- Salvar e alterar dados no AsyncStorage. :heavy_check_mark:


### Como Rodar a Aplicação :desktop_computer:
Eu utilizei o [Android Studio](https://developer.android.com/studio) para emular um dispositivo Android para este projeto. 

- No terminal, clone o projeto:

```
https://github.com/letbueno/gostack-desafio-fund-reactnative/
```

- Instale as dependências:
```
yarn
```
- Para executar a Fake API:
```
yarn json-server server.json -p 3333
```
- Para executar a aplicação:
```
yarn start
```

```
yarn android
```

### Passo a Passo com imagens	:technologist:
#### Página inicial do GoMarketPlace

![gomarketplaceinicial](https://user-images.githubusercontent.com/50913322/87235531-3856db00-c3b3-11ea-8734-b4159cc90bd1.jpg)

#### Página Carrinho de Compras do GoMarketPlace

![gomarketplacedashboard](https://user-images.githubusercontent.com/50913322/87235523-31c86380-c3b3-11ea-924d-25655433f2a4.jpg)

#### Passo a Passo de como inserir um produto no carrinho e calcular o preço total.

![ezgif-2-7bfee6c26661](https://user-images.githubusercontent.com/50913322/87235563-8966cf00-c3b3-11ea-8de8-7df830de5e56.gif)


### Como Rodar os Testes? :desktop_computer:
Os testes foram desenvolvidos pela Rocketseat, para testar se as funcionalidades seguem os parâmetros indicados:
- Listar todos os produtos. :heavy_check_mark:
- Criar uma categoria de transação (caso não exista ainda) ao criar uma nova transação. :heavy_check_mark:
- Adicionar um produto ao carrinho. :heavy_check_mark:
- Permitir aumentar ou diminuir a quantidade de itens do carrinho, desde que não chegue ao número negativo. :heavy_check_mark:
- Poder navegar nas abas do aplicativo. :heavy_check_mark:
- Salvar todas as alterações no AsyncStorage para ficar gravado. :heavy_check_mark:
- Carregar todos os produtos cadastrados inseridos no AsyncStorage. :heavy_check_mark:


Para rodar o teste:
```
yarn test
```
### Dependências e Tecnologias :books: 

- [React Native](https://reactnative.dev)
- [Javascript](https://devdocs.io/javascript/)
- [Typescript](https://www.typescriptlang.org/docs/home.html)
- [AsyncStorage](https://github.com/react-native-community/async-storage)
- [Axios](https://github.com/axios/axios)

### Participante: 
|Name|E-mail|Course|
| -------- | -------- | -------- |
|Leticia Bueno Martins|leticia.bueno.martins@gmail.com|Bootcamp GoStack 11.0|
