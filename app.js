const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Olá Mundo");

} );

app.listen(8080, () => {

    console.log("Servidor Inciado na porta 8080");
});                                              