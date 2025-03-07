import React from 'react';

const HomeClientLogos = () => {
  const logos = [
    { src: '/logo1.png', link: 'https://example1.com' },
    { src: '/logo2.png', link: 'https://example2.com' },
    { src: '/logo3.png', link: 'https://example3.com' },
    { src: '/logo4.png', link: 'https://example4.com' },
    { src: '/logo5.png', link: 'https://example5.com' },
    { src: '/logo6.png', link: 'https://example6.com' },
    { src: '/logo7.png', link: 'https://example7.com' },
    { src: '/logo8.png', link: 'https://example8.com' },
    { src: '/logo9.png', link: 'https://example9.com' },
    { src: '/logo10.png', link: 'https://example10.com' }
  ];

  return (
    <div className="overflow-hidden py-6 bg-white">
      <h1 className='text-center text-xl pb-10'>Our Global Clients</h1>
      <div className="whitespace-nowrap animate-scroll flex items-center">
        {logos.concat(logos).map((logo, index) => (
          <a key={index} href={logo.link} target="_blank" rel="noopener noreferrer">
            <img
              src={logo.src}
              alt={`Client Logo ${index + 1}`}
              className="h-16 mx-6 hover:opacity-80 transition-opacity"
            />
          </a>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HomeClientLogos;

// Let me know if you'd like me to refine this, change speed, or add any effects! 🚀
