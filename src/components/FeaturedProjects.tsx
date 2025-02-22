import { motion } from "framer-motion"; // ✅ Removed useState
import { Tooltip } from "react-tooltip";

interface Project {
  title: string;
  description: string;
  githubLink?: string;
  demoLink?: string;
  liveAppLink?: string;
}

const projects: Project[] = [
  {
    title: "Vivea Health",
    description: "An AI-powered health app with intelligent chart summarization.",
    githubLink: "https://github.com/katrinafinney/vivea-health",
    demoLink: "https://www.canva.com/design/DAGfoKQZLs0/c1KAMUoGS37oX8dfcpjYjA/watch",
    liveAppLink: "https://viveahealth.co", // If empty, it will be greyed out with a tooltip
  },
  {
    title: "iCapsule.me",
    description: "A blockchain-powered personal blogging platform with AI.",
    githubLink: "https://github.com/KatrinaFinney/icapsule",
    demoLink: "",
    liveAppLink: "",
  },
  {
    title: "Ulitigate",
    description: "AI-assisted legal information platform with geolocation features.",
    githubLink: "",
    demoLink: "",
    liveAppLink: "",
  },
];

export default function FeaturedProjects() {
  return (
    <div className="px-8 py-12">
      <h2 className="text-3xl font-bold text-teal-400 text-center">Projects</h2>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition transform duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-2 text-gray-400">{project.description}</p>

            {/* Buttons Section */}
            <div className="flex flex-col items-center mt-4 space-y-2">
              {project.githubLink ? (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-500 px-4 py-2 rounded-lg text-white font-semibold hover:bg-teal-600 transition"
                >
                  View Code
                </a>
              ) : (
                <button
                  className="bg-gray-500 px-4 py-2 rounded-lg text-white font-semibold cursor-not-allowed"
                  data-tooltip-id="tooltip-github"
                >
                  View Code
                </button>
              )}

              {project.demoLink ? (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-500 px-4 py-2 rounded-lg text-white font-semibold hover:bg-purple-600 transition"
                >
                  Watch Demo
                </a>
              ) : (
                <button
                  className="bg-gray-500 px-4 py-2 rounded-lg text-white font-semibold cursor-not-allowed"
                  data-tooltip-id="tooltip-demo"
                >
                  Watch Demo
                </button>
              )}

              {project.liveAppLink ? (
                <a
                  href={project.liveAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-600 transition"
                >
                  View App
                </a>
              ) : (
                <button
                  className="bg-gray-500 px-4 py-2 rounded-lg text-white font-semibold cursor-not-allowed"
                  data-tooltip-id="tooltip-live"
                >
                  View App
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tooltip Explanations */}
      <Tooltip id="tooltip-github" content="Coming soon" place="top" />
      <Tooltip id="tooltip-demo" content="Demo not available yet" place="top" />
      <Tooltip id="tooltip-live" content="Live app not available yet" place="top" />
    </div>
  );
}
