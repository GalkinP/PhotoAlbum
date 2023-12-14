const router = require('express').Router();
const AlbumMain = require('../../components/AlbumMain');
const { Album, Photo } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const albums = await Album.findAll();
    const photos = await Photo.findAll()
console.log(photos, "--------------");

    const data = res.renderComponent(AlbumMain, {
      title: 'AlbumMain',
      albums,
      photos
    });
    res.send(data);
  } catch ({ error }) {
    console.log('help Albums');
  }
});
module.exports = router;
