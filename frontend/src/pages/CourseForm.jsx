import React, { useState } from "react";

export default function CourseForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [instructor, setInstructor] = useState("");
  const [description, setDescription] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!title.trim()) return alert("Title required");
    onSubmit({ title, instructor, description });
    setTitle(""); setInstructor(""); setDescription("");
  }

  return (
    <form onSubmit={submit} className="card">
      <div className="form-row">
        <input placeholder="Course title" value={title} onChange={e=>setTitle(e.target.value)} />
        <input placeholder="Instructor" value={instructor} onChange={e=>setInstructor(e.target.value)} />
      </div>
      <div className="form-row">
        <textarea placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} style={{flex:1}} />
      </div>
      <button type="submit">Add Course</button>
    </form>
  );
}
