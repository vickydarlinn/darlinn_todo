import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../store/thunks/deleteTodo";
import { updateTodo } from "../store/thunks/updateTodo";
import { toast, ToastContainer } from "react-toastify";

const TodoCard = ({ todo }) => {
  const { authToken } = useSelector((state) => state.user.personalInfo);

  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditedSaving, setIsEditedSaving] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState();
  const handleEditTitle = (e) => {
    setEditedTitle(e.target.value);
  };
  // const handleUpdatedTitle = (todo) => {
  //   setIsEditing(false);
  //   setIsEditedSaving(false);
  //   dispatch(updateTodo({ authToken, id: todo._id, title: editedTitle }))
  //     .unwrap()
  //     .then(() => toast.success("Edited Successfully", { autoClose: 1000 }))
  //     .catch((err) => toast.error(`${err.message}`, { autoClose: 1000 }))
  //     .finally(() => {
  //       setIsEditedSaving(false);
  //     });
  // };
  const handleUpdatedTitle = (todo) => {
    setIsEditedSaving(true);
    setTimeout(() => {
      setIsEditing(false);
    }, 1100);
    dispatch(updateTodo({ authToken, id: todo._id, title: editedTitle }))
      .unwrap()
      .then(() => toast.success("Edited Successfully", { autoClose: 1000 }))
      .catch((err) => toast.error(`${err.message}`, { autoClose: 1000 }))
      .finally(() => {
        setIsEditedSaving(false);
      });
  };

  const handleDeleteTodo = (todo) => {
    setIsDeleting(true);
    dispatch(deleteTodo({ authToken, id: todo._id }))
      .unwrap()
      .then(() => {
        toast.success("deleted successfully", { autoClose: 1000 });
      })
      .catch((err) => toast.error(`${err.message}`, { autoClose: 1000 }))
      .finally(() => {
        setIsDeleting(false);
      });
    //
  };
  if (isEditing) {
    return (
      <>
        <ToastContainer />
        <form className="flex items-center gap-6 p-2  bg-black rounded-3xl ">
          <input
            type="text"
            className="grow p-2 bg-gray-500 rounded-3xl focus:outline-none focus:bg-gray-700"
            value={editedTitle}
            onChange={(e) => handleEditTitle(e)}
          />
          {isEditedSaving ? (
            <button
              disabled={true}
              className="cursor-not-allowed bg-gray-700 px-4 py-2 rounded-3xl min-w-[100px]"
            >
              Saving...
            </button>
          ) : (
            <button
              onClick={() => handleUpdatedTitle(todo)}
              type="submit"
              className="cursor-pointer bg-gray-500 px-4 py-2 rounded-3xl min-w-[100px]"
            >
              Save
            </button>
          )}
        </form>
      </>
    );
  }
  return (
    <>
      <ToastContainer />

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
        {isDeleting ? (
          <button
            disabled={true}
            className="cursor-pointer bg-gray-700 px-4 py-2 rounded-3xl min-w-[100px]"
            type="button"
          >
            Deleting...
          </button>
        ) : (
          <button
            onClick={() => handleDeleteTodo(todo)}
            className="cursor-pointer bg-gray-500 px-4 py-2 rounded-3xl min-w-[100px]"
          >
            Delete
          </button>
        )}
      </div>
    </>
  );
};

export default TodoCard;
