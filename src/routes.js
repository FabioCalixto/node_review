const { Router } = require('express');
const routes = new Router();


routes.get("/", (req, res) => {

    res.send("Olá Mundo");

} );


function valContato(req, res, next){
    if(!req.body.email){
        return res.json({
            erro: true,
            mensagem: "Necessário enviar o e-mail!"
        });
    };

    return next();


}; 




routes.get("/contatos/:id", (req, res) => {
   const {id} = req.params;
   const {sit} = req.query;
    return res.json({
         id,
        nome: "Fabio",
        email: "fabiocalixto16@gmail.com",
        sit
    });

} );

routes.post("/contatos", valContato, (req, res) =>{
    var {nome} = req.body;
     var {email} = req.body;
    return res.json({
        nome,
        email
    });
});

routes.put("/contatos/:id", valContato, (req, res) => {
    const {id} = req.params;
    var {nome} = req.body;
    var {email} = req.body;

    return res.json({
        id,
        nome,
        email
    });

});


routes.delete("/contatos/:id", (req, res) => {
    const {id} = req.params;
    
    return res.json({
        id
    });

});

                                            

module.exports = routes;