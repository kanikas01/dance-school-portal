const router = require("express").Router();
const gradesController = require("../../controllers/gradesController");

// Matches with "/api/grades"
router.route("/")
  .get(gradesController.findAll)
  .post(gradesController.save);

// Matches with "/api/grades/:id"
router.route("/:id")
  .delete(gradesController.delete);

module.exports = router;
