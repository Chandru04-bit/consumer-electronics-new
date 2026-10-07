import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Sparkles,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Headphones
} from 'lucide-react';
import toast from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'product-inquiry',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);

  const faqs = [
    {
      q: "How does the VOLTIX 1-Year Replacement Warranty work?",
      a: "If your device experiences any hardware defect or sound anomaly within 365 days of purchase, submit a claim online. We arrange doorstep pickup and deliver a fresh replacement unit within 3-5 business days."
    },
    {
      q: "What is the standard delivery timeframe for orders?",
      a: "Metro cities typically receive orders within 24 to 48 hours. Non-metro regions receive delivery in 3 to 4 business days. All orders above ₹999 qualify for Free Express Shipping."
    },
    {
      q: "How do I reset my Voltix earbuds or reconnect Bluetooth?",
      a: "Place both earbuds in the charging capsule. Press and hold the reset button on the back for 5 seconds until the LED pulses white 3 times. Reopen the lid and pair with your device via Bluetooth 5.3."
    },
    {
      q: "Can I return an opened product if I am not satisfied?",
      a: "Yes! We offer a 7-Day Hassle-Free Return & Exchange Window. Simply initiate a return request from your account or contact support with your order ID."
    }
  ];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(`Thank you, ${formData.fullName}! Your message has been sent to our sound support team.`, {
        icon: '📨',
        duration: 5000
      });
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: 'product-inquiry',
        message: ''
      });
      setErrors({});
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-xs font-bold text-brand-600 dark:text-brand-400">
          <Sparkles size={14} /> 24/7 DEDICATED SUPPORT
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-slate-900 dark:text-white leading-tight">
          We're Here to Help You Hear Better
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Have questions regarding warranty, order tracking, bulk corporate orders, or sound tuning? Reach out to our acoustics support team anytime.
        </p>
      </div>

      {/* Main Grid: Form + Contact Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Contact Form */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Send us a Message
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Fill out the form below and our team will get back to you within 2-4 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Rahul Sharma"
                className={`w-full px-4 py-3 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border ${
                  errors.fullName ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-200 dark:border-slate-700 focus:border-brand-500'
                } text-slate-900 dark:text-white focus:outline-none focus:ring-1`}
              />
              {errors.fullName && <p className="text-[11px] text-rose-500 mt-1">{errors.fullName}</p>}
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="rahul@example.com"
                  className={`w-full px-4 py-3 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border ${
                    errors.email ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-200 dark:border-slate-700 focus:border-brand-500'
                  } text-slate-900 dark:text-white focus:outline-none focus:ring-1`}
                />
                {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className={`w-full px-4 py-3 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border ${
                    errors.phone ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-200 dark:border-slate-700 focus:border-brand-500'
                  } text-slate-900 dark:text-white focus:outline-none focus:ring-1`}
                />
                {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Subject
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-brand-500"
              >
                <option value="product-inquiry">Product Inquiry & Compatibility</option>
                <option value="warranty-claim">Warranty Claim & Replacement</option>
                <option value="order-status">Order Tracking & Shipping</option>
                <option value="corporate-bulk">Corporate Bulk Gifting</option>
                <option value="other">Other Feedback</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Your Message *
              </label>
              <textarea
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your query in detail..."
                className={`w-full px-4 py-3 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border ${
                  errors.message ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-200 dark:border-slate-700 focus:border-brand-500'
                } text-slate-900 dark:text-white focus:outline-none focus:ring-1`}
              />
              {errors.message && <p className="text-[11px] text-rose-500 mt-1">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-glow-cyan transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              {isSubmitting ? (
                <span>Sending Message...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={15} />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-4">
          
          <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-500 flex items-center justify-center flex-shrink-0">
              <Mail size={22} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Email Us</h3>
              <p className="text-xs text-slate-400 mt-0.5">24/7 Response time within 4 hours</p>
              <a href="mailto:support@voltixaudio.com" className="text-xs font-bold text-brand-500 hover:underline block mt-1">
                support@voltixaudio.com
              </a>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center flex-shrink-0">
              <Phone size={22} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Toll-Free Helpline</h3>
              <p className="text-xs text-slate-400 mt-0.5">Monday to Saturday: 9:00 AM - 8:00 PM</p>
              <a href="tel:1800-889-9000" className="text-xs font-bold text-brand-500 hover:underline block mt-1 font-mono">
                1800-889-9000 (Toll-Free)
              </a>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center flex-shrink-0">
              <MapPin size={22} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Global Headquarters</h3>
              <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                VOLTIX Acoustic Labs, Tech Park 4, Outer Ring Road, Bengaluru, Karnataka - 560103
              </p>
            </div>
          </div>

          {/* Interactive Map Visual Placeholder */}
          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 text-white space-y-3 overflow-hidden relative">
            <div className="flex items-center justify-between z-10 relative">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-400">
                Authorized Service Hubs
              </span>
              <span className="text-xs text-slate-400 font-mono">180+ Hubs Live</span>
            </div>
            <div className="h-36 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-center p-4 relative overflow-hidden">
              {/* Subtle map pattern */}
              <div className="absolute inset-0 opacity-20 bg-grid-pattern" />
              <div className="z-10 space-y-1">
                <MapPin size={28} className="text-brand-500 mx-auto animate-bounce" />
                <p className="text-xs font-bold text-white">Find a Service Center Near You</p>
                <p className="text-[11px] text-slate-400">Same-day inspection & replacement pickup</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* --- FAQ SECTION --- */}
      <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-500 block mb-1">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900 dark:text-white">
            Quick Answers to Common Inquiries
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800/80 overflow-hidden shadow-sm transition-all"
            >
              <button
                type="button"
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 dark:text-white hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
              >
                <span>{faq.q}</span>
                {activeFaq === idx ? (
                  <ChevronUp size={18} className="text-brand-500 flex-shrink-0" />
                ) : (
                  <ChevronDown size={18} className="text-slate-400 flex-shrink-0" />
                )}
              </button>

              {activeFaq === idx && (
                <div className="px-5 pb-5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-3 animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
