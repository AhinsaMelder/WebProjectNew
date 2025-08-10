import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import toast from "react-hot-toast";

export default function Checkout() {
    const email = localStorage.getItem('userEmail');
    const cart = JSON.parse(localStorage.getItem('cart'));
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [nic, setNic] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    console.log(cart);
    

    async function saveRental() {
        const token = localStorage.getItem('token');
        if (!token) {
            toast.error('You are not logged in');
            navigate('/login');
            return;
        }

        try {
            await axios.post(
                import.meta.env.VITE_BACKEND_URL + '/api/rental/save',
                {
                    email,
                    name,
                    nic,
                    phone,
                    address,
                    startDate: cart.startDate,
                    endDate: cart.endDate,
                    carId: cart.carId,
                    carOwnerEmail: cart.caremail,
                    model: cart.model,
                    brand: cart.brand,
                    image: cart.image,
                    total: cart.totalPrice,
                  
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            toast.success('Rental saved successfully!');
            localStorage.removeItem('cart');
            // Navigate to customer page after successful booking
            navigate('/customerpage');
            
        } catch (error) {
            console.log(error);
            toast.error('Failed to save rental');
        }
    }

    const handleBackToCustomerPage = () => {
        navigate('/customerpage');
    };

    return (
        <>
            <Header />
            <div className="min-h-screen bg-slate-50 pt-20">
                {/* Premium Header */}
                <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
                    {/* Background Effects */}
                    <div className="absolute inset-0">
                        <div className="absolute top-10 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 left-20 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"></div>
                    </div>
                    
                    <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-6">
                                <button 
                                    onClick={handleBackToCustomerPage}
                                    className="p-3 hover:bg-white/10 rounded-xl transition-all duration-300 text-white border border-white/20"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <div>
                                    <h1 className="text-4xl font-bold text-white mb-2">Secure Checkout</h1>
                                    <p className="text-blue-200">Complete your premium car rental booking</p>
                                </div>
                            </div>
                            <div className="hidden md:flex items-center space-x-4">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-white/90 font-semibold text-sm">SSL Secured</span>
                                </div>
                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid lg:grid-cols-3 gap-8">
                        
                        {/* Left Column - Booking Summary */}
                        <div className="lg:col-span-1 space-y-6">
                            {/* Vehicle Summary Card */}
                            <div className="bg-white shadow-xl border border-slate-100 rounded-3xl overflow-hidden">
                                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-6">
                                    <h2 className="text-xl font-bold text-white flex items-center">
                                        <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z"/>
                                        </svg>
                                        Your Booking
                                    </h2>
                                </div>
                                
                              
                                {cart && (
                                    <div className="p-6 space-y-6">
                                        {/* Vehicle Display */}
                                        <div className="relative">
                                            <img
                                                src={cart.image}
                                                alt="Vehicle"
                                                className="w-full h-48 object-cover rounded-2xl shadow-lg"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl"></div>
                                            <div className="absolute bottom-4 left-4 text-white">
                                                <h3 className="text-xl font-bold">{cart.brand}</h3>
                                                <p className="text-white/90">{cart.model}</p>
                                            </div>
                                        </div>

                                        {/* Booking Details */}
                                        <div className="space-y-4">
                                            <div className="bg-slate-50 rounded-2xl p-4 space-y-3">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-slate-600 font-medium">Pickup Date:</span>
                                                    <span className="font-bold text-slate-900">{cart.startDate}</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-slate-600 font-medium">Return Date:</span>
                                                    <span className="font-bold text-slate-900">{cart.endDate}</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-slate-600 font-medium">Duration:</span>
                                                    <span className="font-bold text-slate-900">{cart.rentalDays} {cart.rentalDays === 1 ? 'day' : 'days'}</span>
                                                </div>
                                            </div>
                                            
                                            {/* Price Breakdown */}
                                            <div className="border-t border-slate-200 pt-4">
                                                <div className="flex justify-between items-center mb-3">
                                                    <span className="text-slate-600">Daily Rate:</span>
                                                    <span className="font-semibold text-slate-900">Rs.{(cart.totalPrice / cart.rentalDays).toLocaleString()}</span>
                                                </div>
                                                <div className="flex justify-between items-center mb-4">
                                                    <span className="text-slate-600">Total Days:</span>
                                                    <span className="font-semibold text-slate-900">× {cart.rentalDays}</span>
                                                </div>
                                                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-200">
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-xl font-bold text-slate-900">Total Amount:</span>
                                                        <span className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                                                            Rs.{cart.totalPrice?.toLocaleString()}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Trust & Security */}
                            <div className="bg-white shadow-lg border border-slate-100 rounded-2xl p-6">
                                <h4 className="text-lg font-bold text-slate-900 mb-4">Why Choose Elite Drive?</h4>
                                <div className="space-y-3">
                                    {[
                                        { icon: "🛡️", text: "100% Secure Payments" },
                                        { icon: "🚗", text: "Premium Fleet Quality" },
                                        { icon: "📞", text: "24/7 Customer Support" },
                                        { icon: "⭐", text: "5-Star Service Rating" }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center space-x-3 p-3 bg-slate-50 rounded-xl">
                                            <span className="text-2xl">{item.icon}</span>
                                            <span className="font-medium text-slate-800">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Customer Information */}
                        <div className="lg:col-span-2">
                            <div className="bg-white shadow-xl border border-slate-100 rounded-3xl overflow-hidden">
                                 <div className="bg-gradient-to-r  to-cyan-400 p-6 from-blue-600">
                                    <h3 className="text-2xl font-bold text-white flex items-center">
                                        <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                        Customer Information
                                    </h3>
                                    <p className="text-green-100 mt-2">Please provide your details to complete the booking</p>
                                </div>

                                <div className="p-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Full Name */}
                                        <div className="md:col-span-2 space-y-2">
                                            <label className="flex items-center text-slate-800 font-semibold text-sm">
                                                <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                                </svg>
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="Enter your complete name"
                                                className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-slate-50 hover:bg-white"
                                            />
                                        </div>

                                        {/* NIC Number */}
                                        <div className="space-y-2">
                                            <label className="flex items-center text-slate-800 font-semibold text-sm">
                                                <svg className="w-4 h-4 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4z" clipRule="evenodd" />
                                                </svg>
                                                NIC Number *
                                            </label>
                                            <input
                                                type="text"
                                                value={nic}
                                                onChange={(e) => setNic(e.target.value)}
                                                placeholder="Your NIC number"
                                                className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-slate-50 hover:bg-white"
                                            />
                                        </div>

                                        {/* Phone Number */}
                                        <div className="space-y-2">
                                            <label className="flex items-center text-slate-800 font-semibold text-sm">
                                                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                                </svg>
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                placeholder="Your contact number"
                                                className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-slate-50 hover:bg-white"
                                            />
                                        </div>

                                        {/* Address */}
                                        <div className="md:col-span-2 space-y-2">
                                            <label className="flex items-center text-slate-800 font-semibold text-sm">
                                                <svg className="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                </svg>
                                                Complete Address *
                                            </label>
                                            <textarea
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                                placeholder="Enter your complete address with city and postal code"
                                                rows="3"
                                                className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-slate-50 hover:bg-white resize-none"
                                            />
                                        </div>

                                        {/* Email (Read-only) */}
                                        <div className="md:col-span-2 space-y-2">
                                            <label className="flex items-center text-slate-800 font-semibold text-sm">
                                                <svg className="w-4 h-4 text-cyan-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                                </svg>
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                value={email || ''}
                                                disabled
                                                className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl bg-slate-100 text-slate-600 cursor-not-allowed"
                                            />
                                        </div>
                                    </div>

                                    {/* Terms & Conditions */}
                                    <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200">
                                        <div className="flex items-start space-x-3">
                                            <input
                                                type="checkbox"
                                                id="terms"
                                                className="mt-1 h-5 w-5 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                                            />
                                            <div>
                                                <label htmlFor="terms" className="text-sm font-medium text-slate-800">
                                                    I agree to the <span className="text-blue-600 font-bold cursor-pointer hover:underline">Terms & Conditions</span> and 
                                                    <span className="text-blue-600 font-bold cursor-pointer hover:underline"> Privacy Policy</span>
                                                </label>
                                                <p className="text-xs text-slate-600 mt-2">
                                                    ✓ By proceeding, you confirm all information is accurate and complete
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="mt-8 space-y-4">
                                        <button 
                                            onClick={saveRental}
                                            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold text-lg py-5 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                                        >
                                            <span className="flex items-center justify-center space-x-3">
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                                </svg>
                                                <span>Complete Secure Booking</span>
                                            </span>
                                        </button>

                                        <button 
                                            onClick={handleBackToCustomerPage}
                                            className="w-full bg-white shadow-lg border-2 border-slate-200 hover:shadow-xl hover:border-slate-300 text-slate-700 font-semibold py-4 px-6 rounded-2xl transition-all duration-300"
                                        >
                                            <span className="flex items-center justify-center space-x-2">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                </svg>
                                                <span>Back to Customer Page</span>
                                            </span>
                                        </button>
                                    </div>

                                    {/* Security Notice */}
                                    <div className="mt-6 p-4 bg-slate-100 rounded-2xl text-center">
                                        <div className="flex items-center justify-center space-x-3 text-slate-700">
                                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-sm font-medium">Protected by 256-bit SSL encryption</span>
                                            <span className="text-green-600 font-bold">✓ SECURE</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}