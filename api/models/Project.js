const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  stack: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  forClient: {
    type: Boolean,
    default: true,
  },
  testimonial: {
    type: String,
  },
  clientName: {
    type: String,
  },
  clientImg: {
    type: String,
  },
  clientTitle: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Projects", ProjectSchema);
