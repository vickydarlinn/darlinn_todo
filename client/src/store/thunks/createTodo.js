import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const createTodo = createAsyncThunk(
  "todo/create",
  async ({ authToken, title }) => {
    const response = await axios.post(
      "http://localhost:5500/api/v1/todos",
      {
        title,
      },
      {
        headers: {
          Authorization: authToken,
        },
      }
    );
    console.log(response.data);
    return response.data;
  }
);
export { createTodo };
