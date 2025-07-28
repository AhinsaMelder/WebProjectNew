import React from 'react';

export default function ProductCard({ car }) {
  return (
    <div className="group max-w-sm bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-100 overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={car.images && car.images.length > 0 ? car.images[0] : 'https://via.placeholder.com/400x200?text=No+Image'}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Availability Badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm border ${
              car.isAvailable 
                ? 'bg-green-500/90 text-white border-green-400/50' 
                : 'bg-red-500/90 text-white border-red-400/50'
            }`}
          >
            {car.isAvailable ? 'Available' : 'Not Available'}
          </span>
        </div>

        {/* Premium Badge (if needed) */}
        <div className="absolute top-4 left-4">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Premium
          </div>
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Car Details */}
      <div className="p-6">
        {/* Brand & Model */}
        <div className="mb-3">
          <h2 className="text-xl font-bold text-slate-800 mb-1">
            {car.brand}
          </h2>
          <h3 className="text-lg font-semibold text-slate-600 mb-2">
            {car.model}
          </h3>
          <div className="flex items-center space-x-4 text-sm text-slate-500">
            <span className="flex items-center space-x-1">
              <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span>{car.year}</span>
            </span>
            <span className="flex items-center space-x-1">
              <div className="w-3 h-3 rounded-full border-2 border-slate-300" style={{backgroundColor: car.color?.toLowerCase()}}></div>
              <span>{car.color}</span>
            </span>
          </div>
        </div>

        {/* Features Row */}
        <div className="flex items-center justify-between mb-4 text-xs text-slate-600">
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Verified</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Insured</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>24/7</span>
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                LKR {car.price?.toLocaleString()}
              </p>
              <p className="text-sm text-slate-500">per day</p>
            </div>
            <div className="text-right">
              <div className="flex text-yellow-400 text-sm">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-xs text-slate-500">4.9 (128)</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button 
            className={`flex-1 font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 ${
              car.isAvailable
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
            }`}
            disabled={!car.isAvailable}
          >
            {car.isAvailable ? 'Book Now' : 'Unavailable'}
          </button>
          <button className="bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-blue-300 text-slate-700 font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom Border Accent */}
      <div className="h-1 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
    </div>
  );
}