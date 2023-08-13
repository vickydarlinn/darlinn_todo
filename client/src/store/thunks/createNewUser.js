import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const createNewUser = createAsyncThunk(
  "create",
  async ({ name, email, password }) => {
    const response = await axios.post(
      "http://localhost:5500/api/v1/user/register",
      {
        name,
        email,
        password,
      }
    );
    return response.data;
  }
);
export { createNewUser };