import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white mt-20 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Enhanced Logo and description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-4 mb-6 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:rotate-2 group-hover:scale-110 border border-blue-400/20">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  Elite Drive
                </span>
                <span className="text-xs text-slate-400 -mt-1 font-medium">Premium Car Rentals</span>
              </div>
            </Link>
            
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Experience premium car rentals with our verified fleet. We provide reliable, secure, and comfortable vehicles for all your travel needs.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center space-x-2 text-xs text-slate-400">
                <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </span>
                <span>Verified Fleet</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-400">
                <span className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🔒</span>
                </span>
                <span>Secure Booking</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-400">
                <span className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">⚡</span>
                </span>
                <span>24/7 Support</span>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800/50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 border border-slate-700/50 hover:border-transparent" aria-label="Facebook">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800/50 hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-600 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 border border-slate-700/50 hover:border-transparent" aria-label="Twitter">
                <i className="ri-twitter-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800/50 hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 border border-slate-700/50 hover:border-transparent" aria-label="LinkedIn">
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800/50 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 border border-slate-700/50 hover:border-transparent" aria-label="Instagram">
                <i className="ri-instagram-line text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800/50 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 border border-slate-700/50 hover:border-transparent" aria-label="YouTube">
                <i className="ri-youtube-fill text-lg"></i>
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white relative">
              Our Services
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-300 mr-0 group-hover:mr-3"></span>
                  <span className="text-sm mr-2 opacity-70 group-hover:opacity-100">🏠</span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/deals" className="text-slate-300 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-300 mr-0 group-hover:mr-3"></span>
                  <span className="text-sm mr-2 opacity-70 group-hover:opacity-100">🚗</span>
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-300 mr-0 group-hover:mr-3"></span>
                  <span className="text-sm mr-2 opacity-70 group-hover:opacity-100">ℹ️</span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-slate-300 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-300 mr-0 group-hover:mr-3"></span>
                  <span className="text-sm mr-2 opacity-70 group-hover:opacity-100">⭐</span>
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-300 mr-0 group-hover:mr-3"></span>
                  <span className="text-sm mr-2 opacity-70 group-hover:opacity-100">📞</span>
                  Contact Support
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-slate-300 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-300 mr-0 group-hover:mr-3"></span>
                  <span className="text-sm mr-2 opacity-70 group-hover:opacity-100">💬</span>
                  Booking Help
                </Link>
              </li>
            </ul>
          </div>

          {/* Vehicle Categories */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white relative">
              Vehicle Categories
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/deals" className="text-slate-300 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 flex items-start group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-300 mr-0 group-hover:mr-3 mt-2"></span>
                  <div className="flex items-start space-x-2">
                    <span className="text-sm opacity-70 group-hover:opacity-100">🚗</span>
                    <div>
                      <span className="block">Economy Cars</span>
                      <span className="text-xs text-slate-500 group-hover:text-slate-400">Budget-friendly options</span>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/deals" className="text-slate-300 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 flex items-start group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-300 mr-0 group-hover:mr-3 mt-2"></span>
                  <div className="flex items-start space-x-2">
                    <span className="text-sm opacity-70 group-hover:opacity-100">🏎️</span>
                    <div>
                      <span className="block">Luxury Vehicles</span>
                      <span className="text-xs text-slate-500 group-hover:text-slate-400">Premium experience</span>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/deals" className="text-slate-300 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 flex items-start group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-300 mr-0 group-hover:mr-3 mt-2"></span>
                  <div className="flex items-start space-x-2">
                    <span className="text-sm opacity-70 group-hover:opacity-100">🚙</span>
                    <div>
                      <span className="block">SUVs & 4WDs</span>
                      <span className="text-xs text-slate-500 group-hover:text-slate-400">For family trips</span>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/deals" className="text-slate-300 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 flex items-start group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-300 mr-0 group-hover:mr-3 mt-2"></span>
                  <div className="flex items-start space-x-2">
                    <span className="text-sm opacity-70 group-hover:opacity-100">🚐</span>
                    <div>
                      <span className="block">Vans & Minibuses</span>
                      <span className="text-xs text-slate-500 group-hover:text-slate-400">Group travel</span>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/deals" className="text-slate-300 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 flex items-start group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-300 mr-0 group-hover:mr-3 mt-2"></span>
                  <div className="flex items-start space-x-2">
                    <span className="text-sm opacity-70 group-hover:opacity-100">⚡</span>
                    <div>
                      <span className="block">Electric Cars</span>
                      <span className="text-xs text-slate-500 group-hover:text-slate-400">Eco-friendly rides</span>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white relative">
              Contact & Support
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300"></span>
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+94775698808" className="flex items-center text-slate-300 hover:text-white text-sm transition-all duration-300 group hover:translate-x-1">
                  <div className="w-9 h-9 bg-slate-800/50 rounded-xl flex items-center justify-center mr-3 group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-green-700 transition-all duration-300 border border-slate-700/50 group-hover:border-transparent">
                    <i className="ri-phone-fill text-sm"></i>
                  </div>
                  <div>
                    <span className="block font-medium">+94 775698808</span>
                    <span className="text-xs text-slate-500">24/7 Booking Hotline</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-slate-300 hover:text-white text-sm transition-all duration-300 group hover:translate-x-1">
                  <div className="w-9 h-9 bg-slate-800/50 rounded-xl flex items-center justify-center mr-3 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300 border border-slate-700/50 group-hover:border-transparent">
                    <i className="ri-map-pin-fill text-sm"></i>
                  </div>
                  <div>
                    <span className="block font-medium">Colombo, Sri Lanka</span>
                    <span className="text-xs text-slate-500">Main Office Location</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:udani@elitedrive.com" className="flex items-center text-slate-300 hover:text-white text-sm transition-all duration-300 group hover:translate-x-1">
                  <div className="w-9 h-9 bg-slate-800/50 rounded-xl flex items-center justify-center mr-3 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-purple-700 transition-all duration-300 border border-slate-700/50 group-hover:border-transparent">
                    <i className="ri-mail-fill text-sm"></i>
                  </div>
                  <div>
                    <span className="block font-medium">udani@elitedrive.com</span>
                    <span className="text-xs text-slate-500">Customer Support</span>
                  </div>
                </a>
              </li>
            </ul>

            {/* Newsletter Signup */}
            <div className="mt-6 p-5 bg-gradient-to-br from-slate-800/40 to-slate-800/60 rounded-xl border border-slate-700/50 backdrop-blur-sm">
              <h5 className="font-semibold text-sm mb-2 text-white flex items-center">
                <span className="mr-2">📧</span>
                Special Offers & Updates
              </h5>
              <p className="text-xs text-slate-400 mb-4">Get exclusive deals and rental discounts</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-l-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                />
                <button className="px-5 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-r-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105">
                  <i className="ri-send-plane-fill text-sm"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/50 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <Link to="/privacy" className="hover:text-white transition-colors duration-300 flex items-center">
                <i className="ri-shield-check-line mr-1"></i>
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors duration-300 flex items-center">
                <i className="ri-file-text-line mr-1"></i>
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-white transition-colors duration-300 flex items-center">
                <i className="ri-cookie-line mr-1"></i>
                Cookie Policy
              </Link>
              <Link to="/safety" className="hover:text-white transition-colors duration-300 flex items-center">
                <i className="ri-shield-star-line mr-1"></i>
                Safety Guidelines
              </Link>
            </div>
            
            <div className="text-sm text-slate-400 text-center lg:text-right">
              <div className="mb-1">
                Copyright © 2025 <span className="text-white font-medium">Elite Drive Car Rentals</span>. All rights reserved.
              </div>
              <div className="text-xs text-slate-500">
                Licensed & Insured • Trusted by 10,000+ customers
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 blur-sm opacity-50"></div>
      </div>
    </footer>
  );
}