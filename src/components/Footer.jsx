import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  ShieldCheck,
  Truck,
  RotateCcw,
  CreditCard,
  Mail,
  Send,
  Headphones,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  CheckCircle2,
  Lock
} from 'lucide-react';
import toast from 'react-hot-toast';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@') || !newsletterEmail.includes('.')) {
      toast.error('Please enter a valid email address');
      return;
    }
    setIsSubscribed(true);
    toast.success('🎉 You unlocked 15% OFF! Coupon code "WELCOME15" is ready.', {
      duration: 5000,
    });
    setNewsletterEmail('');
  };

  const trustBadges = [
    {
      icon: ShieldCheck,
      title: '1 Year Warranty',
      desc: 'Hassle-free direct replacement'
    },
    {
      icon: Truck,
      title: 'Free Express Delivery',
      desc: 'On all orders above ₹999'
    },
    {
      icon: RotateCcw,
      title: '7 Days Easy Returns',
      desc: 'No questions asked exchange'
    },
    {
      icon: Lock,
      title: '100% Secure Checkout',
      desc: '256-Bit SSL encrypted payments'
    }
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Badges Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-14 border-b border-slate-800/80">
          {trustBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/60 hover:border-brand-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-slate-950 transition-all duration-300">
                  <Icon size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-brand-400 transition-colors">
                    {badge.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">{badge.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Footer Links & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-14 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-brand-500 to-blue-600 p-0.5 shadow-glow-cyan/50 flex items-center justify-center">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Zap className="w-5 h-5 text-brand-500 fill-brand-500" />
                </div>
              </div>
              <span className="font-display font-black text-2xl tracking-wider text-white">
                VOLTIX<span className="text-brand-500">.</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Pioneering the sound frontier. VOLTIX crafts high-fidelity acoustic drivers, ultra-low latency gaming earbuds, and rugged smartwatches engineered for the relentless.
            </p>

            {/* Newsletter Form */}
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Join the VOLTIX VIP Club
              </p>
              <form onSubmit={handleSubscribe} className="flex max-w-md">
                <div className="relative flex-1">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email for 15% off..."
                    className="w-full pl-10 pr-4 py-2.5 text-xs rounded-l-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  />
                </div>
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="px-5 py-2.5 bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-xs rounded-r-xl transition-all shadow-glow-cyan flex items-center gap-1.5 flex-shrink-0"
                >
                  <span>Join</span> <Send size={13} />
                </button>
              </form>
              <p className="text-[11px] text-slate-500 mt-2">
                No spam ever. Unsubscribe anytime with 1-click.
              </p>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Products
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/products?category=earbuds" className="hover:text-brand-400 transition-colors">
                  Wireless Earbuds (TWS)
                </Link>
              </li>
              <li>
                <Link to="/products?category=smartwatches" className="hover:text-brand-400 transition-colors">
                  AMOLED Smartwatches
                </Link>
              </li>
              <li>
                <Link to="/products?category=headphones" className="hover:text-brand-400 transition-colors">
                  Studio ANC Headphones
                </Link>
              </li>
              <li>
                <Link to="/products?category=speakers" className="hover:text-brand-400 transition-colors">
                  360° Bluetooth Speakers
                </Link>
              </li>
              <li>
                <Link to="/products?category=accessories" className="hover:text-brand-400 transition-colors">
                  GaN 65W Fast Chargers
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-brand-400 font-semibold hover:underline">
                  View All Products →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/about" className="hover:text-brand-400 transition-colors">
                  About VOLTIX
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-400 transition-colors">
                  Acoustic Lab & Tech
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-400 transition-colors">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-400 transition-colors">
                  Corporate Inquiries
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-400 transition-colors">
                  Store Locator
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Help */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Support & Help
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/contact" className="hover:text-brand-400 transition-colors">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-400 transition-colors">
                  Warranty Claim Portal
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-400 transition-colors">
                  Return & Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-400 transition-colors">
                  FAQs & User Manuals
                </Link>
              </li>
              <li>
                <a href="mailto:support@voltixaudio.com" className="text-brand-400 hover:underline">
                  support@voltixaudio.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Socials and Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 VOLTIX Technologies Ltd. All rights reserved. Designed for Sound Explorers.</p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="#instagram"
              aria-label="Follow us on Instagram"
              className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-brand-400 hover:bg-slate-800 transition-colors"
            >
              <Instagram size={15} />
            </a>
            <a
              href="#youtube"
              aria-label="Subscribe on YouTube"
              className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-brand-400 hover:bg-slate-800 transition-colors"
            >
              <Youtube size={15} />
            </a>
            <a
              href="#twitter"
              aria-label="Follow us on Twitter"
              className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-brand-400 hover:bg-slate-800 transition-colors"
            >
              <Twitter size={15} />
            </a>
            <a
              href="#linkedin"
              aria-label="Connect on LinkedIn"
              className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-brand-400 hover:bg-slate-800 transition-colors"
            >
              <Linkedin size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
