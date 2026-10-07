import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, ShoppingBag, ArrowRight, Truck, Sparkles, Tag, Check, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';
import confetti from 'canvas-confetti';

export default function CartDrawer() {
  const {
    cartItems,
    totalItems,
    subtotal,
    discountAmount,
    shippingCost,
    finalTotal,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    isCartOpen,
    setIsCartOpen,
    FREE_SHIPPING_THRESHOLD,
    isFreeShippingEligible
  } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (applyCoupon(couponInput)) {
      setCouponInput('');
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 }
    });
    setTimeout(() => {
      setIsCheckingOut(false);
      setIsCartOpen(false);
      navigate('/cart');
    }, 600);
  };

  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShippingProgress = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fadeIn">
      {/* Click outside to close */}
      <div className="flex-1" onClick={() => setIsCartOpen(false)} />

      <div
        className="w-full max-w-md h-full bg-white dark:bg-dark-surface border-l border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col justify-between overflow-hidden animate-slideLeft"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-brand-500" size={20} />
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              Your Cart <span className="text-brand-500 font-extrabold">({totalItems})</span>
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            type="button"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-slate-100 dark:bg-dark-card p-3 sm:px-5 border-b border-slate-200/80 dark:border-slate-800/80">
          <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
            <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
              <Truck size={14} className="text-brand-500" />
              {isFreeShippingEligible ? (
                <span className="text-emerald-500 font-bold">You unlocked FREE Express Shipping! 🎉</span>
              ) : (
                <span>
                  Add <strong className="text-brand-500 font-bold">₹{remainingForFreeShipping}</strong> more for Free Shipping
                </span>
              )}
            </span>
            <span className="text-slate-400 text-[11px]">{freeShippingProgress}%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-brand-500 to-emerald-400 rounded-full transition-all duration-500"
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem key={item.cartItemId} item={item} compact />
            ))
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-20 h-20 rounded-full bg-slate-100 dark:bg-dark-card flex items-center justify-center text-slate-400">
                <ShoppingBag size={36} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-800 dark:text-white mb-1">
                  Your cart is empty
                </h3>
                <p className="text-xs text-slate-400 max-w-xs">
                  Looks like you haven't added any premium earbuds, smartwatches, or headphones yet.
                </p>
              </div>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  navigate('/products');
                }}
                type="button"
                className="px-6 py-2.5 rounded-xl bg-brand-500 text-slate-950 font-bold text-xs shadow-glow-cyan transition-transform active:scale-95"
              >
                Explore Products
              </button>
            </div>
          )}
        </div>

        {/* Footer with Calculations and Checkout */}
        {cartItems.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-dark-card/90 space-y-3">
            
            {/* Quick Coupon Input */}
            {appliedCoupon ? (
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                <div className="flex items-center gap-2">
                  <Tag size={14} />
                  <span>Coupon <strong>{appliedCoupon.code}</strong> Applied (-₹{discountAmount.toLocaleString('en-IN')})</span>
                </div>
                <button
                  onClick={removeCoupon}
                  type="button"
                  className="text-slate-400 hover:text-rose-500 text-xs underline"
                >
                  Remove
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                  placeholder="Promo Code (e.g. VOLTIX10)"
                  className="flex-1 px-3 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white uppercase placeholder:normal-case focus:outline-none focus:border-brand-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-brand-500 text-white hover:text-slate-950 font-bold text-xs transition-colors"
                >
                  Apply
                </button>
              </form>
            )}

            {/* Price breakdown */}
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-500 dark:text-slate-400">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-800 dark:text-white">
                  ₹{subtotal.toLocaleString('en-IN')}
                </span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-500 font-semibold">
                  <span>Coupon Discount</span>
                  <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex justify-between text-slate-500 dark:text-slate-400">
                <span>Shipping</span>
                <span>
                  {shippingCost === 0 ? (
                    <strong className="text-emerald-500 uppercase font-bold">FREE</strong>
                  ) : (
                    `₹${shippingCost}`
                  )}
                </span>
              </div>
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex justify-between items-baseline text-slate-900 dark:text-white">
                <span className="font-bold text-sm">Estimated Total</span>
                <span className="font-black text-lg text-brand-600 dark:text-brand-400">
                  ₹{finalTotal.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-2 pt-1">
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                type="button"
                className="w-full py-3 px-4 rounded-xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-glow-cyan transition-all active:scale-95 cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={16} />
              </button>

              <Link
                to="/cart"
                onClick={() => setIsCartOpen(false)}
                className="block text-center py-2 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
              >
                View Full Cart & Detailed Breakdown
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
