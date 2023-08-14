import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "../store/thunks/createTodo";
import { toast, ToastContainer } from "react-toastify";

const TodoForm = () => {
  const { authToken } = useSelector((state) => state.user.personalInfo);

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [newTodo, setNewTodo] = useState("");
  const handleInput = (e) => {
    setNewTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo.trim().length) {
      return toast.error("please add something into title", {
        autoClose: 1000,
      });
    }
    setIsLoading(true);
    dispatch(createTodo({ authToken, title: newTodo }))
      .unwrap()
      .then(() => {
        toast.success("added successfully", {
          autoClose: 1000,
        });
      })
      .catch((err) => {
        toast.error(`${err.message}`, {
          autoClose: 1000,
        });
      })
      .finally(() => {
        setIsLoading(false);
        setNewTodo("");
      });
    //
  };
  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="flex gap-5  w-full">
        <input
          className="grow focus:outline-none focus:bg-gray-500 focus:text-white text-gray-500 px-5 rounded-3xl"
          type="text"
          onChange={(e) => handleInput(e)}
          value={newTodo}
        />
        {isLoading ? (
          <button
            disabled={true}
            type="button"
            className="cursor-not-allowed bg-gray-700 px-4 py-2 rounded-3xl min-w-[150px]"
          >
            Adding...
          </button>
        ) : (
          <button className="cursor-pointer bg-gray-500 px-4 py-2 rounded-3xl min-w-[150px]">
            Add
          </button>
        )}
      </form>
    </>
  );
};

export default TodoForm;
