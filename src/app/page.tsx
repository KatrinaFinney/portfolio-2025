"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import GitHubParticles from "@/components/GitHubParticles";
import FeaturedProjects from "@/components/FeaturedProjects";
import ContactSection from "@/components/ContactSection";
import LinkedInShowcase from "@/components/LinkedInShowcase";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gray-900 text-white">
      {/* Floating Geometric Shapes */}
      <div className="shape top-20 left-10"></div>
      <div className="shape bottom-40 right-10"></div>
      <div className="shape top-1/2 left-1/4"></div>
      <div className="shape-small top-10 right-20"></div>
      <div className="shape-large bottom-10 left-32"></div>
      <div className="shape-medium top-60 right-5"></div>

      {/* Hero Section */}
      <section className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center gap-7 px-5 py-16 text-center sm:px-8 md:flex-row md:gap-10 md:py-20 md:text-left">
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
            priority
            className="h-36 w-36 rounded-full border-4 border-purple-500 object-cover shadow-2xl sm:h-44 sm:w-44 md:h-[220px] md:w-[220px]"
          />
        </motion.div>

        {/* Hero Text */}
        <motion.div
          className="w-full max-w-2xl text-center md:text-left"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1
            className="break-words bg-clip-text text-4xl font-extrabold leading-tight text-transparent drop-shadow-xl sm:text-5xl md:text-6xl lg:text-7xl"
            style={{
              backgroundImage: "linear-gradient(120deg, #ff9f43, #9b5de5, #00c9a7, #1a1b41)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Katrina Finney
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-gray-300 sm:text-lg md:mx-0 md:text-xl">
          Full-Stack Software Engineer building reliable integrations,
secure APIs, and human-centered products.
          </p>

          {/* CTA Buttons */}
          <div className="mx-auto mt-6 flex w-full max-w-sm flex-col gap-3 sm:flex-row md:mx-0 md:max-w-none md:gap-6">
           <a
            href="/resume.pdf"
            download="Katrina_Finney_Resume.pdf"
            className="w-full rounded-lg bg-gradient-to-r from-teal-400 to-blue-600 px-6 py-3 text-center text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 sm:w-auto sm:text-lg"
          >
            View Resume
          </a>

            <a
              href="mailto:katrinafinney@gmail.com"
              className="w-full rounded-lg border-2 border-teal-400 px-6 py-3 text-center text-base font-semibold text-teal-400 transition-all duration-300 hover:bg-teal-400 hover:text-gray-900 sm:w-auto sm:text-lg"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </section>

      {/* Who I Am Section */}
      <section className="fade-in-slow bg-gray-800 px-5 py-14 text-center sm:px-8 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h2 className="gradient-text text-center text-3xl tracking-wider sm:text-4xl">Who I Am</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-teal-400 mx-auto mt-3 rounded-full animate-pulse-slow"></div>
        </motion.div>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
        >
          I’m a <span className="font-semibold text-teal-400">Full-Stack Software Engineer</span> who turns complex systems into dependable, understandable experiences. My work spans React and TypeScript interfaces, Laravel and Node.js services, API integrations, IAM, automation, and technical education.
        </motion.p>
      </section>

      {/* Featured Projects */}
      <section className="fade-in flex flex-col items-center justify-center py-14 sm:py-20">
        <FeaturedProjects />
      </section>
      <LinkedInShowcase />
      


      {/* GitHub Particle Visualization */}
      <section className="border-glow fade-in relative mx-auto max-w-5xl overflow-hidden px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl text-center leading-relaxed text-gray-300">
  <p className="text-sm font-semibold tracking-[0.3em] text-purple-300">
    EXPLORE MY GITHUB
  </p>

  <h2 className="gradient-text mt-3 text-3xl font-bold sm:text-4xl">
    An interactive repository constellation
  </h2>

  <p>
    Each glowing node is a live repository from my GitHub profile.
    Drag to rotate the constellation, scroll or pinch to zoom, and
    click any node to open that project in a new tab.
  </p>

  <p className="mt-3 text-sm text-gray-400">
    Tip: start with the bright pink nodes, then rotate to
    uncover more projects.
  </p>
</div>

        <div className="mt-6 h-[320px] w-full sm:h-[440px] md:h-[500px]">
          <GitHubParticles />
        </div>
      </section>

      {/* How It’s Built Section */}
      <section className="fade-in-slow bg-gray-900 px-5 py-14 text-center sm:px-8 sm:py-20">
        <h2 className="gradient-text text-center text-3xl tracking-wider sm:text-4xl">About This Portfolio</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-teal-400 mx-auto mt-3 rounded-full animate-pulse-slow"></div>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg">
          This portfolio is built using Next.js with TypeScript, Tailwind CSS, and Framer Motion for animations.
          The GitHub visualization is powered by React Three Fiber, pulling real-time GitHub data via API calls.
        </p>
      </section>

      {/* Contact Section */}
      <section className="fade-in px-5 py-14 sm:px-8 sm:py-20">
        <ContactSection />
      </section>
    </div>
  );
}
