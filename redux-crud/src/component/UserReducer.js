import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
  name: "users",
  initialState: userList,  
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const updateuser = state.find((user) => user.id == id);
      if (updateuser) {
        updateuser.name = name;
        updateuser.email = email;
      }
    },
    deleteUser : ( state,action) => {

      const { id } = action.payload;
      const deleteuser = state.find((user) => user.id == id);
      if (deleteuser) {
       return state.filter (f => f.id !== id)
      }
    }
  },
});
export const { addUser, updateUser,deleteUser } = userSlice.actions;
export default userSlice.reducer;
