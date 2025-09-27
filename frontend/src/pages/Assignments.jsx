import React, { useState } from "react";
import { submitAssignment, gradeSubmission } from "../services/api";

export default function Assignments() {
  const [assignmentId, setAssignmentId] = useState("");
  const [content, setContent] = useState("");
  const [gradeId, setGradeId] = useState("");
  const [grade, setGrade] = useState("");

  const submit = async () => {
    await submitAssignment({
      student: { id: 1 },
      assignment: { id: parseInt(assignmentId) },
      content
    });
    alert("Submitted successfully!");
  };

  const giveGrade = async () => {
    await gradeSubmission(gradeId, grade);
    alert("Graded successfully!");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Assignments</h2>
      <h3>Submit</h3>
      <input placeholder="Assignment ID" value={assignmentId} onChange={e=>setAssignmentId(e.target.value)} />
      <input placeholder="Content" value={content} onChange={e=>setContent(e.target.value)} />
      <button onClick={submit}>Submit</button>

      <h3>Grade</h3>
      <input placeholder="Submission ID" value={gradeId} onChange={e=>setGradeId(e.target.value)} />
      <input placeholder="Grade" value={grade} onChange={e=>setGrade(e.target.value)} />
      <button onClick={giveGrade}>Grade</button>
    </div>
  );
}
