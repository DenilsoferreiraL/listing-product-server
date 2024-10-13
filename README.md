# API de Gestão de Produtos 

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white) 
![Express](https://img.shields.io/badge/Express-404D59?style=flat&logo=express&logoColor=white)
![CORS](https://img.shields.io/badge/CORS-enabled-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)
![npm](https://img.shields.io/badge/npm-v7.20.3-red)

Bem-vindo à API de Gestão de Produtos! Este projeto é uma simples API desenvolvida com Node.js e Express, que fornece acesso a uma lista de produtos. Aqui, você pode explorar os produtos, obter detalhes sobre seus favoritos e muito mais.

## Índice

- [API de Gestão de Produtos](#api-de-gestão-de-produtos)
  - [Índice](#índice)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Instalação](#instalação)
  - [Instale as Dependências](#instale-as-dependências)
  - [Iniciar o Servidor](#iniciar-o-servidor)
  - [Rotas da API](#rotas-da-api)
  - [Estrutura do Projeto](#estrutura-do-projeto)


## Tecnologias Utilizadas

- **Node.js**: Um ambiente de execução JavaScript no lado do servidor.
- **Express**: Um framework minimalista para criar servidores web.
- **CORS**: Um pacote que permite o compartilhamento de recursos entre diferentes domínios.
- **File System (fs)**: Para leitura de arquivos do sistema.

## Instalação

Para começar a usar esta API, siga as instruções abaixo:

   **Clone o repositório:**
   ```bash
   git clone https://github.com/DenilsoferreiraL/listing-product-server.git
   ```

## Instale as Dependências

Agora, instale as dependências necessárias com o seguinte comando:

```bash
npm install
```

## Iniciar o Servidor

Por fim, inicie o servidor com o comando:

```bash
node server.js
```
Após isso, você pode acessar a API em http://localhost:3000.

## Rotas da API

 Obter Todos os Produtos

- **URL:** `/produtos`
- **Método:** `GET`
- **Descrição:** Retorna uma lista de todos os produtos.
- **Resposta de Sucesso:** `200 OK`

**Exemplo de Resposta:**

```json
[
  {
    "id": 1,
    "name": "Baguette",
    "price": 17.99,
    "highlighted": true,
    "image": "https://img.freepik.com/fotos-gratis/delicioso-sanduiche-com-alface_144627-33579.jpg?t=st=1728690249~exp=1728693849~hmac=dca2ed2e496a9a1746bde383e704bce93f2698a3df5231d1893831394d6390b4&w=1380",
    "ingredients": ["Pão de baguete", "Alface", "Tomate", "Maionese"]
  },
  ...
]
```

 Obter Produtos Favoritos

- **URL:** `/favoritos`
- **Método:** `GET`
- **Parâmetro de Consulta:** `ids` (IDs de produtos favoritos separados por vírgula)
- **Descrição:** Retorna uma lista de produtos favoritos com base nos IDs fornecidos.
- **Resposta de Sucesso:** `200 OK`

**Exemplo de Chamada:**

```
/favoritos?ids=1,2
```

**Exemplo de Resposta:**

```json
[
  {
    "id": 1,
    "name": "Baguette",
    ...
  },
  ...
]
```

Obter Lista Simplificada de Produtos

- **URL:** `/lista-produtos`
- **Método:** `GET`
- **Descrição:** Retorna uma lista simplificada de produtos, incluindo apenas ID, nome, preço e destaque.
- **Resposta de Sucesso:** `200 OK`

**Exemplo de Resposta:**

```json
[
  {
    "id": 1,
    "name": "Baguette",
    "price": 17.99,
    "highlighted": true
  },
  ...
]
```
## Estrutura do Projeto

```bash
/LISTING-PRODUCT-SERVER
├── README.md          # README com instruções e informações sobre o projeto
├── server.js          # Arquivo principal que inicia o servidor
├── products.json      # Contém os dados dos produtos em formato JSON
├── package.json       # Configurações e dependências do projeto
└── ...                
```


