import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://myportfolio-bsnp.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Try again later.');
    }
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-gray-100 py-6 px-6"
    >
      <h2 className="text-4xl font-bold text-center mb-6 text-indigo-400">Contact</h2>

      <div className="max-w-5xl mx-auto bg-[#1e293b]/60 border border-indigo-500 p-8 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-8 backdrop-blur-sm">
        {/* Left: Info & Social */}
        <div className="md:w-1/2 flex flex-col items-center text-center justify-center">
          <h3 className="text-2xl font-semibold mb-4 text-white">Connect with Me</h3>
          <p className="text-gray-300 mb-2">
            📧{' '}
            <a href="mailto:maitybimal2002@gmail.com" className="text-indigo-400 hover:underline">
              maitybimal2002@gmail.com
            </a>
          </p>
          <p className="text-gray-300 mb-6">
            📞{' '}
            <a href="tel:7468885435" className="text-indigo-400 hover:underline">
              +91 74688 85435
            </a>
          </p>

          <div className="flex justify-center space-x-6">
            <a
              href="https://youtube.com/@coder-india?si=XNu7L0FCR5ovflk5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
                alt="YouTube"
                className="w-8 h-8 hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://www.facebook.com/share/1BDguhy9Yt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                alt="Facebook"
                className="w-8 h-8 hover:scale-110 transition-transform"
              />
            </a>
            <a href="https://github.com/BIMAL3726" target="_blank" rel="noopener noreferrer">
              <div className="bg-white p-1 rounded-full">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub"
                  className="w-8 h-8 hover:scale-110 transition-transform"
                />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/bimal-maity-b1b532318"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
                className="w-8 h-8 hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4 text-center md:text-left text-white">
            Send Me a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[#0f172a] border border-indigo-500 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[#0f172a] border border-indigo-500 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[#0f172a] border border-indigo-500 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200 font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
