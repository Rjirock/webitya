import Head from "next/head";

export default function ContactHero() {
  return (
    <>
      <Head>
        <title>Contact Us | Webitya</title>
        <meta name="description" content="Get in touch with Webitya for any inquiries or support." />
      </Head>
      <main className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-700 mb-6">Have questions? We’d love to hear from you. Reach out via the form below or use our contact details.</p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div>
            <h2 className="text-xl font-semibold">Our Details</h2>
            <p><strong>Email:</strong> <a href="mailto:webitya@gmail.com" className="text-blue-500">webitya@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+919693245941" className="text-blue-500">+91 9693245941</a></p>
            <p><strong>Address:</strong> Ganga Nagar, Harmu, Ranchi, Near Naman Vidya School</p>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-semibold">Send a Message</h2>
            <form className="mt-4 flex flex-col gap-4">
              <input type="text" placeholder="Your Name" className="border p-2 rounded w-full" required />
              <input type="email" placeholder="Your Email" className="border p-2 rounded w-full" required />
              <textarea placeholder="Your Message" className="border p-2 rounded w-full" rows="4" required></textarea>
              <button type="submit" className="bg-black text-white p-2 rounded hover:bg-gray-800">Send Message</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
