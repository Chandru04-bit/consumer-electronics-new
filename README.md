# ⚡ VOLTIX | Next-Gen Audio & Smart Wearables E-Commerce

A modern, high-performance, responsive **consumer electronics e-commerce web application** built with **React.js, Tailwind CSS, React Router DOM, Lucide Icons, and React Hot Toast**. Inspired by top audio brands like boAt, Noise, Boult, Fire-Boltt, and Mivi.

---

## 🚀 Live Demo & Repository

- **Live Demo Link:** `https://voltix-audio-electronics.vercel.app` *(Placeholder)*
- **GitHub Repository:** `https://github.com/your-username/voltix-consumer-electronics` *(Placeholder)*

---

## 🌟 Key Features

### 🎧 1. Product Catalog & Categories
- **5 Core Categories:** Wireless Earbuds (TWS), AMOLED Smart Watches, Studio ANC Headphones, 360° Bluetooth Speakers, GaN Fast Chargers & Docks.
- **20+ Detailed Products:** Curated with high-res photography, specifications, acoustic highlights, color variants, verified user reviews, and pricing badges.
- **Product Badges:** *Best Seller*, *New Launch*, and *Discount Percentage*.

### 🔍 2. Real-Time Search, Filtering & Sorting
- **Instant Search:** Dynamic search bar with keyboard shortcuts, preview thumbnails, and real-time query matching across name, category, and tagline.
- **Faceted Filters:** Filter by category, interactive price range slider (₹1,000 - ₹15,000), minimum customer rating (4.8★, 4.5★, 4.0★), and stock availability.
- **Sorting Modes:** Featured, Price: Low to High, Price: High to Low, Customer Rating, and Newest Arrivals.
- **Dual View:** Switch between Responsive Grid View and Compact List View.

### 🛍️ 3. Cart & Wishlist Ecosystem
- **Persistent State:** Cart items, color choices, quantities, and Wishlist items are saved in `localStorage`.
- **Slide-out Cart Drawer:** Review cart items, modify quantities, and check price calculations without leaving the page.
- **Free Shipping Progress Bar:** Interactive dynamic indicator tracking progress toward free express shipping.
- **Coupon System:** Real-time coupon validator with working coupon codes:
  - `VOLTIX10`: 10% OFF on all products
  - `WELCOME20`: 20% OFF Welcome Bonus (Max ₹1,000)
  - `AUDIOX500`: ₹500 OFF on orders above ₹2,500
  - `FREESHIP`: Free Express Shipping
- **Interactive Checkout Modal:** Multi-step checkout with Address form, Payment methods (UPI, Cards, COD), and celebratory confetti order confirmation.
- **Wishlist Manager:** Dedicated saved items page with "Move All to Cart" and quick toggle buttons.

### 🔬 4. Product Details Page
- **Interactive Multi-Angle Gallery:** Thumbnail switcher with hover zoom on primary image.
- **Color Variant Switcher:** Live color swatches with active selection indicators.
- **Quantity Selector:** Increment and decrement item quantities.
- **Pin Code Delivery Checker:** Check estimated delivery dates and Cash on Delivery availability.
- **Interactive Tabs:** Technical Specifications table, Audio & Performance Feature Cards, and Verified Customer Reviews with "Write a Review" submission form.
- **Related Products Carousel:** Category recommendations.

### 🌗 5. Dark / Light Mode
- Smooth transitions between **Dark Mode** (sleek neon tech aesthetic) and **Light Mode** (clean pearl studio aesthetic).
- Synced to user preference and persisted in `localStorage`.

### 📱 6. Responsive Navigation & Mobile UI
- Sticky glassmorphism header with active link indicators.
- Mobile slide-out drawer menu with quick search, category shortcuts, and auth options.
- Floating "Back to Top" button on scroll.
- Zero horizontal overflow across all screen sizes (320px mobile to 1440px+ 4K).

### 🔐 7. Authentication & Validation
- **Login Page:** Email format validation, password length checks, password visibility toggle, "Remember Me", and a **"Click to Autofill Demo Account"** button.
- **Sign Up Page:** Dynamic live Password Strength Meter (Weak / Fair / Good / Strong), matching password validation, phone number checks, and Terms acceptance.

### 🏢 8. About Us & Contact Us Pages
- **About Us:** Brand origin story, 4 engineering pillars, live stats counters (1.5M+ Users, 3.2M+ Products Sold), and leadership team cards.
- **Contact Us:** Interactive form with live validation, customer helpline, service hub locator, and accordion FAQ.

---

## 🛠️ Tech Stack

- **Frontend:** React 18 / 19, JavaScript (ES Modules)
- **Routing:** React Router DOM v6
- **Styling:** Tailwind CSS 3, Glassmorphism, Custom Keyframe Animations
- **Icons:** Lucide React
- **Notifications:** React Hot Toast
- **Celebration Animations:** Canvas-Confetti
- **Build Tool:** Vite 5

---

## 📁 Component Structure

```
src/
├── assets/                  # Brand SVG icons and assets
├── components/
│   ├── CartDrawer.jsx       # Slide-out quick cart sidebar
│   ├── CartItem.jsx         # Cart line-item row
│   ├── FilterSidebar.jsx    # Category, price, rating filter controls
│   ├── Footer.jsx           # Multi-column footer & trust badges
│   ├── Navbar.jsx           # Glassmorphism header with mobile drawer
│   ├── ProductCard.jsx      # High-impact card with color switcher & badges
│   ├── ProductSlider.jsx    # Horizontal scroll carousel
│   ├── PromoBanner.jsx      # Flash sale ticker with click-to-copy code
│   ├── QuickViewModal.jsx   # Quick view inspection modal
│   ├── ScrollToTop.jsx      # Auto scroll-to-top & floating back-to-top button
│   ├── SearchBar.jsx        # Real-time search with autocomplete popover
│   ├── SkeletonCard.jsx     # Shimmering loading skeletons
│   ├── ThemeToggle.jsx      # Sun/Moon mode switcher
│   └── WishlistButton.jsx   # Animated heart toggle button
├── context/
│   ├── AuthContext.jsx      # User login, signup, session persistence
│   ├── CartContext.jsx      # Cart items, calculations, coupon discounts
│   ├── ThemeContext.jsx     # Dark/Light mode manager & localStorage sync
│   └── WishlistContext.jsx  # Wishlist state & persistence
├── data/
│   └── products.js          # Catalog of 20+ products, specs, reviews, and stats
├── pages/
│   ├── About.jsx            # Brand story, stats, engineering pillars, team
│   ├── Cart.jsx             # Shopping cart, coupon applicator, checkout modal
│   ├── Contact.jsx          # Contact form, FAQs, service hub locator
│   ├── Home.jsx             # Hero, category tiles, bestsellers, new arrivals
│   ├── Login.jsx            # Sign in with validations & demo autofill
│   ├── NotFound.jsx         # Custom 404 page
│   ├── ProductDetails.jsx   # Gallery, specs table, reviews, related products
│   ├── Products.jsx         # Catalog with search, filters, sorting, view modes
│   ├── Signup.jsx           # Registration with password strength meter
│   └── Wishlist.jsx         # Saved products manager
├── App.jsx                  # Root layout, providers & route definitions
├── index.css                # Tailwind utilities, glassmorphism & gradients
└── main.jsx                 # Vite React entry point
```

---

## 💻 How to Run Locally

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### 2. Installation
Clone or navigate to the project directory and install dependencies:
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```
