// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "../redux/course/courseSlice";

const store = configureStore({
  reducer: {
    course: courseReducer,
  },
});

export default store;
