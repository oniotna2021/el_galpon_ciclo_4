# vue-mevn-stack-app
This is a step by step MEVN stack tutorial, in this tutorial, we are going to learn how to create MEVN stack app. (MongoDB, Express.js, Vue.js, Node.js).

[Vue MEVN Stack Tutorial – Build Full Stack Vue.js CRUD App](https://www.positronx.io/vue-mevn-stack-tutorial-build-full-stack-vue-js-crud-app/)


## Start the MEVN Stack project.
```
Git clone https://github.com/SinghDigamber/vue-mevn-stack-app.git

Get inside the project
cd vue-mevn-stack-app

Install the required packages:
npm install

Start the vue app on http://localhost:8080
npm run serve

Get inside the Node server folder:
cd backend

begin
node app

Install the required packages:
npm install

Start the mongodb server.
mongo

Start node server on http://localhost:4000/api 
nodemon

```

heroku
carpeta backend
git init
git add .
git commit -m "version heroku backend"
heroku create
git push heroku master
heroku open

heroku 
carpeta fronted
git init
git add .
git commit -m "version heroku fronted"
heroku create
heroku buildpacks:add heroku/nodejs 
heroku buildpacks:add https://github.com/heroku/heroku-buildpack-static

git push heroku master
heroku open