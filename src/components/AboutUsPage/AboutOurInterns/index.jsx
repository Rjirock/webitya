import { LinkedinOutlined } from "@ant-design/icons";

const interns = [
  {
    name: "Rahul Sharma",
    role: "Web Development Intern",
    image: "/images/rahul-sharma.png",
    linkedin: "https://www.linkedin.com/in/rahul-sharma",
  },
  {
    name: "Sneha Verma",
    role: "Digital Marketing Intern",
    image: "/images/sneha-verma.png",
    linkedin: "https://www.linkedin.com/in/sneha-verma",
  },
  {
    name: "Arjun Patel",
    role: "UI/UX Design Intern",
    image: "/images/arjun-patel.png",
    linkedin: "https://www.linkedin.com/in/arjun-patel",
  },
  {
    name: "Priya Singh",
    role: "Content Writing Intern",
    image: "/images/priya-singh.png",
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

      <div className="grid grid-cols-4 !md:grid-cols-4 gap-8 mt-8">
        {interns.map((intern, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={intern.image}
              alt={intern.name}
              className="w-24 h-24 rounded-full mb-4 border-2 border-gray-300"
            />
            <h3 className="text-lg font-bold text-gray-900">{intern.name}</h3>
            <p className="text-gray-600">{intern.role}</p>
            <a
              href={intern.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-blue-600 text-xl hover:text-blue-800"
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
