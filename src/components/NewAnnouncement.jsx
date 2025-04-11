import React from 'react';

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

export default NewAnnouncement;
