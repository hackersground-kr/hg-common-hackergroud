FROM node:alpine as build
WORKDIR /app

COPY package.json /app
RUN npm install --silent

COPY . /app

EXPOSE 3000

ENTRYPOINT ["npm", "start"]