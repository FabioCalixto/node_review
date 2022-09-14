const express = require("express");
const routes =  require('./routes');
const db = require('../models/db');

const app = express();
app.use(express.json());

/* Middlewares Geral 
app.use((req, res, next) =>{
    console.log("Acessou o Middlewares");
    next();

});*/
class App{
     constructor(){
                  this.app = express();
                  this.routes();

     }
     routes(){
        this.app.use(routes);

     }

}

module.exports = new App().app;

