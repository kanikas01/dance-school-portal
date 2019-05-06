const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.save);

// Matches with "/api/users/:id"
router.route("/:id")
  .delete(usersController.delete);

module.exports = router;
