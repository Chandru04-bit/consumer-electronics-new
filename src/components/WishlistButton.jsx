import React from 'react';
import { Heart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

export default function WishlistButton({ product, className = "", iconSize = 18 }) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const active = product ? isInWishlist(product.id) : false;

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (product) {
      toggleWishlist(product);
    }
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      aria-label={active ? "Remove from wishlist" : "Add to wishlist"}
      className={`p-2 rounded-full transition-all duration-300 transform active:scale-90 focus:outline-none ${
        active
          ? 'bg-rose-500/20 text-rose-500 border border-rose-500/40 shadow-sm'
          : 'bg-black/40 dark:bg-dark-surface/80 text-slate-300 hover:text-rose-400 hover:bg-black/60 dark:hover:bg-slate-800 border border-white/10 dark:border-slate-700/50 backdrop-blur-md'
      } ${className}`}
    >
      <Heart
        size={iconSize}
        className={`transition-all duration-300 ${
          active ? 'fill-rose-500 text-rose-500 scale-110' : 'text-current'
        }`}
      />
    </button>
  );
}
