import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import toast from "react-hot-toast";

export default function CarOverview() {
    const [car, setCar] = useState(null);
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [feedbackLoading, setFeedbackLoading] = useState(true);
    const [error, setError] = useState(null);
    const [rentalDays, setRentalDays] = useState(1);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const { carId } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/cars/getcarid/${carId}`)
            .then((response) => {
                setCar(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching car:", error);
                setError("Failed to load car details.");
                setLoading(false);
            });
    }, [carId]);

    // Fetch feedbacks for this car
    useEffect(() => {
        async function fetchFeedbacks() {
            try {
                setFeedbackLoading(true);
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/feedback/getfeedbacks/${carId}`);
                setFeedbacks(response.data || []);
                setFeedbackLoading(false);
            } catch (error) {
                console.error("Error fetching feedbacks:", error);
                setFeedbacks([]);
                setFeedbackLoading(false);
            }
        }
        fetchFeedbacks();
    }, [carId]);

    // Calculate rental days when dates change
    useEffect(() => {
        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const diffTime = Math.abs(end - start);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            setRentalDays(diffDays > 0 ? diffDays : 1);
        }
    }, [startDate, endDate]);

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];

    // Calculate pricing with discount
    const subtotal = car ? car.price * rentalDays : 0;
    const hasDiscount = rentalDays > 5;
    const discountAmount = hasDiscount ? subtotal * 0.1 : 0;
    const totalPrice = subtotal - discountAmount;

    function handleBooking(){
        const token = localStorage.getItem('token');
        if (!token) {
            toast.error('You are not logged in');
            navigate('/login');
            return;
        }

        if (!startDate || !endDate) {
            toast.error('Please select start and end dates.');
            return;
        }

        const cart = {
            carId: carId,
            model: car.model,
            brand: car.brand,
            image: car.images[0],
            price: car.price,
            startDate: startDate,
            endDate: endDate,
            rentalDays: rentalDays,
            subtotal: subtotal,
            discountAmount: discountAmount,
            hasDiscount: hasDiscount,
            totalPrice: totalPrice,   
            caremail: car.email
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        navigate("/checkout");
    }

    // Format date for display
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    // Star rating component
    const StarRating = ({ rating = 5 }) => {
        return (
            <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                        key={star}
                        className={`w-4 h-4 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
        );
    };

    return (
        <>
        <Header />
        <div className="min-h-screen bg-slate-50 pt-20">
            {/* Header with dark theme */}
            <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 border-b">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex items-center gap-4">
                        <button className="p-3 hover:bg-white/20 rounded-xl transition-all duration-300 text-white">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <h1 className="text-3xl font-bold text-white">Vehicle Details</h1>
                        <div className="ml-auto flex items-center space-x-3">
                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-white/90 font-semibold text-sm">Live Inventory</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Loading State */}
            {loading && (
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="flex items-center justify-center h-96">
                        <div className="relative">
                            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500/30 border-t-blue-500"></div>
                            <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping"></div>
                        </div>
                        <span className="ml-6 text-slate-700 text-lg">Loading premium vehicle details...</span>
                    </div>
                </div>
            )}

            {/* Error State */}
            {error && (
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <p className="text-red-600 text-lg">{error}</p>
                    </div>
                </div>
            )}

            {/* Car Details */}
            {car && (
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Left Side - Vehicle Information */}
                        <div className="space-y-8">
                            {/* Vehicle Header */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <span className={`px-4 py-2 text-sm font-semibold rounded-full border ${
                                        car.status === 'Available' 
                                            ? 'bg-green-50 text-green-700 border-green-200' 
                                            : 'bg-red-50 text-red-700 border-red-200'
                                    }`}>
                                        {car.status}
                                    </span>
                                    <span className="text-slate-600">{car.year}</span>
                                </div>
                                
                                <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                                    <span className="block">{car.brand}</span>
                                    <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                                        {car.model}
                                    </span>
                                </h2>
                                
                                <div className="flex items-baseline gap-3">
                                    <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                                        Rs.{car.price?.toLocaleString()}
                                    </span>
                                    <span className="text-slate-500 text-lg">Per Day</span>
                                </div>

                                {/* Discount Banner */}
                                <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-orange-800">Special Offer!</h4>
                                            <p className="text-sm text-orange-700">
                                                Get <span className="font-bold">10% discount</span> on rentals longer than 5 days
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Main Image */}
                            <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl border border-slate-100">
                                <img
                                    src={car.images[0]}
                                    alt="Car main view"
                                    className="w-full h-80 object-cover"
                                />
                                
                                {/* Status badge */}
                                <div className={`absolute top-4 right-4 backdrop-blur-sm px-3 py-1 rounded-full ${
                                    car.status === 'Available' 
                                        ? 'bg-green-500/90' 
                                        : 'bg-red-500/90'
                                }`}>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                        <span className="text-sm font-semibold text-white">
                                            {car.status}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Vehicle Specifications */}
                            <div className="bg-white shadow-lg border border-slate-100 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Vehicle Specifications</h3>
                                <div className="space-y-3">
                                    {[
                                        { label: "Brand", value: car.brand },
                                        { label: "Model", value: car.model },
                                        { label: "Year", value: car.year },
                                        { label: "Color", value: car.color },
                                        { label: "Availability", value: car.isAvailable ? "Available" : "Not Available" },
                                    ].map((item, index) => (
                                        <div key={index} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-b-0">
                                            <span className="text-slate-600 font-medium">{item.label}</span>
                                            <span className={`font-semibold ${
                                                item.label === 'Availability' 
                                                    ? car.status === 'Available' ? 'text-green-600' : 'text-red-600'
                                                    : 'text-slate-900'
                                            }`}>
                                                {item.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Customer Feedbacks Section */}
                            <div className="bg-white shadow-lg border border-slate-100 rounded-2xl p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-bold text-slate-900">Customer Reviews</h3>
                                    <div className="flex items-center space-x-2">
                                        <StarRating rating={5} />
                                        <span className="text-sm text-slate-600">({feedbacks.length} reviews)</span>
                                    </div>
                                </div>

                                {feedbackLoading ? (
                                    <div className="flex items-center justify-center py-8">
                                        <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-500/30 border-t-blue-500"></div>
                                        <span className="ml-3 text-slate-600">Loading reviews...</span>
                                    </div>
                                ) : feedbacks.length === 0 ? (
                                    <div className="text-center py-8">
                                        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                        </div>
                                        <h4 className="text-lg font-semibold text-slate-700 mb-2">No Reviews Yet</h4>
                                        <p className="text-slate-500">Be the first to share your experience with this vehicle!</p>
                                    </div>
                                ) : (
                                    <div className="space-y-4 max-h-96 overflow-y-auto">
                                        {feedbacks.map((feedback, index) => (
                                            <div key={index} className="border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow duration-200">
                                                <div className="flex items-start justify-between mb-3">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                                            <span className="text-white font-semibold text-sm">
                                                                {feedback.userEmail?.charAt(0).toUpperCase() || 'U'}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <h5 className="font-semibold text-slate-900">
                                                                {feedback.userEmail || 'Anonymous User'}
                                                            </h5>
                                                            <div className="flex items-center space-x-2">
                                                                <StarRating rating={5} />
                                                                <span className="text-xs text-slate-500">
                                                                    {feedback.createdAt ? formatDate(feedback.createdAt) : 'Recently'}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="text-slate-700 leading-relaxed">{feedback.feedback}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right Side - Rental Calculator */}
                        <div className="space-y-8">
                            {/* Rental Calculator */}
                            <div className="bg-white shadow-lg border border-slate-100 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-6">Rental Calculator</h3>
                                
                                <div className="space-y-6">
                                    {/* Date Selection */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-slate-700">Start Date</label>
                                            <input
                                                type="date"
                                                value={startDate}
                                                onChange={(e) => setStartDate(e.target.value)}
                                                min={today}
                                                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-slate-700">End Date</label>
                                            <input
                                                type="date"
                                                value={endDate}
                                                onChange={(e) => setEndDate(e.target.value)}
                                                min={startDate || today}
                                                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                            />
                                        </div>
                                    </div>

                                    {/* Manual Days Input */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-slate-700">Number of Days</label>
                                        <input
                                            type="number"
                                            min="1"
                                            value={rentalDays}
                                            onChange={(e) => setRentalDays(Math.max(1, parseInt(e.target.value) || 1))}
                                            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                        />
                                    </div>

                                    {/* Discount Notice */}
                                    {rentalDays > 5 && (
                                        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-green-800">🎉 Discount Applied!</h4>
                                                    <p className="text-sm text-green-700">
                                                        You're getting a 10% discount for renting more than 5 days!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Price Calculation */}
                            <div className="bg-white shadow-lg border border-slate-100 rounded-2xl p-8">
                                <h4 className="text-xl font-bold text-slate-900 mb-6">Price Calculation</h4>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600">Daily Rate:</span>
                                        <span className="font-semibold text-slate-800">Rs.{car.price?.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600">Rental Days:</span>
                                        <span className="font-semibold text-slate-800">{rentalDays} {rentalDays === 1 ? 'day' : 'days'}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600">Subtotal:</span>
                                        <span className="font-semibold text-slate-800">Rs.{subtotal.toLocaleString()}</span>
                                    </div>
                                    
                                    {hasDiscount && (
                                        <div className="flex justify-between items-center">
                                            <span className="text-green-600 flex items-center">
                                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                                </svg>
                                                10% Discount (5+ days):
                                            </span>
                                            <span className="font-semibold text-green-600">-Rs.{discountAmount.toLocaleString()}</span>
                                        </div>
                                    )}
                                    
                                    <div className="border-t border-slate-200 pt-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-xl font-bold text-slate-900">Total Cost:</span>
                                            <div className="text-right">
                                                {hasDiscount && (
                                                    <div className="text-sm text-slate-500 line-through">
                                                        Rs.{subtotal.toLocaleString()}
                                                    </div>
                                                )}
                                                <span className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                                                    Rs.{totalPrice.toLocaleString()}
                                                </span>
                                                {hasDiscount && (
                                                    <div className="text-sm text-green-600 font-semibold">
                                                        You save Rs.{discountAmount.toLocaleString()}!
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-4">
                                <button onClick={handleBooking}
                                 className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
                                    <span className="flex items-center justify-center space-x-3">
                                        <span className="text-lg">
                                            Book for Rs.{totalPrice.toLocaleString()}
                                            {hasDiscount && (
                                                <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-sm">
                                                    10% OFF
                                                </span>
                                            )}
                                        </span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </span>
                                </button>
                                
                                <div className="grid grid-cols-2 gap-4">
                                    <button className="bg-white shadow-lg border border-slate-200 hover:shadow-xl text-slate-700 py-3 px-6 rounded-xl transition-all duration-300">
                                        <span className="flex items-center justify-center space-x-2">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                            <span>Save</span>
                                        </span>
                                    </button>
                                    
                                    <button className="bg-white shadow-lg border border-slate-200 hover:shadow-xl text-slate-700 py-3 px-6 rounded-xl transition-all duration-300">
                                        <span className="flex items-center justify-center space-x-2">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                            </svg>
                                            <span>Share</span>
                                        </span>
                                    </button>
                                </div>
                            </div>

                            {/* Quick Info */}
                            <div className="bg-white shadow-lg border border-slate-100 rounded-2xl p-6">
                                <h4 className="text-lg font-semibold text-slate-800 mb-4">Rental Information</h4>
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-center text-slate-600">
                                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Free cancellation up to 24 hours
                                    </div>
                                    <div className="flex items-center text-slate-600">
                                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        24/7 customer support
                                    </div>
                                    <div className="flex items-center text-slate-600">
                                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        No hidden charges
                                    </div>
                                    <div className="flex items-center text-orange-600">
                                        <svg className="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                        </svg>
                                        10% discount for 5+ day rentals
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
        <Footer/>
        </>
    );
}