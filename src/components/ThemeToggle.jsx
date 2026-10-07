import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative p-2.5 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-500/50 ${
        isDark
          ? 'bg-dark-surface/80 border-slate-700/60 text-yellow-400 hover:bg-slate-800 hover:border-brand-500/40 hover:shadow-glow-cyan'
          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-brand-600 shadow-sm'
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-5 h-5 transition-transform duration-500 rotate-0 hover:rotate-90 text-amber-400" />
        ) : (
          <Moon className="w-5 h-5 transition-transform duration-500 -rotate-12 hover:rotate-0 text-slate-700" />
        )}
      </div>
    </button>
  );
}
