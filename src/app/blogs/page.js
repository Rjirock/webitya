"use client";

import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Mastering SEO in Next.js",
    description: "Learn how to optimize your Next.js website for search engines.",
    image: "/img1.jpeg",
    link: "/blogs/seo",
  },
  {
    id: 2,
    title: "Best Web Design Practices",
    description: "Discover modern web design principles and techniques.",
    image: "/img1.jpeg",
    link: "/blogs/webdesign",
  },
  {
    id: 3,
    title: "Performance Optimization in Next.js",
    description: "Boost your website speed and user experience with Next.js.",
    image: "/img1.jpeg",
    link: "/blog/performance-optimization",
  },
  {
    id: 4,
    title: "Understanding Server-Side Rendering (SSR)",
    description: "Learn the benefits of SSR and when to use it in Next.js.",
    image: "/img1.jpeg",
    link: "/blog/ssr-nextjs",
  },
];

const BlogPage = () => {
  return (
    <>
      <NextSeo
        title="Our Blogs | Stay Updated with the Latest Insights"
        description="Explore our latest blogs on web development, SEO, and performance optimization."
        canonical="https://example.com/blogs"
      />

      <main className="max-w-6xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-extrabold text-center mb-10">Our Blogs</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Link key={blog.id} href={blog.link} className="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition">
              <Image src={blog.image} alt={blog.title} width={400} height={250} className="w-full" />
              <div className="p-4">
                <h2 className="text-xl font-bold">{blog.title}</h2>
                <p className="text-gray-600 mt-2">{blog.description}</p>
                <span className="text-blue-600 mt-4 inline-block">Read More →</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default BlogPage;
