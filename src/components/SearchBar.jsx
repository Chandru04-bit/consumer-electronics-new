import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function SearchBar({ isMobile = false, onClose }) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const searchContainerRef = useRef(null);

  // Filter products matching query
  const matchingProducts = query.trim() === '' ? [] : PRODUCTS.filter(p => {
    const q = query.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.categoryName.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      (p.description && p.description.toLowerCase().includes(q))
    );
  }).slice(0, 5);

  // Close when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/products?search=${encodeURIComponent(query.trim())}`);
      setIsOpen(false);
      if (onClose) onClose();
    }
  };

  const handleSelectProduct = (id) => {
    navigate(`/product/${id}`);
    setIsOpen(false);
    setQuery('');
    if (onClose) onClose();
  };

  return (
    <div ref={searchContainerRef} className={`relative ${isMobile ? 'w-full' : 'w-64 lg:w-80'}`}>
      <form onSubmit={handleSearchSubmit} className="relative flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Search earbuds, watches, ANC..."
          className="w-full pl-10 pr-10 py-2 text-sm rounded-full bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all shadow-inner"
        />
        <Search
          size={16}
          className="absolute left-3.5 text-slate-400 pointer-events-none"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setIsOpen(false);
            }}
            className="absolute right-3 text-slate-400 hover:text-slate-600 dark:hover:text-white"
          >
            <X size={14} />
          </button>
        )}
      </form>

      {/* Autocomplete Dropdown */}
      {isOpen && query.trim().length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 z-50 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl animate-fadeIn">
          <div className="p-2 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 px-3">
            <span>Results for "{query}"</span>
            <button
              onClick={handleSearchSubmit}
              className="text-brand-500 hover:underline flex items-center gap-0.5"
            >
              See all <ArrowRight size={10} />
            </button>
          </div>

          <div className="max-h-72 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800/60">
            {matchingProducts.length > 0 ? (
              matchingProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => handleSelectProduct(p.id)}
                  className="p-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800/60 cursor-pointer transition-colors"
                >
                  <div className="w-11 h-11 rounded-lg bg-slate-100 dark:bg-slate-900 flex-shrink-0 p-1 flex items-center justify-center">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900 dark:text-white truncate">
                        {p.name}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 block truncate">
                      {p.categoryName} • {p.tagline}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-black text-brand-600 dark:text-brand-400">
                      ₹{p.price.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-5 text-center text-slate-400 text-xs">
                No matching audio or smartwatch products found for "{query}".
              </div>
            )}
          </div>

          <div className="p-2 bg-slate-50 dark:bg-slate-900/60 text-center border-t border-slate-100 dark:border-slate-800/80">
            <button
              onClick={handleSearchSubmit}
              type="button"
              className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline inline-flex items-center gap-1"
            >
              Press <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono text-[10px]">Enter</kbd> to view all results
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
