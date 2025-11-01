import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-6 px-8"
    >
      <h2 className="text-4xl font-bold text-center mb-6 text-indigo-400">
        About Me
      </h2>
      <p className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-300">
        I'm a Software Developer from West Bengal, India. I build and deploy responsive,
        dynamic web apps using MongoDB, Express, React, Node.js, and Tailwind CSS.
        Skilled in C and C++, I’m currently pursuing B.Tech in IT. I work on real-world
        projects that solve practical problems while constantly learning and improving!
      </p>
    </section>
  );
};

export default About;
