FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
COPY dist/ ./dist/

RUN npm run install:docker

CMD ["npm", "start"]
