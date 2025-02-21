"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import GitHubParticles from "@/components/GitHubParticles";
import FeaturedProjects from "@/components/FeaturedProjects";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Floating Geometric Shapes */}
      <div className="shape top-20 left-10"></div>
      <div className="shape bottom-40 right-10"></div>
      <div className="shape top-1/2 left-1/4"></div>
      <div className="shape-small top-10 right-20"></div>
      <div className="shape-large bottom-10 left-32"></div>
      <div className="shape-medium top-60 right-5"></div>

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-center h-screen text-center md:text-left space-y-6 md:space-y-0 md:space-x-10 overflow-hidden">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/cartoon-katrina.png"
            alt="Katrina Finney"
            width={220}
            height={220}
            className="rounded-full shadow-2xl border-4 border-purple-500"
          />
        </motion.div>

        {/* Hero Text */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1
            className="text-7xl font-extrabold text-transparent bg-clip-text leading-tight drop-shadow-xl"
            style={{
              backgroundImage: "linear-gradient(120deg, #ff9f43, #9b5de5, #00c9a7, #1a1b41)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Katrina Finney
          </h1>
          <p className="text-xl text-gray-300 max-w-lg mt-4 leading-relaxed">
            Full-Stack Software Engineer | Innovating with AI, Web3 & Next.js
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
           <a
            href="/resume.pdf"
            download="Katrina_Finney_Resume.pdf"
            className="px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            View Resume
          </a>

            <a
              href="mailto:katrinafinney@gmail.com"
              className="px-6 py-3 border-2 border-teal-400 text-teal-400 text-lg font-semibold rounded-lg hover:bg-teal-400 hover:text-gray-900 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </section>

      {/* Who I Am Section */}
      <section className="py-20 bg-gray-800 text-center fade-in-slow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h2 className="text-4xl gradient-text text-center tracking-wider">Who I Am</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-teal-400 mx-auto mt-3 rounded-full animate-pulse-slow"></div>
        </motion.div>

        <motion.p
          className="text-gray-300 max-w-2xl mx-auto mt-6 leading-relaxed text-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
        >
          I’m a <span className="text-teal-400 font-semibold">Full-Stack Software Engineer</span> with a passion for building scalable SaaS applications, integrating AI solutions, and leveraging blockchain for security and permanence.
        </motion.p>
      </section>

      {/* Featured Projects */}
      <section className="py-20 min-h-[400px] flex flex-col justify-center items-center fade-in">
        <FeaturedProjects />
      </section>

      {/* GitHub Particle Visualization */}
      <section className="relative max-w-5xl mx-auto px-6 h-[600px] fade-in border-glow overflow-hidden">
        <div className="text-center text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed">
          <p>
            The GitHub visualization below represents my latest repositories and contributions in an interactive 3D space.
            Each glowing node represents a different project, dynamically pulled from GitHub.
          </p>
        </div>

        <GitHubParticles />
      </section>

      {/* How It’s Built Section */}
      <section className="py-20 bg-gray-900 text-center fade-in-slow">
        <h2 className="text-4xl gradient-text text-center tracking-wider">About This Portfolio</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-teal-400 mx-auto mt-3 rounded-full animate-pulse-slow"></div>

        <p className="text-gray-300 max-w-3xl mx-auto mt-6 leading-relaxed text-lg">
          This portfolio is built using Next.js with TypeScript, Tailwind CSS, and Framer Motion for animations.
          The GitHub visualization is powered by React Three Fiber, pulling real-time GitHub data via API calls.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-20 fade-in">
        <ContactSection />
      </section>
    </div>
  );
}
