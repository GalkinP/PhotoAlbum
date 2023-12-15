const router = require('express').Router();
const NotFoundPage = require('../../components/NotFoundPage');

router.get('*', (req, res) => {
  const html = res.renderComponent(NotFoundPage);
  res.status(404).send(html);
});

module.exports = router;
