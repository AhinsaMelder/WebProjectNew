import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LeaserCar() {
    const [cars, setCars] = useState([]);
    const email = localStorage.getItem('userEmail');
    const navigate = useNavigate();

    function getCarsByEmail(){
        try{
            axios.get(import.meta.env.VITE_BACKEND_URL + '/api/cars/getcarsemail/' + email)
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
        getCarsByEmail();
    },[])

    function deleteCar(carId){
        try{
            axios.delete(import.meta.env.VITE_BACKEND_URL + '/api/cars/deletecar/' + carId)
            .then((response)=>{
                getCarsByEmail();
            })
            .catch((error)=>{
                console.log(error);
            })
        }
        catch(error){
            console.log(error);
        }
    }

    const formatCurrency = (amount) => {
        return `Rs.${amount?.toLocaleString()}`;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 p-6">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-white">My Vehicles</h2>
                                <p className="text-blue-200">Manage your car rental fleet</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-sm font-semibold">
                                    {cars.length} Vehicles
                                </div>
                                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-white/90 font-semibold text-sm">Live Updates</span>
                            </div>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Vehicle ID</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Image</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Vehicle Details</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Specifications</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Price</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Status</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                {cars.map((car, index) => (
                                    <tr key={index} className="hover:bg-slate-50 transition-colors duration-200">
                                        <td className="px-6 py-4">
                                            <div className="font-mono text-sm font-semibold text-blue-600">
                                                #{car.carId}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="w-20 h-16 rounded-xl overflow-hidden shadow-lg border border-slate-200">
                                                <img 
                                                    src={car.images[0]} 
                                                    alt={`${car.brand} ${car.model}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div>
                                                <div className="font-semibold text-slate-900 text-lg">
                                                    {car.brand} {car.model}
                                                </div>
                                                <div className="text-sm text-slate-500">
                                                    {car.year} • {car.color}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="space-y-1">
                                                <div className="flex items-center space-x-2">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                    <span className="text-sm text-slate-600">Year: {car.year}</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                    <span className="text-sm text-slate-600">Color: {car.color}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="font-bold text-lg text-green-600">
                                                {formatCurrency(car.price)}
                                            </div>
                                            <div className="text-xs text-slate-500">per day</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center space-x-2">
                                                <div className={`w-3 h-3 rounded-full ${car.isAvailable ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                    car.isAvailable 
                                                        ? 'bg-green-100 text-green-800' 
                                                        : 'bg-red-100 text-red-800'
                                                }`}>
                                                    {car.isAvailable ? "Available" : "Not Available"}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex space-x-2">
                                                <button 
                                                    onClick={() => {
                                                        navigate('/leaserpage/edit-cars', {
                                                            state: car
                                                        });
                                                    }}
                                                    className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                                                >
                                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                    Edit
                                                </button>
                                                <button 
                                                    onClick={() => {
                                                        if (window.confirm('Are you sure you want to delete this vehicle?')) {
                                                            deleteCar(car.carId);
                                                        }
                                                    }}
                                                    className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-red-600 to-pink-500 hover:from-red-700 hover:to-pink-600 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                                                >
                                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1-1H8a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Empty State */}
                    {cars.length === 0 && (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-2xl flex items-center justify-center">
                                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">No vehicles yet</h3>
                            <p className="text-slate-500">Add your first vehicle to start managing your rental fleet</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}