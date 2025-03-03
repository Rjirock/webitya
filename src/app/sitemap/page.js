export default function Sitemap() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-900">Sitemap</h1>
        <ul className="mt-6 space-y-4 text-lg text-blue-500">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    );
  }
  