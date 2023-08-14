import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../store/thunks/getAllTodos";
import Header from "../components/Header";
import TodoCard from "../components/TodoCard";
import TodoForm from "../components/TodoForm";
import { useNavigate } from "react-router-dom";

const TodoPage = () => {
  const navigate = useNavigate();
  const { authToken, name, todos } = useSelector(
    (state) => state.user.personalInfo
  );
  const { isLoggedIn } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos(authToken));
  }, [authToken, dispatch]);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/sign-up");
    }
  }, [isLoggedIn, navigate]);
  return (
    <>
      <Header />
      <div className="">
        <span className="font-xl m-3 inline-block"> Hello, {name}</span>
        <div className="flex flex-col max-w-[760px] items-center m-auto mt-16">
          <h1 className="mb-8 font-bold text-3xl">My Todos</h1>
          {/* todo form */}
          <TodoForm />
          {/* todo list */}
          <div className="flex flex-col gap-4 mt-20 w-full">
            {todos.map((todo) => (
              <TodoCard key={todo._id} todo={todo} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoPage;
