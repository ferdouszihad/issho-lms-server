const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const info = require("./view/info.json");

//middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const authentication = require("./routes/authentication/authentication.route");

app.use("/api/v1/auth", authentication);
app.post("/", (req, res) => {
  res.send(info);
});
app.get("/", (req, res) => {
  res.send(info);
});

module.exports = app;
