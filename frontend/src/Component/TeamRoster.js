import React, { useState } from 'react';
import NavBar from './NavBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./TeamRoster.css";

function TeamRoster() {
  const teams = ['Team A', 'Team B', 'Team C'];
  const members = ['Member 1', 'Member 2', 'Member 3'];

  const [selectedTeam, setSelectedTeam] = useState('');
  const [selectedMember, setSelectedMember] = useState('');

  const handleTeamChange = (e) => {
    setSelectedTeam(e.target.value);
  };

  const handleMemberChange = (e) => {
    setSelectedMember(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedTeam && selectedMember) {
      // Add logic to handle the selected team and member data
      console.log('Selected Team:', selectedTeam);
      console.log('Selected Member:', selectedMember);

      // Show a success toast
      toast.success('Member added to team roster', {
        position: toast.POSITION.TOP_CENTER,
      });

      // Clear the selections
      setSelectedTeam('');
      setSelectedMember('');
    } else {
      // Show an error toast if selections are incomplete
      toast.error('Please select a team and a member', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className="team-roster-form">
      <NavBar />
      <h2 className="form-heading">Create a Team Roster</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <label className="form-label">
          Select a Team:
          <select value={selectedTeam} onChange={handleTeamChange}>
            <option value="">Select a Team</option>
            {teams.map((team, index) => (
              <option key={index} value={team}>
                {team}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label className="form-label">
          Select a Member:
          <select value={selectedMember} onChange={handleMemberChange}>
            <option value="">Select a Member</option>
            {members.map((member, index) => (
              <option key={index} value={member}>
                {member}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button type="submit" className="form-button">Add to Roster</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default TeamRoster;
