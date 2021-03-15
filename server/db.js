const {Sequelize} = require('sequelize');


module.exports = new Sequelize(
    'online_store',
    'postgres',
    'onlyReact',
    {
        dialect: 'postgres',
        host: 'localhost',
        port: 5420
    }
);