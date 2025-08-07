import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/productCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DealsPage(){
    const[cars, setCars] = useState([]);
    const[loading, setLoading] = useState(true);
    
    useEffect (()=>{
        if(loading == true){
            axios.get(import.meta.env.VITE_BACKEND_URL + '/api/cars/getapprovedcars')
            .then((response)=>{
                setCars(response.data);
                setLoading(false);
            })
            .catch((error)=>{
                console.log(error);
                setLoading(false);
            })
        }
    },[loading])

    if (loading) {
        return (
            <>
                <Header/>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-6 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                        <h2 className="text-2xl font-bold text-white mb-2">Loading Premium Fleet</h2>
                        <p className="text-blue-200">Preparing your exclusive car collection...</p>
                    </div>
                </div>
                <Footer/>
            </>
        );
    }

    return(
        <>
            <Header/>
            
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 px-6 pt-32">
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
                </div>
                
                <div className="relative z-10 max-w-6xl mx-auto text-center">
                    <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
                        <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-white/90 font-semibold text-sm">Premium Fleet Available</span>
                        </div>
                    </div>
                    
                    <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                            Our Fleet
                        </span>
                    </h1>
                    <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                        Discover our premium collection of luxury vehicles, ready for your next adventure.
                    </p>
                </div>
            </section>

            {/* Cars Grid */}
            <div className="min-h-screen bg-slate-50 py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
                            Available Vehicles
                        </h2>
                        <p className="text-xl text-slate-600">
                            {cars.length} premium {cars.length === 1 ? 'vehicle' : 'vehicles'} ready for booking
                        </p>
                    </div>
                    
                    <div className="w-full h-full flex flex-wrap items-center justify-center gap-8">
                        {
                            cars.map((car)=>{
                                return(
                                    <ProductCard key = {car.carId} car = {car} />   
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            
            <Footer/>
        </>
    )
}