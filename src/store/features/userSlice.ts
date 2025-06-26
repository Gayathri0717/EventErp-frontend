import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsers, updateUser, deleteUser,User } from '../../services/userAPI';
interface UserState{
  users:User[];
  loading:boolean;
}
const initialState:UserState={
  users:[],
  loading:false,
}
export const getUsers = createAsyncThunk('users/getUsers', fetchUsers);
export const editUser = createAsyncThunk('users/editUser', updateUser);
export const removeUser = createAsyncThunk('users/deleteUser', deleteUser);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUsers.pending, state => { state.loading = true; })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
         .addCase(removeUser.pending, state => { state.loading = true; })
            .addCase(removeUser.fulfilled, (state, action) => {
              state.loading = false;
            state.users = state.users.filter(user => user._id !== action.payload);
      
            // ✅ Adds the new event to the array
      
            });
  }
});
export default usersSlice.reducer;
