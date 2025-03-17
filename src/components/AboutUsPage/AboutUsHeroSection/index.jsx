import { TeamOutlined } from "@ant-design/icons";

const AboutHeroSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center">
      {/* Left Side: Text Content */}
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold text-gray-900">About Webitya</h2>
        <p className="text-gray-600 mt-4 text-lg">
          At <strong>Webitya Web Services</strong>, we are dedicated to helping businesses thrive in the digital landscape.  
          Our expertise in <strong>website development, SEO, and digital marketing</strong> ensures that brands  
          establish a strong online presence, attract more customers, and drive growth.  
          With our innovative strategies, we empower businesses to enhance their visibility,  
          engage audiences, and maximize conversions. Join us on the journey to digital success!
        </p>
      </div>

      {/* Right Side: Image / Illustration */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <div className="relative w-full max-w-lg">
          <img
            src="/images/webitya-about.png" 
            alt="Webitya Team Illustration"
            className="w-full"
          />
          <TeamOutlined className="absolute top-0 right-0 text-gray-300 text-6xl" />
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
