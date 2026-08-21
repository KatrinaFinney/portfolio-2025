"use client";

import { motion } from "framer-motion";

interface Project {
  title: string;
  eyebrow: string;
  description: string;
  highlights: string[];
  stack: string[];
  githubLink: string;
  backendLink?: string;
  demoLink?: string;
  liveAppLink?: string;
}

const projects: Project[] = [
  {
    title: "Show-Ready Checkout",
    eyebrow: "FEATURED · RELIABLE INTEGRATIONS",
    description:
      "A Stripe-style checkout built to keep live demos predictable, recoverable, and secure under pressure.",
    highlights: [
      "HMAC-signed webhooks and idempotent event processing",
      "One-click reset, golden replay, and Safe/Live modes",
      "Automated tests and GitHub Actions CI",
    ],
    stack: ["Node.js", "Express", "Webhooks", "CI/CD"],
    githubLink:
      "https://github.com/KatrinaFinney/show-ready-checkout",
    demoLink:
    "https://www.loom.com/share/7944e853138d47928af6689de5dea5bb",
  },
  {
    title: "Vivea Health",
    eyebrow: "HEALTHCARE · AI · SECURE APIS",
    description:
      "A patient-centered health platform that brings records, vital statistics, schedules, and AI-assisted health insights into one accessible dashboard.",
    highlights: [
      "Built interactive dashboards for health records, vital trends, and care schedules",
      "Created AI-assisted suggestions and patient-friendly data visualizations",
      "Developed a Flask API with JWT-protected healthcare endpoints and CI",
    ],
    stack: ["Next.js", "React", "Flask", "JWT", "ECharts"],
    githubLink:
      "https://github.com/KatrinaFinney/vivea-health-frontend",
    backendLink:
      "https://github.com/KatrinaFinney/vivea-health-backend",
    demoLink:
      "https://www.canva.com/design/DAGfoKQZLs0/c1KAMUoGS37oX8dfcpjYjA/watch",
  },
  {
    title: "WebTriage",
    eyebrow: "AUTOMATION · PERFORMANCE DIAGNOSTICS",
    description:
      "An automated website diagnostic platform that turns technical performance data into clear, actionable reports for website owners.",
    highlights: [
      "Automates Lighthouse scans, screenshots, and Core Web Vitals analysis",
      "Processes scans through Redis-backed workers and stores results in Supabase",
      "Generates client-ready PDF reports and sends results through automated email workflows",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Lighthouse",
      "Puppeteer",
      "Redis",
      "Supabase",
    ],
    githubLink: "https://github.com/KatrinaFinney/webtriage",
  },
];

export default function FeaturedProjects() {
  return (
    <div className="w-full max-w-6xl px-4 sm:px-6">
      <p className="text-center text-sm font-semibold tracking-[0.3em] text-purple-300">
        SELECTED WORK
      </p>

      <h2 className="mt-3 text-center text-3xl font-bold text-teal-400 sm:text-4xl">
        Featured Projects
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-gray-400">
        A selection of projects demonstrating my approach to reliable
        integrations, automation, security, and human-centered product
        development.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className={`flex h-full flex-col rounded-xl border bg-gray-800 p-5 shadow-lg sm:p-6 ${
              index === 0
                ? "border-teal-400/60"
                : "border-white/10"
            }`}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-xs font-bold tracking-[0.18em] text-teal-300">
              {project.eyebrow}
            </p>

            <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
              {project.title}
            </h3>

            <p className="mt-3 leading-relaxed text-gray-300">
              {project.description}
            </p>

            <ul className="mt-5 space-y-2 text-sm text-gray-400">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span
                    aria-hidden="true"
                    className="font-semibold text-teal-400"
                  >
                    ✓
                  </span>

                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap justify-center gap-3 pt-7">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-teal-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-600"
              >
                View Repository ↗
              </a>

              {project.backendLink && (
                <a
                  href={project.backendLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-teal-400 px-4 py-2 text-sm font-semibold text-teal-300 transition hover:bg-teal-400 hover:text-gray-900"
                >
                  View Backend ↗
                </a>
              )}

              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-purple-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-600"
                >
                  Watch Demo ▶
                </a>
              )}

              {project.liveAppLink && (
                <a
                  href={project.liveAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600"
                >
                  View App ↗
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
