import React from 'react';
import Layout from '../components/layout';
import CreativeSection from '../components/creativeSection';
import creativeData from '../data/creativeData.json';

const CreativeProjectsPage = () => {
  return (
    <Layout>
      <div className="creative-page">
        {creativeData.data.map((project) => {
          return <CreativeSection key={project.id} project={project} />;
        })}
      </div>
    </Layout>
  );
};

export default CreativeProjectsPage;
