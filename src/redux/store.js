import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "../redux/course/courseSlice";
import studentReducer from "../redux/course/studentSlice";
import authReducer from "../redux/course/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    student: studentReducer,
    course: courseReducer,
  },
});

export default store;
