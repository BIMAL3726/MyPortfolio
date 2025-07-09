import React from "react";

const projects = [
    {
    title: "Hospital Patient Registration and Admin Management System",
    tech: "React, Tailwind CSS, Node.js, Express.js, MongoDB",
    description: [
      "A full-stack MERN application that allows hospitals to register patients through a detailed form and auto-generate login credentials",
      "Admins can log in to view all registered patient data securely via a protected dashboard."
    ],
    link: "https://github.com/BIMAL3726/HospitalPatientsReg",
    demo: "https://hospitalpatientsreg-1.onrender.com"
  },
  
    {
    title: "Student Academic Resource Portal",
    tech: " React, Tailwind CSS, Node.js, Express.js, MongoDB",
    description: [
    " An academic resource portal built using the MERN stack, enabling MAKAUT students to browse semester-wise study materials like syllabus, notes, PYQs, and resources through an intuitive, department-wise categorized interface."

    ],
    link: "https://github.com/BIMAL3726/MakautZone",
    demo: "https://makautzone-1.onrender.com"
  },

  {
    title: "CRUD Operation",
    tech: "HTML, CSS, JavaScript, React.js, Tailwind CSS",
    description: [
      "Users can enter details via a form and receive success/error notifications using react-toastify.",
      "Stored user data in a dynamic table and allowed deletion of entries.",
      "Prevented duplicate emails and phone numbers; ensured password match validation."
    ],
    link: "https://github.com/BIMAL3726/CRUD-Operation",
    demo: "https://bimal3726.github.io/CRUD-Operation/"
  },
  {
    title: "Password Generator",
    tech: "HTML, CSS, JavaScript, React.js",
    description: [
      "Users can choose to include numbers, symbols, uppercase, and lowercase letters.",
      "Set desired password length; includes 'Copy' button functionality."
    ],
    link: "https://github.com/BIMAL3726/Password-Generator",
    demo: "http://bimal3726.github.io/Password-Generator/"
  },
  {
    title: "Spotify Clone Project",
    tech: "HTML, CSS, JavaScript",
    description: [
      "Built a responsive Spotify clone with functional audio playback controls."
    ],
    link: "https://github.com/BIMAL3726/Spotify-Clone-Project",
    demo: "https://bimal3726.github.io/Spotify-Clone-Project/"
  },
  {
    title: "Rock-Paper-Scissors Game",
    tech: "HTML, CSS, JavaScript",
    description: [
      "Created a responsive game with user-friendly UI and DOM manipulation.",
      "Achieved over 200 user plays in initial testing."
    ],
    link: "https://github.com/BIMAL3726/ROCK-PAPER-SCISSORS-Game.git",
    demo: "https://bimal3726.github.io/ROCK-PAPER-SCISSORS-Game/"
  },
  {
    title: "Tic Tac Toe Game",
    tech: "HTML, CSS, JavaScript",
    description: [
      "Implemented two-player game with real-time updates and UI responsiveness."
    ],
    link: "https://github.com/BIMAL3726/TIC-TAC-TOE-Game.git",
    demo: "https://bimal3726.github.io/TIC-TAC-TOE-Game/"
  }
];

const Project = () => {
  return (
    <div id="project" className="p-4 min-h-screen bg-gradient-to-r from-blue-200 to-purple-100">
      <h2 className="text-4xl font-bold mb-4 text-center text-sky-500">Projects</h2>
      {projects.map((proj, index) => (
        <div key={index} className="mb-6 p-4 border rounded-lg shadow-md bg-white  transition-transform duration-300 ease-in-out hover:shadow-xl">
          <h3 className="text-xl font-semibold">
            <a
              href={proj.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              {proj.title}
            </a>
          </h3>
          <p className="text-sm text-gray-700 font-bold mb-1"> {proj.tech}</p>
          <ul className="list-disc list-inside mb-2 text-gray-700">
            {proj.description.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
          <a
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline mr-4"
          >
            <b>View on GitHub</b>
          </a>
          <a
            href={proj.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline"
          >
           <b> Live Demo</b>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Project;
