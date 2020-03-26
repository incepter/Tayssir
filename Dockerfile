FROM  node:latest

WORKDIR /tayssir-api
COPY . .
RUN yarn
RUN yarn build:api
CMD node ./dist/apps/api/main.js
