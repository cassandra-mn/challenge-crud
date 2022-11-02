# Desafio CRUD em Next.js <a href="https://challenge-crud-two.vercel.app/"><img src="https://slackmojis.com/emojis/61175-nextjs-modified/download" alt="readme-logo" width="40" height="40" align="center"></a>

A aplicação simula uma lista de contatos, em que você pode adicionar, buscar, atualizar e deletetar cada um deles.

## Deploy da aplicação

* [clique aqui](https://challenge-crud-two.vercel.app/)

## Como rodar em desenvolvimento

1. Clone esse repositório:

  ```bash
  git clone https://github.com/cassandra-mn/challenge-crud.git
  ```

2. Instale as dependências:

  ```bash
  npm install
  ```
  
3. Adicione o arquivo *.env* e popule-o de acordo com o *.env.example*, com a URL do seu banco de dados **mysql**, como por exemplo:

  ```js
  DATABASE_URL="mysql://${user}:${password}@localhost:3306/${db}"
  ```

4. Rode as migrações do banco de dados, gere os modelos e pré-popule o seu db:

  ```bash
  * npx prisma migrate dev
  * npx prisma generate 
  * npx prisma db seed
  ```
  
5. Rode o back-end com o seguinte comando:

  ```bash
  node src/server.js
  ```
  
6. Rode o front-end em desenvolvimento:

  ```bash
  npm run dev
  ```
## Para mais informações, entre em contato

[![Linkedin Badge](https://img.shields.io/badge/-Linkedin-blue?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/arthencia-nascimento)](https://www.linkedin.com/in/arthencia-nascimento)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-D14836?style=flat&logo=gmail&logoColor=white&link=mailto:badivia.f@gmail.com)](mailto:arthenciac@gmail.com)

