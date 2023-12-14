const router = require('express').Router();

// view
const authRouter = require('./views/auth.router');

// api
const authApiRouter = require('./api/auth.router');
// use
router.use('/auth', authRouter);
router.use('/api/auth', authApiRouter);

module.exports = router;
