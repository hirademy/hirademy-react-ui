// src/components/Project.js
import React from 'react';
import './Project.css'; // Ensure this CSS file is properly imported

const Project = () => {
  // Example projects data
  const projects = [
    {
      name: "Project A",
      timeline: "2024",
      techUsed: "React, Node.js",
      description: "Description of Project A."
    },
    {
      name: "Project B",
      timeline: "2023",
      techUsed: "Angular, Express",
      description: "Description of Project B."
    },
    {
      name: "Project C",
      timeline: "2022",
      techUsed: "Vue.js, Django",
      description: "Description of Project C."
    },
    // Add more projects as needed
  ];

  // Handler for the "Add Project" button
  const handleAddProject = () => {
    // Implement the logic to add a project, e.g., show a form or open a modal
    alert("Add Project button clicked");
  };

  return (
    <div className="project-container">
      <h2 className="section-title">Projects</h2>
      <div className="project-details">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p><strong>Timeline:</strong> {project.timeline}</p>
            <p><strong>Tech Used:</strong> {project.techUsed}</p>
            <p><strong>Description:</strong> {project.description}</p>
          </div>
        ))}
      </div>
      <button className="add-project-button" onClick={handleAddProject}>Add Project</button>
    </div>
  );
};

export default Project;
