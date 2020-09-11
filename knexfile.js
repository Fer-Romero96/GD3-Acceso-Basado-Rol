// Update with your config settings.
const dotenv = require("dotenv");

dotenv.config();


module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_DEVELOPMENT_HOST,
      port: process.env.DB_DEVELOPMENT_PORT,
      database: process.env.DB_DEVELOPMENT_NAME,
      user: process.env.DB_DEVELOPMENT_USER,
      password: process.env.DB_DEVELOPMENT_PASSWORD
    },
    pool:{
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql2',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
