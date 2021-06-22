import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout>
      <div className="homeContainer">
        <div className="homeImg">
          <StaticImage
            className="title-image"
            src="../images/bronzeCardBackground.png"
            alt="copper abstract art piece"
          />
        </div>
        <div className="homeLine"></div>
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

export default IndexPage;
