import React from 'react';

const AuthorityUpdates = ({ updates }) => (
  <div>
    <h2 className="section-title">Authority Announcements</h2>
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

export default AuthorityUpdates;
