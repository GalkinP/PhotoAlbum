const router = require('express').Router();
const PhotoEl = require('../../components/PhotoEl');
const { Photo, Album } = require('../../db/models');

router.post('/:id', async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  console.log(data, '<<<<<<<<');
  try {
    // создаем пользователя в бд
    const photo = await Photo.create(data);
    const user = res.locals.user;
    const album = await Album.findOne({ where: { id } });

    // const photos = await Photo.findAll({where:{albumID:album.id}})
    // рендерим страничку одну, не забываем про { doctype: false }
    const html = res.renderComponent(
      PhotoEl,
      { photo, user, album },
      { doctype: false }
    );
    if (photo) {
      // отправляем ответ, в виде json
      res.json({ message: 'success', html });
    }
    // res.status(400).json({ message: 'не удалось создать Юзера' });
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = router;
