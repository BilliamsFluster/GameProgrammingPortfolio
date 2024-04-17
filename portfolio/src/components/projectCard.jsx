import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles/projects.css";

const ProjectCard = ({ title, description, imageUrl, gifUrl, path }) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate(path);
    window.scrollTo(0, 0);
  };

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
            <button className="project-button" onClick={handleLearnMore}>Learn More</button>
          </div>

      </div>
    </div>
  );
};

export default ProjectCard;