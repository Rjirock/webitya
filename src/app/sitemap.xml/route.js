export async function GET() {
  const baseUrl = "https://webitya.com";

  // Define your static pages
  const staticPages = ["", "about", "services", "contact", "blog", "faqs", "pricing"];

  // Fetch dynamic blog posts from your API (if applicable)
  const blogPosts = []; // Fetch from API if blog is dynamic
  // Example: const blogPosts = await fetch(`${baseUrl}/api/blog`).then(res => res.json());

  const allPages = [...staticPages, ...blogPosts.map((post) => `blog/${post.slug}`)];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allPages
      .map(
        (page) => `
      <url>
        <loc>${baseUrl}/${page}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>${
          page === "" ? "1.0" : ["about", "services", "pricing", "faqs"].includes(page) ? "0.9" : "0.7"
        }</priority>
      </url>
    `
      )
      .join("")}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
