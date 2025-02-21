"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  link?: string; // GitHub repo (optional)
  liveDemo?: string; // Live demo link (optional)
}

const projects: Project[] = [
  {
    title: "Vivea Health",
    description: "An AI-powered health app with intelligent chart summarization.",
    link: "https://github.com/katrinafinney/vivea-health",
    liveDemo: "https://viveahealth.co",
  },
  {
    title: "iCapsule.me",
    description: "A blockchain-powered personal blogging platform with AI.",
    link: "", // No GitHub yet
    liveDemo: "",
  },
  {
    title: "Ulitigate",
    description: "AI-assisted legal information platform with geolocation features.",
    link: "",
    liveDemo: "", // No live demo yet
  },
];

export default function FeaturedProjects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleComingSoon = (message: string) => {
    setModalMessage(message);
    setModalOpen(true);
  };

  return (
    <div className="px-8 py-12">
      <h2 className="text-3xl gradient-text text-center mb-6">Featured Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:scale-105 transform transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-2 text-gray-400">{project.description}</p>

            {/* Buttons Container */}
            <div className="mt-4 flex justify-center space-x-4">
              {project.liveDemo ? (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-teal-400 to-blue-600 text-white rounded-lg hover:scale-105 transition-all duration-300"
                >
                  View App
                </a>
              ) : (
                <button
                  onClick={() => handleComingSoon("Live demo coming soon!")}
                  className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg cursor-pointer hover:bg-gray-600 transition-all duration-300"
                >
                  View App
                </button>
              )}

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border-2 border-teal-400 text-teal-400 rounded-lg hover:bg-teal-400 hover:text-gray-900 transition-all duration-300"
                >
                  GitHub Repo
                </a>
              ) : (
                <button
                  onClick={() => handleComingSoon("GitHub repository coming soon!")}
                  className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg cursor-pointer hover:bg-gray-600 transition-all duration-300"
                >
                  GitHub Repo
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-4">Coming Soon</h3>
            <p>{modalMessage}</p>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
