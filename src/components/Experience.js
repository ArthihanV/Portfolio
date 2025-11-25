import React from "react";
import { motion } from "framer-motion";

const timeline = [
  { year: "2025", title: "QSpiders - Python Full Stack Course", desc: "Full stack development training" },
  { year: "2024", title: "Web Dev - Pantech e-Learning", desc: "Front-end & responsive design" },
  { year: "2023", title: "Python Internship - Scion Technology", desc: "Python Basics" },
  // cloud internship removed as requested
];

export default function Experience() {
  return (
    <section className="max-w-4xl mx-auto mt-12">
      <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Experience</h3>

      <div className="relative">
        <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-300 dark:bg-white/10" />

        <div className="pl-10">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="mb-10 relative"
            >
              <div className="absolute -left-6 top-1 w-8 h-8 rounded-full bg-white border border-gray-300 dark:bg-gradient-to-r dark:from-purple-500 dark:to-pink-500 dark:border-black shadow" />

              <div className="text-sm text-gray-500 dark:text-gray-300 ml-[15px]">{item.year}</div>
              <h4 className="text-xl font-semibold mt-1 text-gray-900 dark:text-white ml-[15px]">{item.title}</h4>
              <p className="mt-2 text-gray-600 dark:text-gray-300 ml-[15px]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
