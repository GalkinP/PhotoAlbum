const router = require('express').Router();
const StartPage = require('../../components/StartPage');

router.get('/', async (req, res) => {
  const html = await res.renderComponent(StartPage, { title: 'MainPage' });
  console.log(html, '100000000000000');
  
  res.send(html);
});

module.exports = router;
