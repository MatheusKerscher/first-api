# API REST para praticar conhecimentos

Este projeto é uma API REST desenvolvida com **Node.js**, **Express**, **Sequelize** e **Swagger** para documentação interativa. Feita para praticar conhecimentos, possui as seguintes entidades cursos, categorias (para os cursos), pessoas (alunos e docentes) e matriculas.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Sequelize ORM](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Nodemon](https://www.npmjs.com/package/nodemon)

---

## ⚙️ Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/MatheusKerscher/first-api.git
cd first-api
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` com as seguintes variáveis (baseado no `.env.example`):

```env
DB_USER=<Seu usuário>
DB_PASSWORD=<Sua senha>
DB_DATABASE=<Sua database>
```

> 💡 Em `src\database\config\config.js` você pode mudar o `dialect` para `mysql`, `sqlite`, etc., dependendo do seu banco.

### 4. Execute as migrations

```bash
npx sequelize-cli db:migrate
```

### 5. (Opcional) Execute os seeders

```bash
npx sequelize-cli db:seed:all
```

### 6. Inicie o servidor

```bash
npm run dev
```

---

## 📚 Acessando a Documentação da API (Swagger)

Após iniciar o servidor, abra o navegador em:

```
http://localhost:3000/api-docs
```

Lá você verá a interface Swagger com todos os endpoints documentados, exemplos de uso, parâmetros, retornos e possíveis erros.

---

## 🛠 Scripts Disponíveis

| Comando                        | Descrição                                 |
|-------------------------------|-------------------------------------------|
| `npm run dev`                 | Inicia em modo desenvolvimento (nodemon)  |
| `npx sequelize-cli db:migrate`| Executa as migrations                     |
| `npx sequelize-cli db:seed:all` | Popula o banco com dados iniciais       |

---

## ✍️ Autor

Desenvolvido por **Matheus Kerscher**  
GitHub: [@MastheusKerscher](https://github.com/MatheusKerscher)  
