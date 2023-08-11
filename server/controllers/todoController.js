const jwt = require("jsonwebtoken");
const Todo = require("../models/todoModel");

exports.getAllTodos = async (req, res) => {
  try {
    const allTodos = await Todo.find({ userId: req.userId });
    res.status(200).json({ message: "all list of todos", data: allTodos });
  } catch (error) {
    res.status(404).json({ error: error.message || error });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create({
      title: req.body.title,
      userId: req.userId,
    });

    res.status(201).json({ message: "Todo created", data: newTodo });
  } catch (error) {
    res.status(404).json({ error: error.message || error });
  }
};
exports.deleteTodo = async (req, res) => {
  try {
    console.log(req);
    console.log(req.params.id);
    const deletedTodo = await Todo.findByIdAndDelete({ _id: req.params.id });
    res.status(202).json({ message: "Todo deleted", data: deletedTodo });
  } catch (error) {
    res.status(404).json({ error: error.message || error });
  }
};
exports.updateTodo = async (req, res) => {
  try {
    const editedTodo = await Todo.findByIdAndUpdate(
      { _id: req.params.id },
      { title: req.body.title },
      { new: true }
    );
    res.status(200).json({
      message: "Todo updated",
      data: editedTodo,
    });
  } catch (error) {
    res.status(404).json({ error: error.message || error });
  }
};
