import React from "react";
import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="
      min-h-screen 
      bg-[#f5f7fa] text-gray-900 
      dark:bg-gradient-to-b dark:from-black dark:via-gray-900 dark:to-black 
      dark:text-white 
      transition-all duration-300
    ">
      <Navbar />

      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex justify-end mb-4">
            <ThemeToggle />
          </div>

          {children}
        </div>
      </div>

      <Footer />
    </div>
  );
}
