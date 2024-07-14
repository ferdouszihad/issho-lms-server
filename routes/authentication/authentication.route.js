const express = require("express");
const {
  register,
  login,
} = require("../../controllers/authentication.controller");
const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.post("/forgot-password", (req, res) => {
  res.send("Forgot Password route on Working");
});

router.patch("/regenerate-password", (req, res) => {
  res.send("Regenerate Password on Working");
});

module.exports = router;
