const express = require("express");
const app = express();
app.use(express.json());

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

app.post("/contatos", (req, res) =>{
    var {nome} = req.body;
     var {email} = req.body;
    return res.json({
        nome,
        email
    });
});

app.listen(8080, () => {

    console.log("Servidor Inciado na porta 8080");
});                                              