"use client"
import { useState, useEffect } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

import AboutHeroSection from "@/components/AboutUsPage/AboutUsHeroSection";
import TeamSection from "@/components/AboutUsPage/AboutTeamSection";
import AboutInternsSection from "@/components/AboutUsPage/AboutOurInterns";
import AboutUsCTA from "@/components/AboutUsPage/AboutUsCTA";
import AboutVisionMissionSection from "@/components/AboutUsPage/AboutVisionMission";


const About = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setSidebarOpen(false);
  };

  const navLinks = [
    { id: "intro", label: "Key Takeaways" },
    { id: "content", label: "Our Process" },
    { id: "steps", label: "Why Choose Us" },
    { id: "benefits", label: "Multi-Stage Convincing Process" },
    { id: "positioning", label: "Our Delivery Models" },
    { id: "premium-advantage", label: "Contact Us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      navLinks.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          if (top <= 150 && bottom >= 150) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  return (
    <>
 
      <button
        className="fixed top-4 left-4 z-50 bg-blue-500 text-white p-3 rounded-full shadow-lg"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? <CloseOutlined className="text-lg" /> : <MenuOutlined className="text-lg" />}
      </button>

      <aside
        className={`fixed top-20 left-0 h-full w-40 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out z-40 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:block`}
      >
        <ul className="space-y-3 py-6 px-4">
          {navLinks.map(({ id, label }) => (
            <li
              key={id}
              className={`cursor-pointer text-sm font-medium p-2 rounded-md transition-all ${
                activeSection === id ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"
              }`}
              onClick={() => scrollToSection(id)}
            >
              {label}
            </li>
          ))}
        </ul>
      </aside>

      <main className={`transition-all duration-300 ease-in-out ${isSidebarOpen ? "ml-40" : "ml-0"} lg:ml-40`}>
        <section id="hero">
          <AboutHeroSection/>
        </section>
        <section id="hero1">
          <AboutVisionMissionSection/>
        </section>
        <section id="intro">
          <TeamSection/>
        </section>
        <section id="content">
          <AboutInternsSection/>
        </section>
        <section id="steps">
           <AboutUsCTA/>
        </section>
        <section id="benefits">
        <h1>Aditya 1</h1>
        </section>
        <section id="positioning">
        <h1>Aditya 1</h1>
        </section>
        <section id="premium-advantage">
        <h1>Aditya 1</h1>
        </section>
    
      </main>
   </>
  );
};

export default About;