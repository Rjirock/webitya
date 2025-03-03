"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Maintenance() {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6 text-center">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
      >
        Webitya.com is in Maintenance Mode{dots}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-4 text-lg sm:text-xl max-w-xl leading-relaxed"
      >
        We are working hard to bring you an even better experience. Please visit <a href="https://webitya.in" className="text-blue-400 underline">Webitya.in</a> for more info.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-6"
      >
        <p>Contact: <a href="tel:9693245941" className="text-blue-400">9693245941</a></p>
        <p>Email: <a href="mailto:contact@gmail.com" className="text-blue-400">contact@gmail.com</a></p>
      </motion.div>
      <motion.div
        className="mt-12 w-16 h-16 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-8 text-sm sm:text-base text-gray-400"
      >
        Thank you for your patience. We are doing our best to be back soon!
      </motion.p>
    </div>
  );
}