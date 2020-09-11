// validators/AuthValidator.js
// Importamos express-validators para ayudarnos a implementar las reglas de validación
const { check } = require('express-validator');
let UserModel = require("../models/User");

// Escribimos las reglas de validación para la acción register
exports.store = [
    // Revisa que el nombre no sea vacío
    check('name').notEmpty(),
    // Revisa que el correo sea un mail
    check('email').isEmail(),
    // Revisa que el password este definido
    check('password').notEmpty(),
    // Revisa que el password sea el mismo
    check('password').custom((value, {req, loc, path}) => {
      if (value !== req.body.password_confirmation) {
        throw new Error("Passwords don't match");
      } else {
        return value;
      }
    })
  ];

exports.validAdmin = (req,res,next) => {

  if(!req.isAuthenticated()){
    res.redirect("/register")
    return;
  } else {

  UserModel.findById(req.session.passport.user).then((data) => {

    if(data.rol != "admin"){
      return res.status(403).send("No tienes permisos")
    }
    next()
    }).catch((error) => {
      console.log(error)
    })
  }
}

exports.validLog = (req,res,next) => {
  if(!req.isAuthenticated()){
    res.redirect("/register")
    return;
  } 
  next();
}