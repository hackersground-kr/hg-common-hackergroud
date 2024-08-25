FROM node:alpine as build
WORKDIR /app

COPY package.json /app
RUN npm install --silent

COPY . /app

RUN npm run build

ENTRYPOINT ["PORT=80", "npm", "start"]