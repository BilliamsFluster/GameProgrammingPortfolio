import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/projects.css";

const ProjectCard = ({ title, description, imageUrl, gifUrl, projectId }) => {
  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} alt={title} />}
      <div className="content">
        <iframe src= {gifUrl}  frameBorder="0" className="gif" allowFullScreen></iframe><p></p>
      </div>
      <div className='info'>
        <div className='title'>
          <h3>{title}</h3>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
          <div className="learnMore">
              <Link to={{
              pathname: `/project/${projectId}`,
              state: { title, description } // Passing state
            }}>
            <button className="project-button">Learn More</button>
            </Link>
          </div>

      </div>
    </div>
  );
};

export default ProjectCard;