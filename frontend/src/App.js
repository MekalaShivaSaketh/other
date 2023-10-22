//import logo from './logo.svg';
import "./App.css";
import "./Component/NavBar.css";
import Home from "./Component/Home";
import { Login } from "./Component/Login";
import Register from "./Component/Register";
import NavBar from "./Component/NavBar";
import TeamForm from "./Component/Team";
import ViewTeams from "./Component/ViewTeams";
import ViewProjects from "./Component/ViewProjects";
import TeamRoster from "./Component/TeamRoster";
import UserStory from "./Component/UserStory";
import Task from "./Component/Task";
import "./Component/style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import data from "./ContextApi";
import { useState } from "react";
import ProjectForm from "./Component/ProjectForm";
import Welcome from "./Component/Welcome";

function App() {
  const [userdata, setUserData] = useState({});

  return (
    <div className="App">
      <data.Provider value={{ userdata, setUserData }}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={userdata && userdata._id ? <Home /> : <Welcome />}
            />
            <Route path="/welcome" component={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/projects" element={<ProjectForm />} />
            <Route path="/teams" element={<TeamForm />} />
            <Route path="/view-teams" element={<ViewTeams />} />
            <Route path="/view-projects" element={<ViewProjects />} />
            <Route path="/teamRosters" element={<TeamRoster />} />
            <Route path="/userStories" element={<UserStory />} />
            <Route path="/tasks" element={<Task />} />
            <Route path="/navbar" element={<NavBar />} />
          </Routes>
        </Router>
      </data.Provider>
    </div>
  );
}

export default App;
