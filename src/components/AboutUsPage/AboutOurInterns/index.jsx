import { LinkedinOutlined } from "@ant-design/icons";

const interns = [
  {
    name: "Rahul Sharma",
    role: "Web Development Intern",
    image: "/team.webp",
    linkedin: "https://www.linkedin.com/in/rahul-sharma",
  },
  {
    name: "Sneha Verma",
    role: "Digital Marketing Intern",
    image: "/team.webp",
    linkedin: "https://www.linkedin.com/in/sneha-verma",
  },
  {
    name: "Arjun Patel",
    role: "UI/UX Design Intern",
    image: "/team.webp",
    linkedin: "https://www.linkedin.com/in/arjun-patel",
  },
  {
    name: "Priya Singh",
    role: "Content Writing Intern",
    image: "/team.webp",
    linkedin: "https://www.linkedin.com/in/priya-singh",
  },
];

const AboutInternsSection = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-white text-center">
      <h2 className="text-4xl font-bold text-gray-900">Our Interns</h2>
      <p className="text-gray-600 mt-4 text-lg">
        Meet the talented interns contributing to Webitya’s growth and innovation.
      </p>

      {/* Updated Grid for Better Responsiveness */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mt-8">
        {interns.map((intern, index) => (
          <div key={index} className="flex flex-col items-center p-4 shadow-lg rounded-lg bg-gray-50">
            <img
              src={intern.image}
              alt={intern.name}
              className="w-24 h-24 rounded-full mb-4 border-2 border-gray-300 shadow-md"
            />
            <h3 className="text-lg font-semibold text-gray-900">{intern.name}</h3>
            <p className="text-gray-600">{intern.role}</p>
            
            {/* LinkedIn Icon with Smooth Hover Effect */}
            <a
              href={intern.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 text-blue-600 text-2xl transition duration-300 hover:text-blue-800 hover:scale-110"
            >
              <LinkedinOutlined />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutInternsSection;
