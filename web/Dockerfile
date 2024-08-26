FROM node:alpine as build
WORKDIR /app

COPY package.json /app
RUN npm install --silent

COPY . /app

FROM node:alpine as production
WORKDIR /app

COPY --from=build /app /app

COPY start.sh /app/start.sh
RUN chmod +x /app/start.sh

EXPOSE 3000

ENTRYPOINT ["/app/start.sh"]
