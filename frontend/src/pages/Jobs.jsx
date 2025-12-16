// Jobs
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getJobs } from "../utils/api";
import SkillGapChart from "../components/SkillGapChart";

export default function Jobs() {
  const { state } = useLocation();
  const data = state?.data;
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs(data.details.skills).then(res => setJobs(res.data.recommendations));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Recommended Jobs</h1>

      {jobs.map((job, i) => (
        <div key={i} style={{ border: "1px solid #ddd", padding: 20, margin: "auto", width: 600 }}>
          <h2>{job.role}</h2>
          <h3>Match: {job.match}%</h3>

          <SkillGapChart matched={job.matched_skills.length} missing={5 - job.matched_skills.length} />
        </div>
      ))}
    </div>
  );
}
