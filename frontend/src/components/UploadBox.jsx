// Upload
import React, { useState } from "react";
import { uploadResume } from "../utils/api";
import { useNavigate } from "react-router-dom";

const UploadBox = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleUpload = async () => {
    if (!file) return alert("Select file!");

    const res = await uploadResume(file);
    navigate("/result", { state: { data: res.data } });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Upload Resume</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])}/>
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadBox;
