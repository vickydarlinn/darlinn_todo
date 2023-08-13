import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteTodo = createAsyncThunk(
  "todo/delete",
  async ({ authToken, id }) => {
    const response = await axios.delete(
      `http://localhost:5500/api/v1/todos/${id}`,
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
export { deleteTodo };
