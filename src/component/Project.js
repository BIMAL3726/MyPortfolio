import React from "react";

const projects = [
  {
    title: "CRUD Operation",
    date: "February 2025",
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
    date: "February 2025",
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
    date: "December 2024",
    tech: "HTML, CSS, JavaScript",
    description: [
      "Built a responsive Spotify clone with functional audio playback controls."
    ],
    link: "https://github.com/BIMAL3726/Spotify-Clone-Project",
    demo: "https://bimal3726.github.io/Spotify-Clone-Project/"
  },
  {
    title: "Rock-Paper-Scissors Game",
    date: "September 2024",
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
    date: "August 2024",
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
        <div key={index} className="mb-6 p-4 border rounded-lg shadow-md bg-white  transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
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
          <p className="text-sm text-gray-500 mb-1">{proj.date} | {proj.tech}</p>
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
