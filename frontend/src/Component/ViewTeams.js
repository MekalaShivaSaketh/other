// ViewTeams.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";

function ViewTeams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Fetch the list of team names from the backend when the component mounts
    axios
      .get("http://localhost:8080/getTeams")
      .then((response) => {
        // Assuming the response contains an array of team names
        setTeams(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  return (
    <div>
      <NavBar />
      <h2>View Teams</h2>
      <ul>
        {teams.map((team, index) => (
          <li key={index}>{team.teamName}</li>
        ))}
      </ul>
    </div>
  );
}

export default ViewTeams;
