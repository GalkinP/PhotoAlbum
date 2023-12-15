const router = require('express').Router();
const { Album, Photo } = require('../../db/models');
const FormAlbum = require('../../components/FormAlbum');





router.delete('/albumDelete/:albumid', async (req, res) => {
  const { albumid } = req.params;
  const data = await Album.destroy({ where: { id: albumid } });
  if (data > 0) {
    res.json({ message: 'success' });
  }
});







router.post('/', async (req, res) => {
  const data = req.body;
  try {
    const userID=res.locals.user.id
data.userID=userID
    // создаем пользователя в бд
    const album = await Album.create(data);
    const photos = [];
  
    // const photos = await Photo.findAll({where:{albumID:album.id}})
    // рендерим страничку одну, не забываем про { doctype: false }
    const html = res.renderComponent(
      FormAlbum,
      { album, photos },
      { doctype: false }
    );
    if (album) {
      // отправляем ответ, в виде json
      res.json({ message: 'success', html });
    }
    // res.status(400).json({ message: 'не удалось создать Юзера' });
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = router;
