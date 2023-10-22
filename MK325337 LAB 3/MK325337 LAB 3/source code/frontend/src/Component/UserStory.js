import React, { useState } from 'react';
import NavBar from './NavBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./UserStory.css";


function UserStory() {
  const projects = ['Project A', 'Project B', 'Project C'];

  const [userStory, setUserStory] = useState('');
  const [selectedProject, setSelectedProject] = useState('');
  const [priority, setPriority] = useState('');

  const handleUserStoryChange = (e) => {
    setUserStory(e.target.value);
  };

  const handleProjectChange = (e) => {
    setSelectedProject(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userStory && selectedProject && priority) {
      // Add logic to handle the task creation and display a success toast
      console.log('User Story:', UserStory);
      console.log('Selected Project:', selectedProject);
      console.log('Priority:', priority);
     

      // Show a success toast
      toast.success('User Story created successfully', {
        position: toast.POSITION.TOP_CENTER,
      });

      // Clear the form inputs
      setUserStory('');
     
      setSelectedProject('');
      setPriority('');
    } else {
      // Show an error toast if any of the fields are empty
      toast.error('Please fill in all fields', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
   
  

  return (
    <div className="user-story-form">
   
      <NavBar />
      <h2 className="form-heading">Create a User Story</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <label className="form-label">
          User Story:
          <textarea
            value={userStory}
            onChange={handleUserStoryChange}
            placeholder="Enter User Story"
            className="form-input"
          />
        </label>
        <br />
        <label className="form-label">
          Select a Project:
          <select
            value={selectedProject}
            onChange={handleProjectChange}
            className="form-input"
          >
            <option value="">Select a Project</option>
            {projects.map((project, index) => (
              <option key={index} value={project}>
                {project}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label className="form-label">
          Priority:
          <input
            type="number"
            value={priority}
            onChange={handlePriorityChange}
            placeholder="Enter Priority"
            className="form-input"
          />
        </label>
        <br />
        <button type="submit" className="form-button">
          Create User Story
        </button>
      </form>
      {/* ToastContainer for displaying popups */}
      <ToastContainer />
    </div>
  );
}

export default UserStory;
