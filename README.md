# 🛒 Tech Store - E-Commerce Platform

A modern, fully responsive e-commerce website for premium tech gadgets and electronics. Built with React, Vite, and Tailwind CSS, featuring a beautiful UI with dark mode support, product filtering, search functionality, and wishlist management.

![Tech Store](https://img.shields.io/badge/Tech-Store-orange)
![React](https://img.shields.io/badge/React-18+-blue)
![Vite](https://img.shields.io/badge/Vite-8.0-purple)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3+-06B6D4)
![License](https://img.shields.io/badge/License-MIT-green)

## 📱 Overview

**Tech Store** is a modern, fully responsive e-commerce platform dedicated to premium tech products and gadgets. Whether you're looking for high-end audio equipment, mechanical keyboards, precision mice, or 4K monitors, we've got you covered!

Built with cutting-edge web technologies including React 18+, Vite 8.0, and Tailwind CSS, Tech Store delivers a seamless shopping experience with professional design patterns and intuitive user interface.

## ✨ Features

### 🎯 Core Features

- **Enterprise Product Catalog** - High-performance components for critical infrastructure
- **Detailed Product Modals** - Click any product to view comprehensive specifications, features, and pricing
- **Modern Authentication** - Secure Login and Signup pages with form validation and animations
- **Professional UI/UX** - Award-worthy design with premium gradient effects and modern interactions
- **PDF Downloads** - One-click access to detailed product specification sheets
- **Email Subscription** - Newsletter signup for updates and exclusive technical insights
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Dark Mode Support** - Complete dark/light theme toggle with localStorage persistence
- **Smooth Animations** - Custom CSS keyframes with float, fade-in, and slide-in effects
- **Icon Integration** - Lucide React icons for consistent, modern UI elements

### 🎨 Design Highlights

- **Trust-Focused Color Palette** - Emerald & teal gradients with white and slate backgrounds
- **Dark Mode** - Complete dark/light theme with smooth transitions
- **Premium Animations** - Floating effects, fade-ins, and slide-ins (CPU-optimized, no bounce)
- **Professional Hover States** - Scale transforms, shadow effects, and gradient shifts
- **Modern Modal System** - Beautiful product detail overlays with backdrop blur
- **Gradient Accents** - Emerald-to-teal gradients for CTA buttons and branded elements
- **Typography Hierarchy** - Light font weights for premium feel with bold accents
- **Responsive Containers** - Tailwind grid system with adaptive breakpoints

### 📦 Product Categories

1. **UPS Systems** - Uninterruptible Power Supply solutions for data centers
2. **Enterprise Motherboards** - Server-grade computing platforms
3. **High-Capacity Power Supplies** - Modular, efficient PSU units
4. **Industrial Components** - Extended temperature range, rugged solutions

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Thamizh-25/KPS-SYSTEMS.git
   cd KPS-SYSTEMS
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173` (or the next available port if 5173 is in use)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```text
KPS-SYSTEMS/
├── public/              # Static assets
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation header with dark mode toggle
│   │   ├── LandingPage.jsx      # Full landing page with all sections
│   │   ├── Auth.jsx            # Authentication container with tab switching
│   │   ├── Login.jsx           # Login page with form validation
│   │   └── Signup.jsx          # Signup page with password strength indicator
│   ├── App.jsx                 # Main app component with theme management
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles with animations
├── package.json         # Project dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS v4 with dark mode config
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML template with SEO meta tags
└── README.md           # This file
```

## 🎛️ Technical Stack

| Technology | Version | Purpose |
| --- | --- | --- |
| **React** | 19.2.4 | UI library and component framework |
| **Vite** | 8.0.1 | Fast build tool and development server |
| **Tailwind CSS** | 4.2.2 | Utility-first CSS framework |
| **Lucide React** | Latest | Modern icon library for UI components |
| **JavaScript** | ES6+ | Modern JavaScript with JSX support |

## 📄 Features in Detail

### 1. Dark Mode Support

- **Theme Toggle** - Smooth animated toggle switch in navbar
- **System Detection** - Auto-detects user's OS dark mode preference
- **LocalStorage Persistence** - Saves theme preference across sessions
- **Complete Coverage** - All components optimized for dark and light modes
- **Smooth Transitions** - 300ms CSS transitions for theme changes
- **Accessibility** - High contrast ratios in both themes

### 2. Authentication System

- **Login Page**: Modern gradient design with email/password validation
- **Signup Page**: Complete registration with password strength meter and confirmation
- **Password Strength**: Real-time visual indicator (weak/medium/strong)
- **Social Sign-in**: Google and GitHub authentication button UI
- **Form Validation**: Email format, password requirements, field validation
- **Animated Modals**: Backdrop blur with smooth scale animations
- **Tab Navigation**: Seamless switching between Login and Signup with icon buttons
- **Loading States**: Spinner animation during form submission

### 3. Responsive Navbar

- **Sticky Navigation**: Always accessible header
- **Animated Toggle**: Smooth dark mode switch with sun/moon icons
- **Mobile Menu**: Hamburger menu for mobile devices
- **KPS SYSTEMS Branding**: Gradient logo with spacing
- **Quick Links**: Product categories and auth buttons
- **Professional Styling**: Emerald/teal gradients with smooth transitions

### 4. Hero Section

- **Full-Screen Layout**: Immersive landing experience
- **Animated Background**: Floating blob elements with smooth animations
- **Gradient Headlines**: Eye-catching text with emerald-to-teal gradient
- **Clear CTA**: Two button options (primary + secondary)
- **Value Proposition**: Multi-line headline with detailed description
- **Staggered Animations**: Elements fade in with slight delays

### 5. Product Categories

- **Featured Cards**: Two large, clickable category cards
- **Gradient Backgrounds**: Emerald and teal gradient overlays
- **Hover Effects**: Icon scaling and text reveal on hover
- **Icon Integration**: Large emoji indicators for category types
- **Explore Button**: Hidden "Explore" text that appears on hover

### 6. Products Grid

- **3-Column Layout**: Responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
- **Product Cards**: Icon display with hover button reveal
- **Quick Stats**: Price in INR with in-stock badges
- **Hover Effects**: Scale up and enhanced shadow effects
- **Click Interaction**: Opens detailed product modal on click

### 7. Product Detail Modal

- **Centered Overlay**: Backdrop blur with dark overlay
- **Header Section**: Product name, specs, and close button
- **Icon Display**: Large product icon in centered box
- **Sections**: About (description), Technical Specs (detailed list)
- **Pricing Display**: Large gradient text with stock indicator
- **Action Buttons**: PDF download and close buttons
- **Smooth Animations**: Slide-in and fade-in effects

### 8. Features Section

- **Card-Based Design**: 2x2 grid layout with hover effects
- **Icon Components**: Lucide React icons for visual appeal
- **Hover Animation**: Card scales up and moves higher on hover
- **4 Key Features**:
  - Enterprise Reliability (99.99% uptime)
  - Expert Technical Support (24/7)
  - Competitive Pricing (bulk discounts)
  - Same-Day Shipping (rapid deployment)

### 9. Email Subscription (CTA)

- **Full-Width Section**: Black gradient background
- **Animated Blobs**: Background floating elements
- **Email Input**: Modern placeholder with focus states
- **Subscribe Button**: Gradient with hover scale effect
- **Privacy Notice**: Legal disclaimer
- **Responsive Layout**: Stacks on mobile devices

### 10. Professional Footer

- **4-Column Layout**: Products, Support, Company, Contact sections
- **Icon Indicators**: Visual icons for each section
- **Hover Effects**: Link transitions with color changes
- **Copyright Info**: Brand name and legal links
- **Mobile Responsive**: Stacks vertically on smaller screens

## 🎨 Color Scheme

The design uses a professional trust-focused palette:

| Color | Hex Code | Usage |
| --- | --- | --- |
| **Emerald** | #059669 | Primary brand color, buttons, accents |
| **Teal** | #14B8A6 | Secondary elements, gradients |
| **White** | #FFFFFF | Backgrounds, clean spaces |
| **Gray 900** | #111827 | Dark text, CTA section background |
| **Gray 500** | #6B7280 | Secondary text |

## 📱 Responsive Breakpoints

- **Mobile** - Below 640px (full-width layout)
- **Tablet** - 640px to 1024px (optimized columns)
- **Desktop** - 1024px+ (full grid layout)

## 🔧 Key Customizations

### Product Data

Edit product list in `src/components/LandingPage.jsx`:

```javascript
{
  name: "Product Name",
  price: 2499,
  specs: "Specifications",
  icon: "🔌",
  description: "Product description",
  details: "Technical specifications"
}
```

### Styling

All styles use Tailwind CSS utility classes. Customize:

- Colors: Modify Tailwind color values in classNames
- Fonts: Update font weights in tailwind.config.js
- Spacing: Adjust padding/margin values with Tailwind units

### Navigation Links

Update links in `src/components/Navbar.jsx`

## 🚀 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Upload the dist/ folder to Netlify
```

### Deploy to GitHub Pages

```bash
npm run build
# Push dist/ folder to gh-pages branch
```

## 📊 Performance

- **Fast Load Times**: Optimized with Vite bundle splitting
- **Lighthouse Ready**: Meets accessibility and performance standards
- **Responsive Design**: Mobile-first approach
- **Smooth Animations**: GPU-accelerated CSS transitions

## 🔐 Security

- No hardcoded sensitive data
- Client-side rendering only
- Input validation ready (email forms)
- CORS-compliant architecture

## 🐛 Known Issues & Roadmap

### Current Status

- ✅ Fully functional frontend with responsive design
- ✅ Modern authentication system (Login/Signup) with animations
- ✅ Product catalog with detailed modals
- ✅ Professional UI/UX with Tailwind CSS v4
- ✅ Email validation and form handling
- ✅ Social authentication buttons (UI ready)
- ✅ Dark Mode support with theme persistence
- ✅ All custom CSS animations (float, fade-in, slide-in)
- ✅ Lucide React icon integration
- ✅ SEO meta tags and accessibility optimizations
- ✅ Zero compilation errors

### Planned Features

- 🔄 Backend integration for product database
- 🔄 PDF generation and download functionality
- 🔄 Email subscription handler with backend validation
- 🔄 Shopping cart system with local storage
- 🔄 Payment gateway integration (Razorpay, Stripe)
- 🔄 OAuth implementation (Google & GitHub)
- 🔄 Admin dashboard for product management
- 🔄 User profile management and preferences
- 🔄 Order history tracking and notifications
- 🔄 Advanced search and filtering
- 🔄 Product reviews and ratings system

## 📞 Support & Contact

For questions or support regarding KPS SYSTEMS:

- **GitHub Issues**: [Report bugs or request features](https://github.com/Thamizh-25/KPS-SYSTEMS/issues)
- **GitHub Discussions**: [Join community discussions](https://github.com/Thamizh-25/KPS-SYSTEMS/discussions)

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 👨‍💼 Author

Thamizh-25

- GitHub: [@Thamizh-25](https://github.com/Thamizh-25)
- Email: [thamizh.2005selvan@gmail.com](mailto:thamizh.2005selvan@gmail.com)
- Repository: [KPS-SYSTEMS](https://github.com/Thamizh-25/KPS-SYSTEMS)

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Web Design Best Practices](https://www.awwwards.com)

## 🙏 Acknowledgments

- Design inspiration from award-winning e-commerce platforms
- Built with modern web technologies
- Professional UI/UX principles
- Enterprise-grade reliability focus

---

**Version**: 1.1.0  
**Last Updated**: March 26, 2026  
**Status**: Active Development ✨

Modern e-commerce platform with enterprise focus, built with React 19, Tailwind CSS v4, and Vite.
Made with ❤️ for enterprise solutions.
