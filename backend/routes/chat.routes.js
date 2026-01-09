const express = require("express");
const Message = require("../models/Message");
const User = require("../models/User");

const router = express.Router();

router.get("/home", async (req, res) => {
  const users = await User.find();
  res.render("home", { users, me: req.query.user });
});

router.get("/chat", async (req, res) => {
  const { from, to } = req.query;
  const messages = await Message.find({
    $or: [
      { from, to },
      { from: to, to: from }
    ]
  });
  res.render("chat", { from, to, messages });
});

router.post("/send", async (req, res) => {
  await Message.create(req.body);
  res.redirect(`/chat?from=${req.body.from}&to=${req.body.to}`);
});

router.post("/delete/:id", async (req, res) => {
  await Message.findByIdAndDelete(req.params.id);
  res.redirect("back");
});


  


module.exports = router;
