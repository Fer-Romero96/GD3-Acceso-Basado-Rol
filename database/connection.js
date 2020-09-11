const knexfile = require("../knexfile");
const appConfig = require("../configs/app");


const knex = require("knex")(knexfile[appConfig.env]);

module.exports = knex