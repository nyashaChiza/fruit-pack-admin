// src/app/privacy/page.tsx
import Link from "next/link";
import Header from "@/components/ui/website/Header";

export default function PrivacyPolicy() {
  return (
    <div className="font-sans text-gray-800">

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-green-50 py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mx-auto mb-6 w-20 h-20 flex items-center justify-center rounded-full bg-green-100">
            <i className="bi bi-shield-check text-green-600 text-3xl"></i>
          </div>
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-700 mb-2">
            Your privacy is important to us. This policy explains how FruitPack collects, uses, and protects your personal information.
          </p>
          <p className="text-gray-500 text-sm">Last updated: January 2024</p>
          <Link
            href="/"
            className="inline-block mt-4 px-6 py-3 border border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-100 transition"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* Key Features Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-3xl">
              🔒
            </div>
            <h3 className="font-bold text-xl mb-2">POPIA Compliant</h3>
            <p className="text-gray-600">
              We comply with South Africa&apos;s Protection of Personal Information Act (POPIA).
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-3xl">
              💾
            </div>
            <h3 className="font-bold text-xl mb-2">Secure Storage</h3>
            <p className="text-gray-600">
              Your data is encrypted and stored securely on protected servers.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-3xl">
              👁️
            </div>
            <h3 className="font-bold text-xl mb-2">Transparent</h3>
            <p className="text-gray-600">
              We are transparent about what data we collect and how we use it.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Policy Sections */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          
          {/* Reusable card component */}
          {[
            {
              title: "1. Information We Collect",
              content: (
                <>
                  <h4 className="font-semibold mb-2">Personal Information</h4>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>Name, email, phone number</li>
                    <li>Delivery address & contact info</li>
                    <li>Account preferences & order history</li>
                    <li>Support communications</li>
                  </ul>
                  <h4 className="font-semibold mb-2">Technical Information</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Device info & identifiers</li>
                    <li>App usage data & analytics</li>
                    <li>Location data (with consent)</li>
                    <li>Log files & crash reports</li>
                  </ul>
                </>
              ),
            },
            {
              title: "2. How We Use Your Information",
              content: (
                <ul className="list-disc list-inside text-gray-700">
                  <li>Process and fulfill orders</li>
                  <li>Communicate about deliveries & account</li>
                  <li>Provide customer support</li>
                  <li>Improve app and services</li>
                  <li>Send promotions (with consent)</li>
                  <li>Comply with legal obligations</li>
                  <li>Prevent fraud and ensure security</li>
                </ul>
              ),
            },
            {
              title: "3. Payment Information Security",
              content: (
                <>
                  <p className="text-gray-700 mb-2">
                    <strong>Paystack Integration:</strong> All payment info is processed securely via Paystack. FruitPack does not store full credit card details.
                  </p>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>End-to-end encryption</li>
                    <li>PCI DSS compliance via Paystack</li>
                    <li>Secure tokenization of payment methods</li>
                    <li>Regular security audits</li>
                  </ul>
                </>
              ),
            },
            {
              title: "4. POPIA Compliance",
              content: (
                <ul className="list-disc list-inside text-gray-700">
                  <li>Processed lawfully and reasonably</li>
                  <li>Collected for defined purposes only</li>
                  <li>Adequate and relevant data</li>
                  <li>Accurate and up to date</li>
                  <li>Not retained longer than necessary</li>
                  <li>Secured appropriately</li>
                </ul>
              ),
            },
            {
              title: "5. Data Sharing and Disclosure",
              content: (
                <ul className="list-disc list-inside text-gray-700">
                  <li>Delivery partners to fulfill orders</li>
                  <li>Payment processors (Paystack)</li>
                  <li>Service providers for app operations</li>
                  <li>Legal authorities when required</li>
                  <li>Business partners with consent</li>
                </ul>
              ),
            },
            {
              title: "6. Your Rights",
              content: (
                <ul className="list-disc list-inside text-gray-700">
                  <li>Access personal information</li>
                  <li>Correct or update info</li>
                  <li>Delete info (legal limitations may apply)</li>
                  <li>Object to processing</li>
                  <li>Withdraw consent</li>
                  <li>Lodge complaint with Information Regulator</li>
                </ul>
              ),
            },
            {
              title: "7. Contact Us",
              content: (
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex items-center gap-2">
                    <i className="bi bi-envelope text-green-600 text-xl"></i>
                    <span className="text-gray-700">support@fruitpack.co.za</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="bi bi-telephone text-green-600 text-xl"></i>
                    <span className="text-gray-700">+27 12 345 6789</span>
                  </div>
                </div>
              ),
            },
          ].map((section, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-green-100 px-6 py-3 border-b font-semibold">{section.title}</div>
              <div className="px-6 py-4">{section.content}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center mr-2 bg-gradient-to-br from-green-500 to-green-700 text-white font-bold">
                F
              </div>
              <span className="font-bold text-white">FruitPack</span>
            </div>
            <p>Fresh fruits and vegetables delivered to your door across South Africa.</p>
          </div>
          <div>
            <h6 className="font-semibold mb-2 text-white">Company</h6>
            <ul className="space-y-1">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-2 text-white">Contact</h6>
            <ul className="space-y-1">
              <li>support@fruitpack.co.za</li>
              <li>+27 12 345 6789</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-8 text-sm">
          &copy; 2025 FruitPack. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
