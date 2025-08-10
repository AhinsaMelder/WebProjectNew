import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/signup');
  };

  const handleViewFleet = () => {
    navigate('/deals');
  };

  const handleSearchCars = () => {
    navigate('/signup');
  };

  const handleExploreFleet = () => {
    navigate('/deals');
  };

  return (
    <>
      <Header />

      {/* Hero Section - Modern Design */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-20"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white/90 font-semibold text-sm">Trusted by 10,000+ customers</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white">
                  Premium Car
                </span>
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Rental Experience
                </span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                Drive luxury vehicles with confidence. Our premium fleet offers unmatched comfort, 
                safety, and style for your perfect journey across Sri Lanka.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={handleBookNow}
                className="group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="flex items-center space-x-2">
                  <span>Book Now</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              
              <button 
                onClick={handleViewFleet}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300"
              >
                <span className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>View Fleet</span>
                </span>
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-blue-200">Premium Cars</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm text-blue-200">Customer Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">99%</div>
                <div className="text-sm text-blue-200">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Right Side - Clean Content Showcase */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
              {/* Main Content Area */}
              <div className="text-center text-white space-y-8">
                {/* Elite Drive Branding */}
                <div className="space-y-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-xl">
                    <span className="text-3xl font-bold text-white">ED</span>
                  </div>
                  <h3 className="text-3xl font-bold">Elite Drive</h3>
                  <p className="text-blue-200 text-lg">Premium Car Rentals</p>
                </div>

                {/* Key Features */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto bg-green-500/20 rounded-xl flex items-center justify-center mb-3">
                      <span className="text-2xl">🚗</span>
                    </div>
                    <div className="text-sm font-semibold">500+ Vehicles</div>
                    <div className="text-xs text-blue-200">Latest Models</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto bg-blue-500/20 rounded-xl flex items-center justify-center mb-3">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <div className="text-sm font-semibold">Award Winning</div>
                    <div className="text-xs text-blue-200">Best Service</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto bg-purple-500/20 rounded-xl flex items-center justify-center mb-3">
                      <span className="text-2xl">🔒</span>
                    </div>
                    <div className="text-sm font-semibold">100% Secure</div>
                    <div className="text-xs text-blue-200">Safe & Reliable</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto bg-orange-500/20 rounded-xl flex items-center justify-center mb-3">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div className="text-sm font-semibold">Instant Book</div>
                    <div className="text-xs text-blue-200">24/7 Available</div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="pt-6">
                  <button 
                    onClick={handleExploreFleet}
                    className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold px-8 py-3 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Explore Our Fleet
                  </button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-6 left-6 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 left-4 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Book Your Perfect Ride
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Quick and easy booking process. Get on the road in minutes.
            </p>
          </div>

          {/* Booking Form */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 lg:p-12">
              <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); handleSearchCars(); }}>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Pickup Location */}
                  <div className="space-y-3">
                    <label className="flex items-center space-x-2 text-slate-800 font-semibold">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>Pickup Location</span>
                    </label>
                    <select className="w-full bg-slate-50 border-2 border-slate-200 hover:border-blue-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-4 text-slate-800 font-medium transition-all duration-300 outline-none">
                      <option>Colombo Airport</option>
                      <option>Colombo City</option>
                      <option>Galle</option>
                      <option>Kandy</option>
                    </select>
                  </div>

                  {/* Pickup Date */}
                  <div className="space-y-3">
                    <label className="flex items-center space-x-2 text-slate-800 font-semibold">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span>Pickup Date</span>
                    </label>
                    <input
                      type="date"
                      className="w-full bg-slate-50 border-2 border-slate-200 hover:border-green-400 focus:border-green-600 focus:ring-2 focus:ring-green-600/20 rounded-xl px-4 py-4 text-slate-800 font-medium transition-all duration-300 outline-none"
                    />
                  </div>

                  {/* Return Date */}
                  <div className="space-y-3">
                    <label className="flex items-center space-x-2 text-slate-800 font-semibold">
                      <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span>Return Date</span>
                    </label>
                    <input
                      type="date"
                      className="w-full bg-slate-50 border-2 border-slate-200 hover:border-orange-400 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 rounded-xl px-4 py-4 text-slate-800 font-medium transition-all duration-300 outline-none"
                    />
                  </div>

                  {/* Search Button */}
                  <div className="space-y-3">
                    <label className="opacity-0">Search</label>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-4 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span>Search Cars</span>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Why Choose Elite Drive?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience the difference with our premium car rental service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Verified Fleet</h3>
              <p className="text-slate-600 leading-relaxed">All vehicles undergo rigorous safety checks and maintenance</p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Secure Booking</h3>
              <p className="text-slate-600 leading-relaxed">SSL encrypted transactions and secure payment processing</p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">24/7 Support</h3>
              <p className="text-slate-600 leading-relaxed">Round-the-clock customer assistance for your peace of mind</p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Instant Confirmation</h3>
              <p className="text-slate-600 leading-relaxed">Get immediate booking confirmation via SMS and email</p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-100">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Flexible Payment</h3>
              <p className="text-slate-600 leading-relaxed">Multiple payment options including cash, card, and mobile payments</p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-100">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Customer Care</h3>
              <p className="text-slate-600 leading-relaxed">Dedicated customer service with personalized attention</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Simple, fast, and secure car rental process in just three steps
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="relative text-center">
              <div className="hidden lg:block absolute top-24 left-full w-full h-0.5 bg-gradient-to-r from-slate-300 to-slate-200 z-0"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  01
                </div>
                
                <div className="text-6xl mb-6">🚗</div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Choose Your Car</h3>
                <p className="text-slate-600 leading-relaxed max-w-sm mx-auto">Browse our premium fleet and select the perfect vehicle for your needs</p>
              </div>
            </div>

            <div className="relative text-center">
              <div className="hidden lg:block absolute top-24 left-full w-full h-0.5 bg-gradient-to-r from-slate-300 to-slate-200 z-0"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  02
                </div>
                
                <div className="text-6xl mb-6">📱</div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Book Instantly</h3>
                <p className="text-slate-600 leading-relaxed max-w-sm mx-auto">Complete your reservation with our secure and streamlined booking system</p>
              </div>
            </div>

            <div className="relative text-center">
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  03
                </div>
                
                <div className="text-6xl mb-6">🔑</div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Drive Away</h3>
                <p className="text-slate-600 leading-relaxed max-w-sm mx-auto">Pick up your vehicle or enjoy our complimentary delivery service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Stay Updated with Exclusive Offers
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Subscribe to get special discounts, new vehicle announcements, and travel tips delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl transform hover:-translate-y-1 transition-all duration-300">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm text-slate-400 mt-4">
              No spam, unsubscribe at any time. Your privacy is our priority.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}