const router = require("express").Router();
const Project = require("../models/Project");

router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;
