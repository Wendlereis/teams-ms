FROM node:10.13-alpine

WORKDIR /usr/src/app

RUN apk add yarn

COPY ["package.json", "yarn.lock", "./"]

RUN yarn install

COPY . .

EXPOSE 3333

CMD yarn start