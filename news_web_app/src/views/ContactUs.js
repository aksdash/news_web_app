import React from 'react';
import HeaderView from './template/header.js';
import Footer from './template/footer.js';


const ContactUs = () => {
  return (
    <>
        <HeaderView />
        <div style={{ padding: '20px' }}>
      <h2>Contact Us</h2>
      <p>
        We value your feedback and inquiries. Feel free to reach out to us using the contact details below:
      </p>

      <div style={{ marginTop: '20px' }}>
        <p>
          <strong>Update 24X7</strong>
        </p>
        <p>
          <strong>Address:</strong> Bangalore
        </p>
        <p>
          <strong>Phone:</strong> +123456789
        </p>
        <p>
          <strong>Email:</strong>news@update24X7mail.com
        </p>
      </div>

      <p>
        Alternatively, you can use the contact form below to send us a message:
      </p>

      {/* Add your contact form component or form elements here */}
      <form>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Your Message:</label>
        <textarea id="message" name="message"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
    <Footer/>
    </>
    
  );
};

export default ContactUs;
