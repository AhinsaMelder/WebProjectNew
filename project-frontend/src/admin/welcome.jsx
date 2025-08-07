export default function Welcome() {
    // Mock data for dashboard stats
    const dashboardStats = [
        {
            title: "Total Fleet",
            value: "284",
            subtitle: "Active Vehicles",
            icon: "🚗",
            bgColor: "bg-blue-50",
            textColor: "text-blue-600",
            borderColor: "border-blue-200"
        },
        {
            title: "Active Bookings",
            value: "156",
            subtitle: "Current Rentals",
            icon: "📋",
            bgColor: "bg-green-50",
            textColor: "text-green-600",
            borderColor: "border-green-200"
        },
        {
            title: "Total Users",
            value: "2,847",
            subtitle: "Registered Members",
            icon: "👥",
            bgColor: "bg-purple-50",
            textColor: "text-purple-600",
            borderColor: "border-purple-200"
        },
        {
            title: "Monthly Revenue",
            value: "Rs.2.4M",
            subtitle: "This Month",
            icon: "💰",
            bgColor: "bg-amber-50",
            textColor: "text-amber-600",
            borderColor: "border-amber-200"
        }
    ];

    const quickActions = [
        {
            title: "Add New Vehicle",
            description: "Expand your fleet with premium cars",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                </svg>
            ),
            action: "Manage Fleet",
            color: "from-blue-600 to-cyan-500"
        },
        {
            title: "View Orders",
            description: "Track bookings and rental status",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
            ),
            action: "View Orders",
            color: "from-purple-600 to-pink-500"
        },
        {
            title: "User Management",
            description: "Manage customer accounts",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
            ),
            action: "Manage Users",
            color: "from-green-600 to-emerald-500"
        },
        {
            title: "Analytics",
            description: "View business performance",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
            ),
            action: "View Reports",
            color: "from-amber-600 to-orange-500"
        }
    ];

    const currentDate = new Date().toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
            {/* Welcome Header with Elite Drive Theme */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
                </div>
                
                <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl">
                                <span className="text-2xl font-bold text-white">ED</span>
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold">Welcome to Elite Drive Admin</h1>
                                <p className="text-amber-200 text-lg">Complete control over your car rental business</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-sm text-amber-200">System Status</div>
                            <div className="flex items-center space-x-2 mt-1">
                                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-green-300 font-semibold">Online & Operational</span>
                            </div>
                        </div>
                    </div>

                    {/* Current DateTime */}
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 inline-block">
                        <div className="flex items-center space-x-3">
                            <svg className="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <span className="text-white font-medium">{currentDate}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dashboard Stats */}
            <div className="p-8 bg-slate-50">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                        </svg>
                    </div>
                    Business Overview
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {dashboardStats.map((stat, index) => (
                        <div key={index} className={`${stat.bgColor} ${stat.borderColor} border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                            <div className="flex items-center justify-between mb-3">
                                <div className="text-3xl">{stat.icon}</div>
                                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                            </div>
                            <div className={`text-3xl font-bold ${stat.textColor} mb-1`}>{stat.value}</div>
                            <div className="text-slate-700 font-semibold">{stat.title}</div>
                            <div className="text-slate-500 text-sm">{stat.subtitle}</div>
                        </div>
                    ))}
                </div>

                {/* Quick Actions */}
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    Quick Actions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {quickActions.map((action, index) => (
                        <div 
                            key={index}
                            className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                            onClick={() => console.log(`Navigate to ${action.action}`)}
                        >
                            <div className={`w-16 h-16 bg-gradient-to-r ${action.color} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                {action.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-amber-600 transition-colors">
                                {action.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                {action.description}
                            </p>
                            <div className="flex items-center text-amber-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                                <span>{action.action}</span>
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                {/* System Information */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Recent Activity */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-slate-800">Recent Activity</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-slate-700">New booking for BMW X5</p>
                                    <p className="text-xs text-slate-500">2 minutes ago</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-100">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-slate-700">Vehicle returned successfully</p>
                                    <p className="text-xs text-slate-500">15 minutes ago</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg border border-amber-100">
                                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-slate-700">New user registration</p>
                                    <p className="text-xs text-slate-500">1 hour ago</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* System Health */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-slate-800">System Health</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center p-2">
                                <span className="text-sm font-medium text-slate-600">Server Status</span>
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-semibold text-green-600">Operational</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center p-2">
                                <span className="text-sm font-medium text-slate-600">Database</span>
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-semibold text-green-600">Connected</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center p-2">
                                <span className="text-sm font-medium text-slate-600">Payment Gateway</span>
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-semibold text-green-600">Active</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center p-2">
                                <span className="text-sm font-medium text-slate-600">Last Backup</span>
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-semibold text-blue-600">2 hours ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}