const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.save);

router.route("/safe")
  .get(usersController.findAllSafe);

// Matches with "/api/users/:id"
router.route("/:id")
  .get(usersController.findOne)
  .delete(usersController.delete);

module.exports = router;
