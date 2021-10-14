const router = require("express").Router();
const Project = require("../models/Project");

// Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

// Add a project
router.post("/", async (req, res) => {
  const body = req.body;

  if (body.forClient) {
    const newProject = new Project({
      title: body.title,
      stack: body.stack,
      url: body.stack,
      img: body.img,
      forClient: body.forClient,
      testimonial: body.testimonial,
      clientName: body.clientName,
      clientImg: body.clientImg,
      clientTitle: body.clientTitle,
    });

    try {
      const savedPrj = await newProject.save();
      res.json(savedPrj);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong" });
    }
  } else {
    const newProject = new Project({
      title: body.title,
      stack: body.stack,
      url: body.stack,
      img: body.img,
      forClient: body.forClient,
      description: body.description,
    });

    try {
      const savedPrj = await newProject.save();
      res.json(savedPrj);
    } catch (error) {
      console.log(error);

      res.status(500).json({ message: "Something went wrong" });
    }
  }
});

module.exports = router;
