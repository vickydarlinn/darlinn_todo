import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const loginExistingUser = createAsyncThunk(
  "login",
  async ({ email, password }) => {
    const response = await axios.post(
      "https://darlinn-todo.onrender.com/api/api/v1/user/login",
      {
        email,
        password,
      }
    );
    console.log(response);
    return response.data;
  }
);
export { loginExistingUser };
