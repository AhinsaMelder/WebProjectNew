import { Link } from "react-router-dom";

export default function Welcome() {
  const firstName = localStorage.getItem("username");
    return (
        <div className="space-y-8">
            {/* Welcome Hero Section */}
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 rounded-2xl p-8 text-white relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute top-4 right-4 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-4 left-4 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl"></div>
                </div>
                
                <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold">Welcome {firstName}!</h1>
                            <p className="text-blue-100 text-lg">Ready for your next premium driving experience</p>
                        </div>
                    </div>
                    
                    <p className="text-xl text-blue-50 leading-relaxed max-w-3xl">
                        Use your Elite Drive dashboard to browse our premium fleet, manage your bookings, 
                        and personalize your profile for the ultimate car rental experience.
                    </p>
                </div>
            </div>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Browse Cars */}
                <Link to="/deals" className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-100 cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">Browse Cars</h3>
                    <p className="text-slate-600 text-sm">Explore our premium vehicle collection</p>
                </Link>

                {/* My Bookings */}
                <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">My Bookings</h3>
                    <p className="text-slate-600 text-sm">Manage your current reservations</p>
                </div>

                {/* Online Payment */}
                <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">Online Payment</h3>
                    <p className="text-slate-600 text-sm">Secure payment processing</p>
                </div>

                {/* Profile */}
                <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">Profile</h3>
                    <p className="text-slate-600 text-sm">Update your account information</p>
                </div>
            </div>

            {/* Dashboard Stats and Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Account Status */}
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-slate-800">Account Status</h2>
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="font-medium text-slate-700">Profile Verified</span>
                            </div>
                            <span className="text-green-600 font-semibold">Active</span>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <span className="font-medium text-slate-700">Premium Member</span>
                            </div>
                            <span className="text-blue-600 font-semibold">Elite</span>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="font-medium text-slate-700">Loyalty Points</span>
                            </div>
                            <span className="text-purple-600 font-semibold">1,250 pts</span>
                        </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
                    <h2 className="text-2xl font-bold text-slate-800 mb-6">Recent Activity</h2>
                    
                    <div className="space-y-4">
                        <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                            <div>
                                <p className="font-medium text-slate-800">Profile Updated</p>
                                <p className="text-sm text-slate-600">Your profile information was successfully updated</p>
                                <p className="text-xs text-slate-500 mt-1">2 hours ago</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl border-l-4 border-green-500">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                            <div>
                                <p className="font-medium text-slate-800">Booking Confirmed</p>
                                <p className="text-sm text-slate-600">Your reservation for BMW X5 has been confirmed</p>
                                <p className="text-xs text-slate-500 mt-1">1 day ago</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-xl border-l-4 border-purple-500">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                            <div>
                                <p className="font-medium text-slate-800">Points Earned</p>
                                <p className="text-sm text-slate-600">You earned 250 loyalty points from your last rental</p>
                                <p className="text-xs text-slate-500 mt-1">3 days ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Elite Drive Benefits */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
                <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                        <span className="text-xl font-bold">ED</span>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">Elite Drive Benefits</h2>
                        <p className="text-slate-300">Premium membership perks</p>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                        <p className="text-slate-300">Customer Support</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                        <p className="text-slate-300">Premium Vehicles</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-green-400 mb-2">99%</div>
                        <p className="text-slate-300">Customer Satisfaction</p>
                    </div>
                </div>
            </div>

            {/* Current Weather & Location */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h3 className="text-lg font-bold">Weather Today</h3>
                            <p className="text-blue-100 text-sm">Colombo, Sri Lanka</p>
                        </div>
                        <div className="text-4xl">☀️</div>
                    </div>
                    <div className="flex items-end space-x-2">
                        <span className="text-3xl font-bold">28°C</span>
                        <span className="text-blue-200 text-sm mb-1">Sunny</span>
                    </div>
                    <p className="text-blue-100 text-xs mt-2">Perfect weather for your next drive!</p>
                </div>

                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h3 className="text-lg font-bold">Active Bookings</h3>
                            <p className="text-green-100 text-sm">Current reservations</p>
                        </div>
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                            <span className="text-xl font-bold">2</span>
                        </div>
                    </div>
                    <p className="text-green-100 text-sm">Next pickup: Tomorrow 9:00 AM</p>
                    <p className="text-green-100 text-xs mt-1">BMW X5 - Airport Location</p>
                </div>

                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h3 className="text-lg font-bold">Rewards Status</h3>
                            <p className="text-purple-100 text-sm">Elite membership</p>
                        </div>
                        <div className="text-2xl">🏆</div>
                    </div>
                    <div className="flex items-end space-x-2">
                        <span className="text-2xl font-bold">1,250</span>
                        <span className="text-purple-200 text-sm mb-1">points</span>
                    </div>
                    <p className="text-purple-100 text-xs mt-2">750 more points to Diamond tier!</p>
                </div>
            </div>

            {/* Special Offers & Promotions */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-slate-800">Special Offers</h2>
                    <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">Limited Time</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-orange-100 to-orange-50 border border-orange-200 rounded-xl p-6">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">%</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800">Weekend Special</h3>
                                <p className="text-orange-600 text-sm font-semibold">25% OFF</p>
                            </div>
                        </div>
                        <p className="text-slate-600 text-sm mb-3">Book any luxury sedan for weekend rentals and save big!</p>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-300">
                            Claim Offer
                        </button>
                    </div>

                    <div className="bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-200 rounded-xl p-6">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800">Loyalty Bonus</h3>
                                <p className="text-blue-600 text-sm font-semibold">2X Points</p>
                            </div>
                        </div>
                        <p className="text-slate-600 text-sm mb-3">Earn double points on your next 3 bookings this month!</p>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-300">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* Quick Stats Dashboard */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl shadow-md p-4 text-center border border-slate-100">
                    <div className="text-2xl font-bold text-blue-600 mb-1">15</div>
                    <p className="text-slate-600 text-sm">Total Rentals</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-4 text-center border border-slate-100">
                    <div className="text-2xl font-bold text-green-600 mb-1">45</div>
                    <p className="text-slate-600 text-sm">Days Driven</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-4 text-center border border-slate-100">
                    <div className="text-2xl font-bold text-purple-600 mb-1">8</div>
                    <p className="text-slate-600 text-sm">Favorite Cars</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-4 text-center border border-slate-100">
                    <div className="text-2xl font-bold text-orange-600 mb-1">4.9</div>
                    <p className="text-slate-600 text-sm">Your Rating</p>
                </div>
            </div>

            {/* Upcoming Features & News */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold text-slate-800">What's New</h2>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                            <div>
                                <p className="font-semibold text-slate-800 text-sm">New Electric Vehicle Fleet</p>
                                <p className="text-slate-600 text-xs">Tesla Model S and BMW iX now available for booking</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                            <div>
                                <p className="font-semibold text-slate-800 text-sm">Mobile App Update</p>
                                <p className="text-slate-600 text-xs">Enhanced booking experience with real-time tracking</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                            <div>
                                <p className="font-semibold text-slate-800 text-sm">Premium Locations</p>
                                <p className="text-slate-600 text-xs">New pickup points at luxury hotels and malls</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold text-slate-800">Quick Tips</h2>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border-l-4 border-blue-500">
                            <h4 className="font-semibold text-slate-800 text-sm mb-1">💡 Pro Tip</h4>
                            <p className="text-slate-600 text-xs">Book 24 hours in advance to get the best vehicle selection and rates.</p>
                        </div>
                        <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-l-4 border-green-500">
                            <h4 className="font-semibold text-slate-800 text-sm mb-1">🎯 Maximize Points</h4>
                            <p className="text-slate-600 text-xs">Complete your profile to earn 500 bonus loyalty points instantly.</p>
                        </div>
                        <div className="p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border-l-4 border-orange-500">
                            <h4 className="font-semibold text-slate-800 text-sm mb-1">⭐ Premium Benefits</h4>
                            <p className="text-slate-600 text-xs">Elite members get free vehicle delivery within 10km radius.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Emergency Contacts & Support */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white">
                <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">24/7 Emergency Support</h2>
                        <p className="text-red-100">We're here when you need us most</p>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                        <div className="text-2xl mb-2">🚨</div>
                        <p className="font-semibold mb-1">Emergency Hotline</p>
                        <p className="text-red-100 text-sm">+94 77 123 4567</p>
                    </div>
                    <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                        <div className="text-2xl mb-2">🔧</div>
                        <p className="font-semibold mb-1">Roadside Assistance</p>
                        <p className="text-red-100 text-sm">+94 77 234 5678</p>
                    </div>
                    <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                        <div className="text-2xl mb-2">💬</div>
                        <p className="font-semibold mb-1">Live Chat</p>
                        <p className="text-red-100 text-sm">Available 24/7</p>
                    </div>
                </div>
            </div>
        </div>
    );
}