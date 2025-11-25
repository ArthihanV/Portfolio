import React from "react";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="mt-16 py-10 border-t border-gray-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <div className="text-lg font-semibold text-gray-900 dark:text-white">Arthihan Vinayagaselvan</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Python Full Stack Developer</div>
        </div>

        <div className="flex items-center gap-6">
          <SocialIcons />
          <div className="text-sm text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()}</div>
        </div>
      </div>
    </footer>
  );
}
