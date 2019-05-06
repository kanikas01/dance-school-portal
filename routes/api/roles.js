const router = require("express").Router();
const rolesController = require("../../controllers/rolesController");

// Matches with "/api/roles"
router.route("/")
  .get(rolesController.findAll)
  .post(rolesController.save);

// Matches with "/api/roles/:id"
router.route("/:id")
  .delete(rolesController.delete);

module.exports = router;
