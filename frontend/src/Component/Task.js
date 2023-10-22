import React, { useState } from 'react';
import NavBar from './NavBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Task() {
  // Define static data for user stories, creators, and status
  const userStories = ['User Story 1', 'User Story 2', 'User Story 3']; // Replace with your user stories
  const creators = ['User 1', 'User 2', 'User 3']; // Replace with your user names
  const statusOptions = ['Pending', 'To Do', 'In Progress', 'In Test', 'In Review', 'Done'];

  const [taskDescription, setTaskDescription] = useState('');
  const [selectedUserStory, setSelectedUserStory] = useState('');
  const [selectedCreator, setSelectedCreator] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const handleTaskDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleUserStoryChange = (e) => {
    setSelectedUserStory(e.target.value);
  };

  const handleCreatorChange = (e) => {
    setSelectedCreator(e.target.value);
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskDescription && selectedUserStory && selectedCreator && selectedStatus) {
      // Add logic to handle the task creation and display a success toast
      console.log('Task Description:', taskDescription);
      console.log('Selected User Story:', selectedUserStory);
      console.log('Selected Creator:', selectedCreator);
      console.log('Selected Status:', selectedStatus);

      // Show a success toast
      toast.success('Task created successfully', {
        position: toast.POSITION.TOP_CENTER,
      });

      // Clear the form inputs
      setTaskDescription('');
      setSelectedUserStory('');
      setSelectedCreator('');
      setSelectedStatus('');
    } else {
      // Show an error toast if any of the fields are empty
      toast.error('Please fill in all fields', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div>
      <NavBar />
      <h2>Create a Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Task Description:
          <textarea
            value={taskDescription}
            onChange={handleTaskDescriptionChange}
            placeholder="Enter Task Description"
          />
        </label>
        <br />
        <label>
          Select a User Story:
          <select value={selectedUserStory} onChange={handleUserStoryChange}>
            <option value="">Select a User Story</option>
            {userStories.map((userStory, index) => (
              <option key={index} value={userStory}>
                {userStory}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Select a Creator:
          <select value={selectedCreator} onChange={handleCreatorChange}>
            <option value="">Select a Creator</option>
            {creators.map((creator, index) => (
              <option key={index} value={creator}>
                {creator}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Select Status:
          <select value={selectedStatus} onChange={handleStatusChange}>
            <option value="">Select Status</option>
            {statusOptions.map((status, index) => (
              <option key={index} value={status}>
                {status}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button type="submit">Create Task</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Task;
