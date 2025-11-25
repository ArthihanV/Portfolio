import React from "react";

export default function Contact() {
  return (
    <section className="pt-5 pb-16">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Contact Me
        </h2>

        <form className="space-y-6">

          {/* Name */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium dark:text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              className="
                w-full px-4 py-3 rounded-xl 
                bg-gray-100 text-gray-900 
                border border-gray-300
                focus:border-purple-500 focus:ring-2 focus:ring-purple-400 
                dark:bg-white/10 dark:text-white dark:border-white/20
              "
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium dark:text-gray-300">
              Your Email
            </label>
            <input
              type="email"
              className="
                w-full px-4 py-3 rounded-xl 
                bg-gray-100 text-gray-900 
                border border-gray-300
                focus:border-purple-500 focus:ring-2 focus:ring-purple-400 
                dark:bg-white/10 dark:text-white dark:border-white/20
              "
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium dark:text-gray-300">
              Message
            </label>
            <textarea
              rows="5"
              className="
                w-full px-4 py-3 rounded-xl 
                bg-gray-100 text-gray-900 
                border border-gray-300
                focus:border-purple-500 focus:ring-2 focus:ring-purple-400 
                dark:bg-white/10 dark:text-white dark:border-white/20
              "
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="
              w-full py-3 text-lg font-medium rounded-xl
              bg-gradient-to-r from-purple-600 to-pink-500 text-white
              shadow-lg hover:opacity-90 transition
            "
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}
