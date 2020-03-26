FROM  node:latest

WORKDIR /tayssir-api
COPY . .
RUN yarn install
RUN yarn build:api
CMD node ./dist/apps/api/main.js
