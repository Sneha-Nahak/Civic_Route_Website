import React from 'react';

const AuthorityUpdates = ({ updates }) => {
  if (!updates || updates.length === 0) {
    return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Loading announcements...</p>;
  }

  // Define label priority: lower number = higher importance
  const labelPriority = {
    red: 1,
    orange: 2,
    yellow: 3
  };

  // Convert and sort updates
  const sortedUpdates = [...updates]
    .map(update => ({
      ...update,
      dateObj: new Date(update.date.year, update.date.month - 1, update.date.day)
    }))
    .sort((a, b) => {
      // First, sort by date (latest first)
      if (b.dateObj - a.dateObj !== 0) {
        return b.dateObj - a.dateObj;
      }
      // If dates are same, sort by label priority
      return (labelPriority[a.label] || 999) - (labelPriority[b.label] || 999);
    });

  return (
    <div>
      <h2 className="section-title">Authority Announcements</h2>
      {sortedUpdates.map((update) => (
        <div className={`card card-${update.label}`} key={update.id}>
          <div className="card-content">
            <p><strong>Details:</strong> {update.details || 'N/A'}</p>
            <p><strong>Area:</strong> {update.area || 'N/A'}</p>
            <p><strong>Announced By:</strong> {update.announcedBy || 'N/A'}</p>
            <p><strong>Date:</strong> {update.dateObj.toDateString()}</p>
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
