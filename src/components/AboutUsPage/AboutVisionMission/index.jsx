import { BulbOutlined, RocketOutlined } from "@ant-design/icons";

const VisionMissionSection = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-white text-center">
      <h2 className="text-4xl font-extrabold text-gray-900">Our Vision & Mission</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        {/* Vision Card */}
        <div className="flex flex-col items-center text-center">
          <BulbOutlined className="text-blue-600 text-6xl mb-4" />
          <h3 className="text-2xl font-semibold text-gray-900">Our Vision</h3>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed max-w-lg">
            Empowering businesses with <strong>cutting-edge digital solutions</strong> 
            to establish a strong online presence and drive <strong>innovation</strong>.
          </p>
        </div>

        {/* Mission Card */}
        <div className="flex flex-col items-center text-center">
          <RocketOutlined className="text-green-600 text-6xl mb-4" />
          <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed max-w-lg">
            Helping brands achieve <strong>growth and visibility</strong> through 
            strategic <strong>digital marketing, SEO, and modern web solutions</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
