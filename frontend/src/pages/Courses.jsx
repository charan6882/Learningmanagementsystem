import React, { useEffect, useState } from "react";
import api from "../services/api"; // 👈 adjust path if needed

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api.get("/courses")
      .then((res) => {
        setCourses(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch courses: " + err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading courses...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Available Courses</h2>
      {courses.length === 0 ? (
        <p>No courses found.</p>
      ) : (
        <ul>
          {courses.map((c) => (
            <li key={c.id}>
              <b>{c.title}</b> by {c.instructor} <br />
              <small>{c.description}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Courses;
