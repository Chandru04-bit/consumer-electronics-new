import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  SlidersHorizontal,
  LayoutGrid,
  List,
  Search,
  X,
  ArrowUpDown,
  Sparkles,
  Zap,
  RotateCcw
} from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import { SkeletonGrid } from '../components/SkeletonCard';
import QuickViewModal from '../components/QuickViewModal';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  // URL Query Sync
  const categoryParam = searchParams.get('category') || 'all';
  const searchParam = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [searchQuery, setSearchQuery] = useState(searchParam);
  const [priceRange, setPriceRange] = useState([1000, 15000]);
  const [minRating, setMinRating] = useState(0);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Sync state if URL params change externally
  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  useEffect(() => {
    setSearchQuery(searchParam);
  }, [searchParam]);

  // Simulate loading state on major filter change
  const handleCategoryChange = (newCat) => {
    setIsLoading(true);
    setSelectedCategory(newCat);
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      if (newCat === 'all') {
        next.delete('category');
      } else {
        next.set('category', newCat);
      }
      return next;
    });
    setTimeout(() => setIsLoading(false), 200);
  };

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setPriceRange([1000, 15000]);
    setMinRating(0);
    setInStockOnly(false);
    setSortBy('featured');
    setSearchParams({});
  };

  // Filter and Sort Pipeline
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Search Query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matches =
          item.name.toLowerCase().includes(q) ||
          item.categoryName.toLowerCase().includes(q) ||
          item.tagline.toLowerCase().includes(q) ||
          (item.description && item.description.toLowerCase().includes(q));
        if (!matches) return false;
      }

      // Price filter
      if (item.price > priceRange[1]) {
        return false;
      }

      // Rating filter
      if (minRating > 0 && item.rating < minRating) {
        return false;
      }

      // Stock filter
      if (inStockOnly && !item.inStock) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low-high') return a.price - b.price;
      if (sortBy === 'price-high-low') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      // 'featured'
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, priceRange, minRating, inStockOnly, sortBy]);

  const activeCategoryTitle = CATEGORIES.find(c => c.id === selectedCategory)?.name || 'All Audio & Smartwear';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-display font-black text-slate-900 dark:text-white">
              {activeCategoryTitle}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Explore {filteredProducts.length} high-fidelity audio devices & wearables
            </p>
          </div>

          {/* Quick Search & Sort on Header */}
          <div className="flex items-center gap-3">
            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center p-1 rounded-xl bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-white dark:bg-slate-800 text-brand-500 shadow-sm'
                    : 'text-slate-400 hover:text-slate-700 dark:hover:text-white'
                }`}
                title="Grid View"
              >
                <LayoutGrid size={17} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'list'
                    ? 'bg-white dark:bg-slate-800 text-brand-500 shadow-sm'
                    : 'text-slate-400 hover:text-slate-700 dark:hover:text-white'
                }`}
                title="List View"
              >
                <List size={17} />
              </button>
            </div>

            {/* Sort Select */}
            <div className="relative flex-1 sm:flex-none">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full sm:w-48 pl-3 pr-8 py-2.5 rounded-xl text-xs font-semibold bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50 appearance-none cursor-pointer"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
                <option value="newest">Newest Arrivals</option>
              </select>
              <ArrowUpDown
                size={14}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
            </div>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden p-2.5 rounded-xl bg-brand-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-glow-cyan"
            >
              <SlidersHorizontal size={16} /> Filters
            </button>
          </div>
        </div>

        {/* Active Filter Chips */}
        {(selectedCategory !== 'all' || searchQuery || minRating > 0 || priceRange[1] < 15000 || inStockOnly) && (
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
            <span className="text-xs font-bold text-slate-400">Active Filters:</span>

            {selectedCategory !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/30">
                {activeCategoryTitle}
                <button onClick={() => handleCategoryChange('all')} className="hover:text-rose-500">
                  <X size={12} />
                </button>
              </span>
            )}

            {searchQuery && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/30">
                "{searchQuery}"
                <button onClick={() => setSearchQuery('')} className="hover:text-rose-500">
                  <X size={12} />
                </button>
              </span>
            )}

            {priceRange[1] < 15000 && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                Under ₹{priceRange[1].toLocaleString('en-IN')}
                <button onClick={() => setPriceRange([1000, 15000])} className="hover:text-rose-500">
                  <X size={12} />
                </button>
              </span>
            )}

            {minRating > 0 && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-500 border border-amber-500/30">
                {minRating}★ & above
                <button onClick={() => setMinRating(0)} className="hover:text-rose-500">
                  <X size={12} />
                </button>
              </span>
            )}

            {inStockOnly && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/30">
                In Stock Only
                <button onClick={() => setInStockOnly(false)} className="hover:text-rose-500">
                  <X size={12} />
                </button>
              </span>
            )}

            <button
              onClick={handleResetFilters}
              className="text-xs font-bold text-rose-500 hover:text-rose-400 hover:underline ml-2"
            >
              Clear All
            </button>
          </div>
        )}
      </div>

      {/* Main Grid & Sidebar Layout */}
      <div className="flex gap-8 items-start">
        
        {/* Desktop Filter Sidebar */}
        <FilterSidebar
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
          priceRange={priceRange}
          onPriceChange={setPriceRange}
          minRating={minRating}
          onRatingChange={setMinRating}
          inStockOnly={inStockOnly}
          onStockChange={setInStockOnly}
          onResetFilters={handleResetFilters}
          isOpenMobile={mobileFilterOpen}
          onCloseMobile={() => setMobileFilterOpen(false)}
          totalMatching={filteredProducts.length}
        />

        {/* Product Grid Area */}
        <div className="flex-1 min-w-0">
          {isLoading ? (
            <SkeletonGrid count={6} />
          ) : filteredProducts.length > 0 ? (
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'
                  : 'space-y-4'
              }
            >
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={(p) => setQuickViewProduct(p)}
                />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="p-12 text-center rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center mx-auto text-slate-400">
                <Search size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                No matching electronics found
              </h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Try adjusting your search query, increasing the price range, or clearing active filters.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-6 py-2.5 rounded-xl bg-brand-500 text-slate-950 font-bold text-xs shadow-glow-cyan transition-transform active:scale-95 inline-flex items-center gap-1.5"
              >
                <RotateCcw size={14} /> Reset All Filters
              </button>
            </div>
          )}
        </div>

      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

    </div>
  );
}
