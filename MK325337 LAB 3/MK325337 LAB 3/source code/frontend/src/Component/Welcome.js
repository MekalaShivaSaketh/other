import React from 'react';
import './Welcome.css'; // Import the updated CSS

function Welcome() {
  return (
    <div>
      {/* Welcome Section */}
      <div className="welcome-section">
        <h2 className="welcome-heading">Welcome to Your Project Management Dashboard</h2>
        <p className="welcome-message">
          Manage your projects efficiently with our Project Management Dashboard. Create, track, and collaborate on projects with ease.
        </p>
        <a href="/login" className="btn">Login</a>
        <a href="/register" className="btn">Register</a>
      </div>
    </div>
  );
}

export default Welcome;
