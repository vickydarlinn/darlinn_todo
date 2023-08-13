import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../store/thunks/deleteTodo";
import { updateTodo } from "../store/thunks/updateTodo";

const TodoCard = ({ todo }) => {
  const { authToken } = useSelector((state) => state.user.personalInfo);

  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState();
  const handleEditTitle = (e) => {
    setEditedTitle(e.target.value);
  };
  const handleUpdatedTitle = (todo) => {
    console.log(editedTitle);
    setIsEditing(false);
    dispatch(updateTodo({ authToken, id: todo._id, title: editedTitle }))
      .unwrap()
      .then(() => console.log("edited successfully"))
      .catch((err) => console.log(err));
  };
  const handleDeleteTodo = (todo) => {
    dispatch(deleteTodo({ authToken, id: todo._id }))
      .unwrap()
      .then(() => console.log("deleted successfully"))
      .catch((err) => console.log(err));
    //
  };
  if (isEditing) {
    return (
      <div className="flex items-center gap-6 p-2  bg-black rounded-3xl ">
        <input
          type="text"
          className="grow p-2 bg-gray-500 rounded-3xl focus:outline-none focus:bg-gray-700"
          value={editedTitle}
          onChange={(e) => handleEditTitle(e)}
        />

        <button
          onClick={() => handleUpdatedTitle(todo)}
          className="cursor-pointer bg-gray-500 px-4 py-2 rounded-3xl min-w-[100px]"
        >
          Save
        </button>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-6 py-2 px-4 bg-black rounded-3xl ">
      <span className="grow">{todo.title}</span>
      <button
        className="cursor-pointer bg-gray-500 px-4 py-2 rounded-3xl min-w-[100px]"
        onClick={() => {
          setIsEditing(true);
          setEditedTitle(todo.title);
        }}
      >
        Edit
      </button>
      <button
        onClick={() => handleDeleteTodo(todo)}
        className="cursor-pointer bg-gray-500 px-4 py-2 rounded-3xl min-w-[100px]"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoCard;
