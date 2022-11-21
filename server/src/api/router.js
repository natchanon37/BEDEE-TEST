const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

let todos = [
  { id: 1, title: "Order Beer", completed: false },
  { id: 2, title: "Order Tsunagimo", completed: false },
  { id: 3, title: "Order Nankotsu", completed: false },
];

function MockPostMethod() {
  router.get("/add", (req, res) => {
    const todo = {
      id: todos.length + 1,
      title: "add test",
      completed: false,
    };
    todos.push(todo);
    res.json(todos);
  });
}

function MockDeleteMethod(id) {
  router.get("/delete", (req, res) => {
    const found = todos.some((el) => el.id === id);
    console.log(found);
    if (!found) {
      res.json("Could not find the user");
    }
    const deleted = todos.findIndex((todo) => todo.id == id);
    todos.splice(deleted, 1);
    res.json(todos);
  });
}

function MockIsCompleted(id) {
  let completed = [];
  router.get("/completed", (req, res) => {
    const found = todos.some((el) => el.id === id);
    console.log(found);
    if (!found) {
      res.json("Could not find the user");
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
}

//api page interface
router.get("/alltodo", (req, res) => {
  res.json(todos);
});

//api page interface
router.get("/", (req, res) => {
  res.send("API Started");
});

//Add Todo
MockPostMethod();

//Delete Todo
MockDeleteMethod(1);

//UpdateTodo
MockIsCompleted(1);

module.exports = router;
