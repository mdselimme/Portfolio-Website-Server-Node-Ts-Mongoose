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
```

Setup environment variables:

```bash
cp .env.example .env
```

Run the development server:

```bash
# using npm
npm run dev
```

---

## Folder Structure

```
Prisma-Blog/
│── node_modules/           # Dependencies
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
|        ┃ ┣ 📂modules # Application modules (user, auth, project, etc.)
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

# Api Endpoints Start:

How to implement your project with frontend. Here is your in details explanation.

server base url: `http://localhost:5000/api/v1`

## User Authentication And token documentation.

### 1./ User Register Endpoints:

- Config the .env file and give properties value:

**User Schema Model**

```env
USER_NAME=string
USER_EMAIL=string
USER_PASSWORD=string
USER_PHONE=number (11 digit mobile)
```

**Request Example Schema**

```env
USER_NAME=MD. KUTUB
USER_EMAIL=kutub@gmail.com
USER_PASSWORD=Ss@123456789
USER_PHONE=01731023545
```

**Response**

```json
{
  "name": "MD. KUTUB",
  "email": "kutub@gmail.com",
  "password": "$2b$10$Vi7HPy6lvxHTePAHoz9epOvJrgyZ6ctK63xTJwHbyCjU2J0LY0qWm",
  "role": "ADMIN",
  "isActive": "ACTIVE",
  "isVerified": true,
  "phone": "01731023545",
  "_id": "new ObjectId('68e7b7439fa23b2cdb710692')",
  "createdAt": "2025-10-09T13:23:15.636Z",
  "updatedAt": "2025-10-09T13:23:15.636Z"
}
```

### 2./ User Update Endpoints:

api url: http://localhost:5000/api/v1/user

method: `PATCH`

credentials: include

**User Update Schema Model**

```json
{
    "phone": string, (not more than 11 digit also it have to be bd number.)
    "photo": string, (valid url)
}
```

**Request Example Schema**

```json
{
    "phone": "01721023546",
    "photo": "https://i.ibb.co.com/Ld3HCkBP/team-6.jpg"
}
```

**Response**

```json
{
    "statusCode": 200,
    "success": true,
    "message": "User Updated Successfully.",
    "data": {
        "_id": "68dc3a5a25c768a2354cc34a",
        "name": "MD. KUTUB",
        "email": "kutub@gmail.com",
        "role": "ADMIN",
        "isActive": "ACTIVE",
        "isVerified": true,
        "phone": "01721023546",
        "createdAt": "2025-09-30T20:15:22.450Z",
        "updatedAt": "2025-10-09T13:33:02.642Z",
        "photo": "https://i.ibb.co.com/Ld3HCkBP/team-6.jpg"
    }
}
```

### 3./ User Get Me Endpoints:

api url: http://localhost:5000/api/v1/user/me

method: `GET`

credentials: include

**Response**

```json
{
    "statusCode": 200,
    "success": true,
    "message": "My profile retrieved Successfully.",
    "data": {
         "_id": "68dc3a5a25c768a2354cc34a",
        "name": "MD. KUTUB",
        "email": "kutub@gmail.com",
        "role": "ADMIN",
        "isActive": "ACTIVE",
        "isVerified": true,
        "phone": "01721023546",
        "createdAt": "2025-09-30T20:15:22.450Z",
        "updatedAt": "2025-10-09T13:33:02.642Z",
        "photo": "https://i.ibb.co.com/Ld3HCkBP/team-6.jpg"
    }
}
```

---

## Auth Login & Register Api Endpoints.

### 1./ User Login Endpoints:

api url: http://localhost:5000/api/v1/auth/login

method: `POST`

**Login Schema Model**

```json
{
     "email": string,
     "password": string
}
```

**Request Example Schema**

```json
{
     "email": "example@gmail.com",
     "password": "123456795"
}
```

**Response**

```json
{
    "statusCode": 200,
    "success": true,
    "message": "User logged in Successfully.",
    "data": {
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpX.....",
        "refreshToken": "eyJhbGciOiJIUz....",
        "user": {
            "_id": "68dc3a5a25c768a2354cc34a",
            "name": "MD. Example",
            "email": "example@gmail.com",
            "role": "ADMIN",
            "isActive": "ACTIVE",
            "isVerified": true,
            "phone": "01732566756",
            "createdAt": "2025-09-30T20:15:22.450Z",
            "updatedAt": "2025-10-09T13:33:02.642Z",
            "photo": "https://i.ibb.co.com/Ld3HCkBP/team-6.jpg"
        }
    }
}
```

