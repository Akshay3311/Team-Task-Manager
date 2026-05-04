const router = require("express").Router();
const Project = require("../models/Project");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, async (req, res) => {
  const project = await Project.create({
    name: req.body.name,
    createdBy: req.user.id
  });
  res.json(project);
});

router.get("/", auth, async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

module.exports = router;