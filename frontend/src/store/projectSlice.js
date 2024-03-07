// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allProjects: [],
  userProjects : []
};

export const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setAllProjects: (state, action) => {
      state.allProjects = action.payload;
    },
    setUserProjects : (state, action) => {
        state.userProjects = action.payload;
    },
    clearProjects: (state) => {
      state.allProjects = [];
      state.userProjects = [];
    },
  },
});

export const { setAllProjects, setUserProjects, clearProjects } = projectSlice.actions;

export const selectProjects = (state) => state.projects.projects;

export default projectSlice.reducer;
