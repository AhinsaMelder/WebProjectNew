import { Link, Route, Routes, useLocation, Navigate } from "react-router-dom";
import Welcome from "./welcome";


import { Logout } from "./logout";
import CustomerBooking from "./customerBooking";
import Profile from "./profile";

export default function CustomerPage() {
    const location = useLocation();
    const firstName = localStorage.getItem("username");

    const navigationItems = [
        {
            path: "/customerpage/welcome",
            label: "Welcome",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
            )
        },
        
        {
            path: "/customerpage/bookings",
            label: "My Bookings",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
            )
        },
       
        {
            path: "/customerpage/profile",
            label: "Profile",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
            )
        },
        {
            path: "/customerpage/payment",
            label: "Online Payment",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        },
        {
            path: "/customerpage/logout",
            label: "Logout",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
            ),
            isLogout: true
        }
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <div className="w-full h-screen flex bg-slate-50">
            {/* Sidebar */}
            <div className="h-full w-[300px] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex flex-col shadow-2xl">
                {/* Header */}
                <div className="p-6 border-b border-white/10">
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                            <span className="text-xl font-bold text-white">ED</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white">Elite Drive</h1>
                            <p className="text-sm text-blue-200">Customer Dashboard</p>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-6">
                    <div className="space-y-2">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`group flex items-center space-x-3 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                                    isActive(item.path)
                                        ? item.isLogout
                                            ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg transform scale-105'
                                            : 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg transform scale-105'
                                        : item.isLogout
                                            ? 'text-red-200 hover:bg-red-500/20 hover:text-red-100 hover:translate-x-1'
                                            : 'text-blue-100 hover:bg-white/10 hover:text-white hover:translate-x-1'
                                }`}
                            >
                                <span className={`transition-colors duration-300 ${
                                    isActive(item.path) 
                                        ? 'text-white' 
                                        : item.isLogout
                                            ? 'text-red-300 group-hover:text-red-100'
                                            : 'text-blue-300 group-hover:text-white'
                                }`}>
                                    {item.icon}
                                </span>
                                <span>{item.label}</span>
                                {isActive(item.path) && (
                                    <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                )}
                            </Link>
                        ))}
                    </div>
                </nav>

                {/* Footer */}
                <div className="p-6 border-t border-white/10">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                                <span className="text-sm font-bold text-white">CU</span>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-semibold text-white">Customer</p>
                                <p className="text-xs text-blue-200">{firstName}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="h-full w-[calc(100%-300px)] flex flex-col">
                {/* Top Bar */}
                <div className="bg-white shadow-sm border-b border-slate-200 px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-800">
                                {navigationItems.find(item => isActive(item.path))?.label || 'Dashboard'}
                            </h2>
                            <p className="text-sm text-slate-600">
                                Your premium car rental experience
                            </p>
                        </div>
                        <div className="flex items-center space-x-4">
                            {/* Notifications */}
                            <button className="relative p-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors duration-300">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM9 7h6a2 2 0 012 2v8a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2z" />
                                </svg>
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"></div>
                            </button>
                            {/* Help */}
                            <button className="p-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors duration-300">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-auto p-8 bg-slate-50">
                    <Routes>
                        {/* Default route - automatically redirect to welcome */}
                        <Route path="/" element={<Navigate to="/customerpage/welcome" replace />} />
                        <Route path="/welcome" element={<Welcome />} />
                        
                        <Route path="/bookings" element={<CustomerBooking/>} />
                        
                        <Route path="/profile" element={<Profile/>} />
                        <Route path="/payment" element={
                            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
                                <h1 className="text-3xl font-bold text-slate-800">Online Payment</h1>
                                <p className="text-slate-600 mt-2">Make secure online payments for your bookings and rentals</p>
                            </div>
                        } />
                        <Route path="/logout" element={<Logout />} />
                        {/* Catch-all route for any unmatched paths */}
                        <Route path="*" element={<Navigate to="/customerpage/welcome" replace />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}