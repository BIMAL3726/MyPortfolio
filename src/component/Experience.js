import React from "react";

const experiences = [
  {
    company: "Sixfox Technology",
    title: "Software Developer",
    duration: "July 2025 – Present",
    location: "Kalyani, Nadia, West Bengal",
    responsibilities: [
      "Developed and deployed end-to-end web applications using the MERN stack.",
      "Built responsive frontends and scalable backends with RESTful APIs and integrated databases.",
      "Delivered multiple client projects from development to deployment with a focus on security and maintainability.",
    ],
  },
  {
    company: "Sturtle Security Pvt Ltd",
    title: "AI/ML Intern",
    duration: "October 2024 – November 2024",
    location: "Kolkata, West Bengal",
    responsibilities: [
      "Applied AI and ML techniques in real-world healthcare data analysis.",
      "Implemented object detection and face recognition systems using OpenCV.",
    ],
  },
  {
    company: "HIQ Solution",
    title: "Linux Intern",
    duration: "May 2024 – June 2024",
    location: "Kolkata, West Bengal",
    responsibilities: [
      "Conducted system administration tasks using Linux commands.",
      "Developed Bash scripts for automation and efficiency.",
    ],
  },
];

const Experience = () => {
  return (
    <div
      id="experience"
      className="p-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-6 text-indigo-400">
        Experience
      </h2>
      {experiences.map((exp, index) => (
        <div
          key={index}
         className="mb-6 p-6 border border-blue-500 rounded-xl shadow-lg bg-blue-900/20 backdrop-blur-md hover:bg-blue-900/30 transition-all duration-300 hover:scale-[1.02]"

        >
          <h3 className="text-2xl font-semibold text-indigo-300">{exp.title}</h3>
          <p className="text-sm text-gray-300 font-semibold">
            {exp.company} &nbsp;||&nbsp; {exp.duration}
          </p>
          <p className="text-sm italic text-gray-200 mb-3">{exp.location}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-200">
            {exp.responsibilities.map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
