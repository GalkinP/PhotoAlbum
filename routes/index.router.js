const router = require('express').Router();

//view
const authRouter = require('./views/auth.router')

//api

//use
router.use('/auth', authRouter)


module.exports = router;
