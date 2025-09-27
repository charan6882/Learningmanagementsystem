import axios from "axios";

// Use environment variable or fallback
const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || "http://localhost:8085/api",
  headers: { "Content-Type": "application/json" },
});

export default api;
