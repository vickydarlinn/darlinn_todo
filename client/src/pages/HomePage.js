import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Welcome to Darlinn Todo App
      </h1>
      <p className="text-lg mb-6 text-center">
        Stay organized and manage your tasks with ease using our Todo App.{" "}
        <br />
        Whether it's work, personal projects, or just daily chores, we've got
        you covered.
      </p>
      <div className="flex space-x-4">
        <Link
          to={"/login"}
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
        >
          Login
        </Link>
        <Link
          to={"/sign-up"}
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded"
        >
          Sign Up
        </Link>
      </div>
      <p className="text-sm mt-8">
        Already a member?{" "}
        <Link to={"/login"} className="text-blue-300 hover:underline">
          Log in here
        </Link>
        .
      </p>
    </div>
  );
};

export default Homepage;
