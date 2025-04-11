import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/UserDashboard.css";

const UserDashboard = () => {
  const [issues, setIssues] = useState([]);

  const fetchIssues = async () => {
    try {
      const res = await axios.get(
        "https://civicroutes-default-rtdb.firebaseio.com/localIssues.json"
      );
      const data = res.data;
      if (data) {
        const issuesArray = Object.entries(data).map(([id, issue]) => ({
          id,
          ...issue,
        }));
        setIssues(issuesArray);
      } else {
        setIssues([]);
      }
    } catch (error) {
      console.error("Error fetching issues:", error);
    }
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">📣 Civic Issue Reporter</h1>

      <div className="section">
        <h2 className="section-title">📝 Reported Issues</h2>
        {issues.length === 0 ? (
          <p className="empty-msg">No issues reported yet.</p>
        ) : (
          <div className="card-grid">
            {issues.map((issue) => (
              <div className="card" key={issue.id}>
                <h3>{issue.type}</h3>
                <p>{issue.detail}</p>
                <p className="card-location">📍 {issue.location}</p>
                {issue.image && (
                  <img
                    src={issue.image}
                    alt={issue.type}
                    className="card-img"
                  />
                )}
                <span className={`card-status ${issue.status}`}>
                  {issue.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
