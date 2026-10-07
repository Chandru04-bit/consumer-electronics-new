import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  // Track scroll position for floating button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!showScrollTop) return null;

  return (
    <button
      onClick={scrollToTop}
      type="button"
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-30 p-3 rounded-2xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold shadow-glow-cyan shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center animate-bounce-subtle"
    >
      <ArrowUp size={20} className="stroke-[2.5]" />
    </button>
  );
}
