const router = require("express").Router();

router.get("/", (req, res) => {
  // res.send("<p>Hello</p>");
  res.sendFile("index.html");
});

module.exports = router;
