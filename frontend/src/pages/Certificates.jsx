import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function Certificates() {
  const [certs, setCerts] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [courseName, setCourseName] = useState("");

  useEffect(() => { load(); }, []);

  async function load() {
    try {
      const res = await api.get("/certificates");
      setCerts(res.data || []);
    } catch (e) { console.error(e); alert("Failed to load certificates"); }
  }

  async function issue(e) {
    e.preventDefault();
    if (!studentName || !courseName) return alert("Name & course required");
    try {
      await api.post("/certificates", { studentName, courseName });
      setStudentName(""); setCourseName("");
      load();
    } catch (err) { console.error(err); alert("Issue failed"); }
  }

  return (
    <div>
      <h2>Certificates</h2>

      <form onSubmit={issue} className="card">
        <div className="form-row">
          <input placeholder="Student name" value={studentName} onChange={e=>setStudentName(e.target.value)} />
          <input placeholder="Course name" value={courseName} onChange={e=>setCourseName(e.target.value)} />
        </div>
        <button type="submit">Issue Certificate</button>
      </form>

      <h3>All Certificates</h3>
      {certs.map(c => (
        <div className="card" key={c.id}>
          <div><strong>{c.studentName}</strong> — {c.courseName}</div>
          <div className="small">Issued on: {c.issuedOn ? new Date(c.issuedOn).toLocaleDateString() : "—"}</div>
        </div>
      ))}
    </div>
  );
}
