import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-6 px-4 sm:px-6 lg:px-8"
    >
      {/* Single container so heading + paragraph share identical left/right edges */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-indigo-400 text-center">
          About Me
        </h2>

        {/* Use inline style for justification so both left and right edges align */
         /* change to text-left if you prefer ragged-right */}
        <p
          className="text-lg leading-relaxed text-gray-300"
          style={{ textAlign: 'justify' }}
        >
          I'm a Software Developer from West Bengal, India. I build and deploy responsive,
          dynamic web apps using MongoDB, Express, React, Node.js, and Tailwind CSS.
          Skilled in C and C++, I’m currently pursuing B.Tech in IT. I work on real-world
          projects that solve practical problems while constantly learning and improving!
        </p>
      </div>
    </section>
  );
};

export default About;
