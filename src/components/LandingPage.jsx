import Navbar from "./Navbar";
import { useState, useEffect } from "react";

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      {/* Hero Section - Tech Focused */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-white via-gray-50 to-gray-100">
        {/* Animated Background Elements */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-20 -z-10 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-15 -z-10 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-10 -z-10 animate-pulse"></div>
        
        <div className={`max-w-6xl mx-auto px-6 lg:px-8 text-center z-10 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8 inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-emerald-50 backdrop-blur border border-emerald-200 animate-slide-in-down">
            <span className="w-3 h-3 bg-emerald-600 rounded-full animate-pulse"></span>
            <span className="text-xs font-medium tracking-widest text-emerald-700">⚡ SECURE & TRUSTED • ENTERPRISE QUALITY</span>
          </div>
          
          <h1 className={`text-7xl md:text-8xl font-light mb-8 leading-tight tracking-tight text-gray-900 transform transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Power Your
            <br />
            <span className="font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Enterprise</span>
          </h1>
          
          <p className={`text-xl md:text-2xl font-light text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Premium UPS systems, enterprise motherboards, and high-performance components for your critical infrastructure.
          </p>
          
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transform transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button className="px-8 py-4 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-600/40 group">
              <span className="inline-block transition-all duration-300 group-hover:translate-x-1">→ Browse Components</span>
            </button>
            <button className="px-8 py-4 border-2 border-emerald-600 text-emerald-600 rounded-full font-medium hover:bg-emerald-50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/20">
              Get Specifications
            </button>
          </div>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-30px); }
          }
          @keyframes float-delayed {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(30px); }
          }
          @keyframes slide-in-down {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
          .animate-slide-in-down { animation: slide-in-down 0.8s ease-out; }
        `}</style>
      </section>

      {/* Featured Categories */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-light mb-4 text-gray-900">Product Categories</h2>
          <p className="text-xl text-gray-600 mb-16 font-light">Industry-leading solutions for enterprise systems</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Category 1 - UPS Systems */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 aspect-square cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-600/50">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <h3 className="text-5xl font-light mb-2 transition-all duration-500 group-hover:translate-y-1">UPS Systems</h3>
                <p className="text-emerald-50 font-light transition-all duration-500 group-hover:translate-y-1">Uninterruptible Power Supply for critical infrastructure</p>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
              <span className="absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-50 transition-all duration-500">🔌</span>
            </div>

            {/* Category 2 - Motherboards */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-700 aspect-square cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-teal-600/50">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <h3 className="text-5xl font-light mb-2 transition-all duration-500 group-hover:translate-y-1">Motherboards</h3>
                <p className="text-teal-50 font-light transition-all duration-500 group-hover:translate-y-1">Enterprise-grade computing solutions</p>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
              <span className="absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-50 transition-all duration-500">⚙️</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid - Professional */}
      <section className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-emerald-600 text-sm font-medium tracking-widest uppercase mb-4">Enterprise Solutions</p>
            <h2 className="text-6xl font-light mb-4 text-gray-900">High-Performance Components</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="group cursor-pointer transition-all duration-500"
              >
                <div className="relative overflow-hidden rounded-2xl mb-5 bg-white aspect-square border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 flex items-center justify-center">
                  <div className="text-6xl opacity-30 group-hover:opacity-40 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-emerald-600/5 transition-all duration-500 flex items-center justify-center">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProduct(item);
                      }}
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-emerald-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/40"
                    >
                      View Details →
                    </button>
                  </div>
                </div>
                <div className="px-1">
                  <h3 className="text-base font-medium text-gray-900 group-hover:text-emerald-600 transition-all duration-300 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-500 font-light mb-4">{item.specs}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-emerald-600">₹{item.price.toLocaleString()}</span>
                    <span className="text-xs text-emerald-600 font-medium">In Stock</span>
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
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 animate-slide-in border border-gray-200 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-medium">{selectedProduct.name}</h2>
                <p className="text-gray-500 text-sm mt-2">{selectedProduct.specs}</p>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-gray-400 hover:text-gray-600 rounded-lg p-2 transition-all duration-300 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              {/* Product Image */}
              <div className="mb-8 bg-gray-50 rounded-lg p-12 text-center aspect-square flex items-center justify-center border border-gray-200">
                <span className="text-8xl opacity-40">{selectedProduct.icon}</span>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-3">About this Product</h3>
                <p className="text-base text-gray-700 font-light leading-relaxed">{selectedProduct.description}</p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Technical Specifications</h3>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <p className="text-gray-700 font-light whitespace-pre-line text-sm leading-relaxed">
                    {selectedProduct.details}
                  </p>
                </div>
              </div>

              {/* Price and Action */}
              <div className="border-t border-gray-200 pt-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-gray-600 font-light text-sm mb-1">Price per Unit</p>
                    <p className="text-4xl font-medium text-emerald-600">₹{selectedProduct.price.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-emerald-50 border border-emerald-200 text-emerald-700 px-3 py-1 rounded-lg text-xs font-medium">
                      ✓ In Stock
                    </span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 px-8 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/40">
                    📄 Download PDF Spec Sheet
                  </button>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="flex-1 px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300"
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

      {/* Features Section - Professional */}
      <section className="py-32 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <p className="text-emerald-600 text-sm font-medium tracking-widest uppercase mb-4">Why Choose Us</p>
            <h2 className="text-6xl font-light text-gray-900">Trusted Enterprise Partner</h2>
          </div>
          
          <div className="space-y-12">
            {[
              {
                title: "Enterprise Reliability",
                desc: "99.99% uptime guarantee with certified enterprise components tested for industrial use.",
                icon: "✓"
              },
              {
                title: "Expert Technical Support",
                desc: "24/7 technical assistance from certified engineers with deep component expertise.",
                icon: "🛠️"
              },
              {
                title: "Competitive Pricing",
                desc: "Volume discounts and competitive pricing for bulk purchases and partnerships.",
                icon: "💰"
              },
              {
                title: "Rapid Deployment",
                desc: "Same-day shipping for in-stock items with next business day delivery options.",
                icon: "⚡"
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="pb-12 border-b border-gray-200 last:border-0 transition-all duration-500 group cursor-pointer"
              >
                <div className="flex items-start gap-6">
                  <div className="text-4xl text-emerald-600 flex-shrink-0 group-hover:opacity-100 opacity-70">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-medium mb-3 text-gray-900 group-hover:text-emerald-600 transition-all duration-300">{item.title}</h3>
                    <p className="text-gray-600 font-light leading-relaxed group-hover:text-gray-700 transition-all duration-300">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-8 bg-gray-900 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-light mb-8 text-white">Stay Powered. Stay Connected.</h2>
          <p className="text-xl text-gray-300 font-light mb-12">Subscribe to get early access to new components and exclusive technical updates</p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all duration-300 backdrop-blur-sm"
            />
            <button className="px-8 py-4 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/40">
              Subscribe
            </button>
          </div>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-30px); }
          }
          @keyframes float-delayed {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(30px); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        `}</style>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-300 py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {[
              { title: "PRODUCTS", links: ["UPS Systems", "Motherboards", "Power Supplies", "Accessories"] },
              { title: "SUPPORT", links: ["Documentation", "Technical Specs", "Warranty", "Returns"] },
              { title: "COMPANY", links: ["About Us", "Careers", "Press", "Blog"] },
              { title: "CONTACT", links: ["Email Support", "Phone: 1-800-TECH", "Live Chat", "RMA Portal"] }
            ].map((column, i) => (
              <div key={i} className="group">
                <h4 className="text-sm font-bold tracking-widest mb-6 text-emerald-600">{column.title}</h4>
                <ul className="space-y-3">
                  {column.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-gray-600 hover:text-emerald-600 transition-all duration-300 font-light transform hover:translate-x-2 inline-block">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 font-light text-sm\">&copy; 2026 KPS SYSTEMS. All rights reserved. Enterprise-grade components for demanding applications.</p>
            <div className="flex gap-6 mt-6 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition-all duration-300 text-sm font-light\">Privacy</a>
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition-all duration-300 text-sm font-light\">Terms</a>
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition-all duration-300 text-sm font-light\">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
