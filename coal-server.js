const express = require("express");
const app = express();

app.use("/", express.static("dist"));

const port = 5445;
app.listen(port, "0.0.0.0", () => {
  console.log(`App listening on port ${port}`);
});