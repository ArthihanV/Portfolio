import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { RESUME_URL } from "../constants";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/10 dark:bg-black/40"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide text-gray-900 dark:text-white">Arthihan</h1>

        <div className="flex items-center space-x-6 text-lg font-medium">
          <Link className="hover:text-pink-500 transition" to="/">Home</Link>
          <Link className="hover:text-pink-500 transition" to="/projects">Projects</Link>
          <Link className="hover:text-pink-500 transition" to="/about">About</Link>
          <Link className="hover:text-pink-500 transition" to="/contact">Contact</Link>

          {/* Use download attribute so it downloads instead of navigating */}
          <a
            href={RESUME_URL}
            download
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md hover:opacity-90"
          >
            Resume
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
