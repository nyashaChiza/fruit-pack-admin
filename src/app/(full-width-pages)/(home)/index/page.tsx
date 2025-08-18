// src/app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans">

      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          <a href="/" className="flex items-center text-xl font-bold">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center mr-2"
              style={{ background: 'linear-gradient(45deg, #22c55e, #16a34a)' }}
            >
              <span className="text-white font-bold">F</span>
            </div>
            FruitPack
          </a>

          <nav className="space-x-6 hidden md:flex">
            <a href="#about" className="hover:text-green-600">About</a>
            <a href="/signin" className="hover:text-green-600">Dashboard</a>
            <a href="#contact" className="hover:text-green-600">Contact</a>
            <a
              href="#download"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Download App
            </a>
          </nav>
        </div>
      </header>

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
              <div className="flex items-center gap-2">
                ✅ Same-day delivery
              </div>
              <div className="flex items-center gap-2">
                ✅ Fresh guarantee
              </div>
              <div className="flex items-center gap-2">
                ✅ Secure payments
              </div>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Fruit-Pack</h2>
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

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center mr-2"
                style={{ background: 'linear-gradient(45deg, #22c55e, #16a34a)' }}
              >
                <span className="text-white font-bold">F</span>
              </div>
              <span className="font-bold text-lg">FruitPack</span>
            </div>
            <p className="text-gray-400 text-sm">
              Fresh fruits and vegetables delivered to your door across South Africa.
            </p>
          </div>

          <div>
            <h6 className="font-semibold mb-3">Company</h6>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#how-it-works" className="hover:text-white">How It Works</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h6 className="font-semibold mb-3">Legal</h6>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="/policy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="/returnPolicy" className="hover:text-white">Refund Policy</a></li>
            </ul>
          </div>

          <div>
            <h6 className="font-semibold mb-3">Contact</h6>
            <p className="text-gray-400 text-sm mb-2">support@fruitpack.co.za</p>
            <p className="text-gray-400 text-sm mb-2">+27 12 345 6789</p>
            <p className="text-gray-400 text-sm">Cape Town, South Africa</p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">&copy; 2025 FruitPack. All rights reserved.</div>
      </footer>
    </div>
  );
}
