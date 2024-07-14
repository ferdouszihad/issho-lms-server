const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

//middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body.anas);
  res.send("Server is ok!");
});

module.exports = app;
