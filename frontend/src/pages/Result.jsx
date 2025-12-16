// Result
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ScoreCard from "../components/ScoreCard";

export default function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const data = state?.data;

  if (!data) return <h2>No Data</h2>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Analysis Result</h1>
      <ScoreCard score={data.ats_score} details={data.details} text={data.text_snippet} />

      <button
        onClick={() => navigate("/jobs", { state: { data } })}
        style={{ padding: 10, marginTop: 20 }}
      >
        View Job Recommendations
      </button>
    </div>
  );
}
