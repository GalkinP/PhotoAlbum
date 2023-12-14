const router = require('express').Router();
const { Album } = require('../../db/models');

router.delete('/:albumid', async (req, res) => {
  const { albumid } = req.params;
  const data = await Album.destroy({ where: { id: albumid } });
  if (data > 0) {
    res.json({ message: 'success' });
  }
});

module.exports = router;
