const router = require('express').Router();
const RegistratioFormPage = require('../../components/RegistrationFormPage');
const AuthorizationFormPage = require('../../components/AuthorizationFormPage')

router.get('/registration', (req, res) => {
  const html = res.renderComponent(RegistratioFormPage, {
    title: 'Registration',
  });
  res.send(html);
});

router.get('/authorization', (req,res) => {
  const html = res.renderComponent(AuthorizationFormPage, {
    title: 'Authorization'
  })
  res.send(html)
})

module.exports = router;
