import { createSlice } from "@reduxjs/toolkit";
import { createNewUser } from "../thunks/createNewUser";
import { loginExistingUser } from "../thunks/loginExistingUser";
import { getAllTodos } from "../thunks/getAllTodos";
import { deleteTodo } from "../thunks/deleteTodo";
import { createTodo } from "../thunks/createTodo";
import { updateTodo } from "../thunks/updateTodo";

const userSlice = createSlice({
  name: "userDetails",
  initialState: {
    isLoggedIn: false,
    personalInfo: {
      authToken: null,
      name: null,
      email: null,
      todos: [],
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    // for creating new user
    builder.addCase(createNewUser.pending, (state, action) => {
      state.isLoggedIn = false;
    });
    builder.addCase(createNewUser.fulfilled, (state, action) => {
      state.personalInfo.name = action.payload.name;
      state.personalInfo.email = action.payload.email;
      state.personalInfo.authToken = action.payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(createNewUser.rejected, (state, action) => {
      state.isLoggedIn = false;
    });
    // for login user
    builder.addCase(loginExistingUser.pending, (state, action) => {
      state.isLoggedIn = false;
    });
    builder.addCase(loginExistingUser.fulfilled, (state, action) => {
      state.personalInfo.name = action.payload.name;
      state.personalInfo.email = action.payload.email;
      state.personalInfo.authToken = action.payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(loginExistingUser.rejected, (state, action) => {
      state.isLoggedIn = false;
    });
    // get all todos of a specific user
    builder.addCase(getAllTodos.pending, (state, action) => {
      // console.log(action.payload);
    });
    builder.addCase(getAllTodos.fulfilled, (state, action) => {
      // console.log(action.payload.data);
      state.personalInfo.todos = action.payload.data;
    });
    builder.addCase(getAllTodos.rejected, (state, action) => {
      // console.log(action.payload);
    });
    // delete a todo of a specific user.
    builder.addCase(deleteTodo.pending, (state, action) => {
      // console.log(action.payload);
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      // console.log(action.payload.data);
      state.personalInfo.todos = state.personalInfo.todos.filter(
        (todo) => todo._id !== action.payload.data._id
      );
      // console.log(action.payload);
    });
    builder.addCase(deleteTodo.rejected, (state, action) => {
      // console.log(action.payload);
    });
    // add a new todo for specific user
    builder.addCase(createTodo.pending, (state, action) => {
      // console.log(action.payload);
    });
    builder.addCase(createTodo.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.personalInfo.todos.push(action.payload.data);
    });
    builder.addCase(createTodo.rejected, (state, action) => {
      // console.log(action.payload);
    });
    // update a todo for specific user
    builder.addCase(updateTodo.pending, (state, action) => {
      // console.log(action.payload);
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.personalInfo.todos = state.personalInfo.todos.map((todo) => {
        if (todo._id === action.payload.data._id) {
          todo.title = action.payload.data.title;
        }
        return todo;
      });
    });
    builder.addCase(updateTodo.rejected, (state, action) => {});
  },
});
export const userSliceReducer = userSlice.reducer;
