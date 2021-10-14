const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv/config");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Route middlewares
app.use("/api/email/", require("./routes/emailAPI"));
app.use("/api/projects/", require("./routes/projectAPI"));

// Connect to DB
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  });

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
});
