const router = require('express').Router();

// view
const startPageRouter = require('./views/start.router');
const authRouter = require('./views/auth.router');
const mainPageRouter = require('./views/mainPage.router');
const albumPageRouter = require('./views/album.router');

// api
const photoApiRouter = require('./api/photo.router');
const authApiRouter = require('./api/auth.router');
const albumApiRouter = require('./api/album.router');
const likeApiRouter = require('./api/like.router');
// use
router.use('/', startPageRouter);
router.use('/photos', albumPageRouter);
router.use('/auth', authRouter);
router.use('/api/auth', authApiRouter);

router.use('/albums', mainPageRouter);
router.use('/api/', albumApiRouter);
router.use('/api/like', likeApiRouter);
router.use('/api/photo',photoApiRouter)

module.exports = router;
