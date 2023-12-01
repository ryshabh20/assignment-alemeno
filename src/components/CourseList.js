// src/components/CourseList.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCourses, selectCourses } from "../redux/course/courseSlice";
import { Link } from "react-router-dom";
import api from "../api/api";

const CourseList = () => {
  const dispatch = useDispatch();
  const courses = useSelector(selectCourses);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await api.getCourses();
        dispatch(setCourses(data));
      } catch (error) {
        setError(error.message || "Error fetching courses");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [dispatch]);

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="container mx-auto mt-8">
      <nav className="mb-4 bg-blue-500 text-white p-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Course App
        </Link>
        <input
          type="text"
          placeholder="Search courses..."
          className="p-2 text-black rounded border-none focus:outline-none focus:ring focus:border-blue-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </nav>
      <h1 className="text-3xl font-bold mb-4">Explore Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredCourses.map((course) => (
          <Link key={course.id} to={`/course/${course.id}`}>
            <div className="bg-white p-6 shadow-md rounded-md h-full transition-transform hover:scale-105">
              <img
                src={course.thumbnail}
                alt={course.name}
                className="w-full h-32 object-cover mb-4 rounded-md"
              />
              <p className="text-xl font-bold mb-2">{course.name}</p>
              <p className="text-gray-600">{course.instructor}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
