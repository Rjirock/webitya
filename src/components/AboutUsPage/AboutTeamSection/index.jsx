import { LinkedinOutlined, FacebookOutlined, InstagramOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Aditya Kumar",
    role: "Founder & CEO",
    description: "Leading Webitya with a vision to revolutionize website development and digital marketing.",
    image: "/team.webp",
    linkedin: "https://www.linkedin.com/in/aditya-kumar",
    facebook: "https://www.facebook.com/aditya.kumar",
    instagram: "https://www.instagram.com/aditya.kumar",
  },
  {
    name: "Ananya Sharma",
    role: "Marketing Head",
    description: "Specialized in brand growth and customer engagement through innovative marketing strategies.",
    image: "/team.webp",
    linkedin: "https://www.linkedin.com/in/ananya-sharma",
    facebook: "https://www.facebook.com/ananya.sharma",
    instagram: "https://www.instagram.com/ananya.sharma",
  },
  {
    name: "Sahil Verma",
    role: "CTO",
    description: "Expert in front-end development and ensuring top-notch user experiences with modern technologies.",
    image: "/team.webp",
    linkedin: "https://www.linkedin.com/in/sahil-verma",
    facebook: "https://www.facebook.com/sahil.verma",
    instagram: "https://www.instagram.com/sahil.verma",
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-gradient-to-b from-gray-100 to-gray-200 text-center">
      <h2 className="text-5xl font-extrabold text-gray-900">Meet Our Team</h2>
      <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
        The brilliant minds behind Webitya Web Services, committed to digital excellence.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center transition duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-28 h-28 rounded-full mb-4 border-4 border-gray-300 shadow-sm"
            />
            <h3 className="text-2xl font-semibold text-gray-900">{member.name}</h3>
            <p className="text-blue-600 font-medium text-lg">{member.role}</p>
            <p className="text-gray-500 text-sm mt-2 text-center">{member.description}</p>
            <div className="flex mt-4 space-x-5">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedinOutlined className="text-gray-600 text-3xl transition-colors duration-300 hover:text-[#0077B5]" />
              </a>
              <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                <FacebookOutlined className="text-gray-600 text-3xl transition-colors duration-300 hover:text-[#1877F2]" />
              </a>
              <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                <InstagramOutlined className="text-gray-600 text-3xl transition-colors duration-300 hover:text-[#E4405F]" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;