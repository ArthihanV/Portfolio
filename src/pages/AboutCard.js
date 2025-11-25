import React from "react";
import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import { RESUME_URL, DEV_IMAGE } from "../constants";

export default function AboutCard() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto p-8 rounded-2xl
                 bg-white shadow-md dark:bg-black/40 dark:border-white/5 border border-gray-100
                 transition-colors"
    >
      <div className="md:flex gap-8 items-center">
        {/* Square developer image */}
        <div className="w-36 h-36 rounded-md overflow-hidden shadow-lg flex-shrink-0">
          <img src={DEV_IMAGE} alt="Developer" className="w-full h-full object-cover" />
        </div>

        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm <strong className="font-semibold">Arthihan Vinayagaselvan</strong>I am a passionate Python Full Stack Developer who loves building responsive and user-friendly web applications.I specialize in Django and ReactJS, with strong skills in frontend design and backend development.My goal is to grow as a leader in the tech field while creating impactful digital solutions.
          </p>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div>
              <div className="text-sm text-gray-500">Education</div>
              <div className="mt-1 text-gray-800 dark:text-gray-200">B.E. Computer Science — SJCE&T</div>
            </div>

            <div className="flex md:justify-end items-center">
              <a
                href={RESUME_URL}
                download
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="mt-6">
            <SocialIcons />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
