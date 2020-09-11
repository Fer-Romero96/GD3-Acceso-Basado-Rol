const knex = require('../database/connection');
const bcrypt = require('bcryptjs');

exports.create = (user) => {
  let pass = user.password;
  pass = bcrypt.hashSync(pass, 10);
  return knex('users')
    .insert({ name: user.name, email: user.email, password: pass, rol: user.rol })
}

/**
 * Encuentra al usuario que tenga el correo indicado
 */
exports.findById = (id) => {
  return knex
    .select('*')
    .from('users')
    .where('id', id)
    .first();
}

/**
 * Encuentra al usuario que tenga el correo indicado
 */
exports.findByEmail = (email) => {
  return knex
    .select('*')
    .from('users')
    .where('email', email)
    .first();
}

/**
 * Encuentra todos los usuarios
 */
exports.users = () => {
  return knex
    .select("*")
    .from("users");
}



