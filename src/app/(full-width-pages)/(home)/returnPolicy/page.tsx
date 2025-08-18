// src/app/refund-cancellation/page.tsx
import Link from "next/link";
import Header from "@/components/ui/website/Header";

export default function RefundCancellationPolicy() {
  const policySections = [
    {
      title: "1. Refund Eligibility",
      content: (
        <>
          <h4 className="font-semibold mb-2">Eligible for Refund</h4>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Damaged items beyond normal handling</li>
            <li>Missing items from your order</li>
            <li>Spoiled produce upon delivery</li>
            <li>Wrong items delivered</li>
            <li>Produce that doesn’t meet freshness standards</li>
          </ul>
          <h4 className="font-semibold mb-2">Not Eligible for Refund</h4>
          <ul className="list-disc list-inside text-gray-700">
            <li>Natural variations in size, shape, or color</li>
            <li>Minor cosmetic imperfections</li>
            <li>Change of mind after delivery</li>
            <li>Items spoiled after proper storage by customer</li>
            <li>Delivery delays due to customer unavailability</li>
            <li>Personal preference or taste issues</li>
          </ul>
        </>
      ),
    },
    {
      title: "2. Time Limits for Claims",
      content: (
        <>
          <div className="bg-orange-100 border border-orange-500 p-4 mb-4 rounded">
            <strong>Critical:</strong> Report issues within <span className="font-semibold">24 hours</span> of delivery. Late claims will not be eligible.
          </div>
          <h4 className="font-semibold mb-2">Reporting Process</h4>
          <ul className="list-disc list-inside text-gray-700">
            <li>Contact customer support immediately</li>
            <li>Provide photos of damaged/spoiled items if possible</li>
            <li>Include order number and delivery details</li>
            <li>Describe the problem clearly</li>
          </ul>
        </>
      ),
    },
    {
      title: "3. Order Cancellation Policy",
      content: (
        <>
          <h4 className="font-semibold mb-2">Before Order Processing</h4>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Orders can be cancelled free of charge</li>
            <li>Processing begins 1–2 hours after order placement</li>
            <li>Request cancellations via app or support</li>
            <li>Full refund issued to original payment method</li>
          </ul>
          <h4 className="font-semibold mb-2">After Order Processing</h4>
          <ul className="list-disc list-inside text-gray-700">
            <li>Cannot cancel once produce is packed</li>
            <li>Orders in transit cannot be cancelled</li>
            <li>Rescheduling options if delivery cannot be completed</li>
            <li>Emergency cancellations handled case-by-case</li>
          </ul>
        </>
      ),
    },
    {
      title: "4. Refund Process",
      content: (
        <>
          <h4 className="font-semibold mb-2">How to Request a Refund</h4>
          <ol className="list-decimal list-inside text-gray-700 mb-4">
            <li>Contact support within 24 hours of delivery</li>
            <li>Provide order number and issue description</li>
            <li>Submit photos if requested</li>
            <li>Support team reviews claim within 24 hours</li>
            <li>Refund processed to original payment method if approved</li>
          </ol>
          <h4 className="font-semibold mb-2">Refund Timelines</h4>
          <ul className="list-disc list-inside text-gray-700">
            <li>Claim review: 24–48 hours</li>
            <li>Refund processing: 5–7 business days</li>
            <li>Credit card refunds: 5–10 business days</li>
            <li>Bank transfer refunds: 3–5 business days</li>
          </ul>
        </>
      ),
    },
    {
      title: "5. Quality Guarantee Program",
      content: (
        <>
          <h4 className="font-semibold mb-2">Our Commitment</h4>
          <p className="text-gray-700 mb-2">
            FruitPack guarantees the freshness and quality of all produce delivered. Items are hand-selected and properly stored to ensure the best products.
          </p>
          <h4 className="font-semibold mb-2">Quality Standards</h4>
          <ul className="list-disc list-inside text-gray-700">
            <li>Produce checked for freshness before delivery</li>
            <li>Stored at appropriate temperatures</li>
            <li>Damaged/spoiled items removed before packing</li>
            <li>Storage and handling tips provided in app</li>
          </ul>
        </>
      ),
    },
    {
      title: "6. Contact Us for Refunds",
      content: (
        <>
          <p className="text-gray-700 mb-4">Contact us immediately to request a refund or report quality issues:</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="flex items-start gap-3">
              <span className="text-green-600 text-2xl">📧</span>
              <div>
                <p className="font-semibold mb-0">Email Support</p>
                <p className="text-gray-700 mb-0">support@fruitpack.co.za</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 text-2xl">📞</span>
              <div>
                <p className="font-semibold mb-0">Phone Support</p>
                <p className="text-gray-700 mb-0">+27 12 345 6789</p>
              </div>
            </div>
          </div>
          <div className="bg-green-100 border border-green-600 p-4 rounded">
            <strong>Tip:</strong> Have your order number ready and contact support within 24 hours for fastest processing.
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="font-sans text-gray-800">

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-orange-50 py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mx-auto mb-6 w-20 h-20 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-3xl">
            🔄
          </div>
          <h1 className="text-4xl font-bold mb-4">Refund & Cancellation Policy</h1>
          <p className="text-gray-700 mb-2">
            Our policy for refunds, cancellations, and quality guarantees for FruitPack orders.
          </p>
          <p className="text-gray-500 text-sm">Last updated: January 2024</p>
          <Link
            href="/"
            className="inline-block mt-4 px-6 py-3 border border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-100 transition"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* Key Feature Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: "⏰", title: "24-Hour Window", text: "Report issues within 24 hours of delivery for refund eligibility." },
            { icon: "⚠️", title: "Quality Issues Only", text: "Refunds apply to damaged, missing, or spoiled items only." },
            { icon: "✅", title: "Quality Guarantee", text: "We guarantee fresh, quality produce or provide replacements." },
            { icon: "⚡", title: "Fast Processing", text: "Approved refunds processed within 5–7 business days." },
          ].map((card, i) => (
            <div key={i} className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-3xl">
                {card.icon}
              </div>
              <h3 className="font-bold text-xl mb-2">{card.title}</h3>
              <p className="text-gray-700 text-sm">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Policy Sections */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          {policySections.map((section, i) => (
            <div key={i} className="bg-white shadow-lg rounded-xl overflow-hidden">
              <div className="bg-orange-100 px-6 py-3 border-b font-semibold">{section.title}</div>
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
              <li><Link href="#about" className="hover:text-white">About Us</Link></li>
              <li><Link href="#how-it-works" className="hover:text-white">How It Works</Link></li>
              <li><Link href="#contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-2 text-white">Legal</h6>
            <ul className="space-y-1">
              <li><Link href="/policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="/returnPolicy" className="hover:text-white">Refund Policy</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-2 text-white">Contact</h6>
            <ul className="space-y-1">
              <li>support@fruit-pack.com</li>
              <li>+27 69 733 1709</li>
              <li>Cape Town, South Africa</li>
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
