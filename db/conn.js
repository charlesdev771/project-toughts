const {Sequelize} = require("sequelize");

const sequelize = new Sequelize('toughts', 'root', '',{
    host: "127.0.0.1",
    dialect: 'mysql',

});

try {
    sequelize.authenticate();
    console.log("aaaaaaa");
} catch (err) {
    console.log(err);
}

module.exports = sequelize;