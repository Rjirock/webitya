"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";

export default function Maintenance() {
  const [dots, setDots] = useState(".");
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [message, setMessage] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send("service_webitya", "template_y9g4vob", form, "Iw_1wMHg3mqNItEUH")
      .then(() => {
        setMessage("Your message has been sent successfully!");
        setForm({ name: "", email: "", phone: "" });
        setTimeout(() => setIsFormOpen(false), 2000);
      })
      .catch(() => setMessage("Failed to send message. Please try again."));
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6 text-center overflow-hidden">
      {/* Smooth Bubble Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-500 opacity-20 rounded-full blur-xl"
            style={{
              width: `${Math.random() * 80 + 40}px`,
              height: `${Math.random() * 80 + 40}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-50, 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-200">
        Webitya.com is in Maintenance Mode
      </h1>
      <p className="mt-4 text-lg sm:text-xl max-w-xl leading-relaxed text-gray-300">
        We are working hard to bring you an even better experience. Please visit <a href="https://webitya.in" className="text-blue-400 underline">Webitya.in</a> for more info.
      </p>
      <div className="mt-6 text-gray-300">
        <p>Contact: <a href="tel:9693245941" className="text-blue-400">9693245941</a></p>
        <p>Email: <a href="mailto:contact@webitya.com" className="text-blue-400">contact@webitya.com</a></p>
      </div>
      <div className="mt-12 w-16 h-16 border-4 border-t-transparent border-blue-500 rounded-full animate-spin" />
      <p className="mt-8 text-sm sm:text-base text-gray-400">
        Thank you for your patience. We are doing our best to be back soon!
      </p>

      {/* Button to Open Form (Hidden when Form is Open) */}
      {!isFormOpen && (
        <button onClick={() => setIsFormOpen(true)} className="mt-6 px-6 z-40 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 transition-all">
          Fill Query
        </button>
      )}

      {/* Animated Form Popup */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <h2 className="text-xl font-semibold mb-4">Get Notified</h2>
              <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} className="w-full p-2 mb-4 rounded bg-gray-700 text-white" required />
              <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} className="w-full p-2 mb-4 rounded bg-gray-700 text-white" required />
              <input type="tel" name="phone" placeholder="Your Phone" value={form.phone} onChange={handleChange} className="w-full p-2 mb-4 rounded bg-gray-700 text-white" required />
              <button type="submit" onClick={handleSubmit} className="w-full p-2 bg-blue-500 text-white font-bold rounded cursor-pointer">Submit Now</button>
              {message && <p className="mt-4 text-green-400">{message}</p>}
              <button onClick={() => setIsFormOpen(false)} className="mt-4 w-full p-2 bg-red-500 text-white font-bold rounded">Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}