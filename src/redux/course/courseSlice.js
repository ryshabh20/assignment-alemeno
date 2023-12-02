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
      state.courses = state.courses.map((course) =>
      course.id === courseId ? { ...course, completed: true } : course
    );
    },
  },
});

export const { setCourses, markCourseCompleted } = courseSlice.actions;
export const selectCourses = (state) => state.course.courses;
export default courseSlice.reducer;
