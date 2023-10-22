import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import data from '../ContextApi';


const Home = () => {
  const { userdata, setUserData } = useContext(data);
  console.log(userdata.firstName);

  return (
    <div className='container container-home'>
      <h1>Home page</h1>
      <h2 className="username-home">Hi 👋 {userdata.firstName} {userdata.lastName}</h2>
      <div className="project-form-section">
        <h2 className="form-heading">Project Management</h2>
        
        {/* Add a button to navigate to NavBar */}
        <Link to="/navbar">
          <button className="nav-button">Go to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
