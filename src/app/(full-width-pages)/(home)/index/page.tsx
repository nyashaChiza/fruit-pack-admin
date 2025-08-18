// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/website/Header";

export default function Home() {
  return (
    <div className="font-sans text-gray-800">

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-green-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-extrabold mb-4 leading-tight text-gray-900">
              Fresh fruits & veggies{" "}
              <span className="text-green-600">delivered to your door</span>
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Skip the grocery store queue. Get farm-fresh produce delivered straight to your home with FruitPack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#download"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-green-700 transition"
              >
                Download the App
              </Link>
              <Link
                href="#about"
                className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-green-100 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative w-full h-80 lg:h-96">
            <div className="absolute inset-0 bg-green-600 rounded-3xl transform rotate-3"></div>
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/1300975/pexels-photo-1300975.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Fresh fruits and vegetables"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">About FruitPack</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            FruitPack is South Africa's premier mobile app for fresh fruit and vegetable delivery. We connect you directly with local farmers to bring the freshest produce to your doorstep.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              🛒
            </div>
            <h3 className="font-bold text-xl mb-2">Easy Ordering</h3>
            <p className="text-gray-600">Browse our catalog of fresh produce and add items to your cart with just a few taps.</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              ✅
            </div>
            <h3 className="font-bold text-xl mb-2">Quality Guaranteed</h3>
            <p className="text-gray-600">We hand-pick every item to ensure you receive only the freshest, highest-quality produce.</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              🚚
            </div>
            <h3 className="font-bold text-xl mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Same-day delivery available in major cities across South Africa.</p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-green-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Get the App</h2>
        <p className="mb-8">Available on both Google Play Store and Apple App Store. Sign up to be notified when we launch!</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a className="bg-black px-6 py-3 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-800 transition">
            📱 <span className="text-left"><span className="text-xs block">Download on the</span><span className="font-bold block">Google Play</span></span>
          </a>
          <a className="bg-black px-6 py-3 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-800 transition">
            🍎 <span className="text-left"><span className="text-xs block">Download on the</span><span className="font-bold block">App Store</span></span>
          </a>
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
              <li>support@fruitpack.com</li>
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
