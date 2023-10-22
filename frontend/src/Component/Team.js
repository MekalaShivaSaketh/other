import React, { useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Team.css";

function TeamForm() {
  const [teamName, setTeamName] = useState("");

  const handleTeamNameChange = (e) => {
    setTeamName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/createTeam", {
        teamName: teamName,
      });

      if (response.data.message === "Team created successfully") {
        toast.success("Team created successfully", {
          position: toast.POSITION.TOP_CENTER,
        });

        setTeamName("");
      } else {
        toast.error("Error creating team", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error creating team", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className="team-form">
      <NavBar />
      <h2 className="form-heading">Create a New Team</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <label className="form-label">
          Team Name:
          <input
            type="text"
            value={teamName}
            onChange={handleTeamNameChange}
            placeholder="Enter Team Name"
            className="form-input"
          />
        </label>
        <button type="submit" className="form-button">
          Create Team
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default TeamForm;
