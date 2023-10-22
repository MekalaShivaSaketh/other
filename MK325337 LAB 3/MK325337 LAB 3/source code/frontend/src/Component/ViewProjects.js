import React, { useState, useEffect } from "react";
import Navbar from "../Component/NavBar";
import axios from "axios";
import "./viewProjects.css";

const ViewProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch project details from the backend when the component mounts
    axios.get("http://localhost:8080/getProjects").then((response) => {
      setProjects(response.data);
      console.log(projects);
    });
  }, []); // Empty dependency array to run the effect once when mounted

  return (
    <div>
      <Navbar />
      <h2>View Projects</h2>
      <table>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Description</th>
            <th>Manager</th>
            <th>Owner</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project._id}>
              <td>{project.proj_name}</td>
              <td>{project.proj_desc}</td>
              <td>{project.manager_name}</td>
              <td>{project.owner_name}</td>
              <td>{project.team_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewProjects;
