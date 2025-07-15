Integrating Prisma with Nest JS
1. Setup NestJS project
2. Install and initialize Prisma
- npm install @prisma/client
- npm install prisma --save-dev
- npx prisma init --datasource-provider postgresql --output ../generated/prisma
(to create schema.prisma and .env)
- configure database connection (update your .env)
- define data models in schema.prisma
3. Generate Prisma Client
- npx prisma generate
4. Integrate Prisma with NestJS
5. Use Prisma in Repositories
6. Use Repositories in Services
7. Use Services in Controllers
8. Configure App Module
9. Run and Test the App