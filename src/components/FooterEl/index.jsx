'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GithubOutlined, TwitterOutlined, LinkedinOutlined, YoutubeOutlined, InstagramOutlined } from '@ant-design/icons';
import emailjs from 'emailjs-com';

const footerData = [
  {
    title: 'Resources',
    links: [
      { name: 'Docs', href: '#' },
      { name: 'Learn', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Blog', href: '/blogs' },
      { name: 'FAQS', href: '/faqs' },
      { name: 'Team', href: '#' },
      { name: 'SEO Analytics', href: '#' },
      { name: 'Events', href: '#' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'SEO', href: '#' },
      { name: 'Social Media Marketing', href: '#' },
      { name: 'PPC Advertising', href: '#' },
      { name: 'Email Marketing', href: '#' },
      { name: 'Content Marketing', href: '#' },
      { name: 'Web Design', href: '#' },
    ],
  },
  {
    title: 'About us',
    links: [
      { name: 'Privacy', href: '/legal/privacy-policy' },
      { name: 'Terms of service', href: '/legal/terms' },
      { name: 'Disclaimer', href: '/legal/disclaimer' },
      { name: 'Contact', href: '/contact-us' },
    ],
  },
];

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', { email }, 'YOUR_PUBLIC_KEY')
      .then(() => {
        alert('Subscription successful!');
        setEmail('');
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-8">
        <div className="w-full md:w-1/3">
          <img src="/logo.png" alt="WEBITYA Logo" className="w-32 mb-4" />
          <p className="text-sm">WEBITYA is your trusted digital marketing agency specializing in SEO, Social Media, and Content Marketing.</p>
        </div>
        <div className="w-full md:w-1/3 grid grid-cols-2 md:grid-cols-3 gap-8">
          {footerData.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="hover:text-white transition">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold mb-4">Subscribe to our Newsletter</h3>
          <form onSubmit={handleSubscribe} className="space-y-2">
            <input 
              type="email" 
              placeholder="you@domain.com" 
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md">Subscribe Now</button>
          </form>
        </div>
      </div>
      <div className="mt-10 text-center border-t border-gray-700 pt-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} WEBITYA Digital Marketing Agency. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-4 text-lg">
          <Link href="#"><GithubOutlined /></Link>
          <Link href="#"><TwitterOutlined /></Link>
          <Link href="#"><LinkedinOutlined /></Link>
          <Link href="#"><YoutubeOutlined /></Link>
          <Link href="#"><InstagramOutlined /></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;