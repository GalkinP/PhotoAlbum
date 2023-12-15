const router = require('express').Router();
const AlbumMain = require('../../components/AlbumMain');
const { Album, Photo } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const albums = await Album.findAll();
    const photos = await Photo.findAll()


    const data = res.renderComponent(AlbumMain, {
      title: 'AlbumMain',
      albums,
      photos,
      user:res.locals.user
    });
    res.send(data);
  } catch ({ error }) {
    console.log('help Albums');
  }
});
module.exports = router;


