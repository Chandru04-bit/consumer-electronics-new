import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2, ShoppingBag, ArrowRight, Sparkles } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import toast from 'react-hot-toast';

export default function Wishlist() {
  const { wishlistItems, clearWishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveAllToCart = () => {
    if (wishlistItems.length === 0) return;
    wishlistItems.forEach(item => {
      addToCart(item, item.colors ? item.colors[0] : null, 1);
    });
    toast.success(`Moved all ${wishlistItems.length} items to your shopping cart!`, { icon: '🛍️' });
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-24 h-24 rounded-full bg-rose-500/10 text-rose-500 mx-auto flex items-center justify-center">
          <Heart size={42} />
        </div>
        <div>
          <h1 className="text-3xl font-display font-black text-slate-900 dark:text-white">
            Your Wishlist is Empty
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mt-2">
            Save items that catch your eye! Click the heart icon on any earbud, smartwatch, or headphone to keep track of them here.
          </p>
        </div>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-black text-sm shadow-glow-cyan transition-all transform active:scale-95"
        >
          <span>Explore Products</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-3xl font-display font-black text-slate-900 dark:text-white">
            My Saved Wishlist
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            {wishlistItems.length} item{wishlistItems.length > 1 ? 's' : ''} saved for later
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleMoveAllToCart}
            type="button"
            className="px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-xs shadow-glow-cyan flex items-center gap-2 transition-transform active:scale-95"
          >
            <ShoppingBag size={15} /> Move All to Cart
          </button>
          <button
            onClick={clearWishlist}
            type="button"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Clear Wishlist"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      {/* Grid of Wishlist Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlistItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
}
