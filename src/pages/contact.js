import React from 'react';
import Layout from '../components/layout';

const ContactPage = () => {
  return (
    <Layout>
      <div className="contactContent">
        <div className="social-links">
          <h2>Connect Via</h2>
          <a className="contact-link" href="https://github.com/larkinds">
            Github
          </a>
          <a className="contact-link" href="https://github.com/larkinds">
            Linkedin
          </a>
        </div>
        <div className="emailContent">
          <h2>Drop Me a Note</h2>
          <p>larkinsmith.work@gmail.com</p>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
