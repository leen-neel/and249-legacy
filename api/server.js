const express = require("express");
const app = express();

require("dotenv/config");
const port = process.env.PORT || 3000;

app.use(express.json());

// Route middlewares
app.use("/api/email/", require("./routes/emailAPI"));

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
});
