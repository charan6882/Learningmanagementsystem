import React, { useEffect, useState } from "react";
import api from "../services/api";
import SubmissionForm from "./SubmissionForm";

export default function Submissions() {
  const [subs, setSubs] = useState([]);

  useEffect(() => { load(); }, []);

  async function load() {
    try {
      const res = await api.get("/submissions");
      setSubs(res.data || []);
    } catch (e) { console.error(e); alert("Failed to load submissions"); }
  }

  async function add(sub) {
    await api.post("/submissions", sub);
    load();
  }

  async function grade(id) {
    const g = prompt("Enter grade (e.g. A, 90):");
    if (!g) return;
    try {
      // controller expects raw string body in the example; axios sends JSON by default.
      // send object {grade: "..." } - ensure backend handles this or use text/plain
      await api.put(`/submissions/${id}/grade`, g, { headers: { "Content-Type": "text/plain" } });
      load();
    } catch (e) {
      console.error(e);
      alert("Failed to set grade");
    }
  }

  return (
    <div>
      <h2>Submissions</h2>
      <SubmissionForm onSubmit={add} />
      <h3>All Submissions</h3>
      {subs.map(s => (
        <div className="card" key={s.id}>
          <div><strong>{s.studentName}</strong> — {s.assignmentTitle}</div>
          <div className="small">{s.content}</div>
          <div className="small">Grade: {s.grade || "—"}</div>
          <button onClick={() => grade(s.id)}>Set Grade</button>
        </div>
      ))}
    </div>
  );
}
