import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "../redux/course/courseSlice";

import authReducer from "../redux/course/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,

    course: courseReducer,
  },
});

export default store;
