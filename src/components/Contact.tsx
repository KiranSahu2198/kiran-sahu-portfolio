import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me for collaborations or opportunities.</p>
      <ul>
        <li>Email: kiran.sahu@example.com</li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/kiran-sahu" target="_blank" rel="noopener noreferrer">linkedin.com/in/kiran-sahu</a></li>
        <li>GitHub: <a href="https://github.com/kiran-sahu" target="_blank" rel="noopener noreferrer">github.com/kiran-sahu</a></li>
      </ul>
    </section>
  );
};

export default Contact;