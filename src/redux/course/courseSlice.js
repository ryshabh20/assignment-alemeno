import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },

  },
});

export const { setCourses, markCourseCompleted } = courseSlice.actions;
export const selectCourses = (state) => state.course.courses;
export default courseSlice.reducer;
