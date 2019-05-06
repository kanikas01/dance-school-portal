const router = require("express").Router();
const dancesController = require("../../controllers/dancesController");

// Matches with "/api/dances"
router.route("/")
  .get(dancesController.findAll)
  .post(dancesController.save);

// Matches with "/api/dances/:id"
router.route("/:id")
  .delete(dancesController.delete);

module.exports = router;