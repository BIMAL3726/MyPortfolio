import React from 'react';

const Education = () => {
  return (
    <section
      id="education"
      className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] px-4 md:px-10 text-gray-100 py-10"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 text-indigo-400">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* BTech */}
          <div className="border border-blue-500 rounded-xl p-6 bg-[#1e293b]/40 hover:bg-[#1e3a8a]/40 transition-all duration-300 shadow-md hover:shadow-blue-600/50">
            <h3 className="text-2xl font-semibold mb-2 text-white">
              BTech in Information Technology
            </h3>
            <p className="text-lg text-gray-300">
              Seacom Engineering College | 2024 - 2027
            </p>
            <p className="text-lg text-gray-400">SGPA: 7.73</p>
            <p className="text-lg text-gray-400 italic">Currently Pursuing</p>
          </div>

          {/* Diploma */}
          <div className="border border-blue-500 rounded-xl p-6 bg-[#1e293b]/40 hover:bg-[#1e3a8a]/40 transition-all duration-300 shadow-md hover:shadow-blue-600/50">
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Diploma in Computer Science and Technology
            </h3>
            <p className="text-lg text-gray-300">
              Behala Government Polytechnic | 2021 - 2024
            </p>
            <p className="text-lg text-gray-400">OGPA: 8.6</p>
          </div>

          {/* HS */}
          <div className="border border-blue-500 rounded-xl p-6 bg-[#1e293b]/40 hover:bg-[#1e3a8a]/40 transition-all duration-300 shadow-md hover:shadow-blue-600/50">
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Higher Secondary Education
            </h3>
            <p className="text-lg text-gray-300">
              Mohar BM High School | 2020 - 2021
            </p>
            <p className="text-lg text-gray-400">Percentage: 85.8%</p>
          </div>

          {/* Secondary */}
          <div className="border border-blue-500 rounded-xl p-6 bg-[#1e293b]/40 hover:bg-[#1e3a8a]/40 transition-all duration-300 shadow-md hover:shadow-blue-600/50">
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Secondary Education
            </h3>
            <p className="text-lg text-gray-300">
              Mohar BM High School | 2018 - 2019
            </p>
            <p className="text-lg text-gray-400">Percentage: 79.86%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
