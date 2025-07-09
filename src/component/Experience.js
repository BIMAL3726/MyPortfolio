import React from "react";
import bgImage from "../assets/experience.avif"; 

const experiences = [
  {
    company: "Sturtle Security Pvt Ltd",
    title: "AI/ML Intern",
    duration: "October 2024 – November 2024",
    location: "Kolkata, India",
    responsibilities: [
      "Applied AI and ML techniques in real-world healthcare data analysis.",
      "Implemented object detection and face recognition systems using OpenCV.",
    ],
  },
  {
    company: "HIQ Solution",
    title: "Linux Intern",
    duration: "May 2024 – June 2024",
    location: "Kolkata, India",
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
      className="p-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h2 className="text-4xl font-bold mb-6 text-lime-50 drop-shadow">Experience</h2>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="mb-6 p-4 border rounded-lg shadow-md bg-white bg-opacity-90 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
        >
          <h3 className="text-xl font-semibold">{exp.title}</h3>
          <p className="text-sm text-gray-500">
            {exp.company} | {exp.duration}
          </p>
          <p className="text-sm italic mb-2">{exp.location}</p>
          <ul className="list-disc list-inside">
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