### 2./ User LogOut Endpoints:

api url: http://localhost:5000/api/v1/auth/logout

method: `POST`

credential: true

**Response**

```json
{
    "statusCode": 200,
    "success": true,
    "message": "User logged out Successfully.",
    "data": null
}
```

### 3./ Refresh Token Endpoints:

api url: http://localhost:5000/api/v1/auth/refresh-token

method: `POST`

credential: true

**Response**

```json
{
    "statusCode": 200,
    "success": true,
    "message": "Access Token find Successfully.",
    "data": null
}
```

### 4./ User Login Endpoints:

api url: http://localhost:5000/api/v1/auth/reset-password

method: `POST`

**Reset Password Schema Model**

```json
{
    "oldPassword": string,
    "newPassword": string
}
```

**Request Example Schema**

```json
{
    "oldPassword": "12345654",
    "newPassword": "89662254"
}
```

**Response**

```json
{
    "success": true,
    "message": "User password reset successfully.",
    "data": null,
    "statusCode": 200
}
```

---

## Blogs Api Endpoints.

### 1./ Blog Create Endpoints:

api url: http://localhost:5000/api/v1/blog

method: `POST`

credentials: include

**Blog Create Schema Model:**

```json
{
  "title": string,
    "description": string,
    "thumbnail": string, (valid https url)
    "tags": [string],
    "isFeatured": boolean
}
```

**Request Example Schema:**

```json
 {
  "title": "Next.js SSR and SSG Explained",
  "description": "Understanding server-side rendering and static site generation in Next.js.",
  "thumbnail": "https://miro.medium.com/v2/1*_bJ2z2NRfTncHAv5UjUxwA.jpeg",
  "tags": ["nextjs", "react", "ssr"],
  "isFeatured": true
  }
```

**Response**

```json
{
    "statusCode": 201,
    "success": true,
    "message": "Blog Created Successfully.",
    "data": {
        "title": "Next.js SSR and SSG Explained",
        "author": "68dc3a5a25c768a2354cc34a",
        "description": "Understanding server-side rendering and static site generation in Next.js.",
        "thumbnail": "https://miro.medium.com/v2/1*_bJ2z2NRfTncHAv5UjUxwA.jpeg",
        "tags": [
            "nextjs",
            "react",
            "ssr"
        ],
        "isFeatured": true,
        "views": 0,
        "_id": "68e80f8f3291cf537bac6f5e",
        "createdAt": "2025-10-09T19:39:59.178Z",
        "updatedAt": "2025-10-09T19:39:59.178Z"
    }
}
```

### 2./ Blog Update Endpoints:

api url: http://localhost:5000/api/v1/blog/{objectId}

method: `PATCH`

credentials: include

**Blog Update Schema Model:**

```json
{
  "title": string,
  "description": string,
  "thumbnail": string, (valid https url)
  "tags": [string],
  "isFeatured": boolean
}
```

**Request Example Schema:**

```json
 {
  "title": "Next.js SSR and SSG Explained",
  "description": "Understanding server-side rendering and static site generation in Next.js.",
  "thumbnail": "https://miro.medium.com/v2/1*_bJ2z2NRfTncHAv5UjUxwA.jpeg",
  "tags": ["cats", "heelo", "murgin", "pen"]
  "isFeatured": false
  }
```

**Response**

```json
{
    "statusCode": 200,
    "success": true,
    "message": "Blog Updated Successfully.",
    "data": {
        "title": "Next.js SSR and SSG Explained",
        "author": "68dc3a5a25c768a2354cc34a",
        "description": "Understanding server-side rendering and static site generation in Next.js.",
        "thumbnail": "https://miro.medium.com/v2/1*_bJ2z2NRfTncHAv5UjUxwA.jpeg",
        "tags": ["cats", "heelo", "murgin", "pen"]
        "isFeatured": false,
        "views": 0,
        "_id": "68e80f8f3291cf537bac6f5e",
        "createdAt": "2025-10-09T19:39:59.178Z",
        "updatedAt": "2025-10-09T19:39:59.178Z"
    }
}
```

