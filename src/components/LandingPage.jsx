import Navbar from "./Navbar";
import { useState } from "react";
import { ShoppingCart, Star, Heart, Truck, RotateCcw, Lock, Award, Search, Menu, X, Sun, Moon } from "lucide-react";

const allProducts = [
  { id: 1, name: "Premium Wireless Headphones", price: 4999, originalPrice: 7999, rating: 4.8, reviews: 256, image: "🎧", category: "audio", discount: "37%" },
  { id: 2, name: "Mechanical Gaming Keyboard", price: 7999, originalPrice: 12999, rating: 4.9, reviews: 189, image: "⌨️", category: "peripherals", discount: "38%" },
  { id: 3, name: "Ultra Precision Mouse", price: 3499, originalPrice: 5999, rating: 4.7, reviews: 342, image: "🖱️", category: "peripherals", discount: "42%" },
  { id: 4, name: "4K Monitor UltraWide", price: 24999, originalPrice: 34999, rating: 4.8, reviews: 127, image: "🖥️", category: "displays", discount: "28%" },
  { id: 5, name: "Studio Headphones Pro", price: 8999, originalPrice: 14999, rating: 4.9, reviews: 98, image: "🎙️", category: "audio", discount: "40%" },
  { id: 6, name: "Ergonomic Keyboard", price: 5999, originalPrice: 9999, rating: 4.6, reviews: 215, image: "⌨️", category: "peripherals", discount: "40%" },
  { id: 7, name: "RGB Gaming Mouse Pad", price: 1999, originalPrice: 3499, rating: 4.5, reviews: 156, image: "🎨", category: "accessories", discount: "43%" },
  { id: 8, name: "USB-C Hub Pro", price: 3499, originalPrice: 5999, rating: 4.7, reviews: 203, image: "🔌", category: "accessories", discount: "42%" },
  { id: 9, name: "Laptop Stand Aluminum", price: 2499, originalPrice: 4499, rating: 4.8, reviews: 189, image: "💻", category: "accessories", discount: "44%" }
];

const categories = [
  { id: "all", name: "All Products", emoji: "⭐" },
  { id: "audio", name: "Audio", emoji: "🎧" },
  { id: "peripherals", name: "Peripherals", emoji: "⌨️" },
  { id: "displays", name: "Displays", emoji: "🖥️" },
  { id: "accessories", name: "Accessories", emoji: "🔌" }
];

export default function LandingPage({ onNavigateToAuth, isDarkMode, onToggleTheme }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [wishlist, setWishlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = allProducts.filter(p => {
    const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen">
      <Navbar onAuthClick={onNavigateToAuth} isDarkMode={isDarkMode} onToggleTheme={onToggleTheme} />

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Premium Tech at Unbeatable Prices</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Discover our collection of premium gadgets. Up to 50% off!</p>
          <button className="px-8 py-4 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700">
            Shop Now
          </button>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-6 px-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 px-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === cat.id
                  ? "bg-orange-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200"
              }`}
            >
              {cat.emoji} {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Showing {filteredProducts.length} products</p>
          
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-xl transition">
                  <div className="relative mb-4">
                    <div className="text-6xl block">{product.image}</div>
                    <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                      {product.discount} OFF
                    </div>
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className="absolute top-0 right-0 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          wishlist.includes(product.id)
                            ? "fill-red-500 text-red-500"
                            : "text-gray-400"
                        }`}
                      />
                    </button>
                  </div>
                  <h3 className="font-bold mb-1 text-sm">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex text-yellow-400 text-xs">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-yellow-400" : "fill-gray-300"}`} />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">({product.reviews})</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm">₹{product.price.toLocaleString()}</p>
                  <p className="text-gray-500 line-through text-xs mb-3">₹{product.originalPrice.toLocaleString()}</p>
                  <button className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 flex items-center justify-center gap-2 text-sm">
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 dark:text-gray-400">No products found</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Shop With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="inline-block p-4 bg-orange-100 dark:bg-orange-900/30 rounded-lg mb-4">
                <Truck className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold mb-2">Free Shipping</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">On orders above ₹999</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-4">
                <RotateCcw className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">Easy Returns</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">30-day hassle-free returns</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-green-100 dark:bg-green-900/30 rounded-lg mb-4">
                <Lock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold mb-2">Secure Payment</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">100% encrypted</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold mb-2">Authentic</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Official warranty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-6 text-white/90">Get 20% off your first order + exclusive deals</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 font-medium"
            />
            <button className="px-8 py-3 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">Shopping</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-500">Audio</a></li>
                <li><a href="#" className="hover:text-orange-500">Peripherals</a></li>
                <li><a href="#" className="hover:text-orange-500">Displays</a></li>
                <li><a href="#" className="hover:text-orange-500">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-500">Contact Us</a></li>
                <li><a href="#" className="hover:text-orange-500">Track Order</a></li>
                <li><a href="#" className="hover:text-orange-500">Returns</a></li>
                <li><a href="#" className="hover:text-orange-500">Shipping</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-500">About Us</a></li>
                <li><a href="#" className="hover:text-orange-500">Blog</a></li>
                <li><a href="#" className="hover:text-orange-500">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>📞 +1 (234) 567 89 00</li>
                <li>✉️ support@techstore.com</li>
                <li><a href="#" className="hover:text-orange-500">Live Chat</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>© 2026 <span className="font-bold text-orange-500">TECH STORE</span>. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
