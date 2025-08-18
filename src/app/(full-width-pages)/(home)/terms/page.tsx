// pages/terms.js

export default function Terms() {
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

            {/* Terms Content */}
            <main className="container mx-auto py-10">
                <section className="text-center mb-10">
                    <div className="mx-auto mb-4">
                        <div className="rounded-full flex items-center justify-center bg-blue-100" style={{ width: '4rem', height: '4rem' }}>
                            <i className="bi bi-file-text text-blue-500" style={{ fontSize: '2rem' }}></i>
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Terms & Conditions</h1>
                    <p className="text-lg text-gray-600">These terms govern your use of the FruitPack mobile application and services.</p>
                    <p className="text-gray-600">
                        <small>Last updated: January 2024</small>
                    </p>
                </section>

                {/* Key Points Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                    <div className="bg-white shadow-md rounded-lg text-center p-4">
                        <i className="bi bi-balance text-blue-500 mb-3" style={{ fontSize: '2rem' }}></i>
                        <h5 className="font-semibold">Fair Terms</h5>
                        <p className="text-gray-600">Clear, reasonable terms that protect both users and FruitPack.</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg text-center p-4">
                        <i className="bi bi-shield-check text-blue-500 mb-3" style={{ fontSize: '2rem' }}></i>
                        <h5 className="font-semibold">User Protection</h5>
                        <p className="text-gray-600">Your rights and protections when using our service.</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg text-center p-4">
                        <i className="bi bi-exclamation-triangle text-blue-500 mb-3" style={{ fontSize: '2rem' }}></i>
                        <h5 className="font-semibold">Clear Obligations</h5>
                        <p className="text-gray-600">Transparent responsibilities for all parties involved.</p>
                    </div>
                </div>

                {/* Detailed Terms */}
                <div className="space-y-4">
                    <div className="bg-white shadow-md rounded-lg">
                        <div className="border-b p-4">
                            <h2 className="text-lg font-semibold">1. Acceptance of Terms</h2>
                        </div>
                        <div className="p-4">
                            <p className="text-gray-600">
                                By downloading, installing, or using the FruitPack mobile application, you agree to be bound by these 
                                Terms and Conditions. If you do not agree to these terms, please do not use our services. These terms 
                                apply to all users of the FruitPack app within South Africa.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg">
                        <div className="border-b p-4">
                            <h2 className="text-lg font-semibold">2. Description of Service</h2>
                        </div>
                        <div className="p-4">
                            <p className="text-gray-600">FruitPack is a mobile application that provides:</p>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>A platform to order fresh fruits and vegetables</li>
                                <li>Delivery services for fresh produce to your specified address</li>
                                <li>Order tracking and customer support</li>
                                <li>Account management and order history</li>
                            </ul>
                            <div className="bg-blue-100 p-3 mt-4 rounded">
                                <strong>Important:</strong> FruitPack only provides delivery of fresh produce. We do not sell or deliver 
                                processed foods, beverages, or non-food items through this platform.
                            </div>
                        </div>
                    </div>

                    {/* Additional sections for User Accounts, Orders and Payments, Delivery Services, etc. go here */}
                    
                    <div className="bg-white shadow-md rounded-lg">
                        <div className="border-b p-4">
                            <h2 className="text-lg font-semibold">9. Contact Information</h2>
                        </div>
                        <div className="p-4">
                            <p className="text-gray-600">For questions about these Terms & Conditions, please contact:</p>
                            <div className="flex justify-between">
                                <p className="text-gray-600"><strong>Email:</strong> support@fruitpack.co.za</p>
                                <p className="text-gray-600"><strong>Phone:</strong> +27 12 345 6789</p>
                            </div>
                            <p className="text-gray-600"><strong>Address:</strong> 123 Business Street, Cape Town, 8001, South Africa</p>
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