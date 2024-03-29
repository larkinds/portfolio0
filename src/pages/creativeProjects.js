import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import CreativeSection from '../components/creativeSection';
import creativeData from '../data/creativeData.json';

const CreativeProjectsPage = ({ data }) => {
  let images = data.allFile.edges;

  return (
    <Layout>
      <div className="creative-page">
        <p style={{marginRight: "auto", marginLeft: "4%"}}>A small selection of the ways that I play, creatively.</p>
        {creativeData.data.map((project) => {
          let image = images.filter((node) => node.node.base === project.img);
          let gatsbyImg = getImage(image[0].node.childrenImageSharp[0]);
          return (
            <CreativeSection
              key={project.id}
              project={project}
              image={gatsbyImg}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export const Photos2 = graphql`
  {
    allFile(filter: { extension: { regex: "/(jpg|png|img)/" } }) {
      edges {
        node {
          base
          childrenImageSharp {
            gatsbyImageData(sizes: "", placeholder: BLURRED, aspectRatio: 1.5)
          }
        }
      }
    }
  }
`;

export default CreativeProjectsPage;
