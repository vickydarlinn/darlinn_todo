import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteTodo = createAsyncThunk(
  "todo/delete",
  async ({ authToken, id }) => {
    const response = await axios.delete(
      `${process.env.REACT_APP_SERVER_URL}/api/v1/todos/${id}`,
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
