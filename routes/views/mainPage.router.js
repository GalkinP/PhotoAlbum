const router = require('express').Router();
const AlbumMain = require('../../components/AlbumMain');
const { Album } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const albums = await Album.findAll();

    const data = res.renderComponent(AlbumMain, {
      title: 'AlbumMain',
      albums,
    });
    res.send(data);
  } catch ({ error }) {
    console.log('help Albums');
  }
});
module.exports = router;
