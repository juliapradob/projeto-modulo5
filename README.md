
# Livrasilia: a plataforma de gestão de estoque e clientes que você não sabia que precisava!

A Livrasilia é uma plataforma SPA de gestão de estoque e base de clientes criada para o projeto final do curso de Desenvolvimento Web Full Stack da Resilia Educação. Criada com um front-end em React.js consumindo uma API Rest desenvolvida em Node.js.

![tela de login](https://github.com/juliapradob/projeto-modulo5/blob/main/src/images/tela-login.PNG?raw=true)

## Tecnologias e ferramentas utilizadas

 - React.js
 - Npm
 - Insomnia/Postman
 - Hooks personalizados
 - Styled-Components
 - React-Router-Dom
 - Animação CSS
 - Axios
 - Figma
 - Heroku
 - Vercel
 - Canva
 - Jira

## Inicialização da aplicação via terminal (local)

No terminal de sua escolha, clone o repositório:

```bash
git clone https://github.com/juliapradob/projeto-modulo5.git
```

Vá até o diretório do projeto:

```bash
cd projeto-modulo5
```

Instale as dependências:

```bash
npm install 
```

Inicie o servidor local:

```bash
npm start
```

### Deploy da aplicação
O site em funcionamento pode ser acessado [aqui](https://projeto-modulo5.vercel.app/).

### Dados de login

Para entrar na plataforma, utilize os seguintes dados de login:

>E-mail: gestao@livrasilia.com.br
>
>Senha: livrasilia123

## Endpoints e funcionalidades

A aplicação será inicializada na URL `http://127.0.0.1:5173/` na página de login, e as rotas de cada página foram definidas através do `react-router-dom`. As entidades utilizadas da API Livrasilia foram a de `Clientes` e `Livros`, os endpoints da API podem ser acessados na [documentação da API](https://github.com/juliapradob/projeto-modulo4) e nos [arquivos de requisições](https://github.com/juliapradob/projeto-modulo5/tree/main/src/services) na pasta `services`.

### Home

Após realizar o login, o usuário será redirecionado a página inicial de rota `/home`, nesta página será selecionado qual categoria vai ser gerenciada: `Clientes` ou `Livros`.


### Exibe todos os itens de clientes

```
  http://127.0.0.1:5173/clientes
```

### Exibe todos os itens de livros

```
  http://127.0.0.1:5173/livros
```

### Cadastro de clientes

Ao clicar no botão `Adicionar cliente` o usuário é direcionado para a página:

```
 http://127.0.0.1:5173/cria-cliente
```

Para o cadastro bem-sucedido de novos clientes, siga as instruções a seguir:

| Parâmetro   | Tipo       | Requisitos                           |
| :---------- | :--------- | :---------------------------------- |
| nome | `string` | **Obrigatório**. Precisa conter de 3 a 50 caracteres. |
| e-mail | `string` | **Obrigatório**. Precisa estar no formato `email@email.<alguma coisa>` |
| telefone | `number` | **Obrigatório**. Precisa ser no formato: DDD + 9 números |
| CPF | `number` | **Obrigatório**. Deve conter 11 números |

### Cadastro de livros
 
Ao clicar no botão `Adicionar livro` o usuário é direcionado para a página:
 
```
 http://127.0.0.1:5173/cria-livro
```

Para o cadastro bem-sucedido de novos livros, siga as instruções a seguir:

| Parâmetro   | Tipo       | Requisitos                           |
| :---------- | :--------- | :---------------------------------- |
| nome | `string` | **Obrigatório**. Precisa conter de 1 a 5633 caracteres |
| autor | `string` | **Obrigatório**. Precisa conter mais que 2 caracteres |
| gênero | `string` | **Obrigatório**. Precisa conter mais que 3 caracteres |
| valor | `number` | **Obrigatório**. Precisa ser um número inteiro |

 
### Editar itens
 
 Para editar itens cadastrados, selecione o botão `Editar` em `Ações` que irá redirecionar o usuário para uma nova página com a seguinte composição na rota:
 
 #### Clientes
 
 (URL)/edita-cliente/(número do ID)
 
 ```
 http://127.0.0.1:5173/edita-cliente/1
 ```
 
 #### Livros
 
 (URL)/edita-livro/(número do ID)
 
 ```
 http://127.0.0.1:5173/edita-livro/1
 ```
 
### Deletar itens
 
Para deletar itens, basta clicar no botão `Deletar` em `Ações` na tabela. Um alerta de confirmação irá aparecer na tela e o usuário poderá confirmar ou cancelar a operação.
 
 ![image](https://user-images.githubusercontent.com/79461028/189399148-68a49fda-10bf-4bbf-a471-c399205db4d5.png)
 
 Caso confirmada a operação, uma mensagem de sucesso aparecerá na tela.


## Ferramenta de busca

Você pode buscar por clientes ou livros específicos através da busca no site utilizando o atributo "nome" como referência.

## Tratamento de erros 

Caso ocorra algum erro na aplicação um alerta de erro com uma mensagem aparecerá na tela. Em exemplo, ao cadastrar um cliente, caso algum campo não tenha sido preenchido corretamente, a seguinte mensagem irá aparecer:

![image](https://user-images.githubusercontent.com/79461028/189401410-a3392117-ae54-4477-a4eb-9db3a85447ec.png)

Para outros erros o procedimento é o mesmo.
 
## Referências 

 - [Vite](https://vitejs.dev/) - Ferramenta front-end utlizada na inicialização do projeto React.
 - [React.js](https://reactjs.org/) - Biblioteca javascript utlizada para interface do projeto.
 - [React Router](https://reactrouter.com/en/main) - Pacote para auxiliar na navegação entre as páginas com rotas.
 - [Styled-components](https://styled-components.com/docs) - Documentação da biblioteca que possibilita escrever códigos CSS dentro do JavaScript.
 - [Axios](https://axios-http.com/docs/intro) - Cliente HTTP utilizado para fazer as requisições da API.
 - [Node.js](https://nodejs.org/pt-br/) - Ambiente de execução JavaScript.
 - [Livrasilia API](https://github.com/juliapradob/projeto-modulo4) - API REST utilizada no back-end do projeto.
 
 
## Contato dos desenvolvedores

 - [Camila Xavier](https://www.linkedin.com/in/camila-reis-xavier/)
 - [Gabriella Rodrigues](https://www.linkedin.com/in/gabirodrigues-rocha/)
 - [Julia Prado](https://www.linkedin.com/in/juliapradob/)
 - [Karina Maciel](https://www.linkedin.com/in/karinamottamaciel/)
 - [Vitor Augusto](https://www.linkedin.com/in/vitor-aam/)
