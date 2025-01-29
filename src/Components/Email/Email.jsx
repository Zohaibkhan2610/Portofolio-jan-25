import React from "react";
import { motion } from "framer-motion";

const Email = () => {
  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center p-4">
      <motion.div
        className="w-full max-w-3xl bg-white/30 rounded-2xl shadow-lg p-8"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        exit={{ opacity: 0, x: 50 }}
      >
        <h1 className="text-3xl font-extrabold text-center text-gray-50 mb-6">Contact Us</h1>
        <p className="text-center text-black mb-8">
          We’d love to hear from you! Fill out the form below and we’ll get back to you as soon as possible.
        </p>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-100 font-bold">Name</label>
            <input
              type="text"
              id="name"
              className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-gray-100 font-bold">Email</label>
            <input
              type="email"
              id="email"
              className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-gray-100 font-bold">Message</label>
            <textarea
              id="message"
              className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-1/2 text-sm sm:text-xl md:text-2xl p-2 font-bold text-gray-200 hover:text-black mb-2  bg-gray-400 py-3 rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-400 duration-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Email;
