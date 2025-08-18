// pages/privacy.js

export default function PrivacyPolicy() {
    return (
        <div>
            {/* Header */}
            <nav className="bg-white border-b">
                <div className="container mx-auto flex justify-between items-center py-4">
                    <a className="flex items-center text-lg font-bold" href="index.html">
                        <div className="rounded-full flex items-center justify-center mr-2" 
                             style={{ width: '2rem', height: '2rem', background: 'linear-gradient(45deg, #22c55e, #16a34a)' }}>
                            <span className="text-white font-bold">F</span>
                        </div>
                        FruitPack
                    </a>
                    <a href="index.html" className="border border-gray-300 text-gray-700 rounded px-4 py-2 hover:bg-gray-100">
                        Back to Home
                    </a>
                </div>
            </nav>

            {/* Privacy Policy Content */}
            <main className="container mx-auto py-10">
                <section className="text-center mb-10">
                    <div className="mx-auto mb-4">
                        <div className="rounded-full flex items-center justify-center bg-green-100" style={{ width: '4rem', height: '4rem' }}>
                            <i className="bi bi-shield-check text-green-600" style={{ fontSize: '2rem' }}></i>
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
                    <p className="text-lg text-gray-600">
                        Your privacy is important to us. This policy explains how FruitPack collects, uses, and protects your personal information.
                    </p>
                    <p className="text-gray-600">
                        <small>Last updated: January 2024</small>
                    </p>
                </section>

                {/* Key Points Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                    <div className="bg-white shadow-md rounded-lg text-center p-4">
                        <i className="bi bi-lock-fill text-green-600 mb-3" style={{ fontSize: '2rem' }}></i>
                        <h5 className="font-semibold">POPIA Compliant</h5>
                        <p className="text-gray-600">
                            We comply with South Africa's Protection of Personal Information Act (POPIA).
                        </p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg text-center p-4">
                        <i className="bi bi-database-fill text-green-600 mb-3" style={{ fontSize: '2rem' }}></i>
                        <h5 className="font-semibold">Secure Storage</h5>
                        <p className="text-gray-600">
                            Your data is encrypted and stored securely on protected servers.
                        </p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg text-center p-4">
                        <i className="bi bi-eye-fill text-green-600 mb-3" style={{ fontSize: '2rem' }}></i>
                        <h5 className="font-semibold">Transparent</h5>
                        <p className="text-gray-600">
                            We're transparent about what data we collect and how we use it.
                        </p>
                    </div>
                </div>

                {/* Detailed Policy */}
                <div className="space-y-4">
                    <div className="bg-white shadow-md rounded-lg">
                        <div className="border-b p-4">
                            <h2 className="text-lg font-semibold">1. Information We Collect</h2>
                        </div>
                        <div className="p-4">
                            <h4 className="font-semibold">Personal Information</h4>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Name, email address, and phone number</li>
                                <li>Delivery address and contact details</li>
                                <li>Account preferences and order history</li>
                                <li>Communication records with customer support</li>
                            </ul>
                            
                            <h4 className="font-semibold">Technical Information</h4>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Device information and mobile identifiers</li>
                                <li>App usage data and analytics</li>
                                <li>Location data (with your consent) for delivery purposes</li>
                                <li>Log files and crash reports</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg">
                        <div className="border-b p-4">
                            <h2 className="text-lg font-semibold">2. How We Use Your Information</h2>
                        </div>
                        <div className="p-4">
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Process and fulfill your orders</li>
                                <li>Communicate about your deliveries and account</li>
                                <li>Provide customer support and resolve issues</li>
                                <li>Improve our app and services</li>
                                <li>Send promotional communications (with your consent)</li>
                                <li>Comply with legal obligations</li>
                                <li>Prevent fraud and ensure app security</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg">
                        <div className="border-b p-4">
                            <h2 className="text-lg font-semibold">3. Payment Information Security</h2>
                        </div>
                        <div className="p-4">
                            <p className="text-gray-600">
                                <strong>Paystack Integration:</strong> All payment information is processed securely through Paystack, 
                                our trusted payment partner. FruitPack does not store or have access to your full credit card details.
                            </p>
                            
                            <h4 className="font-semibold">Security Measures</h4>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>End-to-end encryption for payment transactions</li>
                                <li>PCI DSS compliance through Paystack</li>
                                <li>Secure tokenization of payment methods</li>
                                <li>Regular security audits and monitoring</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg">
                        <div className="border-b p-4">
                            <h2 className="text-lg font-semibold">4. POPIA Compliance</h2>
                        </div>
                        <div className="p-4">
                            <p className="text-gray-600">
                                FruitPack is committed to complying with South Africa's Protection of Personal Information Act (POPIA). 
                                We ensure that your personal information is:
                            </p>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Processed lawfully and in a reasonable manner</li>
                                <li>Collected for specific, explicitly defined purposes</li>
                                <li>Adequate, relevant, and not excessive</li>
                                <li>Accurate and kept up to date</li>
                                <li>Not retained longer than necessary</li>
                                <li>Secured by appropriate safeguards</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg">
                        <div className="border-b p-4">
                            <h2 className="text-lg font-semibold">5. Data Sharing and Disclosure</h2>
                        </div>
                        <div className="p-4">
                            <p className="text-gray-600">
                                We do not sell your personal information. We may share your information with:
                            </p>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Delivery partners to fulfill your orders</li>
                                <li>Payment processors (Paystack) for transaction processing</li>
                                <li>Service providers who assist with app operations</li>
                                <li>Legal authorities when required by law</li>
                                <li>Business partners with your explicit consent</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg">
                        <div className="border-b p-4">
                            <h2 className="text-lg font-semibold">6. Your Rights</h2>
                        </div>
                        <div className="p-4">
                            <p className="text-gray-600">Under POPIA, you have the right to:</p>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Access your personal information</li>
                                <li>Correct or update inaccurate information</li>
                                <li>Delete your personal information (subject to legal requirements)</li>
                                <li>Object to certain processing activities</li>
                                <li>Withdraw consent where processing is based on consent</li>
                                <li>Lodge a complaint with the Information Regulator</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg">
                        <div className="border-b p-4">
                            <h2 className="text-lg font-semibold">7. Contact Us</h2>
                        </div>
                        <div className="p-4">
                            <p className="text-gray-600">
                                If you have questions about this privacy policy or wish to exercise your rights, please contact us:
                            </p>
                            <div className="flex flex-col md:flex-row">
                                <div className="flex items-center mb-2 md:mr-4">
                                    <i className="bi bi-envelope text-green-600 mr-2"></i>
                                    <span className="text-gray-600">support@fruitpack.co.za</span>
                                </div>
                                <div className="flex items-center mb-2">
                                    <i className="bi bi-telephone text-green-600 mr-2"></i>
                                    <span className="text-gray-600">+27 12 345 6789</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center mb-3 md:mb-0">
                        <div className="rounded-full flex items-center justify-center mr-2" 
                             style={{ width: '1.5rem', height: '1.5rem', background: 'linear-gradient(45deg, #22c55e, #16a34a)' }}>
                            <span className="text-white font-bold text-xs">F</span>
                        </div>
                        <span className="text-lg">FruitPack</span>
                    </div>
                    <div className="flex gap-4 text-sm">
                        <a href="privacy-policy.html" className="hover:underline">Privacy Policy</a>
                        <a href="terms.html" className="hover:underline">Terms & Conditions</a>
                        <a href="refund-policy.html" className="hover:underline">Refund Policy</a>
                    </div>
                </div>
                <hr className="my-3 border-gray-700" />
                <div className="text-center text-gray-400 text-sm">
                    <p className="mb-0">&copy; 2025 FruitPack. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}