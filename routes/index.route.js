const router = require('express').Router();

// view
const authRouter = require('./views/auth.router');
const mainPageRouter = require('./views/mainPage.router');

// api

const albumApiRouter = require('./api/album.router');

// use
router.use('/auth', authRouter);
router.use('/mainPage', mainPageRouter);
router.use('/api/albumDelete', albumApiRouter);

module.exports = router;
