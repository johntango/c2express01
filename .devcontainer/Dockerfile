FROM node:12.18-alpine
ENV NODE_ENV production

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm ci
RUN apk update && apk add nodejs && npm i -g nodemon
RUN npm install
WORKDIR /usr/src/app
ENV PATH = /usr/src/app/node_modules/bin : $PATH
COPY . .
EXPOSE 3000
