import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag, Eye, Zap, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import WishlistButton from './WishlistButton';

export default function ProductCard({ product, onQuickView }) {
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(
    product.colors && product.colors.length > 0 ? product.colors[0] : null
  );
  const [isHovered, setIsHovered] = useState(false);
  const [addedAnimation, setAddedAnimation] = useState(false);

  if (!product) return null;

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedColor, 1);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  const handleQuickViewClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onQuickView) {
      onQuickView(product);
    }
  };

  const currentImage = product.images && product.images.length > 0 ? product.images[0] : '';
  const secondaryImage = product.images && product.images.length > 1 ? product.images[1] : currentImage;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800/80 hover:border-brand-500/50 dark:hover:border-brand-500/50 shadow-sm hover:shadow-card-hover dark:hover:shadow-glow-cyan/20 transition-all duration-300 overflow-hidden"
    >
      {/* Product Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 pointer-events-none">
        {product.isBestSeller && (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500 text-slate-950 uppercase tracking-wider shadow-sm">
            <Zap size={10} className="fill-slate-950" /> Best Seller
          </span>
        )}
        {product.isNew && !product.isBestSeller && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-brand-500 text-slate-950 uppercase tracking-wider shadow-sm">
            New Launch
          </span>
        )}
        {product.discountPercentage > 0 && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-accent-orange text-white uppercase tracking-wider shadow-sm">
            {product.discountPercentage}% OFF
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <div className="absolute top-3 right-3 z-10">
        <WishlistButton product={product} />
      </div>

      {/* Image Container with Link */}
      <Link
        to={`/product/${product.id}`}
        className="relative aspect-square w-full bg-slate-100 dark:bg-slate-900/60 p-6 flex items-center justify-center overflow-hidden cursor-pointer group-hover:bg-slate-50 dark:group-hover:bg-slate-900/40 transition-colors"
      >
        <img
          src={isHovered && secondaryImage ? secondaryImage : currentImage}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-contain object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Quick View Button on Image Hover */}
        {onQuickView && (
          <button
            onClick={handleQuickViewClick}
            type="button"
            className="absolute bottom-3 inset-x-12 py-2 px-3 rounded-xl bg-slate-900/80 hover:bg-brand-500 text-white hover:text-slate-950 text-xs font-semibold backdrop-blur-md flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg"
          >
            <Eye size={14} /> Quick View
          </button>
        )}
      </Link>

      {/* Card Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              {product.categoryName || product.category}
            </span>
            <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
              <Star size={13} className="fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-[11px] font-normal text-slate-400">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <Link
            to={`/product/${product.id}`}
            className="block text-base font-bold text-slate-900 dark:text-white hover:text-brand-500 dark:hover:text-brand-400 transition-colors line-clamp-1 mb-1"
          >
            {product.name}
          </Link>

          {/* Tagline / Highlights */}
          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mb-3">
            {product.tagline || product.description}
          </p>

          {/* Color Switchers */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center gap-1.5 mb-4">
              <span className="text-[11px] text-slate-400 mr-1">Colors:</span>
              {product.colors.map((c, idx) => (
                <button
                  key={idx}
                  type="button"
                  title={c.name}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedColor(c);
                  }}
                  style={{ backgroundColor: c.hex }}
                  className={`w-4 h-4 rounded-full border transition-all ${
                    selectedColor?.code === c.code
                      ? 'ring-2 ring-brand-500 ring-offset-2 ring-offset-white dark:ring-offset-dark-card scale-110 border-white'
                      : 'border-slate-300 dark:border-slate-700 opacity-80 hover:opacity-100 hover:scale-105'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Pricing & Add to Cart */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-extrabold text-slate-900 dark:text-white">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-xs text-slate-400 line-through font-medium">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            {product.discountPercentage > 0 && (
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}
              </span>
            )}
          </div>

          {/* Quick Add Button */}
          <button
            onClick={handleQuickAdd}
            type="button"
            aria-label="Add to cart"
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all duration-300 active:scale-95 ${
              addedAnimation
                ? 'bg-emerald-500 text-white shadow-glow-emerald'
                : 'bg-brand-500 hover:bg-brand-400 text-slate-950 hover:shadow-glow-cyan'
            }`}
          >
            {addedAnimation ? (
              <>
                <Check size={14} className="stroke-[3]" /> Added
              </>
            ) : (
              <>
                <ShoppingBag size={14} /> Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
