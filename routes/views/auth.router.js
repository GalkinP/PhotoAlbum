const router = require('express').Router();
const RegistratioFormPage = require('../../components/RegistrationFormPage');

router.get('/registration', (req, res) => {
  const html = res.renderComponent(RegistratioFormPage, {
    title: 'Registration',
  });
  res.send(html);
});

module.exports = router;
