"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Button, Input } from "antd";

const { TextArea } = Input;

const HomeHero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_webitya", "template_y9g4vob", formData, "Iw_1wMHg3mqNItEUH")
      .then(() => alert("Message sent successfully!"))
      .catch(() => alert("Failed to send message."));
  };

  return (
    <>
     <div>
     <motion.div
  className="bg-black text-white py-2 text-center !mt-20 overflow-hidden"
  initial={{ x: "100%" }}
  animate={{ x: "-100%" }}
  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
>
  This Website is Under Construction 🚧 Stay tuned for updates!
</motion.div>
     </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="md:!min-h-screen !flex !flex-col md:!flex-row !items-center !justify-between !px-8 !py-10 !bg-gradient-to-r !from-gray-200 !to-gray-300 !text-black"
      >
        {/* Left - Hero Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="!text-center md:!text-left md:!w-2/3 md:!pr-12 !mt-8 md:!mt-0"
        >
          <h1 className="!text-5xl !font-extrabold !text-gray-900">
            Webitya Web Services
          </h1>
          <p className="!text-gray-600 !mt-4 !text-lg">
            Elevate your brand with <strong className="!text-black">cutting-edge digital marketing solutions</strong>.  
            From SEO to web development, we help businesses thrive online.
          </p>

          <div className="!mt-6">
            <Button className="!mr-4 !bg-black !border-black !hover:bg-gray-800 !text-white">
              Get Started
            </Button>
            <Button className="!border-gray-400 !hover:border-gray-600">
              Our Services
            </Button>
          </div>
        </motion.div>

        {/* Right - Form Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="!bg-white !p-6 !rounded-2xl !shadow-lg !w-full md:!w-1/3 !mt-8 md:!mt-0"
        >
          <h2 className="!text-xl !font-bold !mb-4 !text-black">Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <Input
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              required
              className="!mb-2 !border-gray-300"
            />
            <Input
              name="email"
              type="email"
              placeholder="Your Email"
              onChange={handleChange}
              required
              className="!mb-2 !border-gray-300"
            />
            <TextArea
              name="description"
              placeholder="Describe your requirement"
              onChange={handleChange}
              required
              className="!mb-2 !border-gray-300"
            />
            <Button
              type="primary"
              htmlType="submit"
              className="!w-full !mt-4 !bg-black !border-black !hover:bg-gray-800 !text-white"
            >
              Submit Now
            </Button>
          </form>
        </motion.div>
      </motion.div>
    </>
  );
};

export default HomeHero;
