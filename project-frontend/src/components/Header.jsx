import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
 const [menuOpen, setMenuOpen] = useState(false);
 const [scrolled, setScrolled] = useState(false);
 const location = useLocation();

 useEffect(() => {
   const handleScroll = () => {
     setScrolled(window.scrollY > 20);
   };
   window.addEventListener('scroll', handleScroll);
   return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 const handleNavClick = () => {
   setMenuOpen(false);
 };

 const isActive = (path) => {
   return location.pathname === path;
 };

 return (
   <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
     scrolled 
       ? 'bg-white shadow-xl border-b border-slate-200/50' 
       : 'bg-white/98 backdrop-blur-lg shadow-lg'
   }`}>
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="flex justify-between items-center h-18">
         
         {/* Premium Car Rental Logo */}
         <Link 
           to="/"
           onClick={handleNavClick}
           className="flex items-center space-x-4 group"
         >
           <div className="relative">
             <div className="w-12 h-12 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:rotate-2 group-hover:scale-110 border border-blue-400/20">
               <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
               </svg>
             </div>
             <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center shadow-md">
               <span className="text-white text-xs font-bold">✓</span>
             </div>
           </div>
           <div className="flex flex-col">
             <span className="text-2xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-blue-600 bg-clip-text text-transparent">
               Elite Drive
             </span>
             <span className="text-xs text-slate-500 -mt-1 font-medium">Premium Car Rentals</span>
           </div>
         </Link>

         {/* Desktop Navigation - Professional Style */}
         <nav className="hidden lg:flex items-center space-x-2 bg-slate-50/80 backdrop-blur-sm rounded-2xl px-3 py-2 border border-slate-200/60 shadow-sm">
           {[
             { name: "Home", to: "/", icon: "🏠", color: "blue" },
             { name: "Our Fleet", to: "/deals", icon: "🚗", color: "emerald" },
             { name: "About Us", to: "/about", icon: "ℹ️", color: "indigo" },
             { name: "Reviews", to: "/testimonials", icon: "⭐", color: "amber" },
             { name: "Contact", to: "/contact", icon: "📞", color: "slate" }
           ].map((link) => (
             <Link
               key={link.name}
               to={link.to}
               onClick={handleNavClick}
               className={`group relative px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                 isActive(link.to)
                   ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30 transform scale-105'
                   : 'text-slate-700 hover:text-slate-900 hover:bg-white/90 hover:shadow-md'
               }`}
             >
               <span className="flex items-center space-x-2">
                 <span className="text-sm opacity-80 group-hover:opacity-100 transition-opacity">{link.icon}</span>
                 <span>{link.name}</span>
               </span>
               {isActive(link.to) && (
                 <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-sm"></div>
               )}
               {!isActive(link.to) && (
                 <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 rounded-full group-hover:w-8 transition-all duration-300"></div>
               )}
             </Link>
           ))}
         </nav>

         {/* Desktop Auth Buttons - Professional Style */}
         <div className="hidden lg:flex items-center space-x-3">
           <Link
             to="/login"
             onClick={handleNavClick}
             className="px-6 py-3 text-sm font-semibold text-slate-700 hover:text-slate-900 border border-slate-300 hover:border-slate-400 rounded-xl transition-all duration-300 hover:bg-slate-50/80 backdrop-blur-sm hover:shadow-md"
           >
             Sign In
           </Link>
           <Link
             to="/signup"
             onClick={handleNavClick}
             className="px-6 py-3 text-sm font-semibold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transform hover:-translate-y-0.5 border border-blue-500/20"
           >
             Book Now
           </Link>
         </div>

         {/* Mobile Menu Button - Enhanced */}
         <button
           className="lg:hidden relative p-3 rounded-xl bg-slate-100/80 hover:bg-slate-200/80 transition-all duration-300 shadow-sm"
           onClick={() => setMenuOpen(!menuOpen)}
           aria-label="Toggle menu"
         >
           <div className="w-6 h-6 flex flex-col justify-center items-center">
             <span
               className={`w-5 h-0.5 bg-slate-800 transition-all duration-300 ${
                 menuOpen ? "rotate-45 translate-y-1.5" : ""
               }`}
             ></span>
             <span
               className={`w-5 h-0.5 bg-slate-800 mt-1.5 transition-all duration-300 ${
                 menuOpen ? "opacity-0" : ""
               }`}
             ></span>
             <span
               className={`w-5 h-0.5 bg-slate-800 mt-1.5 transition-all duration-300 ${
                 menuOpen ? "-rotate-45 -translate-y-1.5" : ""
               }`}
             ></span>
           </div>
         </button>
       </div>
     </div>

     {/* Mobile Menu Overlay - Enhanced */}
     <div
       className={`lg:hidden fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 z-30 ${
         menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
       }`}
       onClick={() => setMenuOpen(false)}
     ></div>

     {/* Mobile Menu - Premium Design */}
     <div
       className={`lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-b border-slate-200/50 shadow-2xl transition-all duration-300 ease-out ${
         menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
       }`}
     >
       <div className="max-w-7xl mx-auto px-4 py-8">
         
         {/* Mobile Navigation Grid */}
         <div className="grid grid-cols-2 gap-4 mb-8">
           {[
             { name: "Home", to: "/", icon: "🏠", desc: "Welcome & Services", color: "blue" },
             { name: "Our Fleet", to: "/deals", icon: "🚗", desc: "Browse Vehicles", color: "emerald" },
             { name: "About Us", to: "/about", icon: "ℹ️", desc: "Our Story", color: "indigo" },
             { name: "Reviews", to: "/testimonials", icon: "⭐", desc: "Customer Stories", color: "amber" },
             { name: "Contact", to: "/contact", icon: "📞", desc: "Get Support", color: "slate" },
             { name: "Help", to: "/support", icon: "💬", desc: "Support Center", color: "rose" }
           ].map((link, index) => (
             <Link
               key={link.name}
               to={link.to}
               onClick={handleNavClick}
               className={`group p-5 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                 isActive(link.to)
                   ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-300 text-blue-800 shadow-lg'
                   : 'bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200 text-slate-700 hover:bg-gradient-to-br hover:from-slate-100 hover:to-slate-200 hover:border-slate-300 hover:shadow-md'
               }`}
               style={{ animationDelay: `${index * 100}ms` }}
             >
               <div className="flex items-start space-x-4">
                 <span className="text-3xl">{link.icon}</span>
                 <div className="flex-1 min-w-0">
                   <p className="font-bold text-sm group-hover:text-slate-900">
                     {link.name}
                   </p>
                   <p className="text-xs text-slate-500 mt-1 group-hover:text-slate-600">
                     {link.desc}
                   </p>
                 </div>
               </div>
             </Link>
           ))}
         </div>

         {/* Mobile Auth Buttons - Premium Style */}
         <div className="flex space-x-4">
           <Link
             to="/login"
             onClick={handleNavClick}
             className="flex-1 py-4 px-6 text-center text-sm font-semibold text-slate-700 hover:text-slate-900 border-2 border-slate-300 hover:border-slate-400 rounded-xl transition-all duration-300 hover:bg-slate-50 hover:shadow-md"
           >
             Sign In
           </Link>
           <Link
             to="/signup"
             onClick={handleNavClick}
             className="flex-1 py-4 px-6 text-center text-sm font-semibold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-blue-500/20"
           >
             Book Now
           </Link>
         </div>

         {/* Trust Badge for Mobile */}
         <div className="mt-6 flex items-center justify-center space-x-2 text-xs text-slate-500">
           <span className="flex items-center space-x-1">
             <span>🔒</span>
             <span>Secure Booking</span>
           </span>
           <span>•</span>
           <span className="flex items-center space-x-1">
             <span>✅</span>
             <span>Verified Cars</span>
           </span>
           <span>•</span>
           <span className="flex items-center space-x-1">
             <span>⚡</span>
             <span>Instant Confirmation</span>
           </span>
         </div>
       </div>
     </div>
   </header>
 );
}