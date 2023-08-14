// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const loginExistingUser = createAsyncThunk(
//   "login",
//   async ({ email, password }) => {
//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_SERVER_URL}/api/v1/user/login`,
//         {
//           email,
//           password,
//         }
//       );
//       console.log(response);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   }
// );
// export { loginExistingUser };

// ////////
import { createAsyncThunk } from "@reduxjs/toolkit";

const loginExistingUser = createAsyncThunk(
  "login",
  async ({ email, password }) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/api/v1/user/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      throw error;
    }
  }
);

export { loginExistingUser };
