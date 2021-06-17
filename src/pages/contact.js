import React, { useState } from 'react';
import Layout from '../components/layout';
import { useForm, ValidationError } from '@formspree/react';

const ContactPage = () => {
  const [state, handleSubmit] = useForm('mzbyejyp');
  // const [form, handleForm] = useState(true);
  const [update, handleUpdate] = useState(false);

  function handleClick(event) {
    event.preventDefault();
  }

  if (state.submitted) {
    console.log('in the if');
    return (
      <Layout>
        <div className="contactContent">
          <div className="social-links">
            <h2>Connect</h2>
            <a className="contact-link" href="https://github.com/larkinds">
              Github
            </a>
            <a className="contact-link" href="https://github.com/larkinds">
              Linkedin
            </a>
          </div>
          <div className="emailContent">
            <h2>Send Me a Message</h2>
            <p>Thank you! I'll be in touch.</p>
          </div>
        </div>
      </Layout>
    );
  } else {
    console.log('in the else');
    function handleClick() {
      window.onbeforeunload = () => {
        for (const form of document.getElementsByTagName('form')) {
          form.reset();
        }
      };
    }
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
                rows="10"
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
              onClick={handleClick}
              disabled={state.submitting}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="contact-box">
          <p>(You look nice today.)</p>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
