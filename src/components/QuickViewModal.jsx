import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Star, ShoppingBag, Zap, ShieldCheck, Truck, ArrowRight, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function QuickViewModal({ product, isOpen, onClose }) {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [selectedColor, setSelectedColor] = useState(
    product?.colors && product.colors.length > 0 ? product.colors[0] : null
  );
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    addToCart(product, selectedColor, quantity);
    onClose();
  };

  const images = product.images && product.images.length > 0 ? product.images : [];
  const inWishlist = isInWishlist(product.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Product Image Column */}
        <div className="w-full md:w-1/2 p-6 bg-slate-100/70 dark:bg-slate-900/60 flex flex-col justify-between items-center">
          <div className="relative aspect-square w-full flex items-center justify-center p-4">
            <img
              src={images[0] || ''}
              alt={product.name}
              className="max-h-72 w-auto object-contain transition-all duration-300 transform hover:scale-105"
            />
          </div>
        </div>

        {/* Details Column */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                {product.categoryName || product.category}
              </span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                <Star size={13} className="fill-amber-400 text-amber-400" />
                <span>{product.rating}</span>
                <span className="text-slate-400 font-normal">({product.reviewsCount} reviews)</span>
              </div>
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white leading-tight mb-2">
              {product.name}
            </h2>

            <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
              {product.description}
            </p>

            {/* Price Box */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-2xl font-black text-slate-900 dark:text-white">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-sm text-slate-400 line-through font-medium">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
              {product.discountPercentage > 0 && (
                <span className="px-2 py-0.5 rounded-md text-xs font-bold bg-accent-orange/10 text-accent-orange border border-accent-orange/30">
                  {product.discountPercentage}% OFF
                </span>
              )}
            </div>

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-4">
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2">
                  Color: <span className="font-normal text-slate-400">{selectedColor?.name}</span>
                </label>
                <div className="flex gap-2">
                  {product.colors.map((c, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedColor(c)}
                      style={{ backgroundColor: c.hex }}
                      className={`w-7 h-7 rounded-full border transition-all ${
                        selectedColor?.code === c.code
                          ? 'ring-2 ring-brand-500 ring-offset-2 ring-offset-white dark:ring-offset-dark-card scale-110 border-white'
                          : 'border-slate-300 dark:border-slate-700 opacity-80 hover:opacity-100'
                      }`}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Features brief */}
            {product.features && (
              <ul className="space-y-1 mb-6 text-xs text-slate-600 dark:text-slate-300">
                {product.features.slice(0, 3).map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Zap size={12} className="text-brand-500 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Action Row */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              {/* Quantity selector */}
              <div className="flex items-center border border-slate-300 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800/80 px-2 py-1">
                <button
                  type="button"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-2 py-1 text-slate-600 dark:text-slate-300 hover:text-brand-500 font-bold"
                >
                  -
                </button>
                <span className="px-2 text-sm font-bold text-slate-900 dark:text-white">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(q => Math.min(10, q + 1))}
                  className="px-2 py-1 text-slate-600 dark:text-slate-300 hover:text-brand-500 font-bold"
                >
                  +
                </button>
              </div>

              {/* Add to Cart button */}
              <button
                onClick={handleAddToCart}
                type="button"
                className="flex-1 py-3 px-4 rounded-xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-glow-cyan transition-all"
              >
                <ShoppingBag size={16} /> Add To Cart
              </button>

              {/* Wishlist toggle */}
              <button
                onClick={() => toggleWishlist(product)}
                type="button"
                className={`p-3 rounded-xl border transition-all ${
                  inWishlist
                    ? 'bg-rose-500/20 text-rose-500 border-rose-500/40'
                    : 'border-slate-300 dark:border-slate-700 text-slate-400 hover:text-rose-500'
                }`}
              >
                <Heart size={18} className={inWishlist ? 'fill-rose-500' : ''} />
              </button>
            </div>

            <Link
              to={`/product/${product.id}`}
              onClick={onClose}
              className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline flex items-center justify-center gap-1 pt-1"
            >
              View Full Specifications & Reviews <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