### 3./ Get A Blog Endpoints:

api url: http://localhost:5000/api/v1/blog/{objectId}

method: `GET`

**Response**

```json
{
    "statusCode": 200,
    "success": true,
    "message": "Blog retrieved Successfully.",
    "data": {
        "title": "Next.js SSR and SSG Explained",
        "author": "68dc3a5a25c768a2354cc34a",
        "description": "Understanding server-side rendering and static site generation in Next.js.",
        "thumbnail": "https://miro.medium.com/v2/1*_bJ2z2NRfTncHAv5UjUxwA.jpeg",
        "tags": ["cats", "heelo", "murgin", "pen"]
        "isFeatured": false,
        "views": 0,
        "_id": "68e80f8f3291cf537bac6f5e",
        "createdAt": "2025-10-09T19:39:59.178Z",
        "updatedAt": "2025-10-09T19:39:59.178Z"
    }
}
```

### 4./ Get ALL Blog Endpoints:

api url: http://localhost:5000/api/v1/blog

method: `GET`

**Response**

```json
{
    "statusCode": 200,
    "success": true,
    "message": "Blog retrieved Successfully.",
    "data":[
         {
        "title": "Next.js SSR and SSG Explained",
        "author": "68dc3a5a25c768a2354cc34a",
        "description": "Understanding server-side rendering and static site generation in Next.js.",
        "thumbnail": "https://miro.medium.com/v2/1*_bJ2z2NRfTncHAv5UjUxwA.jpeg",
        "tags": ["cats", "heelo", "murgin", "pen"]
        "isFeatured": false,
        "views": 0,
        "_id": "68e80f8f3291cf537bac6f5e",
        "createdAt": "2025-10-09T19:39:59.178Z",
        "updatedAt": "2025-10-09T19:39:59.178Z"
    },
    ........
    ]
}
```

### 5./ DELETE A Blog Endpoints:

api url: http://localhost:5000/api/v1/blog/{objectId}

method: `DELETE`

credentials: include

**Response**

```json
{
    "statusCode": 200,
    "success": true,
    "message": "Blog deleted Successfully.",
    "data": null
}
```

---

## Projects Api Endpoints.

### 1./ Project Create Endpoints:

api url: http://localhost:5000/api/v1/project

method: `POST`

credentials: include

**Project Create Schema Model:**

```json
{
  "title": string,
  "thumbnail": string,
  "description": string,
  "technologyUsed": [sting],
  "clientLiveLink": string, //(optional)
  "serverLiveLink": string, //(optional)
  "serverCodeLink": string, //(optional)
  "clientCodeLink": string, //(optional)
}
```

**Request Example Schema:**

```json
{
    "title": "E-Commerce Website",
    "thumbnail": "https://example.com/thumbnails/ecommerce.png",
    "description": "A full-stack e-commerce website with shopping cart and payment integration.",
    "clientLiveLink": "https://ecommerce-client.vercel.app",
    "serverLiveLink": "https://ecommerce-api.onrender.com",
    "serverCodeLink": "https://github.com/username/ecommerce-server",
    "clientCodeLink": "https://github.com/username/ecommerce-client",
    "technologyUsed": ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"]
  }
```

**Response**

```json
{
    "statusCode": 201,
    "success": true,
    "message": "Project Created Successfully.",
    "data": {
        "user": "68dc3a5a25c768a2354cc34a",
        "title": "E-Commerce Website",
        "thumbnail": "https://example.com/thumbnails/ecommerce.png",
        "description": "A full-stack e-commerce website with shopping cart and payment integration.",
        "clientLiveLink": "https://ecommerce-client.vercel.app",
        "serverLiveLink": "https://ecommerce-api.onrender.com",
        "clientCodeLink": "https://github.com/username/ecommerce-client",
        "serverCodeLink": "https://github.com/username/ecommerce-server",
        "technologyUsed": ["React", "Node.js","Express","MongoDB","TailwindCSS"],
        "_id": "68e8696ddfe1dffedf0e71a4",
        "createdAt": "2025-10-10T02:03:25.905Z",
        "updatedAt": "2025-10-10T02:03:25.905Z"
    }
}
```

