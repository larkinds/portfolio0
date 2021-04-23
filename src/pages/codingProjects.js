import React from 'react';
import Layout from '../components/layout';
import CodingCard from '../components/codingCard';
import codingData from '../data/codingData.json';

const CodingProjectsPage = () => {
  return (
    <Layout>
      <div class="codingPage">
        {codingData.data.map((project) => {
          return <CodingCard key={project.id} project={project} />;
        })}
      </div>
    </Layout>
  );
};

export default CodingProjectsPage;
