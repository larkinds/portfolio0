import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

// markup
const NotFoundPage = () => {
  return (
    <Layout>
    <div>
      <h1>Uh oh!</h1>
      <Link to="/index/">Back to Safety</Link>
    </div>
    </Layout>
  );
};

export default NotFoundPage;