### 2./ Project Update Endpoints:

api url: http://localhost:5000/api/v1/project/{objectId}

method: `PATCH`

credentials: include

**Project Update Schema Model:**

```json
{
  "title": string,//(optional)
  "thumbnail": string,//(optional)
  "description": string,//(optional)
  "technologyUsed": [sting],//(optional)
  "clientLiveLink": string, //(optional)
  "serverLiveLink": string, //(optional)
  "serverCodeLink": string, //(optional)
  "clientCodeLink": string, //(optional)
}
```

**Request Example Schema:**

```json
 {
  "title": "E-Commerce Website",
  "thumbnail": "https://example.com/thumbnails/ecommerce.png",
  "description": "A full-stack e-commerce website with shopping cart and payment integration.",
  "clientLiveLink": "https://ecommerce-client.vercel.app",
  "serverLiveLink": "https://ecommerce-api.onrender.com",
  "clientCodeLink": "https://github.com/username/ecommerce-client",
  "serverCodeLink": "https://github.com/username/ecommerce-server",
  "technologyUsed": ["React", "Node.js","Express","MongoDB","TailwindCSS"],
  }
```

**Response**

```json
{
    "statusCode": 201,
    "success": true,
    "message": "Project Updated Successfully.",
    "data": null
}
```

### 3./ Get A Project Endpoints:

api url: http://localhost:5000/api/v1/project/{objectId}

method: `GET`

**Response**

```json
{
    "statusCode": 200,
    "success": true,
    "message": "Blog retrieved Successfully.",
    "data":  "_id": "68e8696ddfe1dffedf0e71a4",
        "user": {
            "_id": "68dc3a5a25c768a2354cc34a",
            "name": "MD. SELIM",
            "photo": "https://i.ibb.co.com/Ld3HCkBP/team-6.jpg"
        },
        "title": "E-Commerce Website",
        "thumbnail": "https://example.com/thumbnails/ecommerce.png",
        "description": "A full-stack e-commerce website with shopping cart and payment integration.",
        "clientLiveLink": "https://ecommerce-client.vercel.app",
        "serverLiveLink": "https://ecommerce-api.onrender.com",
        "clientCodeLink": "https://github.com/username/ecommerce-client",
        "serverCodeLink": "https://github.com/username/ecommerce-server",
        "technologyUsed": ["React", "Node.js","Express","MongoDB","TailwindCSS"],
        "createdAt": "2025-10-10T02:03:25.905Z",
        "updatedAt": "2025-10-10T02:03:25.905Z"
}
```

### 4./ Get ALL Project Endpoints:

api url: http://localhost:5000/api/v1/project

method: `GET`

**Response**

```json
{
    "statusCode": 200,
    "success": true,
    "message": "Project retrieved Successfully.",
    "data": [
        {
            "_id": "68e8696ddfe1dffedf0e71a4",
            "user": {
                "_id": "68dc3a5a25c768a2354cc34a",
                "name": "MD. SELIM",
                "photo": "https://i.ibb.co.com/Ld3HCkBP/team-6.jpg"
            },
            "title": "E-Commerce Website",
            "thumbnail": "https://example.com/thumbnails/ecommerce.png",
            "description": "A full-stack e-commerce website with shopping cart and payment integration.",
            "clientLiveLink": "https://ecommerce-client.vercel.app",
            "serverLiveLink": "https://ecommerce-api.onrender.com",
            "clientCodeLink": "https://github.com/username/ecommerce-client",
            "serverCodeLink": "https://github.com/username/ecommerce-server",
            "technologyUsed": ["React", "Node.js","Express","MongoDB","TailwindCSS"],
            "createdAt": "2025-10-10T02:03:25.905Z",
            "updatedAt": "2025-10-10T02:03:25.905Z"
        },
        ........
    ]
}
```

### 5./ DELETE A Project Endpoints:

api url: http://localhost:5000/api/v1/project/{objectId}

method: `DELETE`

credentials: include

**Response**

```json
{
    "statusCode": 200,
    "success": true,
    "message": "Project deleted Successfully.",
    "data": null
}
```

---
