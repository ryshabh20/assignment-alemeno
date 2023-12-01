import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCourses } from "../redux/course/courseSlice";

const CourseDetails = () => {
  const { id } = useParams();
  const courses = useSelector(selectCourses);
  const course = courses.find((c) => c.id.toString() === id);

  if (!course) return <p>Course not found</p>;

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white p-8 shadow-md rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={course.thumbnail}
              alt={course.name}
              className="w-full h-64 object-cover rounded-md mb-8"
            />
            <p className="text-gray-600 ">
              <strong>Instructor: </strong>
              {course.instructor}
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{course.name}</h1>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <ul className="mb-4">
              <li>
                <strong>Enrollment Status:</strong> {course.enrollmentStatus}
              </li>
              <li>
                <strong>Duration:</strong> {course.duration}
              </li>
              <li>
                <strong>Schedule:</strong> {course.schedule}
              </li>
              <li>
                <strong>Location:</strong> {course.location}
              </li>
              <li>
                <strong>Prerequisites:</strong>{" "}
                {course.prerequisites.join(", ")}
              </li>
            </ul>
            <details>
              <summary className="cursor-pointer text-blue-500 font-bold mb-2">
                Syllabus
              </summary>
              <ul className="ml-4">
                {course.syllabus.map((item) => (
                  <li key={item.week}>
                    <strong>Week {item.week}:</strong> {item.topic}
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
