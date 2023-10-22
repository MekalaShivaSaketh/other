import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar"> {/* Apply the CSS class */}
    <h1 className="navbar-title">Project Management</h1>
    <ul className="navbar-links">
        <li>
          <Link to="/projects">Project</Link>
        </li>
       
        <li>
          <Link to="/teams">Team</Link>
        </li>
        <li>
          <Link to="/teamRosters">Team Roster</Link>
        </li>
        <li>
          <Link to="/userStories">User Story</Link>
        </li>
        <li>
          <Link to="/tasks">Task</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
