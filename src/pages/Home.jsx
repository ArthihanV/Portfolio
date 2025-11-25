import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RESUME_URL } from "../constants";

const COLORS = ["text-pink-500","text-purple-500","text-indigo-500","text-rose-500","text-emerald-500"];

export default function Home() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i+1) % COLORS.length), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="pt-16 pb-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
        <div>
          <motion.h1
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold leading-tight text-gray-900 dark:text-white"
          >
            Hi, I'm <span className={`inline-block ${COLORS[idx]} transition-colors duration-300`}>Arthihan</span><br />
            Python Full Stack Developer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-5 text-gray-700 dark:text-gray-300 text-lg"
          >
            I build responsive websites and web applications using Django, ReactJS and MySQL.
          </motion.p>

          <div className="mt-8 flex space-x-4">
            <a
              href={RESUME_URL}
              download
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white text-lg font-medium shadow-lg hover:opacity-90"
            >
              Download Resume
            </a>

            <a
              href="/contact"
              className="px-6 py-3 rounded-xl bg-white/10 dark:bg-white/5 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 hover:bg-white/20 transition text-lg font-medium"
            >
              Hire Me
            </a>
          </div>
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-80 rounded-3xl bg-gradient-to-br from-purple-600 to-pink-500 shadow-2xl"
        />
      </div>
    </section>
  );
}
