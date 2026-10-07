import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ShoppingBag,
  ArrowRight,
  Truck,
  Tag,
  ShieldCheck,
  RotateCcw,
  Check,
  Trash2,
  Lock,
  Sparkles,
  CreditCard,
  Building2,
  Smartphone,
  ChevronRight,
  PackageCheck
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import confetti from 'canvas-confetti';
import toast from 'react-hot-toast';

export default function Cart() {
  const {
    cartItems,
    totalItems,
    subtotal,
    totalOriginalPrice,
    discountAmount,
    shippingCost,
    finalTotal,
    totalSavings,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    clearCart,
    FREE_SHIPPING_THRESHOLD,
    isFreeShippingEligible,
    validCoupons
  } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(1); // 1: Address, 2: Payment, 3: Success
  const [paymentMethod, setPaymentMethod] = useState('upi');
  
  // Checkout Form State
  const [addressData, setAddressData] = useState({
    fullName: 'Arjun Mehta',
    phone: '9876543210',
    street: 'Plot 42, Cyber City, Phase 2',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560100'
  });

  const navigate = useNavigate();

  const handleApplyCoupon = (codeToApply) => {
    const code = codeToApply || couponInput;
    if (applyCoupon(code)) {
      setCouponInput('');
    }
  };

  const handleCompleteOrder = () => {
    setCheckoutStep(3);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });
    // Clear cart after short delay
    setTimeout(() => {
      clearCart();
    }, 1500);
  };

  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShippingProgress = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));

  if (cartItems.length === 0 && checkoutStep !== 3) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-24 h-24 rounded-full bg-slate-100 dark:bg-dark-card mx-auto flex items-center justify-center text-slate-400">
          <ShoppingBag size={42} />
        </div>
        <div>
          <h1 className="text-3xl font-display font-black text-slate-900 dark:text-white">
            Your Shopping Bag is Empty
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mt-2">
            You haven't added any products yet. Discover our premium earbuds, AMOLED smartwatches, and studio headphones.
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
      
      {/* Title */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-3xl font-display font-black text-slate-900 dark:text-white">
            Shopping Cart
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            {totalItems} item{totalItems > 1 ? 's' : ''} in your cart
          </p>
        </div>

        <button
          onClick={clearCart}
          type="button"
          className="text-xs font-semibold text-rose-500 hover:text-rose-400 flex items-center gap-1"
        >
          <Trash2 size={14} /> Clear Cart
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Col: Cart Items & Free Shipping Progress */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Free Shipping Progress */}
          <div className="p-4 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                <Truck size={16} className="text-brand-500" />
                {isFreeShippingEligible ? (
                  <span className="text-emerald-500">Congratulations! You unlocked FREE Express Shipping 🚀</span>
                ) : (
                  <span>
                    Add <span className="text-brand-500">₹{remainingForFreeShipping}</span> more to claim Free Shipping
                  </span>
                )}
              </span>
              <span className="text-slate-400">{freeShippingProgress}%</span>
            </div>
            <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-500 to-emerald-400 transition-all duration-500"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="space-y-3">
            {cartItems.map((item) => (
              <CartItem key={item.cartItemId} item={item} />
            ))}
          </div>

          {/* Available Coupons Strip */}
          <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              <Tag size={15} className="text-brand-500" />
              <span>Available Coupons For You</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {Object.entries(validCoupons).map(([code, details]) => (
                <div
                  key={code}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs"
                >
                  <div>
                    <span className="font-black text-brand-600 dark:text-brand-400 font-mono">
                      {code}
                    </span>
                    <p className="text-[11px] text-slate-500 mt-0.5">{details.description}</p>
                  </div>
                  <button
                    onClick={() => handleApplyCoupon(code)}
                    disabled={appliedCoupon?.code === code}
                    className={`px-3 py-1 rounded-lg font-bold text-xs transition-all ${
                      appliedCoupon?.code === code
                        ? 'bg-emerald-500/20 text-emerald-500'
                        : 'bg-slate-900 dark:bg-slate-800 hover:bg-brand-500 text-white hover:text-slate-950'
                    }`}
                  >
                    {appliedCoupon?.code === code ? 'Applied' : 'Apply'}
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Col: Order Summary */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-6 sticky top-28">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white pb-3 border-b border-slate-200 dark:border-slate-800">
              Order Summary
            </h3>

            {/* Custom Coupon Input */}
            <div>
              {appliedCoupon ? (
                <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                  <div className="flex items-center gap-2">
                    <Check size={16} />
                    <span>Coupon <strong>{appliedCoupon.code}</strong> Applied</span>
                  </div>
                  <button
                    onClick={removeCoupon}
                    className="text-xs text-rose-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleApplyCoupon();
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    placeholder="Enter Coupon Code"
                    className="flex-1 px-3 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white uppercase placeholder:normal-case focus:outline-none focus:border-brand-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-xs shadow-glow-cyan transition-all"
                  >
                    Apply
                  </button>
                </form>
              )}
            </div>

            {/* Price Calculations */}
            <div className="space-y-3 text-xs border-t border-slate-200 dark:border-slate-800 pt-4">
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Total MRP (Original Price)</span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  ₹{totalOriginalPrice.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-semibold">
                <span>Product Discount Savings</span>
                <span>-₹{(totalOriginalPrice - subtotal).toLocaleString('en-IN')}</span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-semibold">
                  <span>Coupon Discount ({appliedCoupon?.code})</span>
                  <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>
              )}

              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Delivery Charges</span>
                <span>
                  {shippingCost === 0 ? (
                    <strong className="text-emerald-500 uppercase font-bold">FREE</strong>
                  ) : (
                    `₹${shippingCost}`
                  )}
                </span>
              </div>

              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Estimated Taxes (GST 18% Incl.)</span>
                <span>₹{Math.round((finalTotal * 0.18) / 1.18).toLocaleString('en-IN')}</span>
              </div>

              {/* Total Row */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-baseline text-slate-900 dark:text-white">
                <span className="font-extrabold text-base">Grand Total</span>
                <div className="text-right">
                  <span className="text-2xl font-black text-brand-600 dark:text-brand-400">
                    ₹{finalTotal.toLocaleString('en-IN')}
                  </span>
                  {totalSavings > 0 && (
                    <p className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                      You save ₹{totalSavings.toLocaleString('en-IN')} on this order!
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={() => {
                setIsCheckoutModalOpen(true);
                setCheckoutStep(1);
              }}
              type="button"
              className="w-full py-4 px-6 rounded-2xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-glow-cyan transition-all transform active:scale-95 cursor-pointer"
            >
              <Lock size={16} />
              <span>PROCEED TO SECURE CHECKOUT</span>
              <ArrowRight size={16} />
            </button>

            {/* Trust badge icons */}
            <div className="grid grid-cols-2 gap-2 text-center text-[10px] text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800/80">
              <div className="flex items-center justify-center gap-1.5">
                <ShieldCheck size={14} className="text-brand-500" />
                <span>1 Year Warranty</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <RotateCcw size={14} className="text-brand-500" />
                <span>7-Day Easy Returns</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* --- SIMULATED CHECKOUT MODAL --- */}
      {isCheckoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6 animate-scaleIn">
            
            {/* Step 1: Address */}
            {checkoutStep === 1 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Step 1: Shipping Address
                  </h3>
                  <span className="text-xs text-brand-500 font-bold">1 of 2</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-slate-500 mb-1">Full Name</label>
                    <input
                      type="text"
                      value={addressData.fullName}
                      onChange={(e) => setAddressData({ ...addressData, fullName: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-500 mb-1">Mobile Phone</label>
                    <input
                      type="text"
                      value={addressData.phone}
                      onChange={(e) => setAddressData({ ...addressData, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-500 mb-1">Delivery Address</label>
                    <input
                      type="text"
                      value={addressData.street}
                      onChange={(e) => setAddressData({ ...addressData, street: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-500 mb-1">City</label>
                      <input
                        type="text"
                        value={addressData.city}
                        onChange={(e) => setAddressData({ ...addressData, city: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-500 mb-1">Pincode</label>
                      <input
                        type="text"
                        value={addressData.pincode}
                        onChange={(e) => setAddressData({ ...addressData, pincode: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-mono"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-3">
                  <button
                    onClick={() => setIsCheckoutModalOpen(false)}
                    className="flex-1 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setCheckoutStep(2)}
                    className="flex-1 py-3 rounded-xl bg-brand-500 text-slate-950 font-bold text-xs shadow-glow-cyan"
                  >
                    Proceed to Payment
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Payment */}
            {checkoutStep === 2 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Step 2: Select Payment Method
                  </h3>
                  <span className="text-xs text-brand-500 font-bold">2 of 2</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-xs flex justify-between">
                  <span className="text-slate-500">Amount Payable:</span>
                  <span className="font-black text-brand-500">₹{finalTotal.toLocaleString('en-IN')}</span>
                </div>

                <div className="space-y-2 text-xs">
                  <label
                    onClick={() => setPaymentMethod('upi')}
                    className={`flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer transition-all ${
                      paymentMethod === 'upi'
                        ? 'border-brand-500 bg-brand-500/10 font-bold text-slate-900 dark:text-white'
                        : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Smartphone size={18} className="text-brand-500" />
                      <span>Instant UPI (Google Pay, PhonePe, Paytm, QR)</span>
                    </div>
                    {paymentMethod === 'upi' && <Check size={16} className="text-brand-500 stroke-[3]" />}
                  </label>

                  <label
                    onClick={() => setPaymentMethod('card')}
                    className={`flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer transition-all ${
                      paymentMethod === 'card'
                        ? 'border-brand-500 bg-brand-500/10 font-bold text-slate-900 dark:text-white'
                        : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <CreditCard size={18} className="text-brand-500" />
                      <span>Credit / Debit Card (Visa, Mastercard, RuPay)</span>
                    </div>
                    {paymentMethod === 'card' && <Check size={16} className="text-brand-500 stroke-[3]" />}
                  </label>

                  <label
                    onClick={() => setPaymentMethod('cod')}
                    className={`flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer transition-all ${
                      paymentMethod === 'cod'
                        ? 'border-brand-500 bg-brand-500/10 font-bold text-slate-900 dark:text-white'
                        : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Truck size={18} className="text-brand-500" />
                      <span>Cash on Delivery (COD)</span>
                    </div>
                    {paymentMethod === 'cod' && <Check size={16} className="text-brand-500 stroke-[3]" />}
                  </label>
                </div>

                <div className="flex gap-3 pt-3">
                  <button
                    onClick={() => setCheckoutStep(1)}
                    className="flex-1 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleCompleteOrder}
                    className="flex-1 py-3 rounded-xl bg-brand-500 text-slate-950 font-black text-xs shadow-glow-cyan flex items-center justify-center gap-2"
                  >
                    <Lock size={14} /> Pay ₹{finalTotal.toLocaleString('en-IN')}
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Success Confirmation */}
            {checkoutStep === 3 && (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center animate-scaleIn">
                  <PackageCheck size={36} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                  Order Confirmed! 🎉
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
                  Order ID <strong>#VLTX-{Math.floor(100000 + Math.random() * 900000)}</strong> has been placed. We've sent the invoice and tracking link to your registered email.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsCheckoutModalOpen(false);
                      navigate('/');
                    }}
                    className="px-8 py-3 rounded-xl bg-brand-500 text-slate-950 font-bold text-xs shadow-glow-cyan"
                  >
                    Back to Home
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
