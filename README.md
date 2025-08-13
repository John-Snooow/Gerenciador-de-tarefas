# Gerenciador-de-tarefas
desafioproposto pela Rocketseat
# Agendamento-Pet-Shop

# 📝 Gerenciador de Tarefas

<div align="center">
  <img alt="Rocketseat Logo" src="https://avatars.githubusercontent.com/u/28929274?s=200&v=4" width="100">
  
  <p>🚀 <strong>Desafio proposto pela Rocketseat</strong></p>
  
  <p align="center">
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/John-Snooow/Gerenciador-de-tarefas">
    <img alt="GitHub" src="https://img.shields.io/github/license/John-Snooow/Gerenciador-de-tarefas">
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/John-Snooow/Gerenciador-de-tarefas">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/John-Snooow/Gerenciador-de-tarefas">
  </p>
</div>

---

## 📋 Sobre o Projeto

O **Gerenciador de Tarefas** é uma aplicação desenvolvida como desafio da **Rocketseat**, focada em proporcionar uma experiência completa de gerenciamento de tarefas para usuários e equipes. O projeto implementa funcionalidades essenciais de um sistema de produtividade moderno.

### ✨ Funcionalidades

- 🔐 **Autenticação de usuários**
- 📝 **Criar, editar e excluir tarefas**
- 🏷️ **Categorização por status** (Pendente, Em Progresso, Concluída)
- ⚡ **Sistema de prioridades** (Baixa, Média, Alta)
- 👥 **Atribuição de tarefas para membros da equipe**
- 📊 **Dashboard com métricas das tarefas**
- 🔍 **Busca e filtros avançados**
- 📱 **Interface responsiva**
- 🌙 **Modo escuro/claro**

---

## 🚀 Tecnologias Utilizadas

### Frontend
- **React.js** / **Next.js** - Interface do usuário
- **TypeScript** - Tipagem estática
- **Tailwind CSS** / **Styled Components** - Estilização
- **React Hook Form** - Gerenciamento de formulários
- **React Query** - Gerenciamento de estado do servidor

### Backend
- **Node.js** - Ambiente de execução
- **Express** / **Fastify** - Framework web
- **Prisma** / **TypeORM** - ORM
- **PostgreSQL** / **MySQL** - Banco de dados
- **JWT** - Autenticação
- **Bcryptjs** - Criptografia de senhas

### DevOps & Ferramentas
- **Docker** - Containerização
- **ESLint** - Linting
- **Prettier** - Formatação de código
- **Husky** - Git hooks

---

## 📦 Instalação e Configuração

### Pré-requisitos

- **Node.js** (versão 16 ou superior)
- **npm** / **yarn** / **pnpm**
- **Docker** (opcional)
- **PostgreSQL** / **MySQL**

### 1. Clone o repositório

```bash
git clone https://github.com/John-Snooow/Gerenciador-de-tarefas.git
cd Gerenciador-de-tarefas
```

### 2. Instale as dependências

```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na pasta `backend` com as seguintes variáveis:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/taskmanager"

# JWT
JWT_SECRET="your-super-secret-jwt-key"
JWT_EXPIRES_IN="7d"

# Server
PORT=3333

# Frontend URL
FRONTEND_URL="http://localhost:3000"
```

### 4. Execute as migrações do banco de dados

```bash
cd backend
npx prisma migrate dev
npx prisma generate
```

### 5. Inicie a aplicação

```bash
# Backend (porta 3333)
cd backend
npm run dev

# Frontend (porta 3000)
cd frontend
npm run dev
```

A aplicação estará disponível em:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:3333

---

## 🐳 Executando com Docker

```bash
# Clone o repositório
git clone https://github.com/John-Snooow/Gerenciador-de-tarefas.git
cd Gerenciador-de-tarefas

# Execute com Docker Compose
docker-compose up -d
```

---

## 📱 Como Usar

### 1. **Cadastro/Login**
- Acesse a aplicação e crie uma conta
- Faça login com suas credenciais

### 2. **Criando Tarefas**
- Clique em "Nova Tarefa"
- Preencha título, descrição, prioridade e prazo
- Atribua a tarefa para você ou um membro da equipe

### 3. **Gerenciando Tarefas**
- Use os filtros para organizar suas tarefas
- Altere o status arrastando entre colunas (Kanban)
- Edite ou exclua tarefas conforme necessário

### 4. **Dashboard**
- Visualize métricas de produtividade
- Acompanhe o progresso da equipe
- Identifique gargalos e oportunidades

---

## 🎨 Screenshots

<div align="center">

### 🏠 Dashboard
![Dashboard](./docs/screenshots/dashboard.png)

### 📋 Lista de Tarefas
![Tasks](./docs/screenshots/tasks.png)

### 📊 Kanban Board
![Kanban](./docs/screenshots/kanban.png)

</div>

---

## 🧪 Testes

```bash
# Testes unitários
npm run test

# Testes de integração
npm run test:integration

# Coverage
npm run test:coverage
```

---

## 📚 API Documentation

### Endpoints Principais

#### Autenticação
- `POST /auth/register` - Cadastro de usuário
- `POST /auth/login` - Login
- `POST /auth/refresh` - Renovar token

#### Tarefas
- `GET /tasks` - Listar tarefas
- `POST /tasks` - Criar tarefa
- `PUT /tasks/:id` - Atualizar tarefa
- `DELETE /tasks/:id` - Excluir tarefa

#### Usuários
- `GET /users/profile` - Perfil do usuário
- `PUT /users/profile` - Atualizar perfil

Para documentação completa da API, acesse: `/api/docs` após iniciar o servidor.

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Siga os passos abaixo:

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

### 📋 Diretrizes de Contribuição

- Siga o padrão de código estabelecido
- Escreva testes para novas funcionalidades
- Documente alterações significativas
- Use commits semânticos (feat, fix, docs, etc.)

---

## 🛣️ Roadmap

- [ ] Notificações push
- [ ] Integração com calendário
- [ ] Relatórios avançados
- [ ] Aplicativo mobile
- [ ] Integração com Slack/Teams
- [ ] Sistema de templates de tarefas
- [ ] Automações e workflows

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

<div align="center">
  <img src="https://github.com/John-Snooow.png" width="100" style="border-radius: 50%;">
  
  **John Snow**
  
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/john-snow)
  [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/John-Snooow)
</div>

---

## 🙏 Agradecimentos

- **[Rocketseat](https://rocketseat.com.br)** pela proposta do desafio
- Comunidade da Rocketseat pelo suporte
- Todos os contribuidores do projeto

---

<div align="center">
  <p>⭐ Se este projeto te ajudou, deixe uma star!</p>
  
  **[⬆ Voltar ao topo](#-gerenciador-de-tarefas)**
</div>
