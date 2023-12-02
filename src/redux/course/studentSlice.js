import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enrolledCourses: [],
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    enrollInCourse: (state, action) => {
      state.enrolledCourses.push(action.payload);
    },
    markCourseAsCompleted: (state, action) => {
      state.enrolledCourses = state.enrolledCourses.filter(
        (course) => course.id !== action.payload
      );
    },
  },
});

export const { enrollInCourse, markCourseAsCompleted } = studentSlice.actions;
export const selectEnrolledCourses = (state) => state.student.enrolledCourses;
export default studentSlice.reducer;
