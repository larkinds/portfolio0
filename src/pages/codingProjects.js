import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import CodingCard from '../components/codingCard';
import codingData from '../data/codingData.json';

const CodingProjectsPage = ({ data }) => {
  let images = data.allFile.edges;
  console.log({images})
  return (
    <Layout>
      <div className="codingPage">
        {codingData.data.map((project) => {
          let image = images.filter((node) => node.node.base === project.img);
          console.log({image})
          let gatsbyImg = getImage(image[0].node.childrenImageSharp[0]);
          return (
            <CodingCard key={project.id} project={project} image={gatsbyImg} />
          );
        })}
      </div>
    </Layout>
  );
};

export const Photos = graphql`
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

export default CodingProjectsPage;
