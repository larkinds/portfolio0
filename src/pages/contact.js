import React from 'react';
import Layout from '../components/layout';
import { useForm, ValidationError } from '@formspree/react';

const ContactPage = () => {
  const [state, handleSubmit] = useForm('mzbyejyp');

  if (state.succeeded) {
    return (
      <Layout>
        <div className="contactContent">
        <div className="contact-social-box">
          <h2>Social</h2>
          <div className="social-links">
            <a className="social-link" href="https://github.com/larkinds">
              Github
            </a>
            <a className="social-link" href="https://github.com/larkinds">
              Linkedin
            </a>
          </div>
        </div>
        <div className="contactLine"></div>
          <div className="contact-email-box">
            <p>Thank you! I'll be in touch.</p>
          </div>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <div className="contactContent">
        <div className="contact-social-box">
          <h2>Social</h2>
          <div className="social-links">
            <a className="social-link" href="https://github.com/larkinds">
              Github
            </a>
            <a className="social-link" href="https://github.com/larkinds">
              Linkedin
            </a>
          </div>
        </div>
        <div className="contactLine"></div>
        <div className="contact-email-box">
          <h2>Email</h2>
          <form className="contact-email-form" onSubmit={handleSubmit}>
            <div className="form form-email">
              <label htmlFor="email">Email:</label>
              <input
                className="email-form-input"
                id="email"
                type="email"
                name="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="form form-message">
              <label className="textarea-label" htmlFor="message">
                Message:
              </label>
              <textarea
                className="email-form-textarea"
                id="message"
                name="message"
                rows="8"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              className="email-form-button"
              type="submit"
              disabled={state.submitting}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
