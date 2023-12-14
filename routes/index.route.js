const router = require('express').Router();

// view
const startPageRouter = require('./views/start.router');
const authRouter = require('./views/auth.router');
const mainPageRouter = require('./views/mainPage.router');

// api
const authApiRouter = require('./api/auth.router');
const albumApiRouter = require('./api/album.router');

// use
router.use('/', startPageRouter);
router.use('/auth', authRouter);
router.use('/api/auth', authApiRouter);
router.use('/mainPage', mainPageRouter);
router.use('/api/albumDelete', albumApiRouter);

module.exports = router;
