const router = require("express").Router();
const Project = require("../models/Project.js");

router.get("/", async (req, res) => {
  const projects = await Project.find();

  res.json(projects);
});

module.exports = router;
