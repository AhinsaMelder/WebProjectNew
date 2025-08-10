import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Welcome from "./welcome";
import UserManagment from "./userManagment";
import AdminOrder from "./adminOrder";
import ManageCars from "./rentalcars";
import ViewCars from "./viewCars";



export default function AdminPage() {

    const location = useLocation();

    const navigate = useNavigate();

    const navigationItems = [
         {
            path: "/adminpage/welcome",
            label: "Welcome",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
            )
        },
        {
            path: "/adminpage/cars",
            label: " Vehicle Approvals",  
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
          path: "/adminpage/viewrentalcars",
          label: "Fleet Managements",
          icon: (
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.5 3a2.5 2.5 0 100 5 2.48 2.48 0 001.5-.5l1.79 1.79c.2.2.2.51 0 .71l-1.29 1.29a.5.5 0 01-.71 0L16 10.21V11h-1.5l-.44 1.32a4.5 4.5 0 00-8.12 0L5.5 11H4v-1.5h1.5l.44-1.32a4.5 4.5 0 018.12 0L14.5 9H16V7.79l-1.21-1.21A2.48 2.48 0 0016.5 7a2.5 2.5 0 000-5zM6.5 15a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/>
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
                        <Route path="/" element={<Welcome/>} />
                        <Route path="/welcome" element={<Welcome/>} />
                        <Route path="/cars" element={<ManageCars />} />
                        <Route path="/users" element=  {<UserManagment/>} />
                        <Route path="/orders" element={<AdminOrder/>} />
                         <Route path="/viewrentalcars" element={<ViewCars/>} />
                        
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