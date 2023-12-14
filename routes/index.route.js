const router = require('express').Router();

// view
const authRouter = require('./views/auth.router');
<<<<<<< HEAD

// api
const authApiRouter = require('./api/auth.router');
// use
router.use('/auth', authRouter);
router.use('/api/auth', authApiRouter);
=======
const mainPageRouter = require('./views/mainPage.router');

// api

const albumApiRouter = require('./api/album.router');

// use
router.use('/auth', authRouter);
router.use('/mainPage', mainPageRouter);
router.use('/api/albumDelete', albumApiRouter);
>>>>>>> 3ff47eeac8d09d2b3d4a29b2b08f02a5f3c097a8

module.exports = router;
