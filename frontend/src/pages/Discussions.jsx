import React, { useEffect, useState } from "react";
import api from "../services/api";
import DiscussionForm from "./DiscussionForm";

export default function Discussions() {
  const [items, setItems] = useState([]);

  async function load() {
    try {
      const res = await api.get("/discussions");
      setItems(res.data || []);
    } catch (e) { console.error(e); alert("Failed to load discussions"); }
  }

  useEffect(() => { load(); }, []);

  async function post(d) {
    await api.post("/discussions", d);
    load();
  }

  return (
    <div>
      <h2>Discussions</h2>
      <DiscussionForm onSubmit={post} />
      <h3>All Messages</h3>
      {items.map(it => (
        <div className="card" key={it.id}>
          <div><strong>{it.studentName}</strong></div>
          <div>{it.message}</div>
        </div>
      ))}
    </div>
  );
}
