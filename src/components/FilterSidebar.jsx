import React from 'react';
import { Filter, RotateCcw, Star, X, Check, Headphones, Watch, Disc, Radio, Zap, LayoutGrid } from 'lucide-react';
import { CATEGORIES } from '../data/products';

export default function FilterSidebar({
  selectedCategory,
  onSelectCategory,
  priceRange,
  onPriceChange,
  minRating,
  onRatingChange,
  inStockOnly,
  onStockChange,
  onResetFilters,
  isOpenMobile,
  onCloseMobile,
  totalMatching
}) {
  const iconMap = {
    LayoutGrid,
    Headphones,
    Watch,
    Disc,
    Radio,
    Zap
  };

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    priceRange[1] < 15000 ||
    minRating > 0 ||
    inStockOnly;

  const content = (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-brand-500" />
          <h3 className="font-bold text-base text-slate-900 dark:text-white">Filters</h3>
          {hasActiveFilters && (
            <span className="w-2 h-2 rounded-full bg-brand-500"></span>
          )}
        </div>
        {hasActiveFilters && (
          <button
            onClick={onResetFilters}
            type="button"
            className="text-xs font-semibold text-rose-500 hover:text-rose-400 flex items-center gap-1 transition-colors"
          >
            <RotateCcw size={12} /> Reset
          </button>
        )}
      </div>

      {/* Categories */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
          Categories
        </h4>
        <div className="space-y-1">
          {CATEGORIES.map((cat) => {
            const Icon = iconMap[cat.icon] || LayoutGrid;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                type="button"
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-brand-500/15 text-brand-600 dark:text-brand-400 border border-brand-500/30'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon size={16} className={isSelected ? 'text-brand-500' : 'text-slate-400'} />
                  <span>{cat.name}</span>
                </div>
                <span className={`text-[11px] px-2 py-0.5 rounded-full ${
                  isSelected ? 'bg-brand-500/20 text-brand-400 font-bold' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Range Slider */}
      <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Max Price
          </h4>
          <span className="text-xs font-extrabold text-brand-600 dark:text-brand-400">
            ₹{priceRange[1].toLocaleString('en-IN')}
          </span>
        </div>
        <input
          type="range"
          min="1000"
          max="15000"
          step="500"
          value={priceRange[1]}
          onChange={(e) => onPriceChange([priceRange[0], Number(e.target.value)])}
          className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
        />
        <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-medium">
          <span>₹1,000</span>
          <span>₹7,500</span>
          <span>₹15,000</span>
        </div>
      </div>

      {/* Customer Rating Filter */}
      <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
          Customer Rating
        </h4>
        <div className="space-y-1.5">
          {[4.8, 4.5, 4.0].map((ratingVal) => (
            <button
              key={ratingVal}
              onClick={() => onRatingChange(minRating === ratingVal ? 0 : ratingVal)}
              type="button"
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                minRating === ratingVal
                  ? 'bg-amber-500/15 text-amber-500 border border-amber-500/30 font-bold'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Star size={14} className="fill-amber-400 text-amber-400" />
                <span>{ratingVal} & above</span>
              </div>
              {minRating === ratingVal && <Check size={14} />}
            </button>
          ))}
        </div>
      </div>

      {/* Stock Availability */}
      <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
        <label className="flex items-center justify-between cursor-pointer group">
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:text-brand-500 transition-colors">
            In Stock Only
          </span>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => onStockChange(e.target.checked)}
            className="w-4 h-4 rounded border-slate-300 dark:border-slate-700 text-brand-500 focus:ring-brand-500 accent-brand-500 cursor-pointer"
          />
        </label>
      </div>

      {/* Total matching items banner */}
      <div className="pt-2 text-center">
        <p className="text-xs text-slate-400">
          Showing <strong>{totalMatching}</strong> verified products
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-64 xl:w-72 flex-shrink-0">
        <div className="sticky top-28 p-5 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
          {content}
        </div>
      </aside>

      {/* Mobile Slide-Over Drawer */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-start bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div
            className="w-80 max-w-[85vw] h-full bg-white dark:bg-dark-surface p-6 shadow-2xl flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex justify-end mb-2">
                <button
                  onClick={onCloseMobile}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>
              {content}
            </div>

            <div className="pt-6">
              <button
                onClick={onCloseMobile}
                className="w-full py-3 rounded-xl bg-brand-500 text-slate-950 font-bold text-xs shadow-glow-cyan"
              >
                Apply Filters ({totalMatching} results)
              </button>
            </div>
          </div>
          <div className="flex-1" onClick={onCloseMobile} />
        </div>
      )}
    </>
  );
}
