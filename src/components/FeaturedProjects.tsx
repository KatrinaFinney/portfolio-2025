"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  githubLink?: string;
  liveLink?: string;
  demoLink?: string;
}

const projects: Project[] = [
  {
    title: "Vivea Health",
    description: "An AI-powered health app with intelligent chart summarization.",
    githubLink: "https://github.com/katrinafinney/vivea-health",
    liveLink: "https://viveahealth.co",
    demoLink: "https://www.canva.com/design/DAGfoKQZLs0/c1KAMUoGS37oX8dfcpjYjA/watch?utm_content=DAGfoKQZLs0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb80e19fb0f",
  },
  {
    title: "iCapsule.me",
    description: "A blockchain-powered personal blogging platform with AI.",
    githubLink: "",
    liveLink: "",
  },
  {
    title: "Ulitigate",
    description: "AI-assisted legal information platform with geolocation features.",
    githubLink: "",
  },
];

export default function FeaturedProjects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleButtonClick = (link: string | undefined, message: string) => {
    if (link) {
      window.open(link, "_blank", "noopener noreferrer");
    } else {
      setModalMessage(message);
      setModalOpen(true);
    }
  };

  return (
    <div className="px-8 py-12">
      <h2 className="text-3xl font-bold text-teal-400 text-center">Featured Projects</h2>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition transform duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-2 text-gray-400">{project.description}</p>

            <div className="mt-4 flex flex-col space-y-2">
              <button
                onClick={() => handleButtonClick(project.githubLink, "GitHub repository coming soon!")}
                className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                View Code
              </button>
              <button
                onClick={() => handleButtonClick(project.liveLink, "This app is currently in development!")}
                className="px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-lg hover:bg-green-600 transition"
              >
                View App
              </button>
              <button
                onClick={() => handleButtonClick(project.demoLink, "A demo video will be available soon!")}
                className="px-4 py-2 bg-purple-500 text-white text-sm font-semibold rounded-lg hover:bg-purple-600 transition"
              >
                Watch Demo
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for "Coming Soon" */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
            <p className="text-white text-lg">{modalMessage}</p>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
