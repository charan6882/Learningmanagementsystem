import React, { useState } from "react";

export default function SubmissionForm({ onSubmit }) {
  const [studentName, setStudentName] = useState("");
  const [assignmentTitle, setAssignmentTitle] = useState("");
  const [content, setContent] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!studentName || !assignmentTitle) return alert("Student & title required");
    onSubmit({ studentName, assignmentTitle, content });
    setStudentName(""); setAssignmentTitle(""); setContent("");
  }

  return (
    <form onSubmit={submit} className="card">
      <div className="form-row">
        <input placeholder="Student name" value={studentName} onChange={e=>setStudentName(e.target.value)} />
        <input placeholder="Assignment title" value={assignmentTitle} onChange={e=>setAssignmentTitle(e.target.value)} />
      </div>
      <div className="form-row">
        <textarea placeholder="Submission content" value={content} onChange={e=>setContent(e.target.value)} style={{flex:1}} />
      </div>
      <button type="submit">Submit Assignment</button>
    </form>
  );
}
