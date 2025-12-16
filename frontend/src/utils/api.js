// API
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000"
});

export const uploadResume = (file) => {
  const form = new FormData();
  form.append("file", file);
  return API.post("/resume/upload", form);
};

export const getJobs = (skills) => {
  return API.post("/jobs/recommend", { skills });
};
