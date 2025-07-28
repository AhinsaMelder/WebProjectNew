import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-24 px-6 pt-32">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-white/90 font-semibold text-sm">About Elite Drive</span>
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Our Story
              </span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Elite Drive is committed to redefining your travel experience with premium car rentals. 
              Whether you're exploring new destinations or need a reliable ride for business, we deliver excellence at every mile.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
                Why Choose Elite Drive?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Experience the difference with our premium service and commitment to excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Premium Fleet</h3>
                <p className="text-slate-600 leading-relaxed">
                  From luxury sedans to premium SUVs, our meticulously maintained fleet is designed to exceed your expectations.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-100">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Flexible Booking</h3>
                <p className="text-slate-600 leading-relaxed">
                  Enjoy complete freedom with flexible pickup times, multiple locations, and easy modification options.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-100">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">24/7 Excellence</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our dedicated concierge team is available around the clock to provide personalized assistance and support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
                Premium Services
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive solutions designed for the discerning traveler
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-100">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Premium Locations</h3>
                <p className="text-slate-600 leading-relaxed">
                  Strategic pickup points at airports, hotels, and city centers for maximum convenience and accessibility.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-slate-50 to-green-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-100">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Eco-Luxury Fleet</h3>
                <p className="text-slate-600 leading-relaxed">
                  Drive responsibly with our collection of hybrid and electric luxury vehicles that don't compromise on performance.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-slate-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Safety Excellence</h3>
                <p className="text-slate-600 leading-relaxed">
                  Comprehensive safety protocols, regular maintenance, and full insurance coverage for complete peace of mind.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 px-6 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Our Values
                </span>
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                The principles that drive everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Excellence</h3>
                    <p className="text-blue-100">We strive for perfection in every aspect of our service, from vehicle quality to customer experience.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Trust</h3>
                    <p className="text-blue-100">Building lasting relationships through transparency, reliability, and consistent delivery on our promises.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💎</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Luxury</h3>
                    <p className="text-blue-100">Delivering premium experiences that exceed expectations and create memorable journeys.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-xl mb-4">
                    <span className="text-3xl font-bold text-white">ED</span>
                  </div>
                  <h3 className="text-2xl font-bold">Elite Drive Promise</h3>
                </div>
                <p className="text-blue-100 leading-relaxed text-center">
                  "We don't just rent cars; we craft experiences. Every journey with Elite Drive is an opportunity to exceed expectations and create lasting memories."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Real experiences from our valued customers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                  <span className="text-sm text-slate-500">5.0</span>
                </div>
                <p className="text-slate-600 italic mb-6 leading-relaxed">
                  "Elite Drive transformed my business trip into a luxury experience. The vehicle was immaculate and the service was impeccable."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    SJ
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800">Sarah Johnson</h5>
                    <p className="text-sm text-slate-500">Business Executive</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                  <span className="text-sm text-slate-500">5.0</span>
                </div>
                <p className="text-slate-600 italic mb-6 leading-relaxed">
                  "From booking to return, everything was seamless. The concierge service made me feel like a VIP throughout my entire trip."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    MT
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800">Mark Thompson</h5>
                    <p className="text-sm text-slate-500">Travel Blogger</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                  <span className="text-sm text-slate-500">5.0</span>
                </div>
                <p className="text-slate-600 italic mb-6 leading-relaxed">
                  "Elite Drive sets the standard for luxury car rentals. Reliable, premium, and worth every penny. My go-to choice always."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    ER
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800">Emily Rodriguez</h5>
                    <p className="text-sm text-slate-500">Event Planner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Experience 
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Elite Drive?
              </span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join thousands of satisfied customers who trust Elite Drive for their premium car rental needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Book Your Car Now
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}