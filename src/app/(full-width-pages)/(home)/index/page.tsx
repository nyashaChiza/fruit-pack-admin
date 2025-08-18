// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/website/Header";

export default function Home() {
  return (
    <div className="font-sans">

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-100 to-white py-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">

          {/* Text Content */}
          <div className="lg:w-1/2">
            <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full mb-4 font-medium text-sm">
              🚀 Now Available in South Africa
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Fresh fruits and veggies <span className="text-green-600">delivered to your door</span>
            </h1>
            <p className="text-gray-700 mb-6">
              Skip the grocery store queue. Get farm-fresh produce delivered straight to your home with FruitPack&apos;s mobile app.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href="#download"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                📱 Download the App
              </a>
              <a
                href="#about"
                className="border border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
              >
                Learn More
              </a>
            </div>

            <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
              <div className="flex items-center gap-2">✅ Same-day delivery</div>
              <div className="flex items-center gap-2">✅ Fresh guarantee</div>
              <div className="flex items-center gap-2">✅ Secure payments</div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-green-600 rounded-3xl rotate-6 -z-10"></div>
            <div className="bg-white rounded-3xl p-4 shadow-lg">
              <Image
                src="https://images.pexels.com/photos/1300975/pexels-photo-1300975.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Fresh fruits and vegetables"
                width={600}
                height={320}
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About FruitPack</h2>
          <p className="text-gray-700 text-lg mb-12">
            FruitPack is South Africa&apos;s premier mobile app for fresh fruit and vegetable delivery.
            We connect you directly with local farmers and suppliers to bring the freshest produce
            to your doorstep, saving you time while supporting local agriculture.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-green-600 text-4xl mb-4">🛒</div>
              <h3 className="font-semibold mb-2">Easy Ordering</h3>
              <p className="text-gray-600 text-sm">
                Browse our extensive catalog of fresh produce and add items to your cart with just a few taps.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-green-600 text-4xl mb-4">✅</div>
              <h3 className="font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600 text-sm">
                We hand-pick every item to ensure you receive only the freshest, highest-quality produce.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-green-600 text-4xl mb-4">🚚</div>
              <h3 className="font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">
                Same-day delivery available in major cities across South Africa. Fresh produce, on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-green-100 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">How FruitPack Works</h2>
          <p className="text-gray-700 text-lg mb-12">Get fresh produce delivered in three simple steps</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-green-600 text-4xl mb-4">1️⃣</div>
              <h3 className="font-semibold mb-2">Browse & Order</h3>
              <p className="text-gray-600 text-sm">
                Download the FruitPack app and browse our selection of fresh fruits and vegetables.
                Add your favorites to the cart and customize your order.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-green-600 text-4xl mb-4">2️⃣</div>
              <h3 className="font-semibold mb-2">Secure Checkout</h3>
              <p className="text-gray-600 text-sm">
                Complete your purchase using our secure payment system powered by Paystack.
                Your payment information is encrypted and protected.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-green-600 text-4xl mb-4">3️⃣</div>
              <h3 className="font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">
                Sit back and relax while we prepare and deliver your fresh produce straight to your door.
                Track your order in real-time through the app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-700 text-lg mb-12">Have questions? We&apos;re here to help!</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-green-600 text-4xl mb-4">✉️</div>
              <h3 className="font-semibold mb-2">Email Support</h3>
              <p className="text-gray-600 text-sm">
                <a href="mailto:support@fruitpack.co.za" className="hover:underline">support@fruitpack.co.za</a>
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-green-600 text-4xl mb-4">📞</div>
              <h3 className="font-semibold mb-2">Phone Support</h3>
              <p className="text-gray-600 text-sm">
                <a href="tel:+27123456789" className="hover:underline">+27 12 345 6789</a>
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-green-600 text-4xl mb-4">📍</div>
              <h3 className="font-semibold mb-2">Office Address</h3>
              <p className="text-gray-600 text-sm">
                123 Business Street<br />
                Cape Town, 8001<br />
                South Africa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section id="download" className="py-20 bg-green-600 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Coming Soon to Your Phone</h2>
          <p className="mb-8 text-gray-100">
            FruitPack will be available on both Google Play Store and Apple App Store.
            Sign up to be notified when we launch!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="bg-black px-4 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition"
            >
              📱 <span className="text-left"><span className="text-xs block">Download on the</span><span className="font-bold block">Google Play</span></span>
            </a>
            <a
              href="#"
              className="bg-black px-4 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition"
            >
              🍎 <span className="text-left"><span className="text-xs block">Download on the</span><span className="font-bold block">App Store</span></span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center mr-2 bg-gradient-to-br from-green-500 to-green-700">
                F
              </div>
              <span className="font-bold">FruitPack</span>
            </div>
            <p className="text-gray-400 text-sm">Fresh fruits and vegetables delivered to your door across South Africa.</p>
          </div>
          <div>
            <h6 className="font-semibold mb-2">Company</h6>
            <ul className="text-gray-400 text-sm space-y-1">
              <li><Link href="#about"><a className="hover:text-white">About Us</a></Link></li>
              <li><Link href="#how-it-works"><a className="hover:text-white">How It Works</a></Link></li>
              <li><Link href="#contact"><a className="hover:text-white">Contact</a></Link></li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-2">Legal</h6>
            <ul className="text-gray-400 text-sm space-y-1">
              <li><Link href="/policy"><a className="hover:text-white">Privacy Policy</a></Link></li>
              <li><Link href="/terms"><a className="hover:text-white">Terms & Conditions</a></Link></li>
              <li><Link href="/returnPolicy"><a className="hover:text-white">Refund Policy</a></Link></li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-2">Contact</h6>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>support@fruitpack.co.za</li>
              <li>+27 12 345 6789</li>
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
