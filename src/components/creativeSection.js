import React from 'React';
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
    <section>
      <div className="creativeSectionImg">
        <img
          className="creativeImg"
          src={project.relativePath}
          alt={project.title}
        />
      </div>
      <div className="creativeSectionInfo">
        <h4>{project.title}</h4>
        <h5>{project.job}</h5>
        <p>{project.responsibility}</p>
      </div>
    </section>
  );
}
