import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CarOverview() {
    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { carId } = useParams();

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
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Left Side - Image */}
                        <div className="flex justify-center lg:justify-start">
                            <div className="w-full max-w-lg">
                                {/* Main Image */}
                                <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl border border-slate-100">
                                    <img
                                        src={car.images[0]}
                                        alt="Car main view"
                                        className="w-full h-96 object-cover"
                                    />
                                    
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                                    
                                    {/* Status badge */}
                                    <div className={`absolute top-6 right-6 backdrop-blur-sm px-4 py-2 rounded-full ${
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

                                    {/* Car name overlay */}
                                    <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-xl">
                                        <span className="text-lg font-bold text-white">
                                            {car.brand} {car.model}
                                        </span>
                                    </div>

                                    {/* Decorative elements */}
                                    <div className="absolute top-4 left-4 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
                                    <div className="absolute bottom-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                                </div>

                                {/* Additional Info Cards */}
                                <div className="grid grid-cols-2 gap-4 mt-6">
                                    <div className="bg-white shadow-lg border border-slate-100 p-6 rounded-2xl text-center">
                                        <div className="w-12 h-12 mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-3">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="text-sm font-semibold text-slate-800">Verified</div>
                                        <div className="text-xs text-slate-500">Safety Checked</div>
                                    </div>
                                    
                                    <div className="bg-white shadow-lg border border-slate-100 p-6 rounded-2xl text-center">
                                        <div className="w-12 h-12 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-3">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="text-sm font-semibold text-slate-800">Insured</div>
                                        <div className="text-xs text-slate-500">Full Coverage</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Information */}
                        <div className="space-y-8">
                            {/* Header Info */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <span className={`px-4 py-2 text-sm font-semibold rounded-full border ${
                                        car.status === 'Available' 
                                            ? 'bg-green-50 text-green-700 border-green-200' 
                                            : 'bg-red-50 text-red-700 border-red-200'
                                    }`}>
                                        {car.status}
                                    </span>
                                    <div className="flex items-center space-x-2 text-slate-600">
                                        <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                                        <span className="text-lg">{car.year}</span>
                                    </div>
                                </div>
                                
                                <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                                    <span className="block">{car.brand}</span>
                                    <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                                        {car.model}
                                    </span>
                                </h2>
                                
                                <div className="flex items-baseline gap-3">
                                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                                        Rs.{car.price?.toLocaleString()}
                                    </span>
                                    <span className="text-slate-500 text-lg">Starting Price</span>
                                </div>
                            </div>

                            {/* Quick Specs */}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-white shadow-lg border border-slate-100 p-6 rounded-2xl hover:shadow-xl transition-all duration-300">
                                    <div className="text-3xl font-bold text-slate-900 mb-2">{car.year}</div>
                                    <div className="text-slate-600">Model Year</div>
                                    <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-3"></div>
                                </div>
                                <div className="bg-white shadow-lg border border-slate-100 p-6 rounded-2xl hover:shadow-xl transition-all duration-300">
                                    <div className="text-3xl font-bold text-slate-900 mb-2">{car.color}</div>
                                    <div className="text-slate-600">Exterior Color</div>
                                    <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full mt-3"></div>
                                </div>
                            </div>

                            {/* Car Details */}
                            <div className="bg-white shadow-lg border border-slate-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mr-3">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    Vehicle Specifications
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { label: "Brand", value: car.brand },
                                        { label: "Model", value: car.model },
                                        { label: "Year", value: car.year },
                                        { label: "Color", value: car.color },
                                        { label: "Availability", value: car.status }
                                    ].map((item, index) => (
                                        <div key={index} className="flex justify-between items-center py-3 border-b border-slate-100 last:border-b-0">
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

                            {/* Action Buttons */}
                            <div className="flex gap-6">
                                <button className="group flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
                                    <span className="flex items-center justify-center space-x-3">
                                        <span className="text-lg">Book Now</span>
                                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </span>
                                </button>
                                
                                <button className="group bg-white shadow-lg border border-slate-200 hover:shadow-xl text-slate-700 p-4 rounded-xl transition-all duration-300 hover:scale-110">
                                    <svg className="w-6 h-6 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                                
                                <button className="group bg-white shadow-lg border border-slate-200 hover:shadow-xl text-slate-700 p-4 rounded-xl transition-all duration-300 hover:scale-110">
                                    <svg className="w-6 h-6 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                    </svg>
                                </button>
                            </div>

                            {/* Trust Indicators */}
                            <div className="grid grid-cols-3 gap-6 pt-6">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-slate-900 mb-1">24/7</div>
                                    <div className="text-sm text-slate-600">Support</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-slate-900 mb-1">100%</div>
                                    <div className="text-sm text-slate-600">Verified</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-slate-900 mb-1">5★</div>
                                    <div className="text-sm text-slate-600">Rating</div>
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