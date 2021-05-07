import * as React from 'react';
import Layout from '../components/layout';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {
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
          <div>
            <h2 className="title-name">Larkin Smith</h2>
          </div>
          <div>
            <h3 className="title-title">Software Engineer</h3>
          </div>
        </div>
      </div>
    </Layout>
  );
};

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

export default IndexPage;
