import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

const FREE_SHIPPING_THRESHOLD = 999;
const SHIPPING_FEE = 99;

const VALID_COUPONS = {
  'VOLTIX10': { type: 'percent', value: 10, description: '10% OFF on all products' },
  'AUDIOX500': { type: 'flat', value: 500, minOrder: 2500, description: '₹500 OFF on orders above ₹2,500' },
  'FREESHIP': { type: 'shipping', value: 100, description: 'Free Express Shipping' },
  'WELCOME20': { type: 'percent', value: 20, maxDiscount: 1000, description: '20% OFF Welcome Bonus (Max ₹1,000)' }
};

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('voltix_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState(() => {
    try {
      const saved = localStorage.getItem('voltix_coupon');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('voltix_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    if (appliedCoupon) {
      localStorage.setItem('voltix_coupon', JSON.stringify(appliedCoupon));
    } else {
      localStorage.removeItem('voltix_coupon');
    }
  }, [appliedCoupon]);

  const addToCart = (product, selectedColor, quantity = 1) => {
    if (!product) return;
    const colorObj = selectedColor || (product.colors && product.colors[0]) || { name: 'Default', hex: '#000000', code: 'default' };
    const cartItemId = `${product.id}-${colorObj.code || colorObj.name}`;

    setCartItems(prevItems => {
      const existingIndex = prevItems.findIndex(item => item.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        toast.success(`Updated ${product.name} quantity to ${updated[existingIndex].quantity}!`, {
          icon: '🛍️'
        });
        return updated;
      } else {
        toast.success(`Added ${product.name} to Cart!`, {
          icon: '⚡'
        });
        return [
          ...prevItems,
          {
            cartItemId,
            productId: product.id,
            name: product.name,
            slug: product.slug,
            price: product.price,
            originalPrice: product.originalPrice,
            image: (product.images && product.images[0]) || '',
            category: product.categoryName || product.category,
            color: colorObj,
            quantity: quantity,
            inStock: product.inStock
          }
        ];
      }
    });
  };

  const updateQuantity = (cartItemId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.cartItemId === cartItemId ? { ...item, quantity: Math.min(newQty, 10) } : item
      )
    );
  };

  const removeFromCart = (cartItemId) => {
    const itemToRemove = cartItems.find(i => i.cartItemId === cartItemId);
    setCartItems(prev => prev.filter(item => item.cartItemId !== cartItemId));
    if (itemToRemove) {
      toast.error(`Removed ${itemToRemove.name} from Cart`);
    }
  };

  const clearCart = () => {
    setCartItems([]);
    setAppliedCoupon(null);
    toast.success('Shopping cart cleared');
  };

  const applyCoupon = (code) => {
    if (!code) {
      toast.error('Please enter a coupon code');
      return false;
    }
    const cleanCode = code.trim().toUpperCase();
    const coupon = VALID_COUPONS[cleanCode];

    if (!coupon) {
      toast.error('Invalid coupon code. Try VOLTIX10 or WELCOME20');
      return false;
    }

    if (coupon.minOrder && subtotal < coupon.minOrder) {
      toast.error(`Minimum order amount of ₹${coupon.minOrder.toLocaleString('en-IN')} required`);
      return false;
    }

    setAppliedCoupon({ code: cleanCode, ...coupon });
    toast.success(`Coupon "${cleanCode}" applied successfully! 🎉`);
    return true;
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    toast.success('Coupon removed');
  };

  // Calculations
  const subtotal = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  const totalOriginalPrice = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + (item.originalPrice || item.price) * item.quantity, 0);
  }, [cartItems]);

  const totalItems = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);

  const discountAmount = useMemo(() => {
    if (!appliedCoupon || subtotal === 0) return 0;
    if (appliedCoupon.type === 'percent') {
      const disc = Math.round((subtotal * appliedCoupon.value) / 100);
      return appliedCoupon.maxDiscount ? Math.min(disc, appliedCoupon.maxDiscount) : disc;
    }
    if (appliedCoupon.type === 'flat') {
      return Math.min(appliedCoupon.value, subtotal);
    }
    return 0;
  }, [appliedCoupon, subtotal]);

  const shippingCost = useMemo(() => {
    if (subtotal === 0) return 0;
    if (appliedCoupon?.type === 'shipping') return 0;
    return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  }, [subtotal, appliedCoupon]);

  const finalTotal = useMemo(() => {
    if (subtotal === 0) return 0;
    return Math.max(0, subtotal - discountAmount + shippingCost);
  }, [subtotal, discountAmount, shippingCost]);

  const totalSavings = useMemo(() => {
    const directDiscount = totalOriginalPrice - subtotal;
    return directDiscount + discountAmount + (subtotal >= FREE_SHIPPING_THRESHOLD ? SHIPPING_FEE : 0);
  }, [totalOriginalPrice, subtotal, discountAmount]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalItems,
        subtotal,
        totalOriginalPrice,
        discountAmount,
        shippingCost,
        finalTotal,
        totalSavings,
        appliedCoupon,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        applyCoupon,
        removeCoupon,
        FREE_SHIPPING_THRESHOLD,
        isFreeShippingEligible: subtotal >= FREE_SHIPPING_THRESHOLD,
        validCoupons: VALID_COUPONS
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
