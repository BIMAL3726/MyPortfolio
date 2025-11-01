import React from "react";
import profilePic from "../assets/bimal.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className=" md:h-80 flex items-center justify-center bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-6 md:px-20"

    >
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
        <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg border-4 border-indigo-500">
          <img
            src={profilePic}
            alt="Bimal Maity"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-4xl md:text-4xl font-bold mb-3">
            Hello, I'm <span className="text-indigo-400">Bimal Maity</span>
          </h2>
          <h2 className="text-2xl font-semibold text-gray-300 mb-4">
            Software Developer
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            A passionate MERN Stack developer from West Bengal, India. I love building 
            responsive, modern web apps using React, Node.js, and MongoDB. Currently 
            working on real-world projects that make a difference.
          </p>

          <a
            href="#contact"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 shadow-md"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
