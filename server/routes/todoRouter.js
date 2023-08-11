const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

router
  .route("/")
  .get(todoController.getAllTodos)
  .post(todoController.createTodo);

router
  .route("/:id")
  .delete(todoController.deleteTodo)
  .patch(todoController.updateTodo);

module.exports = router;
