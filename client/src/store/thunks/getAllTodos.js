import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllTodos = createAsyncThunk("todos/all", async (authToken) => {
  const response = await axios.get("http://localhost:5500/api/v1/todos", {
    headers: {
      Authorization: authToken,
    },
  });
  return response.data;
});

export { getAllTodos };
