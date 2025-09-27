import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function Enrollments() {
  const [enrollments, setEnrollments] = useState([]);
  const [courses, setCourses] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [courseId, setCourseId] = useState("");

  useEffect(() => { load(); }, []);

  async function load() {
    try {
      const [r1, r2] = await Promise.all([api.get("/enrollments"), api.get("/courses")]);
      setEnrollments(r1.data || []);
      setCourses(r2.data || []);
    } catch (e) { console.error(e); alert("Failed to load"); }
  }

  async function submit(e) {
    e.preventDefault();
    if (!studentName || !courseId) return alert("Student and course required");
    await api.post("/enrollments", { studentName, course: { id: Number(courseId) } });
    setStudentName(""); setCourseId("");
    load();
  }

  return (
    <div>
      <h2>Enrollments</h2>

      <form onSubmit={submit} className="card">
        <div className="form-row">
          <input placeholder="Student name" value={studentName} onChange={e=>setStudentName(e.target.value)} />
          <select value={courseId} onChange={e=>setCourseId(e.target.value)}>
            <option value="">Select course</option>
            {courses.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
          </select>
        </div>
        <button type="submit">Enroll</button>
      </form>

      <h3>All Enrollments</h3>
      {enrollments.map(en => (
        <div className="card" key={en.id}>
          <div><strong>{en.studentName}</strong> enrolled in <em>{en.course?.title || '—'}</em></div>
        </div>
      ))}
    </div>
  );
}
