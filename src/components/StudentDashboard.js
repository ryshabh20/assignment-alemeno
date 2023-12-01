// src/components/StudentDashboard.js
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCourses, markCourseCompleted } from "../redux/course/courseSlice";

const StudentDashboard = () => {
  const dispatch = useDispatch();
  const courses = useSelector(selectCourses);

  const handleMarkAsCompleted = (courseId) => {
    dispatch(markCourseCompleted({ courseId }));
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Student Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white p-4 shadow-md rounded-md h-full flex flex-col justify-between"
          >
            <div>
              <img
                src={course.thumbnail}
                alt={course.name}
                className="w-full h-32 object-cover mb-4 rounded-md"
              />
              <p className="text-xl font-bold mb-2">{course.name}</p>
              <p className="text-gray-600 mb-2">
                Instructor: {course.instructor}
              </p>

              <div className="mb-2">
                <strong>Progress:</strong>
                <div className="bg-gray-300 h-2 rounded-md mt-1">
                  <div
                    className="bg-blue-500 h-full rounded-md"
                    style={{ width: `${course.progress || 0}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <Link to={`/course/${course.id}`} className="text-blue-500">
                View Details
              </Link>
              <button
                className={`bg-green-500 text-white px-4 py-2 rounded-md ${
                  course.completed && "cursor-not-allowed opacity-50"
                } hover:bg-green-600 transition`}
                onClick={() => handleMarkAsCompleted(course.id)}
                disabled={course.completed}
              >
                {course.completed ? "Completed" : "Mark as Completed"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
