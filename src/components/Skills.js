import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", pct: 90 },
  { name: "Django", pct: 85 },
  { name: "ReactJS", pct: 75 },
  { name: "MySQL", pct: 80 },
  { name: "HTML/CSS/JS", pct: 85 },
  // MongoDB removed
];

export default function Skills() {
  return (
    <section className="max-w-4xl mx-auto mt-12">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Skills</h3>

      <div className="mt-6 grid gap-4">
        {skills.map((s, i) => (
          <div key={s.name}>
            <div className="flex justify-between mb-1">
              <span className="font-medium text-gray-800 dark:text-gray-200">{s.name}</span>
              <span className="text-sm text-gray-500 dark:text-gray-300">{s.pct}%</span>
            </div>

            <div className="w-full h-3 bg-gray-200 dark:bg-white/5 rounded-full">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${s.pct}%` }}
                transition={{ delay: 0.12 * i, duration: 0.9 }}
                className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {["ReactJS","Django","Python","MySQL","HTML","CSS","JavaScript","Git"].map(tag => (
          <span key={tag} className="px-3 py-1 bg-gray-200 dark:bg-white/5 rounded-full text-sm text-gray-800 dark:text-gray-200">{tag}</span>
        ))}
      </div>
    </section>
  );
}
