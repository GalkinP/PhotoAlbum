const router = require('express').Router();

// view
const startPageRouter = require('./views/start.router');
const authRouter = require('./views/auth.router');
const mainPageRouter = require('./views/mainPage.router');
const albumPageRouter = require('./views/album.router');

// api
const authApiRouter = require('./api/auth.router');
const albumApiRouter = require('./api/album.router');
const likeApiRouter = require('./api/like.router');
// use
router.use('/', startPageRouter);
router.use('/photos', albumPageRouter);
router.use('/auth', authRouter);
router.use('/api/auth', authApiRouter);

router.use('/albums', mainPageRouter);
<<<<<<< HEAD
router.use('/api/albumDelete', albumApiRouter);
=======
router.use('/api/', albumApiRouter);
router.use('/api/like', likeApiRouter);
>>>>>>> ace579683df086c323ff9eff7989608fb35e2ace

module.exports = router;
