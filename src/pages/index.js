import * as React from 'react';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout>
      <div className="home">
        <img className="title-image" src="./images/trees.jp" />
        <p className="title-words">Larkin Smith</p>
      </div>
    </Layout>
  );
};

export default IndexPage;
