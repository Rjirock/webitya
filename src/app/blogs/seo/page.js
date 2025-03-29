"use client";

import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";

const NextJsSEO = () => {
  return (
    <>
      <NextSeo
        title="Optimizing SEO in Next.js | The Ultimate Guide"
        description="Learn how to improve SEO in Next.js using SSR, SSG, meta tags, image optimization, and Core Web Vitals."
        canonical="https://example.com/nextjs-seo"
        openGraph={{
          url: "https://example.com/nextjs-seo",
          title: "Optimizing SEO in Next.js | The Ultimate Guide",
          description:
            "Learn how to improve SEO in Next.js using SSR, SSG, meta tags, image optimization, and Core Web Vitals.",
          images: [{ url: "https://example.com/seo-image.jpg" }],
        }}
      />

      <main className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-extrabold text-center mb-6">
          Optimizing SEO in Next.js: The Ultimate Guide
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Learn how to optimize your Next.js application for better search engine rankings and improved performance.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Why Next.js is SEO-Friendly?</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Server-Side Rendering (SSR) for better crawlability</li>
          <li>Static Site Generation (SSG) for fast-loading pages</li>
          <li>Automatic Code Splitting</li>
          <li>Image Optimization with `next/image`</li>
          <li>Easy Meta Tag Management with `next-seo`</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">Best SEO Practices in Next.js</h2>
        <h3 className="text-xl font-medium mt-6">1. Implementing Meta Tags</h3>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          {`import { NextSeo } from 'next-seo';

<NextSeo
  title="Next.js SEO Best Practices"
  description="Learn how to optimize your Next.js application for search engines."
/>`}
        </pre>

        <h3 className="text-xl font-medium mt-6">2. Using SSR for Dynamic Content</h3>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          {`export async function getServerSideProps() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  return { props: { data } };
}`}
        </pre>

        <h3 className="text-xl font-medium mt-6">3. Optimizing Images</h3>
        <Image src="/image.jpg" alt="SEO optimized image" width={500} height={300} className="rounded-md" />

        <h3 className="text-xl font-medium mt-6">4. Generating an XML Sitemap</h3>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          {`const Sitemap = () => {
  const urls = ["https://example.com/page1", "https://example.com/page2"];
  return (
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      {urls.map((url, index) => (
        <url key={index}><loc>{url}</loc></url>
      ))}
    </urlset>
  );
};`}
        </pre>

        <h3 className="text-xl font-medium mt-6">5. Monitoring Core Web Vitals</h3>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          {`export function reportWebVitals(metric) {
  console.log(metric);
}`}</pre>

        <p className="mt-8 text-lg text-gray-700">
          By implementing these best practices, you can improve the SEO of your Next.js application and boost your search engine rankings.
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

export default NextJsSEO;
