FROM  node:latest

WORKDIR /tayssir-api
COPY . .
RUN yarn install --production=true
RUN nx build api
CMD node ./dist/apps/api/main.js
