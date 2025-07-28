import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import mediaUpload from "../utils/mediaUpload";

export default function AddCar() {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');
  const [price, setPrice] = useState('');
  const [images, setImages] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function AddCars(e) {
    e.preventDefault();
    setIsLoading(true);
    
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('You are not logged in');
      setIsLoading(false);
      return;
    }
    
    if (!images || images.length === 0) {
      toast.error('Please upload at least one image');
      setIsLoading(false);
      return;
    }

    const promiseArray = []
    for (let i = 0; i < images.length; i++) {
      promiseArray[i] = mediaUpload(images[i])
    }

    try {
      const imageUrls = await Promise.all(promiseArray);
      console.log(imageUrls);
      
      const car = {
        brand: brand,
        model: model,
        year: year,
        color: color,
        price: Number(price),
        images: imageUrls
      }

      await axios.post(
        import.meta.env.VITE_BACKEND_URL + '/api/cars/savecar/', 
        car,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      
      toast.success('Car added successfully');
      
      // Clear form after successful submission
      setBrand('');
      setModel('');
      setYear('');
      setColor('');
      setPrice('');
      setImages('');
      
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 mb-8 text-white">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
            </svg>
          </div>
          <div>
            <h1 className="text-3xl font-bold">Add New Vehicle</h1>
            <p className="text-blue-100">Expand your premium fleet with a new luxury vehicle</p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
        <form className="p-8 space-y-8">
          {/* Vehicle Information Section */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Vehicle Information</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Brand */}
              <div className="space-y-3">
                <label className="flex items-center space-x-2 text-slate-800 font-semibold">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Brand</span>
                </label>
                <input 
                  type="text" 
                  name="brand" 
                  value={brand} 
                  onChange={(e) => setBrand(e.target.value)} 
                  required 
                  placeholder="Enter vehicle brand"
                  className="w-full bg-slate-50 border-2 border-slate-200 hover:border-blue-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-4 text-slate-800 font-medium transition-all duration-300 outline-none"
                />
              </div>

              {/* Model */}
              <div className="space-y-3">
                <label className="flex items-center space-x-2 text-slate-800 font-semibold">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>Model</span>
                </label>
                <input 
                  type="text" 
                  name="model" 
                  value={model} 
                  onChange={(e) => setModel(e.target.value)} 
                  required 
                  placeholder="Enter vehicle model"
                  className="w-full bg-slate-50 border-2 border-slate-200 hover:border-green-400 focus:border-green-600 focus:ring-2 focus:ring-green-600/20 rounded-xl px-4 py-4 text-slate-800 font-medium transition-all duration-300 outline-none"
                />
              </div>

              {/* Year */}
              <div className="space-y-3">
                <label className="flex items-center space-x-2 text-slate-800 font-semibold">
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span>Year</span>
                </label>
                <input 
                  type="number" 
                  name="year" 
                  value={year} 
                  onChange={(e) => setYear(e.target.value)} 
                  required 
                  placeholder="2024"
                  min="1990"
                  max="2030"
                  className="w-full bg-slate-50 border-2 border-slate-200 hover:border-purple-400 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 rounded-xl px-4 py-4 text-slate-800 font-medium transition-all duration-300 outline-none"
                />
              </div>

              {/* Color */}
              <div className="space-y-3">
                <label className="flex items-center space-x-2 text-slate-800 font-semibold">
                  <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zM3 15a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1zm7-11a1 1 0 000 2h5a1 1 0 100-2h-5zm0 4a1 1 0 100 2h5a1 1 0 000-2h-5zm0 4a1 1 0 100 2h5a1 1 0 000-2h-5z" clipRule="evenodd" />
                  </svg>
                  <span>Color</span>
                </label>
                <input 
                  type="text" 
                  name="color" 
                  value={color} 
                  onChange={(e) => setColor(e.target.value)} 
                  required 
                  placeholder="Enter vehicle color"
                  className="w-full bg-slate-50 border-2 border-slate-200 hover:border-orange-400 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 rounded-xl px-4 py-4 text-slate-800 font-medium transition-all duration-300 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Pricing Information</span>
            </h2>
            
            <div className="max-w-md">
              <div className="space-y-3">
                <label className="flex items-center space-x-2 text-slate-800 font-semibold">
                  <span>Daily Rental Price (LKR)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-slate-500 font-medium">LKR</span>
                  </div>
                  <input 
                    type="number" 
                    name="price" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} 
                    required 
                    placeholder="0"
                    min="0"
                    className="w-full bg-slate-50 border-2 border-slate-200 hover:border-green-400 focus:border-green-600 focus:ring-2 focus:ring-green-600/20 rounded-xl pl-16 pr-4 py-4 text-slate-800 font-medium transition-all duration-300 outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Image Upload Section */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span>Vehicle Images</span>
            </h2>
            
            <div className="space-y-3">
              <label className="block text-slate-600 font-medium">
                Upload high-quality images of your vehicle (Multiple images supported)
              </label>
              <div className="relative">
                <input 
                  type="file" 
                  name="images" 
                  onChange={(e) => setImages(e.target.files)} 
                  multiple 
                  required 
                  accept="image/*"
                  className="w-full bg-slate-50 border-2 border-dashed border-slate-300 hover:border-purple-400 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 rounded-xl px-4 py-8 text-slate-800 font-medium transition-all duration-300 outline-none file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-purple-600 file:to-purple-500 file:text-white hover:file:from-purple-700 hover:file:to-purple-600"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center">
                    <svg className="w-12 h-12 text-slate-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-slate-500 font-medium">Click to upload or drag and drop</p>
                    <p className="text-sm text-slate-400">PNG, JPG up to 10MB each</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-8 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <button 
                type="button"
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className={`font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  isLoading 
                    ? 'bg-slate-400 text-white cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg'
                }`}
                onClick={AddCars}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center space-x-2">
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Adding Vehicle...</span>
                  </span>
                ) : (
                  <span className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span>Add Vehicle to Fleet</span>
                  </span>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}