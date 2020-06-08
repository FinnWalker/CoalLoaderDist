const mongoose = require("./js/mongoose.js");
require("./js/initialise-statistics.js")();
const update = require("./js/update");

const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", express.static("dist"));
app.use("/test", express.static("website-demo"));

app.post("/view", update.view);
app.post("/score", update.score);
app.get("/get_stats", (req, res) => {
  res.sendFile(path.join(__dirname, "data.html"));
});

const port = 5445;
app.listen(port, "0.0.0.0", () => {
  console.log(`App listening on port ${port}`);
});
