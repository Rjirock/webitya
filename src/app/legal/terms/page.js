import Head from "next/head";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms & Conditions | Webitya</title>
        <meta name="description" content="Read our terms and conditions to understand the usage rules of Webitya." />
      </Head>
      <main className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Terms & Conditions</h1>
        <p>Last updated: [Date]</p>

        <h2 className="text-xl font-semibold mt-4">1. Acceptance of Terms</h2>
        <p>
          By accessing and using Webitya ("we," "us," or "our") services, you agree to comply with these Terms & Conditions.
        </p>

        <h2 className="text-xl font-semibold mt-4">2. Intellectual Property Rights</h2>
        <p>
          All content published on Webitya is our property and is protected by copyright laws.
        </p>

        <h2 className="text-xl font-semibold mt-4">3. User Responsibilities</h2>
        <p>
          Users must not misuse the services, copy content without permission, or violate laws while using Webitya.
        </p>

        <h2 className="text-xl font-semibold mt-4">4. Limitation of Liability</h2>
        <p>
          Webitya is not responsible for any damages resulting from the use of our website.
        </p>

        <h2 className="text-xl font-semibold mt-4">5. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Users will be notified of major updates.
        </p>

        <h2 className="text-xl font-semibold mt-4">6. Contact Us</h2>
        <p>
          If you have any questions, please contact us at 
          <a href="mailto:support@webitya.com" className="text-blue-500"> support@webitya.com</a>.
        </p>
      </main>
    </>
  );
}
