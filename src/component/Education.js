import React from 'react';
import bgImage from '../assets/education.webp'; // adjust the path if needed

const Education = () => {
  return (
    <section
      id="education"
      className="bg-cover bg-center bg-no-repeat  px-4 md:px-10 text-gray-900"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="p-6 md:p-10 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">Education</h2>
        <div className="space-y-8">
          {/* BTech */}
<div className="bg-indigo-100 hover:bg-indigo-200 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-200">
  <h3 className="text-2xl font-semibold text-indigo-700">BTech in Information Technology</h3>
  <p className="text-lg text-indigo-600">Seacom Engineering College | 2024 - 2027</p>
  <p className="text-lg text-gray-700">SGPA: 7.73</p>
  <p className="text-lg text-gray-700 font-medium"><i><b>Currently Pursuing</b></i></p>
</div>

{/* Diploma */}
<div className="bg-emerald-100 hover:bg-emerald-200 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-200">
  <h3 className="text-2xl font-semibold text-emerald-700">Diploma in Computer Science and Technology</h3>
  <p className="text-lg text-emerald-600">Behala Government Polytechnic | 2021 - 2024</p>
  <p className="text-lg text-gray-700">OGPA: 8.6</p>
</div>

{/* HS */}
<div className="bg-orange-100 hover:bg-orange-200 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-200">
  <h3 className="text-2xl font-semibold text-orange-700">Higher Secondary Education</h3>
  <p className="text-lg text-orange-600">Mohar BM High School | 2020 - 2021</p>
  <p className="text-lg text-gray-700">Percentage: 85.8%</p>
</div>

{/* Secondary */}
<div className="bg-pink-100 hover:bg-pink-200 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-200">
  <h3 className="text-2xl font-semibold text-pink-700">Secondary Education</h3>
  <p className="text-lg text-pink-600">Mohar BM High School | 2018 - 2019</p>
  <p className="text-lg text-gray-700">Percentage: 79.86%</p>
</div>

        </div>
      </div>
    </section>
  );
};

export default Education;
