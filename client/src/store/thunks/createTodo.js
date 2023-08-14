import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const createTodo = createAsyncThunk(
  "todo/create",
  async ({ authToken, title }) => {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/v1/todos`,
      {
        title,
      },
      {
        headers: {
          Authorization: authToken,
        },
      }
    );
    return response.data;
  }
);
export { createTodo };
