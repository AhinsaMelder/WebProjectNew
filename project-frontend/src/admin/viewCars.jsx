import { useEffect, useState } from "react";

export default function ViewCars() {
    const [cars, setCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [availabilityFilter, setAvailabilityFilter] = useState('all');

    async function getCars(){
        try{
            setLoading(true);
            const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/api/cars/admincar');
            const data = await response.json();
            setCars(data);
            console.log(data);
            setLoading(false);
        }
        catch(error){
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(()=>{
        getCars();
    },[]);

    const formatCurrency = (amount) => {
        return `Rs.${amount?.toLocaleString()}`;
    };

    function openModal(car) {
        setSelectedCar(car);
        setShowModal(true);
    }

    function closeModal() {
        setShowModal(false);
        setSelectedCar(null);
    }

    // Filter cars based on search term and availability
    const filteredCars = cars.filter(car => {
        // Search filter (brand or model)
        const matchesSearch = 
            car.brand?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            car.model?.toLowerCase().includes(searchTerm.toLowerCase());

        // Availability filter
        const matchesAvailability = 
            availabilityFilter === 'all' ||
            (availabilityFilter === 'available' && car.isAvailable === true) ||
            (availabilityFilter === 'unavailable' && car.isAvailable === false);

        return matchesSearch && matchesAvailability;
    });
    // Statistics
    const totalCars = cars.length;
    const availableCars = cars.filter(car => car.isAvailable === true).length;
    const unavailableCars = cars.filter(car => car.isAvailable === false).length;

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
                    <h2 className="text-lg font-semibold">Loading Cars...</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    {/* Header */}
                    <div className="bg-blue-600 p-6">
                        <h1 className="text-2xl font-bold text-white">All Cars Overview</h1>
                        <p className="text-blue-100">Total Cars: {totalCars} | Available: {availableCars} | Unavailable: {unavailableCars}</p>
                    </div>

                    {/* Search and Filter Section */}
                    <div className="bg-gray-50 p-6 border-b">
                        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                            {/* Search Bar */}
                            <div className="flex-1 max-w-md">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search by brand or model..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                    <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Availability Filter */}
                            <div className="flex items-center space-x-4">
                                <label className="text-sm font-medium text-gray-700">Filter by Availability:</label>
                                <select 
                                    value={availabilityFilter}
                                    onChange={(e) => setAvailabilityFilter(e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="all">All Cars ({totalCars})</option>
                                    <option value="available">Available ({availableCars})</option>
                                    <option value="unavailable">Unavailable ({unavailableCars})</option>
                                </select>
                            </div>

                            {/* Clear Filters Button */}
                            {(searchTerm || availabilityFilter !== 'all') && (
                                <button
                                    onClick={() => {
                                        setSearchTerm('');
                                        setAvailabilityFilter('all');
                                    }}
                                    className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm font-medium"
                                >
                                    Clear Filters
                                </button>
                            )}
                        </div>

                        {/* Results Summary */}
                        <div className="mt-4 flex items-center justify-between">
                            <div className="text-sm text-gray-600">
                                Showing {filteredCars.length} of {totalCars} cars
                                {searchTerm && <span className="font-medium"> matching "{searchTerm}"</span>}
                                {availabilityFilter !== 'all' && <span className="font-medium"> ({availabilityFilter})</span>}
                            </div>
                            {filteredCars.length !== totalCars && (
                                <div className="text-sm">
                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                        Filtered Results
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Cars Table */}
                    <div className="overflow-x-auto">
                        {filteredCars.length === 0 ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-600 mb-2">
                                    {searchTerm || availabilityFilter !== 'all' ? 'No Cars Match Your Filters' : 'No Cars Found'}
                                </h3>
                                <p className="text-gray-500">
                                    {searchTerm 
                                        ? `No cars found matching "${searchTerm}"` 
                                        : availabilityFilter !== 'all'
                                        ? `No ${availabilityFilter} cars found`
                                        : 'No cars available in the system'
                                    }
                                </p>
                                {(searchTerm || availabilityFilter !== 'all') && (
                                    <button
                                        onClick={() => {
                                            setSearchTerm('');
                                            setAvailabilityFilter('all');
                                        }}
                                        className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm"
                                    >
                                        Clear Filters
                                    </button>
                                )}
                            </div>
                        ) : (
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Car ID</th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Vehicle</th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Owner</th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Price/Day</th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Available</th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {filteredCars.map((car, index) => (
                                        <tr key={car._id || index} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 text-sm font-medium text-blue-600">
                                                {car.carId || 'N/A'}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center">
                                                    <img 
                                                        src={car.images?.[0] || "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=50&h=40&fit=crop"} 
                                                        alt="Car" 
                                                        className="w-12 h-8 rounded object-cover mr-3"
                                                    />
                                                    <div>
                                                        <div className="font-medium text-gray-900">
                                                            <span className={searchTerm && (car.brand?.toLowerCase().includes(searchTerm.toLowerCase()) || car.model?.toLowerCase().includes(searchTerm.toLowerCase())) ? 'bg-yellow-200' : ''}>
                                                                {car.brand || 'Unknown'} {car.model || ''}
                                                            </span>
                                                        </div>
                                                        <div className="text-sm text-gray-500">
                                                            {car.year || 'N/A'} • {car.color || 'N/A'}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-900">
                                                {car.email || 'No email'}
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium text-green-600">
                                                {car.price ? formatCurrency(car.price) : 'N/A'}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                                    car.isAvailable === true
                                                        ? 'bg-green-100 text-green-800' 
                                                        : 'bg-red-100 text-red-800'
                                                }`}>
                                                    {car.isAvailable === true ? 'Available' : 'Not Available'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <button
                                                    onClick={() => openModal(car)}
                                                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
                                                >
                                                    View Details
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>

                {/* Modal for Car Details */}
                {showModal && selectedCar && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                            {/* Modal Header */}
                            <div className="bg-blue-600 p-4 rounded-t-lg">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-xl font-bold text-white">Car Details</h2>
                                    <button
                                        onClick={closeModal}
                                        className="text-white hover:text-gray-200"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Modal Body */}
                            <div className="p-6">
                                <div className="grid lg:grid-cols-2 gap-8">
                                    {/* Car Images */}
                                    <div className="space-y-4">
                                        <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                                            <img
                                                src={selectedCar.images?.[0] || "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop"}
                                                alt={`${selectedCar.brand || 'Car'} ${selectedCar.model || ''}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        
                                        {/* Additional Images */}
                                        {selectedCar.images && selectedCar.images.length > 1 && (
                                            <div className="grid grid-cols-3 gap-2">
                                                {selectedCar.images.slice(1, 4).map((image, index) => (
                                                    <div key={index} className="aspect-square rounded-lg overflow-hidden shadow">
                                                        <img
                                                            src={image}
                                                            alt={`Car image ${index + 2}`}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Car Information */}
                                    <div className="space-y-6">
                                        {/* Basic Info */}
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <h3 className="text-lg font-bold text-gray-900 mb-4">Vehicle Information</h3>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <h4 className="text-sm text-gray-500">Car ID</h4>
                                                    <p className="font-medium text-blue-600">{selectedCar.carId || 'N/A'}</p>
                                                </div>
                                                <div>
                                                    <h4 className="text-sm text-gray-500">Brand</h4>
                                                    <p className="font-medium">{selectedCar.brand || 'N/A'}</p>
                                                </div>
                                                <div>
                                                    <h4 className="text-sm text-gray-500">Model</h4>
                                                    <p className="font-medium">{selectedCar.model || 'N/A'}</p>
                                                </div>
                                                <div>
                                                    <h4 className="text-sm text-gray-500">Year</h4>
                                                    <p className="font-medium">{selectedCar.year || 'N/A'}</p>
                                                </div>
                                                <div>
                                                    <h4 className="text-sm text-gray-500">Color</h4>
                                                    <p className="font-medium">{selectedCar.color || 'N/A'}</p>
                                                </div>
                                                <div>
                                                    <h4 className="text-sm text-gray-500">Availability</h4>
                                                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                                        selectedCar.isAvailable === true
                                                            ? 'bg-green-100 text-green-800' 
                                                            : 'bg-red-100 text-red-800'
                                                    }`}>
                                                        {selectedCar.isAvailable === true ? 'Available' : 'Not Available'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Pricing */}
                                        <div className="bg-green-50 p-4 rounded-lg">
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">Pricing</h3>
                                            <div className="text-2xl font-bold text-green-600">
                                                {selectedCar.price ? formatCurrency(selectedCar.price) : 'N/A'}
                                            </div>
                                            <p className="text-sm text-gray-500">per day</p>
                                        </div>

                                        {/* Owner Information */}
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="text-lg font-bold text-gray-900 mb-4">Owner Details</h3>
                                            <div>
                                                <h4 className="text-sm text-gray-500">Email</h4>
                                                <p className="font-medium">{selectedCar.email || 'N/A'}</p>
                                            </div>
                                        </div>

                                        {/* Car Specifications */}
                                        <div className="bg-yellow-50 p-4 rounded-lg">
                                            <h3 className="text-lg font-bold text-gray-900 mb-4">Specifications</h3>
                                            <div className="space-y-2">
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Brand:</span>
                                                    <span className="font-medium">{selectedCar.brand || 'N/A'}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Model:</span>
                                                    <span className="font-medium">{selectedCar.model || 'N/A'}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Year:</span>
                                                    <span className="font-medium">{selectedCar.year || 'N/A'}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Color:</span>
                                                    <span className="font-medium">{selectedCar.color || 'N/A'}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="bg-gray-50 px-6 py-3 rounded-b-lg">
                                <button
                                    onClick={closeModal}
                                    className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}