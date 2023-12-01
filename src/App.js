import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import CourseList from "./components/CourseList";
import CourseDetails from "./components/CourseDetails";
import StudentDashboard from "./components/StudentDashboard";

const App = () => {
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
