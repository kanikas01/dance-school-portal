const router = require("express").Router();
const danceRoutes = require("./dances");
const gradeRoutes = require("./grades");
const roleRoutes = require("./roles");
const userRoutes = require("./users");

router.use("/dances", danceRoutes);
router.use("/grades", gradeRoutes);
router.use("/roles", roleRoutes);
router.use("/users", userRoutes);

module.exports = router;
