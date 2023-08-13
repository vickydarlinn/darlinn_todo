import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "../store/thunks/createTodo";

const TodoForm = () => {
  const { authToken } = useSelector((state) => state.user.personalInfo);

  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");
  const handleInput = (e) => {
    setNewTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTodo({ authToken, title: newTodo }))
      .unwrap()
      .then(() => {
        console.log("added successfully");
      })
      .catch((err) => {
        console.log(err);
      });
    //
  };
  return (
    <form onSubmit={handleSubmit} className="flex gap-5  w-full">
      <input
        className="grow focus:outline-none focus:bg-gray-500 px-5 rounded-3xl"
        type="text"
        onChange={(e) => handleInput(e)}
        value={newTodo}
      />
      <button className="cursor-pointer bg-gray-500 px-4 py-2 rounded-3xl min-w-[150px]">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
