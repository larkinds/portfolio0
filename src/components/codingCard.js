import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const CodingCard = ({ project, image }) => {
  return (
    <div className="card-container">
      <div className="card">
        <a className="project-title" href={project.github}>{project.title}</a>
        <div className="project-img">
          <GatsbyImage image={image} alt={project.title} />
        </div>
        <p className="project-stack">{project.stack}</p>
        <p className="project-info">{project.info}</p>

        <div className="project-links">
          {project.website ? (
            <a className="single-link" href={project.website}>
              Website
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodingCard;
