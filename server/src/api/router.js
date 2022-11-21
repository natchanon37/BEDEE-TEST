const express = require("express");
const router = express.Router();

let todos = [
  { id: 1, title: "Order Beer", completed: false },
  { id: 2, title: "Order Tsunagimo", completed: false },
  { id: 3, title: "Order Nankotsu", completed: false },
];

/*Api Interface */
router.get("/", (req, res) => {
  res.send("API Started");
});

/*Get All todo */
router.get("/alltodo", (req, res) => {
  res.json(todos);
});

/*Add todo */
router.post("/add", (req, res) => {
  const todo = {
    id: todos.length + 1,
    title: req.body.title,
    completed: req.body.completed,
  };
  todos.push(todo);
  res.json(todos);
});

/*Deleted todo */
router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  if (id > todos.length) {
    res.json("Could not find user");
  }
  const deleted = todos.findIndex((todo) => todo.id == id);
  todos.splice(deleted, 1);
  res.json(todos);
});

/*Mark as Completed */
router.put("/completed/:id", (req, res) => {
  const id = req.params.id;
  if (id > todos.length) {
    res.json("Could not find user");
  }
  for (const i of todos) {
    if (i.id == id) {
      if (i.completed == false) {
        i.completed = true;
      } else {
        i.completed = false;
      }
    }
  }
  res.json(todos);
});

module.exports = router;
