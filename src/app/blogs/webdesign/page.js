"use client";

import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";

const WebDesignPage = () => {
  return (
    <>
      <NextSeo
        title="Modern Web Design with Next.js | Best Practices"
        description="Discover the best web design practices using Next.js, including UI/UX principles, responsive design, performance optimization, and accessibility."
        canonical="https://example.com/webdesign"
        openGraph={{
          url: "https://example.com/webdesign",
          title: "Modern Web Design with Next.js | Best Practices",
          description:
            "Discover the best web design practices using Next.js, including UI/UX principles, responsive design, performance optimization, and accessibility.",
          images: [{ url: "https://example.com/webdesign-image.jpg" }],
        }}
      />

      <main className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-extrabold text-center mb-6">
          Modern Web Design with Next.js
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          Learn how to create visually appealing, user-friendly, and high-performing websites using Next.js.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Key Principles of Web Design</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Minimalist and Clean UI</li>
          <li>Responsive and Mobile-Friendly Layout</li>
          <li>Fast Load Times and Performance Optimization</li>
          <li>Accessibility for All Users</li>
          <li>SEO-Friendly Structure</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">Best Web Design Practices in Next.js</h2>

        <h3 className="text-xl font-medium mt-6">1. Responsive Design with Tailwind CSS</h3>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          {`<div className="container mx-auto p-4">
  <h1 className="text-4xl md:text-6xl font-bold">Welcome to Next.js</h1>
</div>`}
        </pre>

        <h3 className="text-xl font-medium mt-6">2. Optimizing Images for Performance</h3>
        <Image src="/webdesign.jpg" alt="Modern Web Design" width={500} height={300} className="rounded-md" />

        <h3 className="text-xl font-medium mt-6">3. Improving Page Speed with Lazy Loading</h3>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          {`<Image src="/image.jpg" alt="Optimized Image" width={600} height={400} loading="lazy" />`}
        </pre>

        <h3 className="text-xl font-medium mt-6">4. Accessibility Enhancements</h3>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          {`<button aria-label="Learn More" className="bg-blue-500 text-white px-4 py-2 rounded">
  Learn More
</button>`}
        </pre>

        <h3 className="text-xl font-medium mt-6">5. SEO Optimization with Metadata</h3>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          {`import { NextSeo } from 'next-seo';

<NextSeo
  title="Next.js Web Design Guide"
  description="Learn best practices for web design in Next.js."
/>`}
        </pre>

        <p className="mt-8 text-lg text-gray-700">
          By implementing these design principles and practices, you can create visually appealing, high-performing websites with Next.js.
        </p>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
          >
            Go Back to Home
          </Link>
        </div>
      </main>
    </>
  );
};

export default WebDesignPage;
