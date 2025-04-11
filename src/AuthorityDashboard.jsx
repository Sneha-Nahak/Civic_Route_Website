// Updated AuthorityDashboard with modular components and modern design layout
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AuthorityDashboard.css';


const API_URL = 'https://civicroutes-default-rtdb.firebaseio.com';

const Header = () => (
  <header className="header">
    <h1 className="title">CivicRoutes - Authority Dashboard</h1>
    <nav className="nav">
      <button className="nav-btn">Local Issues</button>
      <button className="nav-btn">Make Announcement</button>
      <button className="nav-btn">Current Announcements</button>
      <button className="nav-btn">Login</button>
    </nav>
  </header>
);

const NewAnnouncement = ({ newUpdate, setNewUpdate, handleUpdateSubmit }) => (
  <div className="card">
    <div className="card-content">
      <h2 className="section-title">Announce Update</h2>
      <textarea
        className="input textarea"
        placeholder="Details"
        value={newUpdate.details}
        onChange={e => setNewUpdate({ ...newUpdate, details: e.target.value })}
      />
      <input
        className="input"
        placeholder="Area"
        value={newUpdate.area}
        onChange={e => setNewUpdate({ ...newUpdate, area: e.target.value })}
      />
      <input
        className="input"
        placeholder="Announced By"
        value={newUpdate.announcedBy}
        onChange={e => setNewUpdate({ ...newUpdate, announcedBy: e.target.value })}
      />
      <select
        className="input"
        value={newUpdate.label}
        onChange={e => setNewUpdate({ ...newUpdate, label: e.target.value })}
      >
        <option value="red">High Priority (Red)</option>
        <option value="orange">Medium Priority (Orange)</option>
        <option value="yellow">Low Priority (Yellow)</option>
      </select>
      <button className="button primary" onClick={handleUpdateSubmit}>Post Update</button>
    </div>
  </div>
);

const IssuesList = ({ issues, handleStatusChange }) => (
  <div>
    <h2 className="section-title">Local Issues</h2>
    {issues.map(issue => (
      <div className="card" key={issue.id}>
        <div className="card-content">
          <img src={issue.image} alt="issue" className="issue-image" />
          <p><strong>Type:</strong> {issue.type}</p>
          <p><strong>Detail:</strong> {issue.detail}</p>
          <p><strong>Location:</strong> {issue.location}</p>
          <p><strong>Status:</strong> {issue.status}</p>
          <div className="button-group">
            <button className="button secondary" onClick={() => handleStatusChange(issue.id, 'inprogress')}>In Progress</button>
            <button className="button primary" onClick={() => handleStatusChange(issue.id, 'fixed')}>Mark as Fixed</button>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const AuthorityUpdates = ({ updates }) => (
  <div>
    <h2 className="section-title">Authority Updates</h2>
    {updates.map(update => (
      <div className={`card card-${update.label}`} key={update.id}>
        <div className="card-content">
          <p><strong>Details:</strong> {update.details}</p>
          <p><strong>Area:</strong> {update.area}</p>
          <p><strong>Announced By:</strong> {update.announcedBy}</p>
          <p><strong>Date:</strong> {update.dateObj.toDateString()}</p>
          <span className={`label label-${update.label}`}>{update.label.toUpperCase()}</span>
        </div>
      </div>
    ))}
  </div>
);

const Footer = () => (
  <footer className="footer">
    <p>© 2025 CivicRoutes | For queries contact civicroutes@support.com</p>
  </footer>
);

const AuthorityDashboard = () => {
  const [issues, setIssues] = useState([]);
  const [updates, setUpdates] = useState([]);
  const [newUpdate, setNewUpdate] = useState({ details: '', area: '', announcedBy: '', label: 'yellow' });

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/.json`);
      const data = response.data;

      if (data) {
        const localIssues = data.localIssues ? Object.values(data.localIssues) : [];
        const authorityUpdates = data.authorityUpdates ? Object.values(data.authorityUpdates) : [];

        const issuesWithDate = localIssues.map(issue => ({
          ...issue,
          dateObj: issue.date ? new Date(issue.date.year, issue.date.month - 1, issue.date.day) : new Date()
        })).sort((a, b) => b.dateObj - a.dateObj);

        const updatesWithDate = authorityUpdates.map(update => ({
          ...update,
          dateObj: update.date ? new Date(update.date.year, update.date.month - 1, update.date.day) : new Date()
        })).sort((a, b) => b.dateObj - a.dateObj);

        setIssues(issuesWithDate);
        setUpdates(updatesWithDate);
      }
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  const handleStatusChange = (id, newStatus) => {
    setIssues(prev => prev.map(issue => issue.id === id ? { ...issue, status: newStatus } : issue));
  };

  const handleUpdateSubmit = async () => {
    if (newUpdate.details && newUpdate.area && newUpdate.announcedBy && newUpdate.label) {
      const today = new Date();
      const updateToPost = {
        ...newUpdate,
        date: {
          day: today.getDate(),
          month: today.getMonth() + 1,
          year: today.getFullYear()
        },
        id: updates.length + 1
      };

      try {
        await axios.post(`${API_URL}/authorityUpdates.json`, updateToPost);
        setUpdates(prev => [updateToPost, ...prev]);
        setNewUpdate({ details: '', area: '', announcedBy: '', label: 'yellow' });
      } catch (err) {
        console.error('Error uploading update:', err);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <Header />
      <NewAnnouncement newUpdate={newUpdate} setNewUpdate={setNewUpdate} handleUpdateSubmit={handleUpdateSubmit} />
      <IssuesList issues={issues} handleStatusChange={handleStatusChange} />
      <AuthorityUpdates updates={updates} />
      <Footer />
    </div>
  );
};

export default AuthorityDashboard;
