import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LeaserCar() {

    const [cars, setCars] = useState([]);

      const email = localStorage.getItem('userEmail');
     
      const naviagte = useNavigate();

    function getCarsByEmail(){

      try{
        axios.get(import.meta.env.VITE_BACKEND_URL + '/api/cars/getcarsemail/' + email)
        .then((response)=>{
            setCars(response.data);
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
      }
      catch(error){
        console.log(error);
      }
       
    }

    useEffect(()=>{
        getCarsByEmail();
    },[])

    function deleteCar(carId){

      try{
        axios.delete(import.meta.env.VITE_BACKEND_URL + '/api/cars/deletecar/' + carId)
        .then((response)=>{
            getCarsByEmail();
        })
        .catch((error)=>{
            console.log(error);
        })
      }
      catch(error){
        console.log(error);
      }
    }




    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <table className="w-full">
                <thead>
                    <tr>
                         <th className="px-4 py-2">Id</th>
                          <th className="px-4 py-2">Image</th>
                        <th className="px-4 py-2">Brand</th>
                        <th className="px-4 py-2">Model</th>
                        <th className="px-4 py-2">Year</th>
                        <th className="px-4 py-2">Color</th>
                        <th className="px-4 py-2">Price</th>
                         <th className="px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((car, index) => (
                        <tr key={index}>
                            <td className="px-4 py-2">{car.carId}</td>
                            <td className="px-4 py-2"><img src={car.images[0]} alt="Car" className="w-20 h-20 object-cover" /></td>
                            <td className="px-4 py-2">{car.brand}</td>
                            <td className="px-4 py-2">{car.model}</td>
                            <td className="px-4 py-2">{car.year}</td>
                            <td className="px-4 py-2">{car.color}</td>
                            <td className="px-4 py-2">{car.price}</td>
                            <td className="px-4 py-2">
                                <button onClick={()=>{
                                    naviagte('/leaserpage/edit-cars',{
                                        state: car
                                    });
                                }}className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white text-sm font-medium px-3 py-1 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5">
    <span className="flex items-center space-x-1">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
        <span>Edit</span>
    </span>
</button>
                                <button onClick={() => {
                                    if (window.confirm('Delete this vehicle?')) deleteCar(car.carId);
                                 }} 
                                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-sm font-medium px-3 py-1 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 ">
                                     <span className="flex items-center space-x-1">
                                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1-1H8a1 1 0 00-1 1v3M4 7h16" />
                                      </svg>
                                     <span>Delete</span>
                                    </span>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
           
        </div>
    );
}