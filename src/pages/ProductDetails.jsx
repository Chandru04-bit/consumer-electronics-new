import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Star,
  ShoppingBag,
  Heart,
  Zap,
  Truck,
  ShieldCheck,
  RotateCcw,
  Check,
  ChevronRight,
  Plus,
  Minus,
  MessageSquare,
  Share2,
  MapPin,
  Sparkles,
  Info
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ProductSlider from '../components/ProductSlider';
import { SkeletonDetails } from '../components/SkeletonCard';
import toast from 'react-hot-toast';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, setIsCartOpen } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const product = PRODUCTS.find((p) => p.id === id || p.slug === id);

  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [pinCode, setPinCode] = useState('');
  const [deliveryStatus, setDeliveryStatus] = useState(null);
  const [activeTab, setActiveTab] = useState('specs'); // 'specs' | 'features' | 'reviews'
  const [reviewsList, setReviewsList] = useState([]);
  
  // Review submission state
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewTitle, setNewReviewTitle] = useState('');
  const [newReviewComment, setNewReviewComment] = useState('');
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);

  // Set default color & reviews whenever product changes
  useEffect(() => {
    if (product) {
      setQuantity(1);
      setSelectedColor(product.colors && product.colors.length > 0 ? product.colors[0] : null);
      setReviewsList(product.customerReviews || []);
      setDeliveryStatus(null);
    }
  }, [product, id]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Product Not Found</h2>
        <p className="text-slate-400">The product you're looking for might have been retired or renamed.</p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-500 text-slate-950 font-bold text-sm shadow-glow-cyan"
        >
          Browse All Products
        </Link>
      </div>
    );
  }

  const inWishlist = isInWishlist(product.id);
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedColor, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedColor, quantity);
    setIsCartOpen(true);
  };

  const handleCheckPinCode = (e) => {
    e.preventDefault();
    if (!pinCode || pinCode.length !== 6 || isNaN(pinCode)) {
      toast.error('Please enter a valid 6-digit Pincode');
      return;
    }
    // Estimated delivery 2 days ahead
    const today = new Date();
    today.setDate(today.getDate() + 2);
    const dateStr = today.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    setDeliveryStatus({
      available: true,
      message: `FREE Delivery by ${dateStr}`,
      cod: true
    });
    toast.success(`Delivery available for ${pinCode}!`, { icon: '🚚' });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.tagline,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Product link copied to clipboard!');
    }
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReviewAuthor.trim() || !newReviewTitle.trim() || !newReviewComment.trim()) {
      toast.error('Please fill in all review fields');
      return;
    }
    setIsSubmittingReview(true);
    setTimeout(() => {
      const createdReview = {
        id: `r-${Date.now()}`,
        author: newReviewAuthor.trim(),
        rating: Number(newReviewRating),
        date: 'Just now',
        verified: true,
        title: newReviewTitle.trim(),
        comment: newReviewComment.trim()
      };
      setReviewsList(prev => [createdReview, ...prev]);
      setIsSubmittingReview(false);
      setNewReviewAuthor('');
      setNewReviewTitle('');
      setNewReviewComment('');
      toast.success('Thank you! Your verified review has been published.', { icon: '⭐' });
    }, 400);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      
      {/* Breadcrumb Bar */}
      <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 overflow-x-auto whitespace-nowrap pb-2">
        <Link to="/" className="hover:text-brand-500 transition-colors">Home</Link>
        <ChevronRight size={14} />
        <Link to="/products" className="hover:text-brand-500 transition-colors">Products</Link>
        <ChevronRight size={14} />
        <Link to={`/products?category=${product.category}`} className="hover:text-brand-500 transition-colors capitalize">
          {product.categoryName || product.category}
        </Link>
        <ChevronRight size={14} />
        <span className="text-slate-900 dark:text-white font-semibold truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Main Product Presentation Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14">
        
        {/* Left Column: Image Gallery */}
        <div className="lg:col-span-6 space-y-4">
          {/* Main Showcase Image */}
          <div className="relative aspect-square w-full rounded-3xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 p-8 flex items-center justify-center overflow-hidden group">
            {/* Wishlist & Share buttons */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
              <button
                onClick={handleShare}
                type="button"
                className="p-2.5 rounded-full bg-white/80 dark:bg-dark-surface/80 text-slate-600 dark:text-slate-300 hover:text-brand-500 backdrop-blur-md border border-slate-200 dark:border-slate-700 transition-colors"
                title="Share product"
              >
                <Share2 size={18} />
              </button>
              <button
                onClick={() => toggleWishlist(product)}
                type="button"
                className={`p-2.5 rounded-full backdrop-blur-md border transition-all ${
                  inWishlist
                    ? 'bg-rose-500 text-white border-rose-500 shadow-glow-rose'
                    : 'bg-white/80 dark:bg-dark-surface/80 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:text-rose-500'
                }`}
                title={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart size={18} className={inWishlist ? 'fill-white' : ''} />
              </button>
            </div>

            {/* Badges */}
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5 pointer-events-none">
              {product.isBestSeller && (
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500 text-slate-950 uppercase tracking-wider shadow-sm">
                  Best Seller
                </span>
              )}
              {product.isNew && (
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-brand-500 text-slate-950 uppercase tracking-wider shadow-sm">
                  New Arrival
                </span>
              )}
            </div>

            {/* Active Image with zoom on hover */}
            <img
              src={product.images && product.images.length > 0 ? product.images[0] : ''}
              alt={product.name}
              className="max-h-80 sm:max-h-96 w-auto object-contain transform group-hover:scale-110 transition-transform duration-500 ease-out"
            />
          </div>
        </div>

        {/* Right Column: Product Info & Purchase Controls */}
        <div className="lg:col-span-6 space-y-6">
          
          <div>
            {/* Category & Rating */}
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 bg-brand-500/10 px-2.5 py-0.5 rounded-full border border-brand-500/20">
                {product.categoryName}
              </span>
              <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                <Star size={14} className="fill-amber-400 text-amber-400" />
                <span>{product.rating}</span>
                <span className="text-slate-400 font-normal">({product.reviewsCount} verified reviews)</span>
              </div>
            </div>

            {/* Title & Tagline */}
            <h1 className="text-3xl sm:text-4xl font-display font-black text-slate-900 dark:text-white leading-tight">
              {product.name}
            </h1>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
              {product.tagline}
            </p>
          </div>

          {/* Price Box */}
          <div className="p-4 rounded-2xl bg-slate-100/80 dark:bg-dark-card border border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
            <div>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-black text-slate-900 dark:text-white">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-base text-slate-400 line-through font-medium">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                {product.discountPercentage > 0 && (
                  <span className="px-2.5 py-0.5 rounded-md text-xs font-black bg-accent-orange text-white">
                    {product.discountPercentage}% OFF
                  </span>
                )}
              </div>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold mt-1">
                Inclusive of all taxes • Free Express Shipping
              </p>
            </div>

            <div className="text-right text-xs">
              <span className="inline-block px-2 py-1 rounded bg-emerald-500/15 text-emerald-500 font-bold">
                In Stock ({product.stockCount} left)
              </span>
            </div>
          </div>

          {/* Color Selection */}
          {product.colors && product.colors.length > 0 && (
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Select Color: <span className="font-semibold text-brand-500 uppercase">{selectedColor?.name}</span>
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                {product.colors.map((c, idx) => {
                  const isSelected = selectedColor?.code === c.code;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedColor(c)}
                      className={`h-9 px-3.5 rounded-full border text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                        isSelected
                          ? 'border-brand-500 bg-brand-500/15 text-slate-900 dark:text-white ring-2 ring-brand-500/30'
                          : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50 dark:bg-dark-card'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-slate-300 dark:border-slate-600 shadow-inner flex-shrink-0"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span>{c.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Quantity and CTA Buttons */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3">
              {/* Quantity Counter */}
              <div className="h-12 w-32 flex items-center justify-between border border-slate-200 dark:border-slate-700 rounded-2xl bg-slate-50 dark:bg-dark-card px-2 flex-shrink-0">
                <button
                  type="button"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
                  title="Decrease"
                >
                  <Minus size={15} />
                </button>
                <span className="text-sm font-black text-slate-900 dark:text-white font-mono">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(q => Math.min(10, q + 1))}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
                  title="Increase"
                >
                  <Plus size={15} />
                </button>
              </div>

              {/* Add To Cart */}
              <button
                onClick={handleAddToCart}
                type="button"
                className="flex-1 h-12 px-6 rounded-2xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-glow-cyan transition-all transform active:scale-95 cursor-pointer"
              >
                <ShoppingBag size={17} />
                <span>ADD TO CART</span>
              </button>
            </div>

            {/* Buy Now Button */}
            <button
              onClick={handleBuyNow}
              type="button"
              className="w-full h-12 px-6 rounded-2xl bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-md cursor-pointer"
            >
              <Zap size={16} className="fill-current" />
              <span>BUY NOW (FAST CHECKOUT)</span>
            </button>
          </div>

          {/* Delivery & Pincode Checker */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-dark-card border border-slate-200/80 dark:border-slate-800/80 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
              <MapPin size={15} className="text-brand-500" />
              <span>Check Delivery & Cash on Delivery Availability</span>
            </div>
            <form onSubmit={handleCheckPinCode} className="flex gap-2 items-center">
              <input
                type="text"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                placeholder="Enter 6-digit Pincode"
                className="flex-1 h-11 px-4 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-brand-500 font-mono shadow-inner"
              />
              <button
                type="submit"
                className="h-11 px-6 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-brand-500 text-white hover:text-slate-950 text-xs font-bold transition-colors flex-shrink-0"
              >
                Check
              </button>
            </form>
            {deliveryStatus && (
              <div className="text-xs text-emerald-500 font-semibold flex items-center gap-1.5 pt-1">
                <Check size={14} className="stroke-[3]" />
                <span>{deliveryStatus.message} • Cash on Delivery Available</span>
              </div>
            )}
          </div>

          {/* Trust Highlights Strip */}
          <div className="grid grid-cols-3 gap-3 pt-2 text-center text-[11px] font-semibold text-slate-600 dark:text-slate-400">
            <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-slate-800 flex flex-col items-center gap-1">
              <ShieldCheck size={18} className="text-brand-500" />
              <span>1 Year Warranty</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-slate-800 flex flex-col items-center gap-1">
              <RotateCcw size={18} className="text-brand-500" />
              <span>7-Day Replacement</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-slate-800 flex flex-col items-center gap-1">
              <Truck size={18} className="text-brand-500" />
              <span>Free Delivery</span>
            </div>
          </div>

        </div>
      </div>

      {/* --- DETAILED TABS (SPECS, FEATURES, REVIEWS) --- */}
      <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
        
        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 gap-4 sm:gap-8 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('specs')}
            className={`pb-3 text-sm font-bold border-b-2 transition-all ${
              activeTab === 'specs'
                ? 'border-brand-500 text-brand-500'
                : 'border-transparent text-slate-400 hover:text-slate-700 dark:hover:text-white'
            }`}
          >
            Technical Specifications
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`pb-3 text-sm font-bold border-b-2 transition-all ${
              activeTab === 'features'
                ? 'border-brand-500 text-brand-500'
                : 'border-transparent text-slate-400 hover:text-slate-700 dark:hover:text-white'
            }`}
          >
            Features & Highlights ({product.features?.length || 0})
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`pb-3 text-sm font-bold border-b-2 transition-all ${
              activeTab === 'reviews'
                ? 'border-brand-500 text-brand-500'
                : 'border-transparent text-slate-400 hover:text-slate-700 dark:hover:text-white'
            }`}
          >
            Customer Reviews ({reviewsList.length})
          </button>
        </div>

        {/* Tab 1: Technical Specs */}
        {activeTab === 'specs' && (
          <div className="max-w-3xl space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
              Hardware & Performance Specs
            </h3>
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden divide-y divide-slate-200 dark:divide-slate-800">
              {product.specs &&
                Object.entries(product.specs).map(([key, val], idx) => (
                  <div
                    key={idx}
                    className={`grid grid-cols-2 p-3.5 text-xs ${
                      idx % 2 === 0 ? 'bg-slate-50/50 dark:bg-dark-card/50' : 'bg-white dark:bg-dark-card'
                    }`}
                  >
                    <span className="font-bold text-slate-700 dark:text-slate-300">{key}</span>
                    <span className="text-slate-600 dark:text-slate-400">{val}</span>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Tab 2: Features Grid */}
        {activeTab === 'features' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {product.features?.map((feat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 flex items-start gap-3.5 shadow-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-500/10 text-brand-500 flex items-center justify-center flex-shrink-0">
                  <Zap size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">{feat}</h4>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Customer Reviews */}
        {activeTab === 'reviews' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Reviews Summary & Form */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 text-center space-y-3">
                <div className="text-5xl font-black text-slate-900 dark:text-white">
                  {product.rating}
                </div>
                <div className="flex items-center justify-center gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-400">
                  Based on {product.reviewsCount} customer ratings
                </p>
              </div>

              {/* Write a Review Box */}
              <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 space-y-4">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Write a Verified Review
                </h4>
                <form onSubmit={handleReviewSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Your Name</label>
                    <input
                      type="text"
                      value={newReviewAuthor}
                      onChange={(e) => setNewReviewAuthor(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-brand-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Rating</label>
                    <select
                      value={newReviewRating}
                      onChange={(e) => setNewReviewRating(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-brand-500"
                    >
                      <option value="5">⭐⭐⭐⭐⭐ (5 - Exceptional)</option>
                      <option value="4">⭐⭐⭐⭐ (4 - Very Good)</option>
                      <option value="3">⭐⭐⭐ (3 - Average)</option>
                      <option value="2">⭐⭐ (2 - Needs Improvement)</option>
                      <option value="1">⭐ (1 - Poor)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Review Headline</label>
                    <input
                      type="text"
                      value={newReviewTitle}
                      onChange={(e) => setNewReviewTitle(e.target.value)}
                      placeholder="Summarize your experience..."
                      className="w-full px-3 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-brand-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Your Experience</label>
                    <textarea
                      rows="3"
                      value={newReviewComment}
                      onChange={(e) => setNewReviewComment(e.target.value)}
                      placeholder="Tell us what you loved about sound quality, battery, or build..."
                      className="w-full px-3 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-brand-500"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmittingReview}
                    className="w-full py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-xs shadow-glow-cyan transition-all"
                  >
                    Submit Review
                  </button>
                </form>
              </div>
            </div>

            {/* Reviews List */}
            <div className="lg:col-span-7 space-y-4">
              {reviewsList.length > 0 ? (
                reviewsList.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800/80 space-y-2 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900 dark:text-white">{rev.author}</span>
                        {rev.verified && (
                          <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                            Verified Buyer
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-slate-400">{rev.date}</span>
                    </div>

                    <div className="flex items-center gap-1 text-amber-500">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <h5 className="text-xs font-bold text-slate-800 dark:text-slate-200">{rev.title}</h5>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {rev.comment}
                    </p>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-slate-400 text-xs rounded-2xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-slate-800">
                  No written reviews yet for this product. Be the first to share your thoughts!
                </div>
              )}
            </div>
          </div>
        )}

      </div>

      {/* --- RELATED PRODUCTS SLIDER --- */}
      {relatedProducts.length > 0 && (
        <div className="pt-8">
          <ProductSlider
            title="You Might Also Like"
            subtitle="RECOMMENDED MATCHES"
            products={relatedProducts}
          />
        </div>
      )}

    </div>
  );
}
