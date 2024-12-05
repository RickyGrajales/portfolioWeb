import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Validar campos
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('All fields are required!');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError(''); // Limpiar errores previos

    try {
      const response = await axios.post('http://localhost:5000/contact', formData, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status === 200) {
        setShowSuccess(true); // Mostrar mensaje de éxito
        setFormData({ name: '', email: '', message: '' }); // Limpiar formulario
        setTimeout(() => setShowSuccess(false), 3000); // Ocultar mensaje de éxito después de 3 segundos
      }
    } catch (err) {
      console.error('Error sending message:', err);
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Your Name"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Your Email"
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Your Message"
        ></textarea>

        {error && <p className="error-message">{error}</p>}
        <button type="submit">Send</button>
      </form>

      {showSuccess && (
        <div className="popup active">
          <p>Your message has been sent successfully!</p>
        </div>
      )}
    </section>
  );
};

export default ContactForm;
