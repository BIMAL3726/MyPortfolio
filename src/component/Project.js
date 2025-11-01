import React from "react";

const projects = [
  {
    title: "Hospital Management System - CLINIX",
    tech: "React, Tailwind CSS, Node.js, Express.js, MongoDB",
    description: [
      "Built a full-stack MERN hospital management system with patient registration, auto-generated login credentials, and secure data storage.",
      "Developed an admin dashboard to manage and view patient records, ensuring security, scalability, and usability.",
    ],
  },
  {
    title: "Human Resource Management System (HRMS)",
    tech: "React, Tailwind CSS, Node.js, Express.js, MongoDB",
    description: [
      "Developed a full-stack HRMS application to manage employee records, roles, attendance, and payroll efficiently.",
      "Implemented secure authentication, role-based access, and dashboards to streamline HR operations and improve data accuracy.",
    ],
  },
  {
    title: "School Fees Management System",
    tech: "React, Tailwind CSS, Node.js, Express.js, MongoDB",
    description: [
      "Designed a responsive MERN stack application with class-wise fee management, daily/monthly summaries, and a secure backend for seamless administration.",
      "Automated fee collection, tracked payments, generated reports, and maintained student records efficiently.",
    ],
  },
  
];

const Project = () => {
  return (
    <div
      id="project"
      className="p-8 md:p-10 min-h-80 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-6 text-indigo-400">
        Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="p-6 border border-indigo-500 rounded-xl shadow-lg bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 hover:scale-[1.03]"
          >
            <h3 className="text-2xl font-semibold text-indigo-300 mb-3">
              {proj.title}
            </h3>
            <p className="text-sm text-gray-300 font-semibold mb-4">
              {proj.tech}
            </p>
            <ul className="list-disc pl-2 space-y-2 text-gray-200 leading-relaxed text-justify">
              {proj.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
