import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles/projects.css";
import gsap from 'gsap'

const ProjectCard = ({ title, description, sourceImage, sourceImageUrl, imageUrl, gifUrl, path }) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  const scaleUp = (e) => gsap.to(e.currentTarget, { scale: 1.1, duration: 0.4 });
  const scaleDown = (e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.4 });

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
          <a href={sourceImageUrl}>
              <img onMouseEnter={scaleUp} onMouseLeave={scaleDown} src={sourceImage} alt="" />
          </a>
          
        </div>
          <div className="learnMore">
            <button className="project-button" onClick={handleLearnMore}>Learn More</button>
          </div>

      </div>
    </div>
  );
};

export default ProjectCard;