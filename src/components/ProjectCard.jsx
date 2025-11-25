import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div whileHover={{ y: -6 }} className="p-6 rounded-xl bg-white shadow-sm dark:bg-white/5 transition">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
      <p className="mt-3 text-gray-700 dark:text-gray-300">{project.short_description}</p>
      <p className="mt-3 text-sm text-indigo-600 dark:text-indigo-300">{project.technologies}</p>

      <div className="mt-4 space-x-4">
        {project.live_demo && <a href={project.live_demo} target="_blank" rel="noreferrer" className="underline text-pink-500">Live</a>}
        {project.source_code && <a href={project.source_code} target="_blank" rel="noreferrer" className="underline text-indigo-500">Code</a>}
      </div>
    </motion.div>
  );
}
