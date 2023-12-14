const router = require('express').Router();


// view
const authRouter = require('./views/auth.router');
const mainPageRouter = require('./views/mainPage.router');

// api

// use
router.use('/auth', authRouter);
router.use('/mainPage', mainPageRouter);


module.exports = router;
