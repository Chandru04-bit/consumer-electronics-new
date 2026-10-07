import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowLeft, Home, ShoppingBag } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-brand-500/10 border border-brand-500/30 text-brand-500 flex items-center justify-center mx-auto shadow-glow-cyan">
          <Zap size={40} className="fill-brand-500" />
        </div>

        <div className="space-y-2">
          <span className="text-6xl font-black font-display text-slate-900 dark:text-white">
            404
          </span>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Frequency Out of Range
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            The page or audio product you're trying to tune into doesn't exist or has moved to another frequency.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-xs shadow-glow-cyan flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <Home size={15} /> Back to Home
          </Link>
          <Link
            to="/products"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all"
          >
            <ShoppingBag size={15} /> Browse Catalog
          </Link>
        </div>
      </div>
    </div>
  );
}
