import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Announcements.css";

const Announcements = () => {
  const [authorityUpdates, setAuthorityUpdates] = useState([]);

  const fetchUpdates = async () => {
    try {
      const res = await axios.get(
        "https://civicroutes-default-rtdb.firebaseio.com/authorityUpdates.json"
      );
      const data = res.data;
      if (data) {
        const updatesArray = Object.values(data);
        setAuthorityUpdates(updatesArray);
      }
    } catch (error) {
      console.error("Error fetching authority updates:", error);
    }
  };

  useEffect(() => {
    fetchUpdates();
  }, []);

  return (
    <div className="authority-container">
      <h1 className="authority-title">Authority Updates</h1>
      {authorityUpdates.length === 0 ? (
        <p className="empty-msg">Loading updates...</p>
      ) : (
        <div className="authority-grid">
          {authorityUpdates.map((update, idx) => (
            <div className="authority-card" key={idx}>
              <p className="area"><strong>Area:</strong> {update.area}</p>
              <p><strong>Details:</strong> {update.details}</p>
              <p><strong>Announced By:</strong> {update.announcedBy}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Announcements;
