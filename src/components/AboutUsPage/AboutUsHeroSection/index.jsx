

const AboutHeroSection = () => {
  return (
    <section className="bg-white mt-16 px-6 md:px-16 py-5 md:py-10 flex flex-col md:flex-row items-center">
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
            src="/aboutHero.webp" 
            alt="Webitya Team Illustration"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
