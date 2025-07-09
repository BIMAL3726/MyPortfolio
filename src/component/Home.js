import React from 'react';
import bgImage from '../assets/home.jpg';
import profilePic from '../assets/profile.png';

const Home = () => {
  return (
    <section
      id="home"
      className="text-white py-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20">
        {/* Profile Picture on Left */}
        <div className="mb-6 md:mb-0 md:mr-10">
          <img
            src={profilePic}
            alt="Bimal Maity"
            className="w-40 h-40 rounded-full border-2 border-white shadow-lg"
          />
        </div>

        {/* Text Content on Right */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 bg-opacity-40 px-4 py-2 rounded inline-block">
            Hello, I'm Bimal Maity
          </h2>
          <br />
          <a
            href="#contact"
            className="bg-white text-blue-500 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition inline-block mt-2"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
