"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

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

            <div className="mt-4 flex flex-col space-y-2">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition ${
                  project.githubLink ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-600 text-gray-400 cursor-not-allowed"
                }`}
                data-tooltip-id={project.githubLink ? "" : `tooltip-github-${index}`}
              >
                View Code
              </a>
              <Tooltip id={`tooltip-github-${index}`} place="top" content="GitHub repository coming soon!" />

              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition ${
                  project.liveLink ? "bg-green-500 text-white hover:bg-green-600" : "bg-gray-600 text-gray-400 cursor-not-allowed"
                }`}
                data-tooltip-id={project.liveLink ? "" : `tooltip-live-${index}`}
              >
                View App
              </a>
              <Tooltip id={`tooltip-live-${index}`} place="top" content="This app is currently in development!" />

              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition ${
                  project.demoLink ? "bg-purple-500 text-white hover:bg-purple-600" : "bg-gray-600 text-gray-400 cursor-not-allowed"
                }`}
                data-tooltip-id={project.demoLink ? "" : `tooltip-demo-${index}`}
              >
                Watch Demo
              </a>
              <Tooltip id={`tooltip-demo-${index}`} place="top" content="A demo video will be available soon!" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
