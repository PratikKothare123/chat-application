const express = require("express");
const Message = require("../models/Message");
const User = require("../models/User");

const router = express.Router();

router.get("/home", async (req, res) => {
  const users = await User.find();
  res.render("home", { users, me: req.query.from });
});

// router.get("/chat", async (req, res) => {
//   const { from, to } = req.query;
//   const messages = await Message.find({
//     $or: [
//       { from, to },
//       { from: to, to: from }
//     ]
//   });
//   res.render("chat", { from, to, messages });
// });
router.get("/chat", async (req, res) => {
  const { from, to } = req.query;

  if (!from || !to) {
    return res.redirect("/home");
  }

  const messages = await Message.find({
    $or: [
      { from, to },
      { from: to, to: from }
    ]
  }).sort({ createdAt: 1 });

  res.render("chat", { from, to, messages });
});


router.get("/edit/:id", async (req, res) => {
  const message = await Message.findById(req.params.id);
  res.render("edit", { message });
});


router.post("/send", async (req, res) => {
  await Message.create(req.body);
  res.redirect(`/chat?from=${req.body.from}&to=${req.body.to}`);
});

// Delete route
// router.post("/delete/:id", async (req, res) => {
//   await Message.findByIdAndDelete(req.params.id);
//   res.redirect("back");
// });

router.post("/delete/:id", async (req, res) => {
  const msg = await Message.findById(req.params.id);
  await Message.findByIdAndDelete(req.params.id);
  res.redirect(`/chat?from=${msg.from}&to=${msg.to}`);
});


//Edit msg

// Edit msg
router.post("/edit/:id", async (req, res) => {
  const msg = await Message.findById(req.params.id);

  await Message.findByIdAndUpdate(req.params.id, {
    message: req.body.message
  });

  // ✅ redirect explicitly to chat page
  res.redirect(`/chat?from=${msg.from}&to=${msg.to}`);
});



  


module.exports = router;
