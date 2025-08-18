// pages/index.js
import Image from "next/image";

export default function Home() {
    return (
        <div>
            {/* Header */}
            <nav className="bg-white sticky-top border-b">
                <div className="container mx-auto flex justify-between items-center py-4">
                    <a className="flex items-center text-lg font-bold" href="index.html">
                        <div className="rounded-full flex items-center justify-center mr-2"
                            style={{ width: '2rem', height: '2rem', background: 'linear-gradient(45deg, #22c55e, #16a34a)' }}>
                            <span className="text-white font-bold">F</span>
                        </div>
                        FruitPack
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#how-it-works">How It Works</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn bg-green-600 text-white ms-2" href="#download">Download App</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-section bg-gradient-to-br from-green-100 to-white py-20">
                <div className="container mx-auto">
                    <div className="row items-center">
                        <div className="col-lg-6">
                            <div className="mb-4">
                                <span className="badge bg-light text-success px-3 py-2 mb-3">
                                    <i className="bi bi-rocket-takeoff me-1"></i>
                                    Now Available in South Africa
                                </span>
                                <h1 className="text-4xl font-bold text-dark mb-4">
                                    Fresh fruits and veggies
                                    <span className="text-green-600">delivered to your door</span>
                                </h1>
                                <p className="text-lg text-muted mb-4">
                                    Skip the grocery store queue. Get farm-fresh produce delivered straight to your home with FruitPack's mobile app.
                                </p>
                            </div>

                            <div className="flex flex-column flex-sm-row gap-3 mb-4">
                                <a href="#download" className="bg-green-600 text-white btn-lg px-4">
                                    <i className="bi bi-phone me-2"></i>
                                    Download the App
                                </a>
                                <a href="#about" className="border border-green-600 text-green-600 btn-lg px-4">
                                    Learn More
                                </a>
                            </div>

                            <div className="flex flex-wrap gap-4 text-muted small">
                                <div className="flex items-center">
                                    <i className="bi bi-check-circle-fill text-green-600 me-2"></i>
                                    Same-day delivery
                                </div>
                                <div className="flex items-center">
                                    <i className="bi bi-check-circle-fill text-green-600 me-2"></i>
                                    Fresh guarantee
                                </div>
                                <div className="flex items-center">
                                    <i className="bi bi-check-circle-fill text-green-600 me-2"></i>
                                    Secure payments
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-5 mt-lg-0">
                            <div className="relative">
                                <div className="absolute inset-0 bg-green-600 rounded-3xl transform rotate-6"></div>
                                <div className="bg-white rounded-3xl p-8 shadow-lg">
                                    <Image
                                        src="https://images.pexels.com/photos/1300975/pexels-photo-1300975.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        alt="Fresh fruits and vegetables"
                                        width={600}           // width in pixels (required)
                                        height={320}          // height in pixels (required)
                                        className="w-full h-80 object-cover rounded-lg"
                                    />
                                    <div className="absolute top-[-1rem] right-[-1rem] w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white">
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section id="about" className="py-5 bg-white">
                <div className="container mx-auto">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center mb-5">
                            <h2 className="text-5xl font-bold text-dark mb-4">About FruitPack</h2>
                            <p className="text-lg text-muted">
                                FruitPack is South Africa&apos;s premier mobile app for fresh fruit and vegetable delivery.
                                We connect you directly with local farmers and suppliers to bring the freshest produce
                                to your doorstep, saving you time while supporting local agriculture.
                            </p>
                        </div>
                    </div>

                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="bg-white border-0 shadow-sm">
                                <div className="card-body text-center p-4">
                                    <div className="feature-icon bg-green-100 rounded-full mx-auto mb-3">
                                        <i className="bi bi-cart3 text-green-600" style={{ fontSize: '2rem' }}></i>
                                    </div>
                                    <h5 className="card-title text-dark">Easy Ordering</h5>
                                    <p className="card-text text-muted">
                                        Browse our extensive catalog of fresh produce and add items to your cart with just a few taps.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="bg-white border-0 shadow-sm">
                                <div className="card-body text-center p-4">
                                    <div className="feature-icon bg-green-100 rounded-full mx-auto mb-3">
                                        <i className="bi bi-check-circle text-green-600" style={{ fontSize: '2rem' }}></i>
                                    </div>
                                    <h5 className="card-title text-dark">Quality Guaranteed</h5>
                                    <p className="card-text text-muted">
                                        We hand-pick every item to ensure you receive only the freshest, highest-quality produce.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="bg-white border-0 shadow-sm">
                                <div className="card-body text-center p-4">
                                    <div className="feature-icon bg-green-100 rounded-full mx-auto mb-3">
                                        <i className="bi bi-truck text-green-600" style={{ fontSize: '2rem' }}></i>
                                    </div>
                                    <h5 className="card-title text-dark">Fast Delivery</h5>
                                    <p className="card-text text-muted">
                                        Same-day delivery available in major cities across South Africa. Fresh produce, on time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="py-5 bg-gradient-to-br from-green-100 to-white">
                <div className="container mx-auto">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-8 text-center">
                            <h2 className="text-5xl font-bold text-dark mb-4">How FruitPack Works</h2>
                            <p className="text-lg text-muted">Get fresh produce delivered in three simple steps</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 text-center mb-4">
                            <div className="step-number bg-green-600 text-white rounded-full mx-auto mb-3" style={{ width: '4rem', height: '4rem' }}>1</div>
                            <h5 className="font-bold text-dark mb-3">Browse & Order</h5>
                            <p className="text-muted mb-4">
                                Download the FruitPack app and browse our selection of fresh fruits and vegetables.
                                Add your favorites to the cart and customize your order.
                            </p>
                            <i className="bi bi-cart3 text-green-600" style={{ fontSize: '3rem', opacity: 0.3 }}></i>
                        </div>

                        <div className="col-md-4 text-center mb-4">
                            <div className="step-number bg-green-600 text-white rounded-full mx-auto mb-3" style={{ width: '4rem', height: '4rem' }}>2</div>
                            <h5 className="font-bold text-dark mb-3">Secure Checkout with Paystack</h5>
                            <p className="text-muted mb-4">
                                Complete your purchase using our secure payment system powered by Paystack.
                                Your payment information is encrypted and protected.
                            </p>
                            <i className="bi bi-credit-card text-green-600" style={{ fontSize: '3rem', opacity: 0.3 }}></i>
                        </div>

                        <div className="col-md-4 text-center mb-4">
                            <div className="step-number bg-green-600 text-white rounded-full mx-auto mb-3" style={{ width: '4rem', height: '4rem' }}>3</div>
                            <h5 className="font-bold text-dark mb-3">Fast Delivery</h5>
                            <p className="text-muted mb-4">
                                Sit back and relax while we prepare and deliver your fresh produce straight to your door.
                                Track your order in real-time through the app.
                            </p>
                            <i className="bi bi-truck text-green-600" style={{ fontSize: '3rem', opacity: 0.3 }}></i>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-5 bg-white">
                <div className="container mx-auto">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-8 text-center">
                            <h2 className="text-5xl font-bold text-dark mb-4">Get in Touch</h2>
                            <p className="text-lg text-muted">Have questions? We&apos;re here to help!</p>
                        </div>
                    </div>

                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="bg-white border-0 shadow-sm">
                                <div className="card-body text-center p-4">
                                    <div className="feature-icon bg-green-100 rounded-full mx-auto mb-3">
                                        <i className="bi bi-envelope text-green-600" style={{ fontSize: '2rem' }}></i>
                                    </div>
                                    <h5 className="card-title text-dark">Email Support</h5>
                                    <p className="card-text">
                                        <a href="mailto:support@fruitpack.co.za" className="text-muted">
                                            support@fruitpack.co.za
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="bg-white border-0 shadow-sm">
                                <div className="card-body text-center p-4">
                                    <div className="feature-icon bg-green-100 rounded-full mx-auto mb-3">
                                        <i className="bi bi-telephone text-green-600" style={{ fontSize: '2rem' }}></i>
                                    </div>
                                    <h5 className="card-title text-dark">Phone Support</h5>
                                    <p className="card-text">
                                        <a href="tel:+27123456789" className="text-muted">
                                            +27 12 345 6789
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="bg-white border-0 shadow-sm">
                                <div className="card-body text-center p-4">
                                    <div className="feature-icon bg-green-100 rounded-full mx-auto mb-3">
                                        <i className="bi bi-geo-alt text-green-600" style={{ fontSize: '2rem' }}></i>
                                    </div>
                                    <h5 className="card-title text-dark">Office Address</h5>
                                    <p className="card-text text-muted">
                                        123 Business Street<br />
                                        Cape Town, 8001<br />
                                        South Africa
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* App Download Section */}
            <section id="download" className="py-5 bg-green-600 text-white">
                <div className="container mx-auto">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                            <h2 className="text-5xl font-bold mb-4">Coming Soon to Your Phone</h2>
                            <p className="text-lg mb-5" style={{ color: 'rgba(255,255,255,0.9)' }}>
                                FruitPack will be available on both Google Play Store and Apple App Store.
                                Sign up to be notified when we launch!
                            </p>

                            <div className="flex flex-column flex-sm-row gap-3 justify-content-center">
                                <a href="#" className="app-store-btn bg-black text-white rounded-lg p-3 flex items-center">
                                    <div className="me-3" style={{ fontSize: '1.5rem' }}>📱</div>
                                    <div className="text-start">
                                        <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>Download on the</div>
                                        <div className="font-bold">Google Play</div>
                                    </div>
                                </a>

                                <a href="#" className="app-store-btn bg-black text-white rounded-lg p-3 flex items-center">
                                    <div className="me-3">
                                        <i className="bi bi-apple" style={{ fontSize: '2rem' }}></i>
                                    </div>
                                    <div className="text-start">
                                        <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>Download on the</div>
                                        <div className="font-bold">App Store</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-5">
                <div className="container mx-auto">
                    <div className="row g-4">
                        <div className="col-md-3">
                            <div className="d-flex align-items-center mb-3">
                                <div className="rounded-full flex items-center justify-center mr-2"
                                    style={{ width: '2rem', height: '2rem', background: 'linear-gradient(45deg, #22c55e, #16a34a)' }}>
                                    <span className="text-white font-bold">F</span>
                                </div>
                                <span className="h5 mb-0 text-white">FruitPack</span>
                            </div>
                            <p className="text-muted">
                                Fresh fruits and vegetables delivered to your door across South Africa.
                            </p>
                        </div>

                        <div className="col-md-3">
                            <h6 className="text-white mb-3">Company</h6>
                            <ul className="list-unstyled text-muted">
                                <li className="mb-2"><a href="#about">About Us</a></li>
                                <li className="mb-2"><a href="#how-it-works">How It Works</a></li>
                                <li className="mb-2"><a href="#contact">Contact</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3">
                            <h6 className="text-white mb-3">Legal</h6>
                            <ul className="list-unstyled text-muted">
                                <li className="mb-2"><a href="privacy-policy.html">Privacy Policy</a></li>
                                <li className="mb-2"><a href="terms.html">Terms & Conditions</a></li>
                                <li className="mb-2"><a href="refund-policy.html">Refund Policy</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3">
                            <h6 className="text-white mb-3">Contact</h6>
                            <ul className="list-unstyled text-muted">
                                <li className="mb-2">support@fruitpack.co.za</li>
                                <li className="mb-2">+27 12 345 6789</li>
                                <li className="mb-2">Cape Town, South Africa</li>
                            </ul>
                        </div>
                    </div>

                    <hr className="my-4 border-gray-700" />

                    <div className="text-center text-muted">
                        <p className="mb-0">&copy; 2025 FruitPack. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}