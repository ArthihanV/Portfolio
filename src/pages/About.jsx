import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="px-6 py-16">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl font-bold"
      >
        About Me
      </motion.h2>

      <p className="mt-4">
        I'm Arthihan Vinayagaselvan — a passionate Python Full Stack Developer
        with skills in Django, MySQL, ReactJS, HTML, CSS and JavaScript.
        I have internship experience in Python, Cloud and Web Development.
      </p>

      <h3 className="mt-6 text-2xl font-semibold">Skills</h3>
      <ul className="list-disc ml-6 mt-3">
        <li>Python</li>
        <li>Django</li>
        <li>ReactJS</li>
        <li>MySQL</li>
        <li>HTML, CSS, JavaScript</li>
        <li>MongoDB</li>
        <li>System Administration</li>
      </ul>
    </section>
  );
}
