export function Profile() {
    return (
        <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 mb-8 text-white">
                <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">Customer Profile</h1>
                        <p className="text-blue-100">Update your Elite Drive customer information</p>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                <form className="p-8 space-y-8" encType="multipart/form-data">
                    {/* Personal Information Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span>Personal Information</span>
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Contact Number */}
                            <div className="space-y-3">
                                <label className="flex items-center space-x-2 text-slate-800 font-semibold">
                                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <span>Contact Number</span>
                                </label>
                                <input 
                                    type="tel" 
                                    name="contact" 
                                    placeholder="0771234567" 
                                    required 
                                    className="w-full bg-slate-50 border-2 border-slate-200 hover:border-green-400 focus:border-green-600 focus:ring-2 focus:ring-green-600/20 rounded-xl px-4 py-4 text-slate-800 font-medium transition-all duration-300 outline-none"
                                />
                            </div>

                            {/* Emergency Contact */}
                            <div className="space-y-3">
                                <label className="flex items-center space-x-2 text-slate-800 font-semibold">
                                    <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <span>Emergency Contact</span>
                                </label>
                                <input 
                                    type="tel" 
                                    name="emergencyContact" 
                                    placeholder="0712345678"
                                    className="w-full bg-slate-50 border-2 border-slate-200 hover:border-red-400 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 rounded-xl px-4 py-4 text-slate-800 font-medium transition-all duration-300 outline-none"
                                />
                            </div>

                            {/* Date of Birth */}
                            <div className="space-y-3">
                                <label className="flex items-center space-x-2 text-slate-800 font-semibold">
                                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                    </svg>
                                    <span>Date of Birth</span>
                                </label>
                                <input 
                                    type="date" 
                                    name="dob" 
                                    required 
                                    className="w-full bg-slate-50 border-2 border-slate-200 hover:border-purple-400 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 rounded-xl px-4 py-4 text-slate-800 font-medium transition-all duration-300 outline-none"
                                />
                            </div>

                            {/* Gender */}
                            <div className="space-y-3">
                                <label className="flex items-center space-x-2 text-slate-800 font-semibold">
                                    <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                    <span>Gender</span>
                                </label>
                                <select 
                                    name="gender" 
                                    className="w-full bg-slate-50 border-2 border-slate-200 hover:border-orange-400 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 rounded-xl px-4 py-4 text-slate-800 font-medium transition-all duration-300 outline-none"
                                >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            {/* NIC / ID Number */}
                            <div className="md:col-span-2 space-y-3">
                                <label className="flex items-center space-x-2 text-slate-800 font-semibold">
                                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    <span>NIC / ID Number</span>
                                </label>
                                <input 
                                    type="text" 
                                    name="nic" 
                                    placeholder="991234567V"
                                    className="w-full bg-slate-50 border-2 border-slate-200 hover:border-blue-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-4 text-slate-800 font-medium transition-all duration-300 outline-none"
                                />
                            </div>
                        </div>

                        {/* Address */}
                        <div className="mt-6 space-y-3">
                            <label className="flex items-center space-x-2 text-slate-800 font-semibold">
                                <svg className="w-5 h-5 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span>Address</span>
                            </label>
                            <textarea 
                                name="address" 
                                rows="3" 
                                placeholder="Your current address..."
                                required 
                                className="w-full bg-slate-50 border-2 border-slate-200 hover:border-cyan-400 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 rounded-xl px-4 py-4 text-slate-800 font-medium transition-all duration-300 outline-none resize-none"
                            />
                        </div>
                    </div>

                    {/* Profile & Documents Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <span>Profile & Documents</span>
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Profile Picture */}
                            <div className="space-y-3">
                                <label className="block text-slate-800 font-semibold">Profile Picture</label>
                                <div className="relative">
                                    <input 
                                        type="file" 
                                        name="profilePicture" 
                                        accept="image/*" 
                                        className="w-full bg-slate-50 border-2 border-dashed border-slate-300 hover:border-purple-400 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 rounded-xl px-4 py-6 text-slate-800 font-medium transition-all duration-300 outline-none file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-purple-600 file:to-purple-500 file:text-white hover:file:from-purple-700 hover:file:to-purple-600"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="text-center">
                                            <svg className="w-8 h-8 text-slate-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                            <p className="text-sm text-slate-500">Upload Photo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ID Document */}
                            <div className="space-y-3">
                                <label className="block text-slate-800 font-semibold">NIC/ID Document</label>
                                <div className="relative">
                                    <input 
                                        type="file" 
                                        name="idDocument" 
                                        accept=".pdf,image/*" 
                                        className="w-full bg-slate-50 border-2 border-dashed border-slate-300 hover:border-green-400 focus:border-green-600 focus:ring-2 focus:ring-green-600/20 rounded-xl px-4 py-6 text-slate-800 font-medium transition-all duration-300 outline-none file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-green-600 file:to-green-500 file:text-white hover:file:from-green-700 hover:file:to-green-600"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="text-center">
                                            <svg className="w-8 h-8 text-slate-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            <p className="text-sm text-slate-500">Upload Document</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bio */}
                        <div className="mt-6 space-y-3">
                            <label className="flex items-center space-x-2 text-slate-800 font-semibold">
                                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                                <span>Short Bio</span>
                            </label>
                            <textarea 
                                name="bio" 
                                rows="3" 
                                placeholder="Tell us something about you..."
                                className="w-full bg-slate-50 border-2 border-slate-200 hover:border-indigo-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 rounded-xl px-4 py-4 text-slate-800 font-medium transition-all duration-300 outline-none resize-none"
                            />
                        </div>
                    </div>

                    {/* Submit Section */}
                    <div className="pt-8 border-t border-slate-200">
                        <div className="flex flex-col sm:flex-row gap-4 justify-end">
                            <button 
                                type="button"
                                className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                Cancel Changes
                            </button>
                            <button 
                                type="submit" 
                                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                            >
                                <span className="flex items-center justify-center space-x-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Save Profile</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}