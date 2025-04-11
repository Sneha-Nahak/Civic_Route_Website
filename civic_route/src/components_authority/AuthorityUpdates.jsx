import React from 'react';

const AuthorityUpdates = ({ updates }) => {
  if (!updates || updates.length === 0) {
    return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Loading announcements...</p>;
  }

  return (
    <div>
      <h2 className="section-title">Authority Announcements</h2>
      {updates.map((update) => (
        <div className={`card card-${update.label}`} key={update.id}>
          <div className="card-content">
            <p><strong>Details:</strong> {update.details || 'N/A'}</p>
            <p><strong>Area:</strong> {update.area || 'N/A'}</p>
            <p><strong>Announced By:</strong> {update.announcedBy || 'N/A'}</p>
            <p><strong>Date:</strong> {update.dateObj?.toDateString?.() || 'Date not available'}</p>
            <span className={`label label-${update.label}`}>
              {update.label?.toUpperCase() || 'NOTICE'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AuthorityUpdates;