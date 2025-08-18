// pages/refund-cancellation.js

export default function RefundCancellationPolicy() {
    return (
        <div>
            {/* Header */}
            <nav className="bg-white border-b sticky-top">
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

            {/* Refund Policy Content */}
            <main className="container mx-auto py-10">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        {/* Header Section */}
                        <div className="text-center mb-5">
                            <div className="feature-icon mx-auto mb-4" style={{ backgroundColor: '#fed7aa' }}>
                                <i className="bi bi-arrow-clockwise text-orange-500" style={{ fontSize: '2rem' }}></i>
                            </div>
                            <h1 className="text-4xl font-bold text-dark mb-4">Refund & Cancellation Policy</h1>
                            <p className="text-lg text-muted">
                                Our policy for refunds, cancellations, and quality guarantees for FruitPack orders.
                            </p>
                            <p className="text-muted">
                                <small>Last updated: January 2024</small>
                            </p>
                        </div>

                        {/* Key Points Cards */}
                        <div className="row g-4 mb-5">
                            <div className="col-md-3">
                                <div className="bg-white shadow-sm border-0 h-100 text-center">
                                    <div className="card-body p-4">
                                        <i className="bi bi-clock text-orange-500 mb-3" style={{ fontSize: '2rem' }}></i>
                                        <h6 className="card-title">24-Hour Window</h6>
                                        <p className="card-text text-muted small">
                                            Report issues within 24 hours of delivery for refund eligibility.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-3">
                                <div className="bg-white shadow-sm border-0 h-100 text-center">
                                    <div className="card-body p-4">
                                        <i className="bi bi-exclamation-circle text-orange-500 mb-3" style={{ fontSize: '2rem' }}></i>
                                        <h6 className="card-title">Quality Issues Only</h6>
                                        <p className="card-text text-muted small">
                                            Refunds apply to damaged, missing, or spoiled items only.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-3">
                                <div className="bg-white shadow-sm border-0 h-100 text-center">
                                    <div className="card-body p-4">
                                        <i className="bi bi-check-circle text-orange-500 mb-3" style={{ fontSize: '2rem' }}></i>
                                        <h6 className="card-title">Quality Guarantee</h6>
                                        <p className="card-text text-muted small">
                                            We guarantee fresh, quality produce or provide replacements.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-3">
                                <div className="bg-white shadow-sm border-0 h-100 text-center">
                                    <div className="card-body p-4">
                                        <i className="bi bi-arrow-clockwise text-orange-500 mb-3" style={{ fontSize: '2rem' }}></i>
                                        <h6 className="card-title">Fast Processing</h6>
                                        <p className="card-text text-muted small">
                                            Approved refunds processed within 5-7 business days.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Detailed Policy */}
                        <div className="policy-content">
                            <div className="bg-white shadow-sm mb-4">
                                <div className="card-header">
                                    <h2 className="h4 mb-0">1. Refund Eligibility</h2>
                                </div>
                                <div className="card-body">
                                    <h4>Eligible for Refund</h4>
                                    <ul className="text-muted">
                                        <li><strong>Damaged items:</strong> Produce that arrives significantly damaged or bruised beyond normal handling</li>
                                        <li><strong>Missing items:</strong> Items that were ordered and paid for but not delivered</li>
                                        <li><strong>Spoiled produce:</strong> Items that are clearly spoiled or past their prime upon delivery</li>
                                        <li><strong>Wrong items:</strong> Items that differ significantly from what was ordered</li>
                                        <li><strong>Quality issues:</strong> Produce that doesn&apos;t meet our published freshness standards</li>
                                    </ul>
                                    
                                    <h4>NOT Eligible for Refund</h4>
                                    <ul className="text-muted">
                                        <li>Natural variations in size, shape, or color of produce</li>
                                        <li>Minor cosmetic imperfections that don&apos;t affect quality</li>
                                        <li>Change of mind after delivery is completed</li>
                                        <li>Items that spoil after proper delivery due to customer storage</li>
                                        <li>Delivery delays due to customer unavailability</li>
                                        <li>Personal preference or taste-related issues</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white shadow-sm mb-4">
                                <div className="card-header">
                                    <h2 className="h4 mb-0">2. Time Limits for Claims</h2>
                                </div>
                                <div className="card-body">
                                    <div className="bg-orange-light border border-orange-500 p-3 mb-4">
                                        <h5 className="alert-heading">Critical Timing Requirement</h5>
                                        <p className="mb-0">
                                            You must report any issues with your order within <strong>24 hours</strong> of delivery. 
                                            Claims submitted after this period will not be eligible for refund.
                                        </p>
                                    </div>
                                    
                                    <h4>Reporting Process</h4>
                                    <ul className="text-muted">
                                        <li>Contact customer support immediately upon discovering issues</li>
                                        <li>Provide photos of damaged or spoiled items when possible</li>
                                        <li>Include your order number and delivery details</li>
                                        <li>Describe the specific problem clearly</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white shadow-sm mb-4">
                                <div className="card-header">
                                    <h2 className="h4 mb-0">3. Order Cancellation Policy</h2>
                                </div>
                                <div className="card-body">
                                    <h4>Before Order Processing</h4>
                                    <ul className="text-muted">
                                        <li>Orders can be cancelled free of charge if not yet processed</li>
                                        <li>Processing typically begins within 1-2 hours of order placement</li>
                                        <li>Cancellations must be requested through the app or customer support</li>
                                        <li>Full refund will be issued to the original payment method</li>
                                    </ul>
                                    
                                    <h4>After Order Processing</h4>
                                    <ul className="text-muted">
                                        <li>Once produce is selected and packed, cancellation is not possible</li>
                                        <li>Orders in transit cannot be cancelled</li>
                                        <li>If delivery cannot be completed, rescheduling options are available</li>
                                        <li>Emergency cancellations may be considered on a case-by-case basis</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white shadow-sm mb-4">
                                <div className="card-header">
                                    <h2 className="h4 mb-0">4. Refund Process</h2>
                                </div>
                                <div className="card-body">
                                    <h4>How to Request a Refund</h4>
                                    <ol className="text-muted">
                                        <li>Contact our customer support team within 24 hours of delivery</li>
                                        <li>Provide your order number and describe the issue</li>
                                        <li>Submit photos if requested for damaged or spoiled items</li>
                                        <li>Our team will review your claim within 24 hours</li>
                                        <li>If approved, refund will be processed to your original payment method</li>
                                    </ol>
                                    
                                    <h4>Refund Timelines</h4>
                                    <ul className="text-muted">
                                        <li>Claim review: 24-48 hours</li>
                                        <li>Refund processing: 5-7 business days</li>
                                        <li>Credit card refunds: 5-10 business days</li>
                                        <li>Bank transfer refunds: 3-5 business days</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white shadow-sm mb-4">
                                <div className="card-header">
                                    <h2 className="h4 mb-0">5. Quality Guarantee Program</h2>
                                </div>
                                <div className="card-body">
                                    <h4>Our Commitment</h4>
                                    <p className="text-muted">
                                        FruitPack guarantees the freshness and quality of all produce delivered. We hand-select items 
                                        and maintain proper cold chain storage to ensure you receive the best possible products.
                                    </p>
                                    
                                    <h4>Quality Standards</h4>
                                    <ul className="text-muted">
                                        <li>All produce is checked for freshness before delivery</li>
                                        <li>Items are stored at appropriate temperatures</li>
                                        <li>Damaged or spoiled items are removed before packing</li>
                                        <li>We provide storage and handling tips in the app</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white shadow-sm">
                                <div className="card-header">
                                    <h2 className="h4 mb-0">6. Contact Us for Refunds</h2>
                                </div>
                                <div className="card-body">
                                    <p className="text-muted">
                                        To request a refund or report quality issues, contact us immediately:
                                    </p>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <div className="d-flex align-items-center mb-2">
                                                <i className="bi bi-envelope text-green-600 me-2"></i>
                                                <div>
                                                    <p className="font-bold mb-0">Email Support</p>
                                                    <p className="text-muted mb-0">support@fruitpack.co.za</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex align-items-center mb-2">
                                                <i className="bi bi-telephone text-green-600 me-2"></i>
                                                <div>
                                                    <p className="font-bold mb-0">Phone Support</p>
                                                    <p className="text-muted mb-0">+27 12 345 6789</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-green-100 border border-green-600 p-3">
                                        <strong>Remember:</strong> For fastest processing, have your order number ready and contact us 
                                        within 24 hours of delivery.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center mb-3 mb-md-0">
                            <div className="rounded-full flex items-center justify-center mr-2" 
                                 style={{ width: '1.5rem', height: '1.5rem', background: 'linear-gradient(45deg, #22c55e, #16a34a)' }}>
                                <span className="text-white font-bold small">F</span>
                            </div>
                            <span className="h6 mb-0">FruitPack</span>
                        </div>
                        
                        <div className="flex gap-4 text-sm">
                            <a href="privacy-policy.html" className="text-gray-400 hover:text-white">Privacy Policy</a>
                            <a href="terms.html" className="text-gray-400 hover:text-white">Terms & Conditions</a>
                            <a href="refund-policy.html" className="text-gray-400 hover:text-white">Refund Policy</a>
                        </div>
                    </div>
                    
                    <hr className="my-3 border-gray-600" />
                    
                    <div className="text-center text-gray-400 text-sm">
                        <p className="mb-0">&copy; 2025 FruitPack. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}