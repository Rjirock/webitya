import Head from "next/head";

export default function Disclaimer() {
  return (
    <>
      <Head>
        <title>Disclaimer | Webitya</title>
        <meta name="description" content="Read our disclaimer to understand our website's liability and responsibility." />
      </Head>
      <main className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Disclaimer</h1>
        <p>Last updated: [Date]</p>

        <h2 className="text-xl font-semibold mt-4">General Information</h2>
        <p>
          The information provided by Webitya ("we," "us," or "our") on this website is for general informational purposes only. 
          All information on the site is provided in good faith, but we make no representations or warranties of any kind.
        </p>

        <h2 className="text-xl font-semibold mt-4">External Links Disclaimer</h2>
        <p>
          Our website may contain links to external websites that are not provided or maintained by us. 
          We do not guarantee the accuracy, relevance, or completeness of any information on these sites.
        </p>

        <h2 className="text-xl font-semibold mt-4">Professional Disclaimer</h2>
        <p>
          This website does not contain legal, financial, or other professional advice. The use of this website is at your own risk.
        </p>

        <h2 className="text-xl font-semibold mt-4">Contact Us</h2>
        <p>
          If you have any questions about this disclaimer, you can contact us at 
          <a href="mailto:support@webitya.com" className="text-blue-500"> support@webitya.com</a>.
        </p>
      </main>
    </>
  );
}
