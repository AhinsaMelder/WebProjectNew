import { Link, Route, Routes, useLocation } from "react-router-dom";

export default function AdminPage() {
    const location = useLocation();

    const navigationItems = [
        {
            path: "/adminpage/cars",
            label: "Fleet Management",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
            )
        },
        {
            path: "/adminpage/users",
            label: "User Management",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
            )
        },
        {
            path: "/adminpage/orders",
            label: "Order Management",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
            )
        },
        {
            path: "/adminpage/reviews",
            label: "Reviews & Ratings",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            )
        },
        {
            path: "/adminpage/analytics",
            label: "Analytics",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
            )
        },
        {
            path: "/adminpage/settings",
            label: "System Settings",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        },
        {
            path: "/adminpage/logout",
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

    function handleLogout() {
        localStorage.removeItem('token');
        navigate('/');
    }

    return (
        <div className="w-full h-screen flex bg-slate-50">
            {/* Sidebar */}
            <div className="h-full w-[320px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col shadow-2xl">
                {/* Header */}
                <div className="p-6 border-b border-white/10">
                    <div className="flex items-center space-x-3">
                        <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                            <span className="text-2xl font-bold text-white">ED</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white">Elite Drive</h1>
                            <p className="text-sm text-amber-200">Admin Dashboard</p>
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
                                            : 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg transform scale-105'
                                        : item.isLogout
                                            ? 'text-red-200 hover:bg-red-500/20 hover:text-red-100 hover:translate-x-1'
                                            : 'text-amber-100 hover:bg-white/10 hover:text-white hover:translate-x-1'
                                }`}
                            >
                                <span className={`transition-colors duration-300 ${
                                    isActive(item.path) 
                                        ? 'text-white' 
                                        : item.isLogout
                                            ? 'text-red-300 group-hover:text-red-100'
                                            : 'text-amber-300 group-hover:text-white'
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

                {/* Admin Profile Footer */}
                <div className="p-6 border-t border-white/10">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                                <span className="text-sm font-bold text-white">AD</span>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-semibold text-white">System Admin</p>
                                <p className="text-xs text-amber-200">Super User Access</p>
                            </div>
                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="h-full w-[calc(100%-320px)] flex flex-col">
                {/* Top Bar */}
                <div className="bg-white shadow-sm border-b border-slate-200 px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-800">
                                {navigationItems.find(item => isActive(item.path))?.label || 'Admin Dashboard'}
                            </h2>
                            <p className="text-sm text-slate-600">
                                Manage Elite Drive operations and system settings
                            </p>
                        </div>
                        <div className="flex items-center space-x-4">
                            {/* System Status */}
                            <div className="flex items-center space-x-2 bg-green-50 text-green-700 px-3 py-2 rounded-lg border border-green-200">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-semibold">System Online</span>
                            </div>
                            
                            {/* Notifications */}
                            <button className="relative p-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors duration-300">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM9 7h6a2 2 0 012 2v8a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2z" />
                                </svg>
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                            </button>
                            
                            {/* Quick Actions */}
                            <button className="p-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors duration-300">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
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
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h1 className="text-3xl font-bold text-slate-800">Fleet Management</h1>
                                        <p className="text-slate-600">Manage vehicles, availability, and maintenance</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold text-blue-600 mb-1">125</div>
                                        <p className="text-blue-700 text-sm">Total Vehicles</p>
                                    </div>
                                    <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold text-green-600 mb-1">98</div>
                                        <p className="text-green-700 text-sm">Available</p>
                                    </div>
                                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold text-yellow-600 mb-1">27</div>
                                        <p className="text-yellow-700 text-sm">On Rent</p>
                                    </div>
                                </div>
                            </div>
                        } />
                        <Route path="/users" element={
                            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h1 className="text-3xl font-bold text-slate-800">User Management</h1>
                                        <p className="text-slate-600">Manage customers, leasers, and user accounts</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold text-blue-600 mb-1">2,847</div>
                                        <p className="text-blue-700 text-sm">Total Users</p>
                                    </div>
                                    <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold text-green-600 mb-1">2,654</div>
                                        <p className="text-green-700 text-sm">Customers</p>
                                    </div>
                                    <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold text-purple-600 mb-1">193</div>
                                        <p className="text-purple-700 text-sm">Leasers</p>
                                    </div>
                                </div>
                            </div>
                        } />
                        <Route path="/orders" element={
                            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h1 className="text-3xl font-bold text-slate-800">Order Management</h1>
                                        <p className="text-slate-600">Track bookings, payments, and rental history</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                    <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold text-green-600 mb-1">156</div>
                                        <p className="text-green-700 text-sm">Active Rentals</p>
                                    </div>
                                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold text-yellow-600 mb-1">23</div>
                                        <p className="text-yellow-700 text-sm">Pending</p>
                                    </div>
                                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold text-blue-600 mb-1">1,284</div>
                                        <p className="text-blue-700 text-sm">Completed</p>
                                    </div>
                                    <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold text-purple-600 mb-1">LKR 2.4M</div>
                                        <p className="text-purple-700 text-sm">Revenue</p>
                                    </div>
                                </div>
                            </div>
                        } />
                        <Route path="/reviews" element={
                            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h1 className="text-3xl font-bold text-slate-800">Reviews & Ratings</h1>
                                        <p className="text-slate-600">Monitor customer feedback and service quality</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold text-yellow-600 mb-1">4.8</div>
                                        <p className="text-yellow-700 text-sm">Average Rating</p>
                                    </div>
                                    <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold text-green-600 mb-1">1,847</div>
                                        <p className="text-green-700 text-sm">Total Reviews</p>
                                    </div>
                                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold text-blue-600 mb-1">97%</div>
                                        <p className="text-blue-700 text-sm">Positive Feedback</p>
                                    </div>
                                </div>
                            </div>
                        } />
                        <Route path="/analytics" element={
                            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h1 className="text-3xl font-bold text-slate-800">Analytics Dashboard</h1>
                                        <p className="text-slate-600">Business insights and performance metrics</p>
                                    </div>
                                </div>
                                <div className="text-center py-12">
                                    <div className="w-24 h-24 mx-auto bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-12 h-12 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-2">Analytics Coming Soon</h3>
                                    <p className="text-slate-600">Advanced reporting and analytics features in development</p>
                                </div>
                            </div>
                        } />
                        <Route path="/settings" element={
                            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h1 className="text-3xl font-bold text-slate-800">System Settings</h1>
                                        <p className="text-slate-600">Configure system parameters and preferences</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                        <h3 className="font-bold text-slate-800 mb-2">Application Settings</h3>
                                        <p className="text-slate-600 text-sm">Configure app behavior and features</p>
                                    </div>
                                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                        <h3 className="font-bold text-slate-800 mb-2">Security Settings</h3>
                                        <p className="text-slate-600 text-sm">Manage access controls and permissions</p>
                                    </div>
                                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                        <h3 className="font-bold text-slate-800 mb-2">Payment Configuration</h3>
                                        <p className="text-slate-600 text-sm">Setup payment gateways and methods</p>
                                    </div>
                                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                        <h3 className="font-bold text-slate-800 mb-2">Notification Settings</h3>
                                        <p className="text-slate-600 text-sm">Configure alerts and messaging</p>
                                    </div>
                                </div>
                            </div>
                        } />
                        <Route path="/logout" element={
                            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100 text-center">
                                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-bold text-red-600 mb-2">Admin Logout</h2>
                                <p className="text-slate-600 mb-6">Are you sure you want to logout from the admin panel?</p>
                                <button 
                                onClick={handleLogout}
                                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                                    <span className="flex items-center justify-center space-x-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                        </svg>
                                        <span>Confirm Logout</span>
                                    </span>
                                </button>
                            </div>
                        } />
                    </Routes>
                </div>
            </div>
        </div>
    );
}