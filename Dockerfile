FROM  node:latest

WORKDIR /tayssir-api
COPY . .
RUN yarn install
RUN nx build api
CMD node ./dist/apps/api/main.js
