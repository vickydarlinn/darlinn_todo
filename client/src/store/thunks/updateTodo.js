import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const updateTodo = createAsyncThunk(
  "todo/update",
  async ({ authToken, id, title }) => {
    const response = await axios.patch(
      `http://localhost:5500/api/v1/todos/${id}`,
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
export { updateTodo };
