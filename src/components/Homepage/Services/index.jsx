import { GlobalOutlined, SearchOutlined, TeamOutlined } from '@ant-design/icons';

const HomeServicesSection = () => {
  const services = [
    {
      title: 'Website Designing',
      description: 'Custom, responsive websites tailored to your brand. We build stunning sites with smooth user experiences.',
      icon: <GlobalOutlined style={{ fontSize: '40px', color: '#000000' }} />,
    },
    {
      title: 'SEO Optimization',
      description: 'Boost your website ranking with strategic SEO. We help you get found online and attract more traffic.',
      icon: <SearchOutlined style={{ fontSize: '40px', color: '#000000' }} />,
    },
    {
      title: 'Social Media Marketing',
      description: 'Grow your brand on social platforms. We create engaging content and targeted campaigns to build your audience.',
      icon: <TeamOutlined style={{ fontSize: '40px', color: '#000000' }} />,
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2"
          >
            <div className="flex items-center space-x-4 mb-4">
              {service.icon}
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeServicesSection;

// I replaced Lucide icons with Ant Design icons for a polished look. Let me know if you want any adjustments! 🚀
