import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const CodingCard = ({ project, image }) => {
  return (
    <div className="card-container">
      <div className="card">
        <p className="projectTitle">{project.title}</p>
        <div className="projectImg">
          <GatsbyImage image={image} alt={project.title} />
        </div>
        <p className="projectStack">{project.stack}</p>
        <p className="projectInfo">{project.info}</p>

        <div className="projectLinks">
          {project.website ? (
            <a className="singleLink" href={project.website}>
              Website
            </a>
          ) : (
            <></>
          )}

          <a className="singleLink" href={project.github}>
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default CodingCard;
