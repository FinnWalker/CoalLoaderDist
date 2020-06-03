const express = require("express");
const app = express();

app.use("/", express.static("dist"));
app.use("/test", express.static("website-demo"));

const port = 5445;
app.listen(port, "0.0.0.0", () => {
  console.log(`App listening on port ${port}`);
});