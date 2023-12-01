import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courses: [],
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
    markCourseCompleted: (state, action) => {
      const { courseId } = action.payload;
      const course = state.courses.find((c) => c.id === courseId);
      if (course) {
        course.completed = true;
      }
    },
  },
});

export const { setCourses, markCourseCompleted } = courseSlice.actions;
export const selectCourses = (state) => state.course.courses;
export default courseSlice.reducer;
