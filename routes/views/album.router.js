const router = require('express').Router();
const AlbumEl = require('../../components/AlbumEl');

const { Album, Photo } = require('../../db/models');

router.get('/:albumid', async (req, res) => {
  const user = res.locals.user;
  const { albumid } = req.params;
  const album = await Album.findOne({
    where: { id: +albumid },
    include: Photo,
  });
  res.send(res.renderComponent(AlbumEl, { album, user }));
});

// router.get('/:id', async (req, res) => {
//   const { user } = res.locals;
//   const photo = Photo.findOne({ where: { id: req.params.id, user } });
// });

module.exports = router;
