const express = require("express");
const app = express();
const userRoute = require("./routes/userRouter");
const todosRoute = require("./routes/todoRouter");
const authMiddleware = require("./utils/authMiddleware");

app.use(express.json());

app.use("/api/v1/user", userRoute);
app.use("/api/v1/todos", authMiddleware, todosRoute);

module.exports = app;
