import Header from "../components/Header";
import Footer from "../components/Footer";

const testimonialsData = [
  {
    img: "/client-1.jpg",
    name: "Sarah Johnson",
    title: "Business Executive",
    rating: 5,
    text: "Elite Drive transformed my business trip into a luxury experience. The vehicle was immaculate and the service was impeccable. Their attention to detail is unmatched.",
  },
  {
    img: "/client-2.jpg",
    name: "Michael Adams",
    title: "Travel Consultant",
    rating: 5,
    text: "Outstanding customer support! The concierge team anticipated my needs and provided seamless service from booking to return. Truly a premium experience.",
  },
  {
    img: "/client-3.jpg",
    name: "Emily Martinez",
    title: "Event Planner",
    rating: 5,
    text: "The luxury fleet and professional service exceeded all expectations. Every client I've referred has been equally impressed. Elite Drive sets the standard.",
  },
  {
    img: "/client-4.jpg",
    name: "Jason Lee",
    title: "Tech Entrepreneur",
    rating: 5,
    text: "Flexibility and reliability when it matters most. Their premium vehicles and white-glove service make every journey memorable. My go-to choice for luxury rentals.",
  },
  {
    img: "/client-5.jpg",
    name: "David Thompson",
    title: "Investment Banker",
    rating: 5,
    text: "The epitome of luxury car rental service. From the pristine vehicles to the professional staff, every detail reflects their commitment to excellence.",
  },
];

const Stars = ({ rating }) => (
  <div className="flex text-yellow-400 mb-4">
    {[...Array(5)].map((_, i) =>
      i < rating ? (
        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg key={i} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    )}
    <span className="ml-2 text-sm text-slate-500">{rating}.0</span>
  </div>
);

export default function Testimonials() {
  return (
    <>
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
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-white/90 font-semibold text-sm">Customer Reviews</span>
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Discover why discerning travelers choose Elite Drive for their premium car rental needs. 
              Read authentic testimonials from our valued customers.
            </p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
                Trusted by Thousands
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Real experiences from professionals who demand excellence
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {testimonialsData.map(({ img, name, title, rating, text }, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group"
                >
                  <Stars rating={rating} />
                  <blockquote className="text-slate-600 italic text-lg leading-relaxed mb-6">
                    "{text}"
                  </blockquote>
                  <div className="flex items-center">
                    <img
                      src={img}
                      alt={name}
                      className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-blue-200 group-hover:border-blue-400 transition-colors duration-300"
                    />
                    <div>
                      <h4 className="font-bold text-slate-800">{name}</h4>
                      <p className="text-sm text-slate-500">{title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-1">4.9/5</div>
                <div className="text-sm text-slate-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-1">10K+</div>
                <div className="text-sm text-slate-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-1">85%</div>
                <div className="text-sm text-slate-600">Repeat Customers</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-1">50+</div>
                <div className="text-sm text-slate-600">Awards Won</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img
                  src="/choose.png"
                  alt="Why choose Elite Drive"
                  className="w-full rounded-2xl shadow-xl"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-3 shadow-xl">
                  <div className="text-center">
                    <div className="font-bold text-sm">99%</div>
                    <div className="text-xs opacity-90">Satisfaction</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-3 shadow-xl">
                  <div className="text-center">
                    <div className="font-bold text-sm">24/7</div>
                    <div className="text-xs opacity-90">Support</div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
                    Why Choose 
                    <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      Elite Drive?
                    </span>
                  </h2>
                  <p className="text-xl text-slate-600 leading-relaxed">
                    Experience the pinnacle of luxury car rental service with our commitment to excellence, 
                    premium fleet, and unmatched customer care.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex space-x-4 items-start group">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">24/7 Concierge</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">Dedicated support team available around the clock for personalized assistance.</p>
                    </div>
                  </div>

                  <div className="flex space-x-4 items-start group">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">Premium Locations</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">Strategic pickup points at airports, hotels, and exclusive venues.</p>
                    </div>
                  </div>

                  <div className="flex space-x-4 items-start group">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">Transparent Pricing</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">Premium value with no hidden fees or surprise charges.</p>
                    </div>
                  </div>

                  <div className="flex space-x-4 items-start group">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">Verified Excellence</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">Rigorously maintained luxury vehicles from trusted premium brands.</p>
                    </div>
                  </div>

                  <div className="flex space-x-4 items-start group">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">Flexible Terms</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">Adaptable booking options with complimentary modifications.</p>
                    </div>
                  </div>

                  <div className="flex space-x-4 items-start group">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">Professional Service</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">White-glove treatment with experienced drivers available on request.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Join Our Elite 
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Community
              </span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Experience the difference that true luxury and exceptional service can make for your next journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Reserve Your Vehicle
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300">
                Read More Reviews
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}