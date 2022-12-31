FROM node:18.11.0-alpine3.15

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY .env.dev .env

RUN npm install

COPY . .
RUN npm run build

EXPOSE 8000
CMD [ "node", "./dist/index.js" ]