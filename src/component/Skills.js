import React from 'react';
import bgImage from '../assets/skills.jpg'; // adjust path as needed

const Skills = () => {
  return (
    <section
      id="skills"
      className="text-gray-900 py-10 px-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* C */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 transition-transform duration-300">
          <h3 className="font-bold text-blue-600">C</h3>
        </div>
        {/* C++ */}
        <div className="bg-green-100 p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 transition-transform duration-300">
          <h3 className="font-bold text-green-600">C++</h3>
        </div>

        {/* HTML */}
        <div className="bg-orange-100 p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 transition-transform duration-300">
          <h3 className="font-bold text-orange-600">HTML</h3>
        </div>

        {/* CSS */}
        <div className="bg-blue-200 p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 transition-transform duration-300">
          <h3 className="font-bold text-blue-700">CSS</h3>
        </div>

        {/* JavaScript */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 transition-transform duration-300">
          <h3 className="font-bold text-yellow-600">JavaScript</h3>
        </div>

        {/* Tailwind CSS */}
        <div className="bg-teal-100 p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 transition-transform duration-300">
          <h3 className="font-bold text-teal-600">Tailwind CSS</h3>
        </div>

        {/* Mongo DB */}
        <div className="bg-green-200 p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 transition-transform duration-300">
          <h3 className="font-bold text-green-700">Mongo DB</h3>
        </div>

        {/* Express JS */}
        <div className="bg-green-200 p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 transition-transform duration-300">
          <h3 className="font-bold text-green-700">Express JS</h3>
        </div>

        {/* React JS */}
        <div className="bg-green-200 p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 transition-transform duration-300">
          <h3 className="font-bold text-green-700">React JS</h3>
        </div>

         {/* Node JS */}
        <div className="bg-green-200 p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 transition-transform duration-300">
          <h3 className="font-bold text-green-700">Node JS</h3>
        </div>

        {/* MySQL */}
        <div className="bg-indigo-100 p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 transition-transform duration-300">
          <h3 className="font-bold text-indigo-600">MySQL</h3>
        </div>

        {/* Rest APIs */}
        <div className="bg-orange-100 p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 transition-transform duration-300">
          <h3 className="font-bold text-indigo-600">REST APIs</h3>
        </div>

        {/* Data Structure & Algorithm */}
        <div className="bg-purple-100 p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 transition-transform duration-300">
          <h3 className="font-bold text-purple-600">Data Structure & Algorithm</h3>
        </div>

        {/* OOPS Concept */}
        <div className="bg-pink-100 p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 transition-transform duration-300">
          <h3 className="font-bold text-pink-600">OOPS Concept</h3>
        </div>
      </div>
    </section>
  );
};

export default Skills;
