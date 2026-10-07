import React, { useState } from 'react';
import { Sparkles, Copy, Check, X } from 'lucide-react';
import toast from 'react-hot-toast';

export default function PromoBanner() {
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success(`Coupon code ${code} copied to clipboard!`, { icon: '🎉' });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside aria-label="Special Offers" className="relative bg-gradient-to-r from-slate-950 via-cyan-950 to-slate-950 text-white text-xs border-b border-brand-500/20 py-2 px-4 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1 flex items-center justify-center gap-2 sm:gap-3 flex-wrap text-center font-medium">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-brand-500/20 text-brand-300 font-bold border border-brand-500/30 text-[10px] sm:text-xs">
            <Sparkles size={12} className="text-brand-400 animate-spin-slow" /> FLASH SALE
          </span>
          <span className="text-slate-200">
            Get Flat <strong>10% EXTRA OFF</strong> on your first order. Use code:
          </span>
          <button
            onClick={() => copyCode('VOLTIX10')}
            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-brand-500 hover:bg-brand-400 text-slate-950 font-black tracking-wider transition-transform active:scale-95 cursor-pointer shadow-glow-cyan/50"
            title="Click to copy coupon code"
          >
            <span>VOLTIX10</span>
            {copied ? <Check size={11} className="stroke-[3]" /> : <Copy size={11} />}
          </button>
          <span className="hidden md:inline text-slate-400">• Free Express Shipping over ₹999</span>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="text-slate-400 hover:text-white p-1 rounded transition-colors"
          aria-label="Dismiss banner"
        >
          <X size={14} />
        </button>
      </div>
    </aside>
  );
}
