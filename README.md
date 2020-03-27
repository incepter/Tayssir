# Tayssir

يعيش المغرب منذ بداية شهر مارس 2020 ، أزمة الجائحة العالمية لفيروس كورونا المستجد covid-19 

في ظل هذه الأزمة ، أضطر عدد من المغاربة للتوقف عن أنشطتهم و أعمالهم اليومية  
الهدف من هذه المنصة هو مساندة الفئة الهشة من المجتمع المغربي خلال هذه المحنة ممن يمارسون مهن غير مهيكلة ، الحرة و الغير مصرح بهم لدى الصندوق الوطني  للضمان الإجتماعي.


In these days, Morocco is experiencing a huge crisis in light of the global pandemic of the new Coronavirus Covid-19, this situation has led many of Moroccan to stop their work, and the Moroccan authorities have taken several positive steps to relieve the citizens, and there is a fragile category of Moroccan society who engage in informal jobs and activities And those who are not affiliated in the National Social Security Fund (CNSS) will suffer a lot, and it will take time and great effort to collect their information from the authorities, and they are really in dire need..
This a platform dedicated to this category so that it helps collecting the least and most important information that the authorities need to access this category of society quickly and transparently, and the goal of designing this platform is to provide it as a means to facilitate access to information in relation to this category the authorities, and encourage them to take an initiative in favor of this poor community of people that aren't eligible to benefit from the compensation provided by  CNSS.


## Technical Stack (voted)

* Nx Monorepo
* Angular
* NestJS
* Postgres
* Github Actions
* Zeit Now (Probably)

## Requirement

### Node 12.x

Install Node.js (>= 12)

### Yarn

`npm install -g yarn`

## Install

Install root dependencies

`yarn`

## Development

### Start the api

`yarn start:api`


### Start the site app

`yarn start:site`

Site is served on http://localhost:4200

### Start the admin app

`yarn start:admin`

Admin is served on http://localhost:4201

## Build 
TODO

## Dockerization

### To build docker images locally (Site as example) :
* `yarn`
* `yarn build`
* `docker build . --file dockerfiles/Dockerfile-front --tag image-name:tag`
* `docker run -p80:80 image-name:tag`

### To use published docker images locally
* api : `docker pull obyz/tayssir-covid-api:latest & docker run -p3333:3333 obyz/tayssir-covid-api:latest`
* front : `docker pull obyz/tayssir-covid-front:latest & docker run -p80:80 obyz/tayssir-covid-front:latest`
* admin : `docker pull obyz/tayssir-covid-admin:latest & docker run -p8081:8081 obyz/tayssir-covid-admin:latest`

### To start all locally
* `cd ./dockerCompose`
* `docker-compose pull`
* `docker-compose up` or `docker-compose up -d`

## Deployment
### github Actions: 
The deployment consist of 2 Jobs
* Job 1: Build
    * Install the project 
    * Build the front (Site app)
    * Build front docker image
    * Push the docker image to the repository
    * Build the admin 
    * Build admin docker image
    * Push admin docker image to the repository
    * Build the api app
    * Remove dev dependencies (optimization of the docker image content)
    * Build api docker image
    * Push api docker image
* Job 2: Deploy
    * Connect to the front machine via SSH
    * Stop the docker compose
    * Pull the newest images
    * Start docker-compose
    
### Ports mapping
|Application|base Image |internal port|exposed port|
|---|---|---|---|
|Api|node:13.11.0-stretch-slim|3333|3333|
|Front(Site)|nginx:latest|80|80|
|Admin|nginx:latest|8081|8081|

### Dependencies
* Front (Site) and admin applications(images) both are built with location on /api path which is proxied with Nginx to the Api application (http://host:3333/api)
    
 


