const router = require("express").Router();

router.get("/", (req, res) => {
  // res.send("<p>Hello</p>");
  res.render("home");
});

module.exports = router;
