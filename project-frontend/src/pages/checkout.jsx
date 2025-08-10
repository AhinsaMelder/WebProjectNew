import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import Header from "../components/Header";
import Footer from "../components/Footer";
import toast from "react-hot-toast";

export default function Checkout() {
    const email = localStorage.getItem('userEmail');
    const cart = JSON.parse(localStorage.getItem('cart'));
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();

    const [name, setName] = useState('');
    const [nic, setNic] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [cardName, setCardName] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('credit');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [processing, setProcessing] = useState(false);

    // Individual card element styling
    const cardElementOptions = {
        style: {
            base: {
                fontSize: '16px',
                color: '#1e293b',
                fontFamily: 'system-ui, sans-serif',
                '::placeholder': {
                    color: '#64748b',
                },
            },
        },
    };

    const validateForm = () => {
        if (!name.trim()) {
            toast.error('Please enter your full name');
            return false;
        }
        if (!nic.trim()) {
            toast.error('Please enter your NIC number');
            return false;
        }
        if (!phone.trim()) {
            toast.error('Please enter your phone number');
            return false;
        }
        if (!address.trim()) {
            toast.error('Please enter your address');
            return false;
        }
        if (!cardName.trim()) {
            toast.error('Please enter the cardholder name');
            return false;
        }
        if (!termsAccepted) {
            toast.error('Please accept the terms and conditions');
            return false;
        }
        return true;
    };

    const createPaymentIntent = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/payment/create-payment-intent`,
                {
                    amount: cart.totalPrice * 100,
                    currency: 'usd',
                    customerEmail: email,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            return response.data.clientSecret;
        } catch (error) {
            console.error('Error creating payment intent:', error);
            throw error;
        }
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;
        
        if (!stripe || !elements) {
            toast.error('Payment system not loaded. Please refresh the page.');
            return;
        }

        const cardNumberElement = elements.getElement(CardNumberElement);
        if (!cardNumberElement) {
            toast.error('Card information not loaded. Please refresh the page.');
            return;
        }

        setProcessing(true);

        try {
            const clientSecret = await createPaymentIntent();

            const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardNumberElement,
                    billing_details: {
                        name: cardName,
                        email: email,
                        phone: phone,
                    },
                },
            });

            if (error) {
                console.error('Payment failed:', error);
                toast.error(error.message || 'Payment failed. Please try again.');
                setProcessing(false);
                return;
            }

            if (paymentIntent.status === 'succeeded') {
                await saveRental(paymentIntent.id);
            }
        } catch (error) {
            console.error('Payment error:', error);
            toast.error('Payment failed. Please try again.');
            setProcessing(false);
        }
    };

    async function saveRental(paymentIntentId) {
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
                    paymentIntentId: paymentIntentId,
                    paymentStatus: 'completed'
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            toast.success('Payment successful! Rental booked successfully!');
            localStorage.removeItem('cart');
            setProcessing(false);
            navigate('/customerpage');
            
        } catch (error) {
            console.log(error);
            toast.error('Payment successful but failed to save rental. Please contact support.');
            setProcessing(false);
        }
    }

    const handleBackToCustomerPage = () => {
        navigate('/customerpage');
    };

    if (!cart) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">No booking found</h2>
                    <button 
                        onClick={handleBackToCustomerPage}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                    >
                        Back to Customer Page
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Header />
            <div className="min-h-screen bg-gray-50 pt-20">
                {/* Simple Header */}
                <div className="bg-blue-600 text-white py-8">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="flex items-center gap-4">
                            <button 
                                onClick={handleBackToCustomerPage}
                                className="p-2 hover:bg-blue-700 rounded-lg"
                            >
                                ← Back
                            </button>
                            <div>
                                <h1 className="text-3xl font-bold">Checkout</h1>
                                <p className="text-blue-100">Complete your car rental booking</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        
                        {/* Booking Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-xl font-bold mb-4">Booking Summary</h2>
                                
                                <img
                                    src={cart.image}
                                    alt="Vehicle"
                                    className="w-full h-40 object-cover rounded-lg mb-4"
                                />
                                
                                <div className="space-y-3">
                                    <div>
                                        <h3 className="font-bold text-lg">{cart.brand} {cart.model}</h3>
                                    </div>
                                    
                                    <div className="border-t pt-3 space-y-2">
                                        <div className="flex justify-between">
                                            <span>Pickup Date:</span>
                                            <span className="font-semibold">{cart.startDate}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Return Date:</span>
                                            <span className="font-semibold">{cart.endDate}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Duration:</span>
                                            <span className="font-semibold">{cart.rentalDays} days</span>
                                        </div>
                                    </div>
                                    
                                    <div className="border-t pt-3">
                                        <div className="flex justify-between text-lg font-bold">
                                            <span>Total Amount:</span>
                                            <span className="text-green-600">Rs.{cart.totalPrice?.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Security Info */}
                            <div className="bg-white rounded-lg shadow-md p-4 mt-4">
                                <div className="text-center">
                                    <div className="text-green-600 mb-2">🔒</div>
                                    <p className="text-sm text-gray-600">Secured by SSL encryption</p>
                                </div>
                            </div>
                        </div>

                        {/* Customer Information & Payment */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-2xl font-bold mb-6">Customer Information & Payment</h2>
                                
                                <div className="space-y-6">
                                    {/* Customer Info */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="Enter your full name"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                NIC Number *
                                            </label>
                                            <input
                                                type="text"
                                                value={nic}
                                                onChange={(e) => setNic(e.target.value)}
                                                placeholder="Your NIC number"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                placeholder="Your phone number"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                value={email || ''}
                                                disabled
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600"
                                            />
                                        </div>

                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Address *
                                            </label>
                                            <textarea
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                                placeholder="Enter your complete address"
                                                rows="3"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>

                                    {/* Payment Information */}
                                    <div className="border-t pt-6">
                                        <h3 className="text-lg font-bold mb-4">Payment Information</h3>
                                        
                                        {/* Payment Method Selection */}
                                        <div className="mb-6">
                                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                                Payment Method *
                                            </label>
                                            <div className="flex space-x-4">
                                                <label className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="paymentMethod"
                                                        value="credit"
                                                        checked={paymentMethod === 'credit'}
                                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                                    />
                                                    <span className="ml-2 text-sm text-gray-700">Credit Card</span>
                                                </label>
                                                <label className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="paymentMethod"
                                                        value="debit"
                                                        checked={paymentMethod === 'debit'}
                                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                                    />
                                                    <span className="ml-2 text-sm text-gray-700">Debit Card</span>
                                                </label>
                                            </div>
                                        </div>

                                        {/* Cardholder Name */}
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Cardholder Name *
                                            </label>
                                            <input
                                                type="text"
                                                value={cardName}
                                                onChange={(e) => setCardName(e.target.value)}
                                                placeholder="Name as it appears on card"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                        {/* Card Number */}
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Card Number *
                                            </label>
                                            <div className="p-3 border border-gray-300 rounded-lg">
                                                <CardNumberElement options={cardElementOptions} />
                                            </div>
                                        </div>

                                        {/* Expiry and CVV */}
                                        <div className="grid grid-cols-2 gap-4 mb-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Expiry Date *
                                                </label>
                                                <div className="p-3 border border-gray-300 rounded-lg">
                                                    <CardExpiryElement options={cardElementOptions} />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    CVV *
                                                </label>
                                                <div className="p-3 border border-gray-300 rounded-lg">
                                                    <CardCvcElement options={cardElementOptions} />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Security Info */}
                                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                                            <div className="flex items-center">
                                                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                                </svg>
                                                <p className="text-sm text-blue-800">
                                                    Your payment information is encrypted and secure
                                                </p>
                                            </div>
                                        </div>

                                        {/* Accepted Cards */}
                                        <div className="mb-4">
                                            <p className="text-sm text-gray-600 mb-2">Accepted Cards:</p>
                                            <div className="flex space-x-2">
                                                <div className="w-10 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
                                                <div className="w-10 h-6 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
                                                <div className="w-10 h-6 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">AMEX</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Terms & Conditions */}
                                    <div className="border-t pt-6">
                                        <div className="flex items-start space-x-3">
                                            <input
                                                type="checkbox"
                                                id="terms"
                                                checked={termsAccepted}
                                                onChange={(e) => setTermsAccepted(e.target.checked)}
                                                className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                            />
                                            <label htmlFor="terms" className="text-sm text-gray-700">
                                                I agree to the <span className="text-blue-600 font-medium">Terms & Conditions</span> and 
                                                <span className="text-blue-600 font-medium"> Privacy Policy</span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="border-t pt-6">
                                        <button 
                                            onClick={handleSubmit}
                                            disabled={!stripe || processing}
                                            className={`w-full py-3 px-6 rounded-lg font-bold text-lg ${
                                                processing || !stripe
                                                    ? 'bg-gray-400 cursor-not-allowed' 
                                                    : 'bg-green-600 hover:bg-green-700'
                                            } text-white transition-colors`}
                                        >
                                            {processing ? (
                                                <span className="flex items-center justify-center">
                                                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Processing Payment...
                                                </span>
                                            ) : (
                                                `Pay Rs.${cart.totalPrice?.toLocaleString()} Securely`
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}