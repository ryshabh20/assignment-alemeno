// App.js

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/course/authSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import CourseList from "./components/CourseList";
import CourseDetails from "./components/CourseDetails";
import StudentDashboard from "./components/StudentDashboard";
import { fetchUser } from "./api/authApi";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await fetchUser();
        dispatch(setUser(user));
        localStorage.setItem('userData', JSON.stringify(user));
      } catch (error) {
        console.error("Error in fetching user data:", error);
      }
    };

    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (storedUserData) {
      dispatch(setUser(storedUserData));
    } else {
      fetchUserData();
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
