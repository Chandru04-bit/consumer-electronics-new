import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  ShoppingBag,
  Heart,
  User,
  Menu,
  X,
  Zap,
  ChevronDown,
  LogOut,
  SlidersHorizontal,
  Headphones,
  Watch,
  Disc,
  Radio,
  Sparkles,
  Search
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';
import ThemeToggle from './ThemeToggle';
import SearchBar from './SearchBar';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { totalItems, setIsCartOpen } = useCart();
  const { totalWishlist } = useWishlist();
  const { user, isAuthenticated, logout } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileSearchOpen(false);
    setUserDropdownOpen(false);
  }, [location.pathname]);

  // Handle scroll backdrop effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const quickCategories = [
    { name: 'Wireless Earbuds', path: '/products?category=earbuds', icon: Headphones },
    { name: 'Smart Watches', path: '/products?category=smartwatches', icon: Watch },
    { name: 'Headphones', path: '/products?category=headphones', icon: Disc },
    { name: 'Speakers', path: '/products?category=speakers', icon: Radio },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'glass-nav shadow-lg shadow-black/10'
          : 'bg-white/95 dark:bg-dark-bg/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Name */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-brand-500 to-blue-600 p-0.5 shadow-glow-cyan/50 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Zap className="w-5 h-5 text-brand-500 fill-brand-500 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-2xl tracking-wider text-slate-900 dark:text-white flex items-center">
                VOLTIX<span className="text-brand-500">.</span>
              </span>
              <span className="text-[9px] font-bold tracking-widest uppercase text-slate-400 -mt-1">
                Acoustics & Wearables
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-brand-600 dark:text-brand-400 bg-brand-500/10 dark:bg-brand-500/10'
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Search Bar */}
          <div className="hidden lg:block">
            <SearchBar />
          </div>

          {/* Action Icons & Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Mobile Search Button */}
            <button
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              type="button"
              aria-label="Toggle search"
              className="lg:hidden p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Search size={19} />
            </button>

            {/* Dark/Light Theme Toggle */}
            <ThemeToggle />

            {/* Wishlist Link with Badge */}
            <Link
              to="/wishlist"
              aria-label={`Wishlist (${totalWishlist} items)`}
              className="relative p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-rose-500 dark:hover:text-rose-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Heart size={20} />
              {totalWishlist > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-rose-500 text-white text-[11px] font-extrabold flex items-center justify-center shadow-md animate-scaleIn">
                  {totalWishlist}
                </span>
              )}
            </Link>

            {/* Cart Button with Slide-Out Drawer trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              type="button"
              aria-label={`Shopping Cart (${totalItems} items)`}
              className="relative p-2.5 rounded-xl bg-slate-900 dark:bg-brand-500 hover:bg-slate-800 dark:hover:bg-brand-400 text-white dark:text-slate-950 font-bold transition-all duration-200 shadow-sm hover:shadow-glow-cyan active:scale-95"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-amber-500 text-slate-950 text-[11px] font-black flex items-center justify-center shadow-md animate-scaleIn">
                  {totalItems}
                </span>
              )}
            </button>

            {/* User Account / Auth Dropdown */}
            <div className="relative">
              {isAuthenticated ? (
                <div>
                  <button
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    type="button"
                    className="flex items-center gap-2 p-1.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-7 h-7 rounded-lg bg-brand-500/20"
                    />
                    <ChevronDown size={14} className="text-slate-400 hidden sm:block" />
                  </button>

                  {userDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 shadow-2xl py-2 z-50 animate-fadeIn">
                      <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-800">
                        <p className="text-xs font-bold text-slate-900 dark:text-white truncate">
                          {user.name}
                        </p>
                        <p className="text-[11px] text-slate-400 truncate">{user.email}</p>
                      </div>

                      <Link
                        to="/wishlist"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/80"
                      >
                        <Heart size={14} className="text-rose-500" /> My Wishlist ({totalWishlist})
                      </Link>

                      <Link
                        to="/cart"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/80"
                      >
                        <ShoppingBag size={14} className="text-brand-500" /> My Cart ({totalItems})
                      </Link>

                      <div className="border-t border-slate-100 dark:border-slate-800 my-1"></div>

                      <button
                        onClick={() => {
                          logout();
                          setUserDropdownOpen(false);
                        }}
                        className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 text-left"
                      >
                        <LogOut size={14} /> Log Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="hidden sm:flex items-center gap-2">
                  <Link
                    to="/login"
                    className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-brand-500 transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="px-3.5 py-2 rounded-xl text-xs font-bold bg-brand-500/10 hover:bg-brand-500 text-brand-600 dark:text-brand-400 hover:text-slate-950 border border-brand-500/30 transition-all duration-200"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle navigation menu"
              className="md:hidden p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Search Popdown */}
        {mobileSearchOpen && (
          <div className="lg:hidden pb-4 pt-1 animate-fadeIn">
            <SearchBar isMobile onClose={() => setMobileSearchOpen(false)} />
          </div>
        )}
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-white/95 dark:bg-dark-bg/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between overflow-y-auto z-40 animate-fadeIn">
          <div className="space-y-6">
            
            {/* Quick Search */}
            <div>
              <SearchBar isMobile onClose={() => setMobileMenuOpen(false)} />
            </div>

            {/* Main Navigation */}
            <nav className="space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between p-3 rounded-xl text-base font-bold transition-all ${
                      isActive
                        ? 'bg-brand-500/15 text-brand-600 dark:text-brand-400'
                        : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <Sparkles size={16} className="opacity-50" />
                </NavLink>
              ))}
            </nav>

            {/* Popular Categories Shortcut */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-1">
                Shop By Category
              </p>
              <div className="grid grid-cols-2 gap-2">
                {quickCategories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <Link
                      key={cat.name}
                      to={cat.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-3 rounded-xl bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-slate-800 flex items-center gap-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:border-brand-500/50"
                    >
                      <Icon size={16} className="text-brand-500" />
                      <span>{cat.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Auth buttons for Mobile */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
            {isAuthenticated ? (
              <div className="flex items-center justify-between bg-slate-100 dark:bg-dark-card p-3 rounded-xl">
                <div className="flex items-center gap-3">
                  <img src={user.avatar} alt="" className="w-9 h-9 rounded-lg" />
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">{user.name}</p>
                    <p className="text-[11px] text-slate-400">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="p-2 text-rose-500 hover:bg-rose-500/10 rounded-lg"
                  title="Logout"
                >
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 text-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-bold"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 text-center rounded-xl bg-brand-500 text-slate-950 text-sm font-bold shadow-glow-cyan"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
