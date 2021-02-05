import React from 'react';
import Layout from '../components/layout';
import CodingCard from '../components/codingCard';

const CodingProjectsPage = () => {
  return (
    <Layout>
      <div>
        <CodingCard />
        <CodingCard />
        <CodingCard />
      </div>
    </Layout>
  );
};

export default CodingProjectsPage;
