import React, { useState } from "react";

export default function DiscussionForm({ onSubmit }) {
  const [studentName, setStudentName] = useState("");
  const [message, setMessage] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!studentName || !message) return alert("Name and message required");
    onSubmit({ studentName, message });
    setStudentName(""); setMessage("");
  }

  return (
    <form className="card" onSubmit={submit}>
      <div className="form-row">
        <input placeholder="Your name" value={studentName} onChange={e=>setStudentName(e.target.value)} />
        <input placeholder="Message" value={message} onChange={e=>setMessage(e.target.value)} />
      </div>
      <button type="submit">Post</button>
    </form>
  );
}
