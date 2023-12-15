const router = require("express").Router();

router.put("/:id", (req, res) => {
  console.log(req.params, "+++++++++++++++");
})


module.exports = router