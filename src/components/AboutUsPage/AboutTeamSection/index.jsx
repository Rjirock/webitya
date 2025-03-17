import { LinkedinOutlined, FacebookOutlined, InstagramOutlined } from "@ant-design/icons";

const teamMembers = [
  {
    name: "Aditya Kumar",
    role: "Founder & CEO",
    description: "Leading Webitya with a vision to revolutionize website development and digital marketing.",
    image: "/images/aditya-kumar.png", // Replace with actual image path
    linkedin: "https://www.linkedin.com/in/aditya-kumar",
    facebook: "https://www.facebook.com/aditya.kumar",
    instagram: "https://www.instagram.com/aditya.kumar",
  },
  {
    name: "Ananya Sharma",
    role: "Marketing Head",
    description: "Specialized in brand growth and customer engagement through innovative marketing strategies.",
    image: "/images/ananya-sharma.png",
    linkedin: "https://www.linkedin.com/in/ananya-sharma",
    facebook: "https://www.facebook.com/ananya.sharma",
    instagram: "https://www.instagram.com/ananya.sharma",
  },
  {
    name: "Sahil Verma",
    role: "CTO",
    description: "Expert in front-end development and ensuring top-notch user experiences with modern technologies.",
    image: "/images/sahil-verma.png",
    linkedin: "https://www.linkedin.com/in/sahil-verma",
    facebook: "https://www.facebook.com/sahil.verma",
    instagram: "https://www.instagram.com/sahil.verma",
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-gray-900">Our Team</h2>
      <p className="text-gray-600 mt-4 text-lg">
        Meet the dedicated team behind Webitya Web Services, driving digital innovation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mb-4 border-2 border-gray-300"
            />
            <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            <p className="text-gray-500 text-sm mt-2">{member.description}</p>
            <div className="flex mt-4 space-x-4">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedinOutlined className="text-blue-600 text-2xl hover:text-blue-800" />
              </a>
              <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                <FacebookOutlined className="text-blue-500 text-2xl hover:text-blue-700" />
              </a>
              <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                <InstagramOutlined className="text-pink-500 text-2xl hover:text-pink-700" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
