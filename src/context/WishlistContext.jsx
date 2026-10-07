import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const saved = localStorage.getItem('voltix_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('voltix_wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const isInWishlist = (productId) => {
    return wishlistItems.some(item => item.id === productId);
  };

  const toggleWishlist = (product) => {
    if (!product) return;
    if (isInWishlist(product.id)) {
      setWishlistItems(prev => prev.filter(item => item.id !== product.id));
      toast('Removed from Wishlist', {
        icon: '💔',
        style: {
          borderRadius: '10px',
          background: '#1F293D',
          color: '#fff',
        }
      });
    } else {
      setWishlistItems(prev => [...prev, product]);
      toast('Added to Wishlist!', {
        icon: '❤️',
        style: {
          borderRadius: '10px',
          background: '#1F293D',
          color: '#fff',
        }
      });
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems(prev => prev.filter(item => item.id !== productId));
    toast('Removed from Wishlist', { icon: '🗑️' });
  };

  const clearWishlist = () => {
    setWishlistItems([]);
    toast('Wishlist cleared');
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        totalWishlist: wishlistItems.length,
        isInWishlist,
        toggleWishlist,
        removeFromWishlist,
        clearWishlist
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}
