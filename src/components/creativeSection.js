import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

export default function CreativeSection({ project }) {
  const data = useStaticQuery(graphql`
    query creativeProjects($path: String!) {
      file(relativePath: { eq: $path }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <section className="creative-section">
      <div className="creative-section-img">
        <img
          className="creative-img"
          src={project.relativePath}
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
