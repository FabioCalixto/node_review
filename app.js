const express = require("express");
const db = require('./models/db');

const app = express();
app.use(express.json());

/*
app.use((req, res, next) =>{
    console.log("Acessou o Middlewares");
    next();

});*/

function valContato(req, res, next){
    if(!req.body.email){
        return res.json({
            erro: true,
            mensagem: "Necessário enviar o e-mail!"
        });
    };

    return next();


}; 


app.get("/", (req, res) => {

    res.send("Olá Mundo");

} );

app.get("/contatos/:id", (req, res) => {
   const {id} = req.params;
   const {sit} = req.query;
    return res.json({
         id,
        nome: "Fabio",
        email: "fabiocalixto16@gmail.com",
        sit
    });

} );

app.post("/contatos", valContato, (req, res) =>{
    var {nome} = req.body;
     var {email} = req.body;
    return res.json({
        nome,
        email
    });
});

app.put("/contatos/:id", valContato, (req, res) => {
    const {id} = req.params;
    var {nome} = req.body;
    var {email} = req.body;

    return res.json({
        id,
        nome,
        email
    });

});


app.delete("/contatos/:id", (req, res) => {
    const {id} = req.params;
    
    return res.json({
        id
    });

});

app.listen(8080, () => {

    console.log("Servidor Inciado na porta 8080");
});                                              