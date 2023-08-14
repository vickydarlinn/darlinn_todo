import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createNewUser } from "../store/thunks/createNewUser";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const SignupPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
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
    setIsLoading(true);
    dispatch(createNewUser(userDetails))
      .unwrap()
      .then(() => {
        toast.success("Account created successfully!", {});
        setTimeout(() => {
          navigate("/todos");
        }, 3000);
      })
      .catch((err) => {
        toast.error(`${err.message}`, {});
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4">
        <h1 className="text-4xl font-bold mb-8">Sign Up</h1>
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-500"
              type="text"
              id="name"
              name="name"
              onChange={detailsHandler}
              value={userDetails.name}
              placeholder="John Doe"
              required
            />
          </div>
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
              required
              onChange={detailsHandler}
              value={userDetails.email}
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
              required
              onChange={detailsHandler}
              value={userDetails.password}
            />
          </div>
          {isLoading ? (
            <button
              className="w-full bg-green-700 cursor-wait px-4 py-2 rounded text-white"
              type="button"
              disabled={true}
            >
              Loading...
            </button>
          ) : (
            <button
              className="w-full bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white"
              type="submit"
            >
              Sign Up
            </button>
          )}

          {/* <button
            className="w-full bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white"
            type="submit"
          >
            Sign Up
          </button> */}
        </form>
        <p className="text-sm mt-4">
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-300 hover:underline">
            Log in here
          </Link>
          .
        </p>
      </div>
    </>
  );
};

export default SignupPage;
