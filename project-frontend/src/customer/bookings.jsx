export function Bookings() {
    // Sample booking data - replace with actual API data
    const bookings = [
        {
            id: 1,
            car: "BMW X5",
            brand: "BMW",
            model: "X5",
            image: "https://via.placeholder.com/300x200?text=BMW+X5",
            startDate: "2025-07-25",
            endDate: "2025-07-27",
            status: "Confirmed",
            location: "Colombo Airport",
            price: 15000,
            bookingId: "ED-2025-001",
            features: ["GPS Navigation", "Premium Sound", "Leather Seats"]
        },
        {
            id: 2,
            car: "Toyota Axio",
            brand: "Toyota",
            model: "Axio",
            image: "https://via.placeholder.com/300x200?text=Toyota+Axio",
            startDate: "2025-08-01",
            endDate: "2025-08-03",
            status: "Pending",
            location: "Colombo City",
            price: 8500,
            bookingId: "ED-2025-002",
            features: ["Air Conditioning", "Power Steering", "Bluetooth"]
        },
        {
            id: 3,
            car: "Mercedes-Benz E-Class",
            brand: "Mercedes-Benz",
            model: "E-Class",
            image: "https://via.placeholder.com/300x200?text=Mercedes+E-Class",
            startDate: "2025-07-15",
            endDate: "2025-07-17",
            status: "Completed",
            location: "Kandy",
            price: 22000,
            bookingId: "ED-2025-003",
            features: ["Luxury Interior", "Advanced Safety", "Premium Audio"]
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Confirmed':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'Pending':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'Completed':
                return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'Cancelled':
                return 'bg-red-100 text-red-800 border-red-200';
            default:
                return 'bg-slate-100 text-slate-800 border-slate-200';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Confirmed':
                return (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                );
            case 'Pending':
                return (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                );
            case 'Completed':
                return (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-white">
                <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">My Bookings</h1>
                        <p className="text-blue-100">Manage your Elite Drive reservations</p>
                    </div>
                </div>
            </div>

            {/* Booking Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-100 text-center">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white mb-4">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="text-2xl font-bold text-green-600 mb-1">
                        {bookings.filter(b => b.status === 'Confirmed').length}
                    </div>
                    <p className="text-slate-600 text-sm">Confirmed</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-100 text-center">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center text-white mb-4">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="text-2xl font-bold text-yellow-600 mb-1">
                        {bookings.filter(b => b.status === 'Pending').length}
                    </div>
                    <p className="text-slate-600 text-sm">Pending</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-100 text-center">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-4">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                        {bookings.filter(b => b.status === 'Completed').length}
                    </div>
                    <p className="text-slate-600 text-sm">Completed</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-100 text-center">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-4">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                        LKR {bookings.reduce((total, booking) => total + booking.price, 0).toLocaleString()}
                    </div>
                    <p className="text-slate-600 text-sm">Total Value</p>
                </div>
            </div>

            {/* Bookings List */}
            <div className="space-y-6">
                {bookings.map((booking) => (
                    <div key={booking.id} className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
                        <div className="p-8">
                            <div className="flex flex-col lg:flex-row gap-6">
                                {/* Car Image */}
                                <div className="lg:w-80 flex-shrink-0">
                                    <img
                                        src={booking.image}
                                        alt={booking.car}
                                        className="w-full h-48 lg:h-32 object-cover rounded-xl"
                                    />
                                </div>

                                {/* Booking Details */}
                                <div className="flex-1 space-y-4">
                                    {/* Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-800">{booking.brand}</h3>
                                            <p className="text-lg text-slate-600 font-semibold">{booking.model}</p>
                                            <p className="text-sm text-slate-500">Booking ID: {booking.bookingId}</p>
                                        </div>
                                        <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full border text-sm font-semibold mt-2 sm:mt-0 ${getStatusColor(booking.status)}`}>
                                            {getStatusIcon(booking.status)}
                                            <span>{booking.status}</span>
                                        </div>
                                    </div>

                                    {/* Booking Info Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-xs text-slate-500 font-medium">Rental Period</p>
                                                <p className="text-sm font-semibold text-slate-800">{booking.startDate} to {booking.endDate}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                                                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-xs text-slate-500 font-medium">Pickup Location</p>
                                                <p className="text-sm font-semibold text-slate-800">{booking.location}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                                            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                                <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-xs text-slate-500 font-medium">Total Cost</p>
                                                <p className="text-sm font-semibold text-slate-800">LKR {booking.price.toLocaleString()}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div>
                                        <p className="text-sm font-medium text-slate-700 mb-2">Vehicle Features:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {booking.features.map((feature, index) => (
                                                <span key={index} className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full border border-blue-200">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-200">
                                        {booking.status === 'Confirmed' && (
                                            <>
                                                <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1">
                                                    <span className="flex items-center justify-center space-x-2">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                        </svg>
                                                        <span>Modify Booking</span>
                                                    </span>
                                                </button>
                                                <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1">
                                                    <span className="flex items-center justify-center space-x-2">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                        </svg>
                                                        <span>Cancel Booking</span>
                                                    </span>
                                                </button>
                                            </>
                                        )}
                                        
                                        {booking.status === 'Pending' && (
                                            <button className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1">
                                                <span className="flex items-center justify-center space-x-2">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                                    </svg>
                                                    <span>Awaiting Confirmation</span>
                                                </span>
                                            </button>
                                        )}

                                        {booking.status === 'Completed' && (
                                            <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1">
                                                <span className="flex items-center justify-center space-x-2">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                    </svg>
                                                    <span>Leave Review</span>
                                                </span>
                                            </button>
                                        )}

                                        <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1">
                                            <span className="flex items-center justify-center space-x-2">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                                <span>View Details</span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {bookings.length === 0 && (
                <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-slate-100">
                    <div className="w-24 h-24 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-6">
                        <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">No Bookings Yet</h3>
                    <p className="text-slate-600 mb-6">Start your Elite Drive experience by browsing our premium fleet.</p>
                    <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1">
                        Browse Cars
                    </button>
                </div>
            )}
        </div>
    );
}