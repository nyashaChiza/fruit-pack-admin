// src/app/terms/page.tsx
import Link from "next/link";
import Header from "@/components/ui/website/Header";

export default function Terms() {
  const termsSections = [
    {
      title: "1. Acceptance of Terms",
      content: (
        <p className="text-gray-700">
          By downloading, installing, or using the FruitPack mobile application, you agree to be bound by these Terms and Conditions. 
          If you do not agree, please do not use our services. These terms apply to all users of the FruitPack app in South Africa.
        </p>
      ),
    },
    {
      title: "2. Description of Service",
      content: (
        <>
          <p className="text-gray-700 mb-2">FruitPack provides:</p>
          <ul className="list-disc list-inside text-gray-700 mb-2">
            <li>Platform to order fresh fruits and vegetables</li>
            <li>Delivery services for fresh produce</li>
            <li>Order tracking and customer support</li>
            <li>Account management and order history</li>
          </ul>
          <div className="bg-blue-100 p-4 rounded">
            <strong>Important:</strong> FruitPack only delivers fresh produce. We do not sell processed foods, beverages, or non-food items.
          </div>
        </>
      ),
    },
    {
      title: "3. User Accounts",
      content: (
        <p className="text-gray-700">
          Users are responsible for maintaining account confidentiality. You agree to notify us immediately of any unauthorized use.
        </p>
      ),
    },
    {
      title: "4. Orders and Payments",
      content: (
        <p className="text-gray-700">
          All orders must be paid through the FruitPack app. Prices, payment terms, and delivery charges are clearly displayed. Payment processing is securely handled via Paystack.
        </p>
      ),
    },
    {
      title: "5. Delivery Services",
      content: (
        <p className="text-gray-700">
          We deliver to addresses within our service areas. Delivery times are estimates and may vary due to unforeseen circumstances.
        </p>
      ),
    },
    {
      title: "6. User Conduct",
      content: (
        <p className="text-gray-700">
          Users must comply with all applicable laws and refrain from fraudulent, abusive, or harmful activities while using our services.
        </p>
      ),
    },
    {
      title: "7. Limitation of Liability",
      content: (
        <p className="text-gray-700">
          FruitPack is not liable for indirect, incidental, or consequential damages arising from use of the app, except as required by law.
        </p>
      ),
    },
    {
      title: "8. Termination",
      content: (
        <p className="text-gray-700">
          We may suspend or terminate accounts for breach of terms or illegal activity without prior notice.
        </p>
      ),
    },
    {
      title: "9. Contact Information",
      content: (
        <div className="space-y-2">
          <p className="text-gray-700">For questions about these Terms & Conditions:</p>
          <p className="text-gray-700"><strong>Email:</strong> support@fruitpack.co.za</p>
          <p className="text-gray-700"><strong>Phone:</strong> +27 12 345 6789</p>
          <p className="text-gray-700"><strong>Address:</strong> 123 Business Street, Cape Town, 8001, South Africa</p>
        </div>
      ),
    },
  ];

  return (
    <div className="font-sans text-gray-800">

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-blue-50 py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mx-auto mb-6 w-20 h-20 flex items-center justify-center rounded-full bg-blue-100">
            <i className="bi bi-file-text text-blue-500 text-3xl"></i>
          </div>
          <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-gray-700 mb-2">
            These terms govern your use of the FruitPack mobile application and services.
          </p>
          <p className="text-gray-500 text-sm">Last updated: January 2024</p>
          <Link
            href="/"
            className="inline-block mt-4 px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-100 transition"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* Key Feature Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: "⚖️", title: "Fair Terms", text: "Clear, reasonable terms that protect both users and FruitPack." },
            { icon: "🛡️", title: "User Protection", text: "Your rights and protections when using our service." },
            { icon: "⚠️", title: "Clear Obligations", text: "Transparent responsibilities for all parties involved." },
          ].map((card, i) => (
            <div key={i} className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 text-3xl">
                {card.icon}
              </div>
              <h3 className="font-bold text-xl mb-2">{card.title}</h3>
              <p className="text-gray-700">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Terms */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          {termsSections.map((section, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-blue-100 px-6 py-3 border-b font-semibold">{section.title}</div>
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
              <li><Link href="/policy" className="hover:text-white">Privacy Policy</Link></li>
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
