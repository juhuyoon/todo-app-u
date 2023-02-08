const router = require("express").Router();
const { Todo } = require("../models");

router.get("/", (req, res) => {
  // res.send("<p>Hello</p>");
  res.render("home");
});

router.post("/todo", async (req, res) => {
  try {
    console.log("does it come into server call?");
    const todoInfo = await Todo.create({
      todo: req.body.todoInput,
    });
    // This is only if you want the data to return somehow.
    res.status(200).json(todoInfo);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
