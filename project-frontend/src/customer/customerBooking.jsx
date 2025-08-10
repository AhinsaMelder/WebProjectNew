import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"; // or your toast library
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export default function CustomerBooking() {
    const [order, setOrder] = useState([]);
    const [selectedRental, setSelectedRental] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [feedback, setFeedback] = useState('');
    const navigate = useNavigate();

    async function fetchOrders() {
        const email = localStorage.getItem("userEmail");
        try {
            const res = await axios.get(import.meta.env.VITE_BACKEND_URL + '/api/rental/getrentalfromBuyers/' + email);
            setOrder(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error);
            toast.error('Failed to fetch orders');
        }
    }

    async function savefeedback(carId) {
        const token = localStorage.getItem('token');
        if (!token) {
            toast.error('You are not logged in');
            navigate('/login');
            return;
        }

        if (!feedback.trim()) {
            toast.error('Please enter feedback before submitting');
            return;
        }

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/feedback/savefeedbacks/${carId}`,
                { feedback: feedback.trim() }, // request body
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            toast.success('Feedback submitted successfully');
            setFeedback(''); // clear textarea after submit
        } catch (error) {
            console.log(error);
            toast.error('Error submitting feedback');
        }
    }

    useEffect(() => {
        fetchOrders();
    }, []);

    const openModal = (rental) => {
        setSelectedRental(rental);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedRental(null);
        setFeedback(''); // Clear feedback when closing modal
    };

    const formatCurrency = (amount) => {
        return `Rs.${amount?.toLocaleString()}`;
    };

    const calculateDays = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const diffTime = Math.abs(end - start);
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    };

    const generatePDF = (rental) => {
        const doc = new jsPDF();
        
        // Company Header
        doc.setFillColor(30, 41, 59); // slate-800
        doc.rect(0, 0, 210, 35, 'F');
        
        // Company Name
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(24);
        doc.setFont('helvetica', 'bold');
        doc.text('Elite Driver', 20, 20);
        
        // Subtitle
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text('Premium Car Rental Services', 20, 28);
        
        // Document Title
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(18);
        doc.setFont('helvetica', 'bold');
        doc.text('RENTAL BOOKING CONFIRMATION', 20, 50);
        
        // Booking ID and Date
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text(`Booking ID: #${rental.rental_id}`, 20, 60);
        doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 150, 60);
        
        // Customer Information Section
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(37, 99, 235); // blue-600
        doc.text('Customer Information', 20, 75);
        
        // Customer Details Table
        autoTable(doc, {
            startY: 80,
            head: [['Field', 'Details']],
            body: [
                ['Full Name', rental.name],
                ['Email Address', rental.email],
                ['Phone Number', rental.phone],
                ['NIC Number', rental.nic],
                ['Address', rental.address]
            ],
            theme: 'grid',
            headStyles: { 
                fillColor: [37, 99, 235],
                textColor: [255, 255, 255],
                fontSize: 10,
                fontStyle: 'bold'
            },
            bodyStyles: { 
                fontSize: 9,
                textColor: [51, 65, 85]
            },
            columnStyles: {
                0: { cellWidth: 40, fontStyle: 'bold' },
                1: { cellWidth: 130 }
            },
            margin: { left: 20, right: 20 }
        });
        
        // Vehicle Information Section
        const customerTableHeight = doc.lastAutoTable.finalY + 15;
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(37, 99, 235);
        doc.text('Vehicle Information', 20, customerTableHeight);
        
        // Vehicle Details Table
        autoTable(doc, {
            startY: customerTableHeight + 5,
            head: [['Vehicle Details', 'Information']],
            body: [
                ['Brand', rental.brand],
                ['Model', rental.model],
                ['Vehicle ID', rental.carId],
                ['Owner Email', rental.carOwnerEmail]
            ],
            theme: 'grid',
            headStyles: { 
                fillColor: [16, 185, 129],
                textColor: [255, 255, 255],
                fontSize: 10,
                fontStyle: 'bold'
            },
            bodyStyles: { 
                fontSize: 9,
                textColor: [51, 65, 85]
            },
            columnStyles: {
                0: { cellWidth: 40, fontStyle: 'bold' },
                1: { cellWidth: 130 }
            },
            margin: { left: 20, right: 20 }
        });
        
        // Booking Summary Section
        const vehicleTableHeight = doc.lastAutoTable.finalY + 15;
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(37, 99, 235);
        doc.text('Booking Summary', 20, vehicleTableHeight);
        
        // Calculate rental duration
        const rentalDays = calculateDays(rental.startDate, rental.endDate);
        
        // Booking Details Table
        autoTable(doc, {
            startY: vehicleTableHeight + 5,
            head: [['Booking Details', 'Information']],
            body: [
                ['Pickup Date', new Date(rental.startDate).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })],
                ['Return Date', new Date(rental.endDate).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })],
                ['Rental Duration', `${rentalDays} Days`],
                ['Total Amount', formatCurrency(rental.total)]
            ],
            theme: 'grid',
            headStyles: { 
                fillColor: [245, 158, 11],
                textColor: [255, 255, 255],
                fontSize: 10,
                fontStyle: 'bold'
            },
            bodyStyles: { 
                fontSize: 9,
                textColor: [51, 65, 85]
            },
            columnStyles: {
                0: { cellWidth: 40, fontStyle: 'bold' },
                1: { cellWidth: 130 }
            },
            margin: { left: 20, right: 20 }
        });
        
        // Total Amount Highlight
        const bookingTableHeight = doc.lastAutoTable.finalY + 10;
        doc.setFillColor(16, 185, 129); // green-500
        doc.rect(20, bookingTableHeight, 170, 15, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text('TOTAL AMOUNT:', 25, bookingTableHeight + 10);
        doc.setFontSize(14);
        doc.text(formatCurrency(rental.total), 140, bookingTableHeight + 10);
        
        // Terms and Conditions
        const termsY = bookingTableHeight + 25;
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text('Terms & Conditions:', 20, termsY);
        
        doc.setFontSize(9);
        doc.setFont('helvetica', 'normal');
        const terms = [
            '• Valid driving license is required at the time of pickup',
            '• Vehicle must be returned in the same condition',
            '• Late return charges may apply beyond the agreed time',
            '• Damage to the vehicle will be charged separately',
            '• No smoking allowed inside the vehicle'
        ];
        
        terms.forEach((term, index) => {
            doc.text(term, 20, termsY + 8 + (index * 5));
        });
        
        // Footer
        const footerY = termsY + 45;
        doc.setFillColor(30, 41, 59);
        doc.rect(0, footerY, 210, 20, 'F');
        
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text('Elite Driver - Your Premium Car Rental Partner', 20, footerY + 8);
        doc.text('Contact: info@elitedriver.com | Phone: +94 11 234 5678', 20, footerY + 15);
        
        // Save the PDF
        const fileName = `Elite_Driver_Booking_${rental.rental_id}_${new Date().toISOString().split('T')[0]}.pdf`;
        doc.save(fileName);
    };  

    return (
        <>
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-white">Rental Orders</h2>
                            <p className="text-blue-200">Manage all booking requests</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-white/90 font-semibold text-sm">Live Updates</span>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-slate-50 border-b border-slate-200">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Rental ID</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Customer</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Vehicle</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Period</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Amount</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {order.map((rental, index) => (
                                <tr key={index} className="hover:bg-slate-50 transition-colors duration-200">
                                    <td className="px-6 py-4">
                                        <div className="font-mono text-sm font-semibold text-blue-600">
                                            #{rental.rental_id}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div>
                                            <div className="font-medium text-slate-900">{rental.name}</div>
                                            <div className="text-sm text-slate-500">{rental.email}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div>
                                            <div className="font-medium text-slate-900">{rental.brand} {rental.model}</div>
                                            <div className="text-sm text-slate-500">ID: {rental.carId}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm">
                                            <div className="text-slate-900">{new Date(rental.startDate).toLocaleDateString()}</div>
                                            <div className="text-slate-500">to {new Date(rental.endDate).toLocaleDateString()}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="font-semibold text-green-600">
                                            {formatCurrency(rental.total)}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex space-x-2">
                                            <button
                                                onClick={() => openModal(rental)}
                                                className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                                            >
                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                                View
                                            </button>
                                            <button
                                                onClick={() => generatePDF(rental)}
                                                className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-red-600 to-pink-500 hover:from-red-700 hover:to-pink-600 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                                            >
                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                PDF
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Empty State */}
                {order.length === 0 && (
                    <div className="text-center py-12">
                        <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-2xl flex items-center justify-center">
                            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-slate-800 mb-2">No orders yet</h3>
                        <p className="text-slate-500">Orders will appear here once customers start booking</p>
                    </div>
                )}
            </div>

            {/* Modal */}
            {isModalOpen && selectedRental && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                        onClick={closeModal}
                    ></div>

                    {/* Modal Content */}
                    <div className="flex min-h-full items-center justify-center p-4">
                        <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                            {/* Modal Header */}
                            <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 p-8 rounded-t-3xl relative overflow-hidden">
                                <div className="absolute top-4 right-8 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
                                <div className="absolute bottom-4 left-8 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl"></div>
                                
                                <div className="relative z-10 flex items-center justify-between">
                                    <div>
                                        <h2 className="text-3xl font-bold text-white mb-2">Booking Details</h2>
                                        <div className="flex items-center space-x-3">
                                            <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-sm font-semibold">
                                                #{selectedRental.rental_id}
                                            </span>
                                            <span className="text-blue-300">•</span>
                                            <span className="text-blue-200">{new Date(selectedRental.date).toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={closeModal}
                                        className="p-3 hover:bg-white/20 rounded-2xl transition-all duration-300 text-white"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Modal Body */}
                            <div className="p-8 space-y-8">
                                {/* Customer & Vehicle Info Grid */}
                                <div className="grid lg:grid-cols-2 gap-8">
                                    {/* Customer Information */}
                                    <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 border border-slate-200">
                                        <div className="flex items-center space-x-4 mb-6">
                                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-slate-900">Customer Details</h3>
                                                <p className="text-slate-600">Personal information</p>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-center space-x-4 p-4 bg-white rounded-2xl shadow-sm">
                                                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                                                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div className="text-sm text-slate-500">Full Name</div>
                                                    <div className="font-semibold text-slate-900">{selectedRental.name}</div>
                                                </div>
                                            </div>

                                            <div className="flex items-center space-x-4 p-4 bg-white rounded-2xl shadow-sm">
                                                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                                                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div className="text-sm text-slate-500">Email Address</div>
                                                    <div className="font-semibold text-slate-900">{selectedRental.email}</div>
                                                </div>
                                            </div>

                                            <div className="flex items-center space-x-4 p-4 bg-white rounded-2xl shadow-sm">
                                                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                                                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div className="text-sm text-slate-500">NIC Number</div>
                                                    <div className="font-semibold text-slate-900">{selectedRental.nic}</div>
                                                </div>
                                            </div>

                                            <div className="flex items-center space-x-4 p-4 bg-white rounded-2xl shadow-sm">
                                                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                                                    <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div className="text-sm text-slate-500">Phone Number</div>
                                                    <div className="font-semibold text-slate-900">{selectedRental.phone}</div>
                                                </div>
                                            </div>

                                            <div className="flex items-start space-x-4 p-4 bg-white rounded-2xl shadow-sm">
                                                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center mt-1">
                                                    <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div className="text-sm text-slate-500">Address</div>
                                                    <div className="font-semibold text-slate-900 leading-relaxed">{selectedRental.address}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Vehicle Information */}
                                    <div className="bg-gradient-to-br from-slate-50 to-green-50 rounded-3xl p-8 border border-slate-200">
                                        <div className="flex items-center space-x-4 mb-6">
                                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z"/>
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-slate-900">Vehicle Details</h3>
                                                <p className="text-slate-600">Rental information</p>
                                            </div>
                                        </div>

                                        {/* Vehicle Image */}
                                        {selectedRental.image && (
                                            <div className="mb-6">
                                                <img
                                                    src={selectedRental.image}
                                                    alt={`${selectedRental.brand} ${selectedRental.model}`}
                                                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                                                />
                                            </div>
                                        )}

                                        <div className="space-y-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="p-4 bg-white rounded-2xl shadow-sm">
                                                    <div className="text-sm text-slate-500 mb-1">Brand</div>
                                                    <div className="font-bold text-slate-900 text-lg">{selectedRental.brand}</div>
                                                </div>
                                                <div className="p-4 bg-white rounded-2xl shadow-sm">
                                                    <div className="text-sm text-slate-500 mb-1">Model</div>
                                                    <div className="font-bold text-slate-900 text-lg">{selectedRental.model}</div>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-white rounded-2xl shadow-sm">
                                                <div className="text-sm text-slate-500 mb-1">Vehicle ID</div>
                                                <div className="font-mono text-slate-900 font-semibold">{selectedRental.carId}</div>
                                            </div>

                                            <div className="p-4 bg-white rounded-2xl shadow-sm">
                                                <div className="text-sm text-slate-500 mb-1">Owner Email</div>
                                                <div className="font-semibold text-slate-900">{selectedRental.carOwnerEmail}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Booking Summary */}
                                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-200">
                                    <div className="flex items-center space-x-4 mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-900">Booking Summary</h3>
                                            <p className="text-slate-600">Rental period and pricing</p>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <div className="p-4 bg-white rounded-2xl shadow-sm">
                                                <div className="text-sm text-slate-500 mb-1">Pickup Date</div>
                                                <div className="font-semibold text-slate-900 text-lg">
                                                    {new Date(selectedRental.startDate).toLocaleDateString('en-US', {
                                                        weekday: 'long',
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}
                                                </div>
                                            </div>

                                            <div className="p-4 bg-white rounded-2xl shadow-sm">
                                                <div className="text-sm text-slate-500 mb-1">Return Date</div>
                                                <div className="font-semibold text-slate-900 text-lg">
                                                    {new Date(selectedRental.endDate).toLocaleDateString('en-US', {
                                                        weekday: 'long',
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="p-4 bg-white rounded-2xl shadow-sm">
                                                <div className="text-sm text-slate-500 mb-1">Rental Duration</div>
                                                <div className="font-semibold text-slate-900 text-lg">
                                                    {calculateDays(selectedRental.startDate, selectedRental.endDate)} Days
                                                </div>
                                            </div>

                                            <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl shadow-lg">
                                                <div className="text-sm text-green-100 mb-1">Total Amount</div>
                                                <div className="font-bold text-white text-2xl">
                                                    {formatCurrency(selectedRental.total)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Feedback & Action Section */}
                                <div className="flex flex-col space-y-4 pt-6 border-t border-slate-200">
                                    {/* Feedback Section */}
                                    <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-6 border border-slate-200">
                                        <h4 className="text-lg font-semibold text-slate-900 mb-4">Leave Feedback</h4>
                                        <div className="flex flex-col space-y-3">
                                            <textarea
                                                value={feedback}
                                                onChange={(e) => setFeedback(e.target.value)}
                                                rows="4"
                                                className="w-full p-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                                placeholder="Share your experience with this rental..."
                                            />
                                            <button 
                                                onClick={() => savefeedback(selectedRental.carId)}
                                                disabled={!feedback.trim()}
                                                className="self-start px-6 py-3 bg-gradient-to-r from-green-600 to-lime-500 hover:from-green-700 hover:to-lime-600 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none"
                                            >
                                                <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                </svg>
                                                Submit Feedback
                                            </button>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex justify-end space-x-4">
                                        <button
                                            onClick={closeModal}
                                            className="px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-xl transition-all duration-300"
                                        >
                                            Close
                                        </button>
                                        <button 
                                            onClick={() => generatePDF(selectedRental)}
                                            className="px-6 py-3 bg-gradient-to-r from-red-600 to-pink-500 hover:from-red-700 hover:to-pink-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                        >
                                            <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            Download PDF
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}