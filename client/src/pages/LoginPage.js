import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginExistingUser } from "../store/thunks/loginExistingUser";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const detailsHandler = (e) => {
    setUserDetails((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginExistingUser(userDetails))
      .unwrap()
      .then(() => {
        console.log("logged in successfully");
        navigate("/todos");
      });
  };
  return (
    <>
      <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4">
        <h1 className="text-4xl font-bold mb-8">Log In</h1>
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-500"
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              onChange={detailsHandler}
              value={userDetails.name}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-500"
              type="password"
              id="password"
              name="password"
              onChange={detailsHandler}
              value={userDetails.name}
              required
            />
          </div>
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white"
            type="submit"
          >
            Log In
          </button>
        </form>
        <p className="text-sm mt-4">
          Don't have an account?{" "}
          <Link to={"/sign-up"} className="text-blue-300 hover:underline">
            Sign up here
          </Link>
          .
        </p>
      </div>
    </>
  );
};

export default LoginPage;
