const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const cors = require("cors");
const server = require("./view/server.json");

//global middleware
app.use(cors());
app.use(express.json());

//apis
const userRoute = require("./routes/user.routes");
const { connect } = require("./utils/dbConnect");
connect();
app.use("api/v1/users", userRoute);

app.get("/", (req, res) => {
  res.send(server);
});

module.exports = app;
