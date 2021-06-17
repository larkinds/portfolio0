import React from 'react';

export default function CodingCard({ project }) {
  return (
    <div className="card-container">
      <div className="card">
        <p className="projectTitle">{project.title}</p>
        <div className="projectImg">
          <img src="../images/icon.png" alt={project.title} />
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
}
