import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
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
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white/90 font-semibold text-sm">Get in Touch</span>
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Contact Elite Drive
              </span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Your premium car rental experience is just a conversation away. Our dedicated concierge team is here to assist you 24/7.
            </p>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
                    Get in 
                    <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      Touch Today
                    </span>
                  </h2>
                  <p className="text-xl text-slate-600 leading-relaxed">
                    Whether you need immediate assistance or want to plan your next luxury journey, our concierge team is ready to provide personalized service.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Office Address */}
                  <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Headquarters</h3>
                        <p className="text-slate-600 leading-relaxed">
                          Elite Drive Corporate Center<br />
                          No: 151, Seewali Road<br />
                          Borella, Colombo 08<br />
                          Sri Lanka
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Phone Numbers */}
                  <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Phone Support</h3>
                        <p className="text-slate-600 leading-relaxed">
                          <a href="tel:+94711234567" className="hover:text-blue-600 transition-colors font-medium">+94 71 123 4567</a><br />
                          <a href="tel:+94779876543" className="hover:text-blue-600 transition-colors font-medium">+94 77 987 6543</a>
                        </p>
                        <p className="text-sm text-slate-500 mt-1">Available 24/7</p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Email Support</h3>
                        <p className="text-slate-600 leading-relaxed">
                          <a href="mailto:reservations@elitedrive.lk" className="hover:text-blue-600 transition-colors font-medium">reservations@elitedrive.lk</a><br />
                          <a href="mailto:support@elitedrive.lk" className="hover:text-blue-600 transition-colors font-medium">support@elitedrive.lk</a>
                        </p>
                        <p className="text-sm text-slate-500 mt-1">Response within 5 minutes</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 pt-8">
                  <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-3">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div className="text-2xl font-bold text-slate-800 mb-1">&lt;5min</div>
                    <div className="text-sm text-slate-600">Response Time</div>
                  </div>
                  
                  <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-3">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <div className="text-2xl font-bold text-slate-800 mb-1">24/7</div>
                    <div className="text-sm text-slate-600">Premium Support</div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100">
                <form className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-800 mb-2">Send us a Message</h2>
                    <p className="text-slate-600">Tell us about your luxury car rental needs and we'll get back to you within minutes.</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-slate-50 border-2 border-slate-200 hover:border-blue-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-3 text-slate-800 transition-all duration-300 outline-none"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-slate-50 border-2 border-slate-200 hover:border-blue-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-3 text-slate-800 transition-all duration-300 outline-none"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full bg-slate-50 border-2 border-slate-200 hover:border-blue-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-3 text-slate-800 transition-all duration-300 outline-none"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Service Type</label>
                    <select className="w-full bg-slate-50 border-2 border-slate-200 hover:border-blue-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-3 text-slate-800 transition-all duration-300 outline-none">
                      <option>Select a service</option>
                      <option>Vehicle Reservation</option>
                      <option>Concierge Service</option>
                      <option>Corporate Rentals</option>
                      <option>Airport Transfers</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Your Message</label>
                    <textarea
                      name="message"
                      rows="6"
                      required
                      className="w-full bg-slate-50 border-2 border-slate-200 hover:border-blue-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-3 text-slate-800 transition-all duration-300 outline-none resize-none"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <div className="flex items-center space-x-3">
                    <input type="checkbox" id="newsletter" className="w-4 h-4 text-blue-600 rounded" />
                    <label htmlFor="newsletter" className="text-sm text-slate-600">
                      Subscribe to our newsletter for exclusive offers
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-4 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Experience 
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Elite Service?
              </span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Don't wait - contact our concierge team now and discover the Elite Drive difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+94711234567" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Now</span>
              </a>
              <a href="mailto:reservations@elitedrive.lk" className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}