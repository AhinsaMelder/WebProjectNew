import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function ManageCars() {

    const [cars, setCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    function getPendingCars(){
        try{
            axios.get(import.meta.env.VITE_BACKEND_URL + '/api/cars/getPendingCars')
            .then((response)=>{
                setCars(response.data);
                console.log(response.data);
            })
            .catch((error)=>{
                console.log(error);
            })
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getPendingCars();
    },[])

    // Action handlers (design only)
    function handleApprove(carId) {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('You are not logged in'); // Changed from toast.error if no toast
            return;
        }

        try {
            axios.put(
                `${import.meta.env.VITE_BACKEND_URL}/api/cars/approvedcar/${carId}`,
                {}, // Empty body since it's a PUT request
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                       
                    }
                }
            )
            .then((response) => {
                toast.success('Car approved successfully');
                getPendingCars(); // Refresh the list
                setShowModal(false);
                setSelectedCar(null);
            })
            .catch((error) => {
                console.error('Error approving car:', error);
                console.error('Error response:', error.response?.data);
            });
        } catch (error) {
            console.error('Request failed:', error);
        }
    }


    function handleReject(carId) {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('You are not logged in'); // Changed from toast.error if no toast
            return;
        }

        try {
            axios.put(
                `${import.meta.env.VITE_BACKEND_URL}/api/cars/rejectcar/${carId}`,
                {}, // Empty body since it's a PUT request
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                       
                    }
                }
            )
            .then((response) => {
                toast.success('Car rejected successfully');
                getPendingCars(); 
                setShowModal(false);
                setSelectedCar(null);
            })
            .catch((error) => {
                console.error('Error rejecting car:', error);
                console.error('Error response:', error.response?.data);
            });
        } catch (error) {
            console.error('Request failed:', error);
        }
    }

   
    function openModal(car) {
        setSelectedCar(car);
        setShowModal(true);
    }

    function closeModal() {
        setShowModal(false);
        setSelectedCar(null);
    }

    return (
        <>
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-6 text-white">
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold">Pending Vehicle Approvals</h1>
                            <p className="text-amber-200 text-lg">Click on any vehicle to review and approve</p>
                        </div>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="bg-slate-50 border-b border-slate-200 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold text-yellow-600 mb-1">{cars.length}</div>
                            <p className="text-yellow-700 text-sm">Pending Approvals</p>
                        </div>
                        <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold text-green-600 mb-1">0</div>
                            <p className="text-green-700 text-sm">Approved Today</p>
                        </div>
                        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold text-red-600 mb-1">0</div>
                            <p className="text-red-700 text-sm">Rejected Today</p>
                        </div>
                    </div>
                </div>

                {/* Table - Clickable Rows */}
                <div className="p-6">
                    {cars.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="w-24 h-24 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-12 h-12 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">No Pending Vehicles</h3>
                            <p className="text-slate-600">All vehicle submissions have been reviewed</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-slate-200">
                                        <th className="text-left px-6 py-4 font-bold text-slate-800">ID</th>
                                        <th className="text-left px-6 py-4 font-bold text-slate-800">Owner Email</th>
                                        <th className="text-left px-6 py-4 font-bold text-slate-800">Vehicle Image</th>
                                        <th className="text-left px-6 py-4 font-bold text-slate-800">Brand</th>
                                        <th className="text-left px-6 py-4 font-bold text-slate-800">Model</th>
                                        <th className="text-left px-6 py-4 font-bold text-slate-800">Year</th>
                                        <th className="text-left px-6 py-4 font-bold text-slate-800">Color</th>
                                        <th className="text-left px-6 py-4 font-bold text-slate-800">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cars.map((car, index) => (
                                        <tr 
                                            key={index} 
                                            className="border-b border-slate-100 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 cursor-pointer transform hover:scale-[1.01]"
                                            onClick={() => openModal(car)}
                                        >
                                            <td className="px-6 py-4">
                                                <div className="font-semibold text-slate-800">#{car.carId}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-slate-700">{car.email}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="w-20 h-20 rounded-xl overflow-hidden shadow-lg border border-slate-200">
                                                    <img 
                                                        src={car.images?.[0] || car.image || "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=80&h=80&fit=crop"} 
                                                        alt="Vehicle" 
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="font-semibold text-slate-800">{car.brand}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="font-semibold text-slate-800">{car.model}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-slate-700">{car.year}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center space-x-2">
                                                    <div className="w-4 h-4 rounded-full bg-slate-300 border border-slate-400"></div>
                                                    <span className="text-slate-700">{car.color}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="font-bold text-lg text-amber-600">Rs.{car.price?.toLocaleString()}</div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                {/* Footer */}
                {cars.length > 0 && (
                    <div className="bg-slate-50 border-t border-slate-200 px-6 py-4">
                        <div className="flex items-center justify-between">
                            <div className="text-sm text-slate-600">
                                Showing {cars.length} pending vehicle{cars.length !== 1 ? 's' : ''} for review
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                                <span className="text-sm text-slate-600">Click any row to approve/reject</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Modal - Simple Approve/Reject Only */}
            {showModal && selectedCar && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full transform transition-all duration-300 scale-100">
                        {/* Modal Header */}
                        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-6 text-white text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4">
                                <span className="text-2xl font-bold text-white">#{selectedCar.carId}</span>
                            </div>
                            <h2 className="text-2xl font-bold mb-2">{selectedCar.brand} {selectedCar.model}</h2>
                            <p className="text-amber-200">Make your decision</p>
                        </div>

                        {/* Action Buttons */}
                        <div className="p-8">
                            <div className="space-y-4">
                                <button 
                                    onClick={() => handleApprove(selectedCar.carId)}
                                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                                >
                                    <span className="flex items-center justify-center space-x-3">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-lg">Accept</span>
                                    </span>
                                </button>
                                
                                <button 
                                    onClick={() => handleReject(selectedCar.carId)}
                                    className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                                >
                                    <span className="flex items-center justify-center space-x-3">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-lg">Reject</span>
                                    </span>
                                </button>

                                <button 
                                    onClick={closeModal}
                                    className="w-full bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}