import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartItem({ item, compact = false }) {
  const { updateQuantity, removeFromCart } = useCart();

  if (!item) return null;

  return (
    <div className={`flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-all ${compact ? 'text-xs' : ''}`}>
      
      {/* Product Image */}
      <Link
        to={`/product/${item.productId}`}
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-slate-100 dark:bg-slate-900 flex-shrink-0 p-1.5 flex items-center justify-center overflow-hidden hover:opacity-90 transition-opacity"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-contain"
        />
      </Link>

      {/* Product Info & Modifiers */}
      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div>
          <div className="flex items-start justify-between gap-2">
            <Link
              to={`/product/${item.productId}`}
              className="text-sm font-bold text-slate-900 dark:text-white hover:text-brand-500 truncate transition-colors"
            >
              {item.name}
            </Link>
            
            {/* Delete button */}
            <button
              onClick={() => removeFromCart(item.cartItemId)}
              type="button"
              className="text-slate-400 hover:text-rose-500 transition-colors p-1"
              title="Remove item"
            >
              <Trash2 size={15} />
            </button>
          </div>

          {/* Category & Color variant */}
          <div className="flex items-center gap-2 mt-1">
            {item.color && (
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                <span
                  className="w-2.5 h-2.5 rounded-full border border-slate-300 dark:border-slate-600 inline-block"
                  style={{ backgroundColor: item.color.hex }}
                />
                {item.color.name}
              </span>
            )}
            <span className="text-[11px] text-slate-400">• {item.category}</span>
          </div>
        </div>

        {/* Price & Quantity Controls */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900/80 px-1.5 py-0.5">
            <button
              onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
              type="button"
              className="p-1 text-slate-500 hover:text-brand-500 transition-colors"
              title="Decrease quantity"
            >
              <Minus size={13} />
            </button>
            <span className="px-2 text-xs font-bold text-slate-900 dark:text-white">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
              type="button"
              className="p-1 text-slate-500 hover:text-brand-500 transition-colors"
              title="Increase quantity"
            >
              <Plus size={13} />
            </button>
          </div>

          {/* Pricing */}
          <div className="text-right">
            <div className="text-sm font-extrabold text-slate-900 dark:text-white">
              ₹{(item.price * item.quantity).toLocaleString('en-IN')}
            </div>
            {item.originalPrice > item.price && (
              <div className="text-[10px] text-slate-400 line-through">
                ₹{(item.originalPrice * item.quantity).toLocaleString('en-IN')}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
