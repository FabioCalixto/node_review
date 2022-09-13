const Sequelize = require('sequelize');
const sequelize = new Sequelize('node_mysql', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function(){
    console.log("Conexºao com a BD realizada com sucesso!");
}).catch(function(){
    console.log("Erro: Conexºao com a BD  não realizada com sucesso!");
})

module.exports = sequelize;