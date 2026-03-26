import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { ChevronRight, Shield, Zap, Target, Lock } from "lucide-react";

export default function LandingPage({ onNavigateToAuth, isDarkMode, onToggleTheme }) {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar onAuthClick={onNavigateToAuth} isDarkMode={isDarkMode} onToggleTheme={onToggleTheme} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 transition-colors duration-300">
        {/* Animated Background Elements */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-200 dark:bg-emerald-900/20 rounded-full blur-3xl opacity-30 dark:opacity-10 -z-10 animate-float transition-all duration-300"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-100 dark:bg-teal-900/15 rounded-full blur-3xl opacity-25 dark:opacity-5 -z-10 animate-float-delayed transition-all duration-300"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-emerald-100 dark:bg-emerald-900/10 rounded-full blur-3xl opacity-20 dark:opacity-5 -z-10 transition-all duration-300"></div>
        
        <div className={`max-w-5xl mx-auto px-6 lg:px-8 text-center z-10 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8 inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 animate-fade-in-up transition-colors duration-300">
            <span className="w-2 h-2 bg-emerald-600 dark:bg-emerald-400 rounded-full animate-pulse"></span>
            <span className="text-xs font-medium tracking-widest text-emerald-700 dark:text-emerald-300">⚡ ENTERPRISE SOLUTIONS • TRUSTED WORLDWIDE</span>
          </div>
          
          <h1 className={`text-6xl md:text-7xl font-light mb-6 leading-tight tracking-tight text-gray-900 dark:text-white transform transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Power Your
            <br />
            <span className="font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">Critical Infrastructure</span>
          </h1>
          
          <p className={`text-lg md:text-xl font-light text-gray-700 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Enterprise-grade UPS systems, professional motherboards, and industrial-strength components designed for maximum uptime and reliability.
          </p>
          
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transform transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-500 dark:to-teal-500 hover:from-emerald-700 hover:to-teal-700 dark:hover:from-emerald-600 dark:hover:to-teal-600 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-600/40 transform hover:scale-105 group inline-flex items-center gap-2">
              Browse Products
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="px-8 py-4 border-2 border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 rounded-lg font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950/20 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/20">
              View Specs
            </button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-32 px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium tracking-widest uppercase mb-4 transition-colors duration-300">Featured Categories</p>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 dark:text-white transition-colors duration-300">Industry Solutions</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 rounded mt-6 transition-all duration-300"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Category 1 - UPS Systems */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 dark:from-emerald-700 dark:to-teal-800 aspect-square cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-600/50">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
              {/* Floating icon background */}
              <div className="absolute top-8 right-8 text-8xl opacity-10 dark:opacity-5 group-hover:opacity-20 dark:group-hover:opacity-10 transition-all duration-500 transform group-hover:scale-110">🔌</div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-10 text-white z-10">
                <h3 className="text-5xl font-light mb-3 transition-all duration-500 group-hover:translate-y-2">UPS Systems</h3>
                <p className="text-emerald-50 font-light text-lg transition-all duration-500 group-hover:translate-y-2">Uninterruptible power supply solutions for critical infrastructure</p>
                <span className="mt-4 text-emerald-200 font-medium text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-2">
                  Explore <ChevronRight className="w-4 h-4" />
                </span>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
            </div>

            {/* Category 2 - Motherboards */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-700 dark:from-teal-700 dark:to-cyan-800 aspect-square cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-teal-600/50">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
              {/* Floating icon background */}
              <div className="absolute top-8 right-8 text-8xl opacity-10 dark:opacity-5 group-hover:opacity-20 dark:group-hover:opacity-10 transition-all duration-500 transform group-hover:scale-110">⚙️</div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-10 text-white z-10">
                <h3 className="text-5xl font-light mb-3 transition-all duration-500 group-hover:translate-y-2">Motherboards</h3>
                <p className="text-teal-50 font-light text-lg transition-all duration-500 group-hover:translate-y-2">Enterprise-grade computing for maximum performance</p>
                <span className="mt-4 text-teal-200 font-medium text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-2">
                  Explore <ChevronRight className="w-4 h-4" />
                </span>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-32 px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium tracking-widest uppercase mb-4 transition-colors duration-300">Premium Components</p>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 dark:text-white transition-colors duration-300">High-Performance Products</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 rounded mt-6 transition-all duration-300"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: "Enterprise UPS 3000VA", 
                price: 2499, 
                specs: "3000VA/2400W",
                icon: "🔌",
                description: "High-capacity uninterruptible power supply designed for enterprise server rooms and data centers. Features pure sine wave output, automatic voltage regulation, and battery backup for critical systems.",
                details: "• Input: 220V/230V AC, ±15%\n• Output: 3000VA/2400W\n• Battery Type: Sealed Lead-Acid\n• Runtime: 15 minutes at full load\n• Transfer time: < 4ms\n• Efficiency: 95%\n• Warranty: 2 Years"
              },
              { 
                name: "Server Motherboard X99", 
                price: 1899, 
                specs: "LGA 2011-3",
                icon: "⚙️",
                description: "Professional-grade server motherboard supporting Intel Xeon processors. Built for maximum uptime with redundant power delivery and advanced cooling solutions.",
                details: "• Socket: LGA 2011-3 (Sandy/Ivy Bridge-EP)\n• Form Factor: ATX\n• Memory: up to 256GB DDR4 ECC\n• Storage: 10x SATA3, 2x M.2 NVMe\n• Network: Dual Gigabit Ethernet\n• Features: ECC Memory Support, IPMI 2.0\n• Warranty: 3 Years"
              },
              { 
                name: "High-Capacity PSU 1200W", 
                price: 899, 
                specs: "Modular, 80+ Platinum",
                icon: "🔋",
                description: "Premium modular power supply with 80+ Platinum certification. Delivers ultra-efficient power conversion with minimal heat and noise for high-performance systems.",
                details: "• Power: 1200W (Continuous)\n• Efficiency: 80+ Platinum Rating\n• Modularity: Fully Modular Cables\n• Protection: OVP, UVP, OCP, OTP\n• Cooling: Hybrid Fan Control\n• Noise Level: < 25dB @ 50% load\n• Warranty: 10 Years"
              },
              { 
                name: "Data Center UPS 5000VA", 
                price: 4299, 
                specs: "5000VA/4000W",
                icon: "🛡️",
                description: "Industrial-grade UPS system with advanced battery management for mission-critical applications. Supports hot-swappable batteries and advanced monitoring.",
                details: "• Capacity: 5000VA/4000W\n• Battery: Hot-swappable Modules\n• Runtime: 30 minutes at full load\n• SNMP Monitoring: Built-in\n• Parallel Capable: Up to 6 units\n• Conversion Time: < 2ms\n• Efficiency: 96%\n• Warranty: 5 Years"
              },
              { 
                name: "Industrial Motherboard", 
                price: 1599, 
                specs: "Extended Temperature",
                icon: "💻",
                description: "Rugged motherboard engineered for harsh industrial environments. Supports wide temperature ranges and offers enhanced stability for 24/7 operation.",
                details: "• Processor: Intel Core i7/i9 (Desktop)\n• Form Factor: Mini-ITX\n• Operating Temp: -20°C to 60°C\n• Storage Temp: -40°C to 80°C\n• Memory: up to 64GB DDR4\n• Features: Fanless Design Option\n• Vibration Resistant: MIL-STD-810G\n• Warranty: 3 Years"
              },
              { 
                name: "Redundant PSU Module 800W", 
                price: 699, 
                specs: "Hot-swappable",
                icon: "⚡",
                description: "Hot-swappable power module for redundant PSU systems. Enables zero-downtime maintenance and power supply upgrades without system shutdown.",
                details: "• Power: 800W Per Unit\n• Redundancy: N+1 Configuration\n• Efficiency: 80+ Gold Rating\n• Hot-swap Time: < 100ms\n• Monitoring: Real-time Current/Voltage\n• Protection: Overcurrent, Overvoltage\n• Dimensions: 50mm L x 40mm H x 150mm W\n• Warranty: 5 Years"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                onClick={() => setSelectedProduct(item)}
                className="group cursor-pointer transition-all duration-500 transform hover:scale-105"
              >
                <div className="relative overflow-hidden rounded-xl mb-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900 aspect-square border border-gray-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 dark:hover:shadow-emerald-600/10 flex items-center justify-center group">
                  <div className="text-7xl opacity-40 dark:opacity-50 group-hover:opacity-60 dark:group-hover:opacity-70 transition-all duration-300 transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent dark:from-black/20 group-hover:from-emerald-600/10 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 dark:group-hover:bg-white/2 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProduct(item);
                      }}
                      className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-500 dark:to-teal-500 hover:from-emerald-700 hover:to-teal-700 dark:hover:from-emerald-600 dark:hover:to-teal-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-emerald-600/40 transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
                    >
                      View Details <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="px-2">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-all duration-300 mb-2 line-clamp-2">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-light mb-4 transition-colors duration-300">{item.specs}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent transition-all duration-300">₹{item.price.toLocaleString()}</span>
                    <span className="text-xs bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 font-medium px-3 py-1 rounded-full transition-colors duration-300">In Stock</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in transition-colors duration-300"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 animate-slide-in border border-gray-200 dark:border-slate-700 shadow-2xl dark:shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-slate-800/50 border-b border-gray-200 dark:border-slate-700 px-8 py-6 flex justify-between items-center transition-all duration-300">
              <div>
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">{selectedProduct.name}</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 transition-colors duration-300">{selectedProduct.specs}</p>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg p-2 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-slate-700 flex-shrink-0 ml-4"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 space-y-8">
              {/* Product Image */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900 rounded-xl p-16 text-center aspect-square flex items-center justify-center border border-gray-200 dark:border-slate-700 transition-colors duration-300">
                <span className="text-9xl opacity-50 dark:opacity-60 transition-opacity duration-300">{selectedProduct.icon}</span>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300 flex items-center gap-2">
                  <Target className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  About this Product
                </h3>
                <p className="text-base text-gray-700 dark:text-gray-300 font-light leading-relaxed transition-colors duration-300">{selectedProduct.description}</p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  Technical Specifications
                </h3>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800/50 dark:to-slate-900/50 rounded-xl p-6 border border-gray-200 dark:border-slate-700 transition-colors duration-300">
                  <p className="text-gray-700 dark:text-gray-300 font-light whitespace-pre-line text-sm leading-relaxed transition-colors duration-300">
                    {selectedProduct.details}
                  </p>
                </div>
              </div>

              {/* Price and Action */}
              <div className="border-t border-gray-200 dark:border-slate-700 pt-8 transition-colors duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 font-light text-sm mb-2 transition-colors duration-300 flex items-center gap-2">
                      <Lock className="w-4 h-4" />
                      Price per Unit
                    </p>
                    <p className="text-5xl font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent transition-all duration-300">₹{selectedProduct.price.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
                      <Shield className="w-4 h-4" />
                      In Stock
                    </span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-500 dark:to-teal-500 hover:from-emerald-700 hover:to-teal-700 dark:hover:from-emerald-600 dark:hover:to-teal-600 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/40 transform hover:scale-105 inline-flex items-center justify-center gap-2">
                    📄 Download PDF Spec
                  </button>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="flex-1 px-8 py-3 border-2 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-slate-800 transition-all duration-300 hover:border-gray-400 dark:hover:border-slate-500"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>

            <style>{`
              @keyframes fade-in {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              @keyframes slide-in {
                from { 
                  opacity: 0;
                  transform: scale(0.95) translateY(20px);
                }
                to { 
                  opacity: 1;
                  transform: scale(1) translateY(0);
                }
              }
              .animate-fade-in { animation: fade-in 0.3s ease-out; }
              .animate-slide-in { animation: slide-in 0.3s ease-out; }
            `}</style>
          </div>
        </div>
      )}

      {/* Features Section */}
      <section className="py-32 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20 text-center">
            <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium tracking-widest uppercase mb-4 transition-colors duration-300">Why Choose Us</p>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 dark:text-white transition-colors duration-300">Trusted Enterprise Partner</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 rounded mt-6 mx-auto transition-all duration-300"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Enterprise Reliability",
                desc: "99.99% uptime guarantee with certified enterprise components tested for industrial use.",
                icon: Shield
              },
              {
                title: "24/7 Technical Support",
                desc: "Round-the-clock assistance from certified engineers with deep component expertise.",
                icon: Zap
              },
              {
                title: "Competitive Pricing",
                desc: "Volume discounts and best-in-class pricing for bulk purchases and partnerships.",
                icon: Target
              },
              {
                title: "Same-Day Shipping",
                desc: "Express delivery for in-stock items with next business day options available.",
                icon: Lock
              }
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={i} 
                  className="group p-8 bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/10 dark:hover:shadow-emerald-600/5 transform hover:scale-105 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-lg group-hover:from-emerald-200 dark:group-hover:from-emerald-800 group-hover:to-teal-200 dark:group-hover:to-teal-800 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-all duration-300">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-all duration-300">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-emerald-900/10 to-black dark:from-black dark:via-slate-900 dark:to-black text-white overflow-hidden relative transition-colors duration-300">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-white">Get Enterprise Power Today</h2>
          <p className="text-xl text-gray-300 font-light mb-12 transition-colors duration-300 max-w-2xl mx-auto">Subscribe to our newsletter for exclusive product launches, technical updates, and special enterprise deals.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <input 
              type="email" 
              placeholder="your@enterprise.com" 
              className="flex-1 px-6 py-4 bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-lg text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-emerald-400 dark:focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400/50 dark:focus:ring-emerald-500/50 transition-all duration-300 backdrop-blur-sm font-light"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-500 dark:to-teal-500 hover:from-emerald-700 hover:to-teal-700 dark:hover:from-emerald-600 dark:hover:to-teal-600 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/40 transform hover:scale-105 inline-flex items-center justify-center gap-2">
              Subscribe
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          <p className="text-sm text-gray-400 italic font-light">We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-300 dark:border-slate-800 py-20 px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {[
              { 
                title: "PRODUCTS", 
                links: ["UPS Systems", "Motherboards", "Power Supplies", "Accessories"],
                icon: "🔌"
              },
              { 
                title: "SUPPORT", 
                links: ["Documentation", "Tech Specs", "Warranty Info", "RMA Portal"],
                icon: "🛠️"
              },
              { 
                title: "COMPANY", 
                links: ["About Us", "Careers", "Press Kit", "Blog"],
                icon: "🏢"
              },
              { 
                title: "CONTACT", 
                links: ["Email Support", "Phone: 1-800-TECH", "Live Chat", "Contact Form"],
                icon: "📞"
              }
            ].map((column, i) => (
              <div key={i} className="group">
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-2xl">{column.icon}</span>
                  <h4 className="text-xs font-bold tracking-widest text-emerald-600 dark:text-emerald-400 transition-colors duration-300">{column.title}</h4>
                </div>
                <ul className="space-y-3">
                  {column.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 font-light transform hover:translate-x-2 inline-block text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-300 dark:border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 transition-colors duration-300">
            <p className="text-gray-600 dark:text-gray-400 font-light text-sm transition-colors duration-300">
              &copy; 2026 <span className="font-semibold text-emerald-600 dark:text-emerald-400">KPS SYSTEMS</span>. All rights reserved. Enterprise components for demanding applications.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 text-sm font-light hover:underline">Privacy Policy</a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 text-sm font-light hover:underline">Terms</a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 text-sm font-light hover:underline">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
