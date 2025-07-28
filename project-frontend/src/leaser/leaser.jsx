import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import AddCar from "./addCar";
import Profile from "./profile";

export default function LeaserPage() {
    const location = useLocation();
    const naviagte = useNavigate();
    
    const navigationItems = [
        {
            path: "/leaserpage/cars",
            label: "Cars",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
            )
        },
        {
            path: "/leaserpage/add-cars",
            label: "Add Cars",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            )
        },
        {
            path: "/leaserpage/orders",
            label: "Orders",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
            )
        },
        {
            path: "/leaserpage/profile",
            label: "Update Profile",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
            )
        }
    ];

    const isActive = (path) => location.pathname === path;

    function logout(){
        localStorage.clear();
        naviagte("/");
        
    }

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
                            <p className="text-sm text-blue-200">Leaser Dashboard</p>
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
                                        ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg transform scale-105'
                                        : 'text-blue-100 hover:bg-white/10 hover:text-white hover:translate-x-1'
                                }`}
                            >
                                <span className={`transition-colors duration-300 ${
                                    isActive(item.path) ? 'text-white' : 'text-blue-300 group-hover:text-white'
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
                <div className="p-6 border-t border-white/10 space-y-4">
                    {/* User Profile Card */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                                <span className="text-sm font-bold text-white">LS</span>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-semibold text-white">Leaser</p>
                                <p className="text-xs text-blue-200">Premium Account</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Logout Button */}
                    <button
                     onClick={logout}
                     className="w-full flex items-center justify-center space-x-2 bg-red-500/20 hover:bg-red-500/30 border border-red-400/50 text-red-300 hover:text-red-200 font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span>Logout</span>
                    </button>
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
                                Manage your premium fleet and bookings
                            </p>
                        </div>
                        <div className="flex items-center space-x-4">
                            {/* Notifications */}
                            <button className="relative p-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors duration-300">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM9 7h6a2 2 0 012 2v8a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2z" />
                                </svg>
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                            </button>
                            {/* Settings */}
                            <button className="p-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors duration-300">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-auto p-8 bg-slate-50">
                    <Routes path="/*">
                        <Route path="/cars" element={
                            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
                                <h1 className="text-3xl font-bold text-slate-800">Your Fleet</h1>
                                <p className="text-slate-600 mt-2">Manage your premium vehicle collection</p>
                            </div>
                        } />
                        <Route path="/add-cars" element={<AddCar/>} />
                        <Route path="/orders" element={
                            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
                                <h1 className="text-3xl font-bold text-slate-800">Orders Management</h1>
                                <p className="text-slate-600 mt-2">Track and manage all booking requests</p>
                            </div>
                        } />
                        <Route path="/profile" element={<Profile/>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}