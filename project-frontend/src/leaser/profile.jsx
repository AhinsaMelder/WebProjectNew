export default function Profile() {
    return (
        <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 rounded-2xl p-8 mb-8 text-white">
                <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">Update Profile</h1>
                        <p className="text-blue-100">Manage your account information</p>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100">
                <div className="p-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                        </div>
                        Personal Information
                    </h2>

                    <form className="space-y-6">
                        {/* First Name */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">First Name *</label>
                            <input 
                                type="text" 
                                name="firstName" 
                                placeholder="Enter your first name"
                                required 
                                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            />
                        </div>

                        {/* Last Name */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">Last Name *</label>
                            <input 
                                type="text" 
                                name="lastName" 
                                placeholder="Enter your last name"
                                required 
                                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            />
                        </div>

                        {/* Email Address */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">Email Address *</label>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Enter your email address"
                                required 
                                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            />
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">Password *</label>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Enter your password"
                                required 
                                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            />
                        </div>

                        {/* Submit Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-end pt-6 border-t border-slate-200">
                            <button 
                                type="button"
                                className="bg-white shadow-lg border border-slate-200 hover:shadow-xl text-slate-700 font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                            >
                                Cancel
                            </button>
                            <button 
                                type="submit" 
                                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                            >
                                <span className="flex items-center justify-center space-x-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Update Profile</span>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}