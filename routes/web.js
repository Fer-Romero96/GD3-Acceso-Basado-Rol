let router = require('express').Router();
let homepageController = require('../controllers/HomepageController');
let authController = require('../controllers/AuthController');
let authValidator = require("../validators/AuthValidators");
let passport = require("passport");

router.get('/', homepageController.index);

// Authentication routes
router.get('/login', authController.login);
router.get('/register', authController.register);

router.post("/register",authValidator.store, authController.store);


router.post('/login', passport.authenticate('local', { failureRedirect: '/login-fail', successRedirect: '/dashboard' }));

/*
router.get('/protected', (req, res) => {
  res.render('Usuario logueado con éxito');
});*/

router.get('/login-fail', (req, res) => {
  res.send('El usuario no tiene una sesión válida');
});

router.get('/dashboard', authValidator.validLog, authController.dashboard);

router.get('/users', authValidator.validLog, authValidator.validAdmin,  authController.user);



module.exports = router;
