import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  Truck,
  Sparkles,
  Star,
  Play,
  Flame,
  Volume2,
  Clock,
  Award,
  Headphones,
  Watch,
  Disc,
  Radio,
  ChevronRight,
  TrendingUp,
  Sliders
} from 'lucide-react';
import { PRODUCTS, CATEGORIES, BRAND_STATS, TESTIMONIALS } from '../data/products';
import ProductCard from '../components/ProductCard';
import ProductSlider from '../components/ProductSlider';
import QuickViewModal from '../components/QuickViewModal';

export default function Home() {
  const navigate = useNavigate();
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const bestSellers = PRODUCTS.filter(p => p.isBestSeller);
  const newArrivals = PRODUCTS.filter(p => p.isNew);
  const heroProduct = PRODUCTS[0]; // Voltix Pods Pro ANC
  const flagshipWatch = PRODUCTS.find(p => p.id === 'voltix-horizon-ultra-amoled') || PRODUCTS[4];
  const flagshipHeadphone = PRODUCTS.find(p => p.id === 'voltix-apex-studio-wireless') || PRODUCTS[6];

  const categoryIcons = {
    earbuds: Headphones,
    smartwatches: Watch,
    headphones: Disc,
    speakers: Radio,
    accessories: Zap,
    all: Sliders
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16 overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-12 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-orange/10 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 dark:bg-dark-card border border-brand-500/30 text-xs font-semibold text-brand-400 shadow-sm backdrop-blur-md">
                <Sparkles size={14} className="text-brand-400 animate-pulse" />
                <span>Next-Gen Audio Architecture • 2026 Edition</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl tracking-tight text-slate-900 dark:text-white leading-[1.15] max-w-xl mx-auto lg:mx-0">
                <span className="inline-block whitespace-nowrap">
                  SOUND <span className="text-gradient-cyan">RE&#8209;ENGINEERED.</span>
                </span>{' '}
                <span className="inline-block">
                  PRECISION IN <span className="text-gradient-fire whitespace-nowrap">EVERY BEAT.</span>
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Discover audiophile-grade wireless earbuds, titanium-armored smartwatches, and 70-hour studio headphones built for unmatched clarity and relentless performance.
              </p>

              {/* CTAs & Proof */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/products"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-black text-sm tracking-wide flex items-center justify-center gap-2 shadow-glow-cyan transition-all transform hover:-translate-y-0.5 active:scale-95"
                >
                  <span>SHOP COLLECTION</span>
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/products?category=earbuds"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-100 dark:bg-dark-card hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 text-slate-900 dark:text-white font-bold text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <span>Explore Earbuds</span>
                </Link>
              </div>

              {/* Hero Stats Ticker */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200 dark:border-slate-800/80 max-w-lg mx-auto lg:mx-0 text-left">
                <div>
                  <div className="text-2xl font-black text-slate-900 dark:text-white">42dB</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Hybrid ANC Depth</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-brand-500">70 Hrs</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Studio Battery Life</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-accent-orange">28ms</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Zero-Lag Gaming</div>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-tr from-slate-200/50 via-slate-100 to-white dark:from-dark-card dark:via-slate-900 dark:to-slate-800 p-8 border border-slate-200 dark:border-slate-700/60 shadow-2xl flex flex-col justify-between overflow-hidden group">
                
                {/* Floating Glow Orb */}
                <div className="absolute inset-0 bg-radial-glow opacity-30 group-hover:opacity-50 transition-opacity" />

                {/* Top Badge */}
                <div className="flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-brand-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-sm">
                    FLAGSHIP LAUNCH
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-500 bg-white/80 dark:bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-md">
                    <Star size={12} className="fill-amber-400 text-amber-400" />
                    <span>4.9 (1.4k reviews)</span>
                  </div>
                </div>

                {/* Product Image */}
                <div className="my-auto py-6 flex items-center justify-center z-10">
                  <img
                    src={heroProduct.images[0]}
                    alt={heroProduct.name}
                    className="max-h-60 w-auto object-contain transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-700 ease-out drop-shadow-2xl"
                  />
                </div>

                {/* Bottom Details card overlay */}
                <div className="z-10 p-4 rounded-2xl bg-white/90 dark:bg-dark-surface/90 border border-slate-200 dark:border-slate-800 backdrop-blur-md flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-black text-slate-900 dark:text-white">
                      {heroProduct.name}
                    </h3>
                    <p className="text-xs text-brand-600 dark:text-brand-400 font-bold">
                      ₹{heroProduct.price.toLocaleString('en-IN')}{' '}
                      <span className="line-through text-slate-400 text-[11px] font-normal">
                        ₹{heroProduct.originalPrice.toLocaleString('en-IN')}
                      </span>
                    </p>
                  </div>
                  <Link
                    to={`/product/${heroProduct.id}`}
                    className="p-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold transition-transform active:scale-95 shadow-glow-cyan"
                  >
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FLASH SALE MARQUEE TICKER --- */}
      <section className="bg-slate-900 border-y border-slate-800 py-3 overflow-hidden select-none">
        <div className="flex animate-marquee whitespace-nowrap gap-10 text-xs font-bold tracking-widest text-slate-300 uppercase">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="flex items-center gap-2 text-brand-400">
                <Flame size={14} className="text-brand-400 fill-brand-400" />
                FESTIVE SALE LIVE: UP TO 60% OFF
              </span>
              <span>•</span>
              <span className="text-slate-400">USE COUPON: VOLTIX10</span>
              <span>•</span>
              <span className="text-white">FREE SHIPPING OVER ₹999</span>
              <span>•</span>
              <span className="text-emerald-400">1 YEAR REPLACEMENT WARRANTY</span>
              <span>•</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- SHOP BY CATEGORIES --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-500 block mb-1">
            EXPLORE THE ECOSYSTEM
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 dark:text-white">
            Engineered For Every Need
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Select a category to explore specialized acoustics, high-durability smartwatches, and turbo accessories.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {CATEGORIES.filter(c => c.id !== 'all').map((cat) => {
            const Icon = categoryIcons[cat.id] || Headphones;
            return (
              <Link
                key={cat.id}
                to={`/products?category=${cat.id}`}
                className="group relative rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800/80 hover:border-brand-500/50 dark:hover:border-brand-500/50 p-6 flex flex-col items-center text-center shadow-sm hover:shadow-card-hover transition-all duration-300 overflow-hidden"
              >
                {/* Background Accent glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Category Thumbnail Image */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-slate-100 dark:bg-slate-900/80 p-3 mb-4 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-500 dark:text-brand-400 flex items-center justify-center mb-3 group-hover:bg-brand-500 group-hover:text-slate-950 transition-colors">
                  <Icon size={20} />
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                  {cat.name}
                </h3>
                <span className="text-xs text-slate-400 mt-1">
                  {cat.count} Products
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* --- BEST SELLERS CAROUSEL --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductSlider
          title="Best Sellers"
          subtitle="COMMUNITY FAVORITES"
          products={bestSellers}
          onQuickView={(p) => setQuickViewProduct(p)}
        />
      </section>

      {/* --- FLAGSHIP SPOTLIGHT (DUAL BANNERS) --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* Spotlight 1: Studio Headphones */}
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950 text-white p-6 sm:p-8 border border-slate-800/90 shadow-2xl flex flex-col justify-between h-full">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center flex-1">
              
              {/* Left Column (58% on md+) */}
              <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold border border-brand-500/30 w-fit">
                    <Volume2 size={14} /> 70HR MARATHON BATTERY
                  </span>
                  
                  <h3 className="text-2xl sm:text-3xl font-display font-black leading-tight text-white">
                    Voltix Apex Studio ANC
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                    45dB Adaptive Noise Cancellation with 40mm Bio-Cellulose drivers and ultra-plush memory foam earcups.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl sm:text-3xl font-black text-brand-400">
                      ₹{flagshipHeadphone.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-500 line-through font-medium">
                      ₹{flagshipHeadphone.originalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div>
                    <Link
                      to={`/product/${flagshipHeadphone.id}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-glow-cyan transition-all transform active:scale-95 w-full sm:w-auto"
                    >
                      <span>Experience Studio Sound</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column (42% on md+) */}
              <div className="md:col-span-5 flex items-center justify-center">
                <div className="w-full aspect-square max-w-[200px] sm:max-w-[220px] md:max-w-none rounded-2xl bg-white/5 border border-white/10 p-3 sm:p-4 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop"
                    alt={flagshipHeadphone.name}
                    className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Spotlight 2: AMOLED Smartwatch */}
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-amber-950 text-white p-6 sm:p-8 border border-slate-800/90 shadow-2xl flex flex-col justify-between h-full">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center flex-1">
              
              {/* Left Column (58% on md+) */}
              <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30 w-fit">
                    <Watch size={14} /> 2.04" 3D CURVED AMOLED
                  </span>
                  
                  <h3 className="text-2xl sm:text-3xl font-display font-black leading-tight text-white">
                    Voltix Horizon Ultra
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                    Aerospace-grade zinc alloy chassis, 1000 nits high-brightness screen, single-chip BT calling & 120+ sports modes.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl sm:text-3xl font-black text-amber-400">
                      ₹{flagshipWatch.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-500 line-through font-medium">
                      ₹{flagshipWatch.originalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div>
                    <Link
                      to={`/product/${flagshipWatch.id}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-glow-orange transition-all transform active:scale-95 w-full sm:w-auto"
                    >
                      <span>Discover Horizon Ultra</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column (42% on md+) */}
              <div className="md:col-span-5 flex items-center justify-center">
                <div className="w-full aspect-square max-w-[200px] sm:max-w-[220px] md:max-w-none rounded-2xl bg-white/5 border border-white/10 p-3 sm:p-4 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop"
                    alt={flagshipWatch.name}
                    className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* --- NEW ARRIVALS GRID --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-500 block mb-1">
              JUST DROPPED
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-black text-slate-900 dark:text-white">
              New Arrivals
            </h2>
          </div>
          <Link
            to="/products"
            className="text-xs sm:text-sm font-bold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1"
          >
            <span>View All ({PRODUCTS.length})</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
          ))}
        </div>
      </section>

      {/* --- WHY CHOOSE VOLTIX --- */}
      <section className="bg-slate-100 dark:bg-dark-surface/60 border-y border-slate-200 dark:border-slate-800/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-500 block mb-1">
              THE VOLTIX ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 dark:text-white">
              Why Audio Enthusiasts Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-500 flex items-center justify-center">
                <Volume2 size={24} />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Titanium Diaphragm
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Custom-tuned 11mm & 40mm drivers deliver deep sub-bass frequencies and crystal clear vocal separation.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                <Zap size={24} />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                28ms Ultra-Low Latency
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Beast Mode™ ensures zero audio delay for gaming tournaments and streaming blockbusters.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                1-Year Direct Replacement
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                No questions asked instant replacement warranty across 180+ authorized service centers nationwide.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                <Truck size={24} />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Free Express Delivery
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Superfast dispatch with real-time live package tracking directly to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CUSTOMER REVIEWS & TESTIMONIALS --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-500 block mb-1">
            VERIFIED VOICES
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 dark:text-white">
            Loved By Over 1.5 Million Users
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">{t.name}</h4>
                  <p className="text-[11px] text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

    </div>
  );
}
