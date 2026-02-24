import React, { useState, useEffect } from "react";
import { fetchEngagements } from "./api";
import "./Dashboard.css";

const Dashboard = () => {
  const [engagements, setEngagements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchEngagements();
        setEngagements(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) return <div className="loading">Loading dashboard...</div>;

  return (
    <div className="dashboard">
      <div className="metrics-grid">
        {engagements.map((engagement, index) => (
          <div key={index} className="metric-card">
            <h3>{engagement.platform}</h3>
            <div className="metrics">
              <div className="metric">
                <span className="label">Likes</span>
                <span className="value">{engagement.likes.toLocaleString()}</span>
              </div>
              <div className="metric">
                <span className="label">Comments</span>
                <span className="value">{engagement.comments.toLocaleString()}</span>
              </div>
              <div className="metric">
                <span className="label">Shares</span>
                <span className="value">{engagement.shares.toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
