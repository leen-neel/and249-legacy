const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv/config");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Route middlewares
app.use("/api/email/", require("./routes/emailAPI"));

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
});
