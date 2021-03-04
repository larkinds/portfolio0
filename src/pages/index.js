import * as React from 'react';
import Layout from '../components/layout';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

export default function IndexPage({ data }) {
  return (
    <Layout>
      <div className="homeContainer">
        <div className="homeImg">
          <Img
            className="title-image"
            fluid={data.file.childImageSharp.fluid}
            alt="black and white photograph of trees in the fog"
          />
        </div>
        <div class="homeLine"></div>
        <div className="homeText">
          <h2 className="title-name">Larkin Smith</h2>
          <h3>Software Engineer</h3>
        </div>
      </div>
    </Layout>
  );
}

export const data = graphql`
  query Index {
    file(relativePath: { eq: "trees.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
