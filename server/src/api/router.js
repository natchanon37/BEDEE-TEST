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
  const id = parseInt(req.params.id);
  todos = todos.filter((todo) => {
    return todo.id != id;
  });
  res.json(todos);
});

/*Mark as Completed */
router.put("/completed/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let update = false;
  for (const i of todos) {
    if (i.id == id) {
      if (i.completed == false) {
        update = true;
        i.completed = true;
        res.json(todos);
      } else {
        update = true;
        i.completed = false;
        res.json(todos);
      }
    }
  }
  if (update == false) {
    res.json("could not find user");
  }
});

module.exports = router;
