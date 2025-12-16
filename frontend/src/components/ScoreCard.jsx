// Score
import React from "react";

export default function ScoreCard({ score, details, text }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 20, width: "600px", margin: "auto" }}>
      <h2>ATS Score: {score}/100</h2>
      <h3>Email: {details.email}</h3>
      <h3>Phone: {details.phone}</h3>

      <h3>Skills:</h3>
      <ul>
        {details.skills.map((s,i) => <li key={i}>{s}</li>)}
      </ul>

      <h3>Snippet</h3>
      <p>{text}</p>
    </div>
  );
}
