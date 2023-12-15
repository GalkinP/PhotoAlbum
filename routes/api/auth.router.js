const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const cookiesConfig = require('../../config/cookiesConfig');
const generateTokens = require('../../utils/authUtils');

router.post('/registration', async (req, res) => {
  const { name, mail, password } = req.body;
  if (name.trim() === '' || mail.trim() === '' || password.trim() === '') {
    res.json({ message: 'Заполните все поля' });
    return;
  }
  try {
    let userInDb;
    userInDb = await User.findOne({ where: { mail } });
    if (userInDb) {
      res.status(400).json({ message: 'Этот email уже занят' });
    } else {
      const hashPassword = await bcrypt.hash(password, 10);
      userInDb = await User.create({
        name,
        mail,
        password: hashPassword,
      });

      const { accessToken, refreshToken } = generateTokens({
        user: { id: userInDb.id, mail: userInDb.mail, name: userInDb.name },
      });
      res
        .cookie(cookiesConfig.refresh, refreshToken, {
          maxAge: cookiesConfig.maxAgeRefresh,
          httpOnly: true,
        })
        .cookie(cookiesConfig.access, accessToken, {
          maxAge: cookiesConfig.maxAgeAccess,
          httpOnly: true,
        })
        .json({ message: 'success' });
    }
  } catch (error) {
    console.error(error);
  }
});

router.post('/authorization', async (req, res) => {
  try {
    const { mail, password } = req.body;
    console.log(req.body);
    const userInDb = await User.findOne({ where: { mail } });
    const isPasswordCheck = await bcrypt.compare(password, userInDb.password);
    if (isPasswordCheck) {
      const { accessToken, refreshToken } = generateTokens({
        user: { id: userInDb.id, mail: userInDb.mail, name: userInDb.name },
      });
      res
        .cookie(cookiesConfig.refresh, refreshToken, {
          maxAge: cookiesConfig.maxAgeRefresh,
          httpOnly: true,
        })
        .cookie(cookiesConfig.access, accessToken, {
          maxAge: cookiesConfig.maxAgeAccess,
          httpOnly: true,
        })
        .json({ message: 'success' });
 
    }
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
