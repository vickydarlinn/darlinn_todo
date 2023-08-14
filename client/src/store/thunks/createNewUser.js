// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const createNewUser = createAsyncThunk(
//   "create",
//   async ({ name, email, password }) => {
//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_SERVER_URL}/api/v1/user/register`,
//         {
//           name,
//           email,
//           password,
//         }
//       );
//       return response.data;
//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
//   }
// );
// export { createNewUser };

// ////////////
import { createAsyncThunk } from "@reduxjs/toolkit";

const createNewUser = createAsyncThunk(
  "create",
  async ({ name, email, password }) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/api/v1/user/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      throw error; // Rethrow the error to trigger the "rejected" action status
    }
  }
);

export { createNewUser };
