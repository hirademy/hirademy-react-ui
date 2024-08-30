// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom'; // Import Link for navigation
import userDetails from './userDetails'; // Import mock data
import './Dashboard.css';

function Dashboard() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [userDetailsState, setUserDetailsState] = useState({});
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setUserDetailsState(userDetails);
    }, 1000);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetailsState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
    // Save updated details to backend or local storage
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...userDetailsState.skills];
    updatedSkills[index] = value;
    setUserDetailsState((prevState) => ({
      ...prevState,
      skills: updatedSkills,
    }));
  };

  const addSkill = () => {
    setUserDetailsState((prevState) => ({
      ...prevState,
      skills: [...prevState.skills, ""],
    }));
  };

  const removeSkill = (index) => {
    const updatedSkills = userDetailsState.skills.filter((_, i) => i !== index);
    setUserDetailsState((prevState) => ({
      ...prevState,
      skills: updatedSkills,
    }));
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...userDetailsState.projects];
    updatedProjects[index][field] = value;
    setUserDetailsState((prevState) => ({
      ...prevState,
      projects: updatedProjects,
    }));
  };

  const addProject = () => {
    setUserDetailsState((prevState) => ({
      ...prevState,
      projects: [...prevState.projects, { name: "", description: "" }],
    }));
  };

  const removeProject = (index) => {
    const updatedProjects = userDetailsState.projects.filter((_, i) => i !== index);
    setUserDetailsState((prevState) => ({
      ...prevState,
      projects: updatedProjects,
    }));
  };

  if (isLoading) {
    return <div className="dashboard-container">Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <div className="profile-header">
        {isAuthenticated && (
          <div className="profile-info">
            <img src={user.picture} alt="Profile" className="profile-pic-large" />
            <h1 className="username">{user.name}</h1>
            <nav className="navbar">
              <Link to="/test-results">Test Results</Link> {/* Updated to use Link */}
              <Link to="/projects">Projects</Link> {/* Updated to use Link */}
            </nav>
          </div>
        )}
      </div>

      <div id="test-results" className="card">
        <h2 className="section-title">Hirademy ID</h2>
        <div className="section-content">
          <p><strong>Student ID:</strong> {editing ? <input type="text" name="studentId" value={userDetailsState.studentId} onChange={handleChange} /> : userDetailsState.studentId}</p>
          <p><strong>College Name:</strong> {editing ? <input type="text" name="collegeName" value={userDetailsState.collegeName} onChange={handleChange} /> : userDetailsState.collegeName}</p>
          <p><strong>Roll No:</strong> {editing ? <input type="text" name="rollNo" value={userDetailsState.rollNo} onChange={handleChange} /> : userDetailsState.rollNo}</p>
          <p><strong>Passing Year:</strong> {editing ? <input type="text" name="passingYear" value={userDetailsState.passingYear} onChange={handleChange} /> : userDetailsState.passingYear}</p>
          <p><strong>Branch:</strong> {editing ? <input type="text" name="branch" value={userDetailsState.branch} onChange={handleChange} /> : userDetailsState.branch}</p>
          <p><strong>Degree:</strong> {editing ? <input type="text" name="degree" value={userDetailsState.degree} onChange={handleChange} /> : userDetailsState.degree}</p>
        </div>
      </div>

      <div id="projects" className="card">
        <h2 className="section-title">Contact Details</h2>
        <div className="section-content">
          <p><strong>Phone No.:</strong> {editing ? <input type="text" name="phoneNumber" value={userDetailsState.phoneNumber} onChange={handleChange} /> : userDetailsState.phoneNumber}</p>
          <p><strong>Email:</strong> {editing ? <input type="text" name="email" value={userDetailsState.email} onChange={handleChange} /> : userDetailsState.email}</p>
          <p><strong>LinkedIn:</strong> {editing ? <input type="text" name="linkedin" value={userDetailsState.linkedin} onChange={handleChange} /> : <a href={userDetailsState.linkedin} target="_blank" rel="noopener noreferrer">{userDetailsState.linkedin}</a>}</p>
        </div>
      </div>

      <div className="card">
        <h2 className="section-title">Personal Details</h2>
        <div className="section-content">
          <p><strong>Name:</strong> {editing ? <input type="text" name="name" value={userDetailsState.name} onChange={handleChange} /> : userDetailsState.name}</p>
          <p><strong>Date of Birth:</strong> {editing ? <input type="text" name="dob" value={userDetailsState.dob} onChange={handleChange} /> : userDetailsState.dob}</p>
          <p><strong>Gender:</strong> {editing ? <input type="text" name="gender" value={userDetailsState.gender} onChange={handleChange} /> : userDetailsState.gender}</p>
          <p><strong>Alternate Email:</strong> {editing ? <input type="text" name="alternateEmail" value={userDetailsState.alternateEmail} onChange={handleChange} /> : userDetailsState.alternateEmail}</p>
          <p><strong>Parents:</strong> {editing ? <input type="text" name="parents" value={userDetailsState.parents} onChange={handleChange} /> : userDetailsState.parents}</p>
          <p><strong>Address:</strong> {editing ? <input type="text" name="address" value={userDetailsState.address} onChange={handleChange} /> : userDetailsState.address}</p>
        </div>
      </div>

      <div className="card">
        <h2 className="section-title">Skills</h2>
        <div className="section-content">
          <ul>
            {userDetailsState.skills && userDetailsState.skills.map((skill, index) => (
              <li key={index} className="skill-item">
                {editing ? (
                  <>
                    <input type="text" name={`skill${index}`} value={skill} onChange={(e) => handleSkillChange(index, e.target.value)} />
                    <button className="remove-skill-button" onClick={() => removeSkill(index)}>Remove</button>
                  </>
                ) : (
                  skill
                )}
              </li>
            ))}
          </ul>
          {editing && <button className="add-skill-button" onClick={addSkill}>Add Skill</button>}
        </div>
      </div>

      <div id="mentorship" className="card projects-card">
        <h2 className="section-title">Academic Projects</h2>
        <div className="section-content">
          <ul>
            {userDetailsState.projects && userDetailsState.projects.map((project, index) => (
              <li key={index}>
                <strong>
                  {editing ? (
                    <>
                      <span>Project: {index + 1}</span>
                      <input type="text" name={`projectName${index}`} value={project.name} onChange={(e) => handleProjectChange(index, 'name', e.target.value)} />
                      <br />
                      <span>Description:</span>
                      <br />
                      <textarea
                        name={`projectDescription${index}`}
                        value={project.description}
                        onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                        style={{ width: '100%', minHeight: '50px' }}
                      />
                      <button className="remove-project-button" onClick={() => removeProject(index)}>Remove</button>
                    </>
                  ) : (
                    <>
                      Project: {index + 1} - {project.name}
                      <br />
                      Description: {project.description}
                    </>
                  )}
                </strong>
              </li>
            ))}
          </ul>
          {editing && <button className="add-project-button" onClick={addProject}>Add Project</button>}
        </div>
      </div>

      <div className="card">
        {editing ? (
          <>
            <button className="save-button" onClick={handleSave}>Save</button>
            <button className="edit-button" onClick={() => setEditing(false)}>Cancel</button>
          </>
        ) : (
          <button className="edit-button" onClick={handleEdit}>Edit</button>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
