import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function CreativeSection({ project, image }) {
  return (
    <section className="creative-section">
      <div className="creative-section-img">
        <GatsbyImage
          className="creative-img"
          image={image}
          alt={project.title}
        />
      </div>
      <div className="creative-section-info">
        <h4>{project.title}</h4>
        <h5>{project.job}</h5>
        <p>{project.responsibility}</p>
      </div>
    </section>
  );
}
