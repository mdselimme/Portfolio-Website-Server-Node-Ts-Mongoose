# Portfolio Website Server Site

It's a server site for a portfolio website. In this server site has an user manage his portfolio website dynamically. User can manage their website easily without any hassle.

## Backend Technology Stack

- **Language**: TypeScript
- **Runtime**: Node
- **Framework**: Express Js
- **Database**: Mongodb, Mongoose (ORM)
- **Authentication**: Jwt + bcrypt (Secure Password)
- **Validation**: Zod

---

## Features

- **User Authentication**:
  User can create an account with name, email, password and number. User can login for managed their portfolio site.
- **Blog**:
  User can write blog and can do crud operation.
- **Projects**:
  User can add their project for showcase their project.
- **Dashboard**:
  In dashboard page user can manage their portfolio website.

---

## Installation

Clone the repository:

```bash
git clone https://github.com/mdselimme/Portfolio-Website-Server-Node-Ts-Mongoose.git
cd Portfolio-Website-Server-Node-Ts-Mongoose
```

Install dependencies:

```bash
# using npm
npm install

# using yarn
yarn install

# using pnpm
pnpm install
```

Setup environment variables:

```bash
cp .env.example .env
```

Run the development server:

```bash
# using npm
npm run dev

# using yarn
yarn dev

# using pnpm
pnpm dev
```

---

## Folder Structure

```
Prisma-Blog/
│── node_modules/          # Dependencies
|-- 📦src
|        ┣ 📂app
|        ┃ ┣ 📂config       # Environment & configuration files
|        ┃ ┃ ┗ 📜envVariable.ts
|        ┃ ┣ 📂errorHelpers
|        ┃ ┃ ┣ 📜AppError.ts
|        ┃ ┃ ┣ 📜handleCastError.ts
|        ┃ ┃ ┣ 📜handleDuplicateError.ts
|        ┃ ┃ ┣ 📜handleValidationError.ts
|        ┃ ┃ ┗ 📜handleZodError.ts
|        ┃ ┣ 📂interfaces
|        ┃ ┃ ┣ 📜error.types.ts
|        ┃ ┃ ┗ 📜index.d.ts
|        ┃ ┣ 📂middleware
|        ┃ ┃ ┣ 📜checkUserAuth.ts
|        ┃ ┃ ┣ 📜globalErrorHandlers.ts
|        ┃ ┃ ┣ 📜notFound.ts
|        ┃ ┃ ┗ 📜validateSchemaRequest.ts
|        ┃ ┣ 📂modules # Application modules (posts, users, etc.)
|        ┃ ┃ ┣ 📂auth
|        ┃ ┃ ┃ ┣ 📜auth.controller.ts
|        ┃ ┃ ┃ ┣ 📜auth.route.ts
|        ┃ ┃ ┃ ┣ 📜auth.services.ts
|        ┃ ┃ ┃ ┗ 📜auth.validation.ts
|        ┃ ┃ ┣ 📂blog
|        ┃ ┃ ┃ ┣ 📜blog.controller.ts
|        ┃ ┃ ┃ ┣ 📜blog.interface.ts
|        ┃ ┃ ┃ ┣ 📜blog.model.ts
|        ┃ ┃ ┃ ┣ 📜blog.route.ts
|        ┃ ┃ ┃ ┣ 📜blog.service.ts
|        ┃ ┃ ┃ ┗ 📜blog.validate.ts
|        ┃ ┃ ┣ 📂project
|        ┃ ┃ ┃ ┣ 📜project.controller.ts
|        ┃ ┃ ┃ ┣ 📜project.interface.ts
|        ┃ ┃ ┃ ┣ 📜project.model.ts
|        ┃ ┃ ┃ ┣ 📜project.route.ts
|        ┃ ┃ ┃ ┣ 📜project.service.ts
|        ┃ ┃ ┃ ┗ 📜project.validate.ts
|        ┃ ┃ ┣ 📂stats
|        ┃ ┃ ┃ ┣ 📜stats.controller.ts
|        ┃ ┃ ┃ ┣ 📜stats.route.ts
|        ┃ ┃ ┃ ┗ 📜stats.service.ts
|        ┃ ┃ ┗ 📂user
|        ┃ ┃ ┃ ┣ 📜user.controller.ts
|        ┃ ┃ ┃ ┣ 📜user.interface.ts
|        ┃ ┃ ┃ ┣ 📜user.model.ts
|        ┃ ┃ ┃ ┣ 📜user.route.ts
|        ┃ ┃ ┃ ┣ 📜user.service.ts
|        ┃ ┃ ┃ ┗ 📜user.validate.ts
|        ┃ ┣ 📂router
|        ┃ ┃ ┗ 📜index.ts
|        ┃ ┗ 📂utils
|        ┃ ┃ ┣ 📜catchAsync.ts
|        ┃ ┃ ┣ 📜jwtTokenGenerate.ts
|        ┃ ┃ ┣ 📜seedCreateAdminUser.ts
|        ┃ ┃ ┣ 📜sendResponse.ts
|        ┃ ┃ ┣ 📜setTokenInCookie.ts
|        ┃ ┃ ┗ 📜userTokens.ts
|        ┣ 📜app.ts # Express app configuration
|        ┗ 📜server.ts # Server entry point
│── package.json           # Project metadata & scripts
│── package-lock.json      # Lockfile (npm)
│── tsconfig.json          # TypeScript configuration
│── README.md              # Documentation
```

---
