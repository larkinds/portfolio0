import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout>
      <div className="home-container">
        <div className="home-img">
          <StaticImage
            className="title-image"
            src="../images/bronzeCardBackground.png"
            alt="copper abstract art piece"
          />
        </div>
        <div className="home-line"></div>
        <div className="home-text">
          <div>
            <h2 className="title-name">Larkin D. Smith</h2>
          </div>
          <div>
            <h3 className="title-title">Software Engineer</h3>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
