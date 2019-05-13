const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.save);

// Matches with "/api/users/search"
  router.route("/search")
  .get(usersController.search);

// Matches with "/api/users/:id"
router.route("/:id")
  .get(usersController.findOne)
  .delete(usersController.delete);

module.exports = router;
