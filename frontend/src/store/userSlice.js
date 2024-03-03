// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  status : false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.status = true;
    },
    clearUser: (state) => {
      state.user = null;
      state.status = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
