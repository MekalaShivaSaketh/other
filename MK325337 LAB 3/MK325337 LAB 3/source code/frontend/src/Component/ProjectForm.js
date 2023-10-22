import React, { useState, useEffect } from "react";
import Navbar from "../Component/NavBar";
import "./ProjectForm.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProjectForm = () => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [productOwner, setProductOwner] = useState("");
  const [manager, setManager] = useState("");
  const [team, setTeam] = useState("");

  const [users, setUsers] = useState([]);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Fetch project details from the backend when the component mounts
    axios.get("http://localhost:8080/getUsers").then((response) => {
      setUsers(response.data);
      // console.log(projects);
    });

    axios
      .get("http://localhost:8080/getTeams")
      .then((response) => {
        // Assuming the response contains an array of team names
        setTeams(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/createProject", {
        proj_name: projectName,
        proj_desc: projectDescription,
        prod_owner_id: productOwner,
        mgr_id: manager,
        team_id: team,
      });

      if (response.data.message === "Project created successfully") {
        toast.success("Project created successfully", {
          position: toast.POSITION.TOP_CENTER,
        });

        setProjectName("");
        setProjectDescription("");
        setProductOwner("");
        setManager("");
        setTeam("");
      } else {
        toast.error("Error creating project", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error creating project", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className="project-form">
      <Navbar />
      <h2>Create a New Project</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Project Name:</label>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>
        <div>
          <label>Project Description:</label>
          <textarea
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Product Owner:</label>
          <select
            value={productOwner}
            onChange={(e) => setProductOwner(e.target.value)}
          >
            {users.map((user, idx) =>
              idx < 5 ? (
                <option value={user.firstName + " " + user.lastName}>
                  {user.firstName + " " + user.lastName}
                </option>
              ) : (
                ""
              )
            )}
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label>Manager:</label>
          <select value={manager} onChange={(e) => setManager(e.target.value)}>
            {users.map((user, idx) =>
              idx < 5 ? (
                <option value={user.firstName + " " + user.lastName}>
                  {user.firstName + " " + user.lastName}
                </option>
              ) : (
                ""
              )
            )}
            {/* <option value="manager_1">Manager 1</option>
            <option value="manager_2">Manager 2</option> */}
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label>Team:</label>
          <select value={team} onChange={(e) => setTeam(e.target.value)}>
            {teams.map((team) => (
              <option value={team.teamName}>{team.teamName}</option>
            ))}
            {/* <option value="team_1">Team 1</option>
            <option value="team_2">Team 2</option> */}
            {/* Add more options as needed */}
          </select>
        </div>
        <button type="submit">Create Project</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ProjectForm;
